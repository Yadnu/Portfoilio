#!/usr/bin/env node
/**
 * Interactive CLI to add a Project or Work Experience entry to the portfolio.
 * Run from the yj/ directory:  node scripts/add-entry.mjs
 */

import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const FILES = {
  project:    resolve(ROOT, 'app/work/page.jsx'),
  experience: resolve(ROOT, 'app/resume/page.jsx'),
};

const MARKERS = {
  project:    '// ADD_PROJECT_HERE',
  experience: '// ADD_EXPERIENCE_HERE',
};

// ─── helpers ──────────────────────────────────────────────────────────────────

const rl = createInterface({ input, output });

async function ask(question) {
  const answer = await rl.question(question);
  return answer.trim();
}

async function askMultiLine(label) {
  console.log(`\n${label}`);
  console.log('  (Enter each bullet on its own line. Press Enter on a blank line when done.)');
  const lines = [];
  while (true) {
    const line = await rl.question('  > ');
    if (line.trim() === '') {
      if (lines.length > 0) break;
    } else {
      lines.push(line.trim());
    }
  }
  return lines;
}

/** Count how many project entries already exist (used to auto-number). */
function countExistingProjects(content) {
  const matches = content.match(/\bnum:\s*"/g);
  return matches ? matches.length : 0;
}

function padNum(n) {
  return String(n).padStart(2, '0');
}

/**
 * Insert `entry` text on the line immediately before the marker line,
 * preserving everything else in the file verbatim.
 */
function insertBeforeMarker(content, marker, entry) {
  const idx = content.indexOf(marker);
  if (idx === -1) return null;

  // Walk backwards to find the start of the marker's line
  let lineStart = idx;
  while (lineStart > 0 && content[lineStart - 1] !== '\n') lineStart--;

  return content.slice(0, lineStart) + entry + '\n' + content.slice(lineStart);
}

// ─── entry builders ───────────────────────────────────────────────────────────

function buildProjectEntry(data, existingContent) {
  const num = padNum(countExistingProjects(existingContent) + 1);
  const stackItems = data.stack.map(s => `{name:"${s}"}`).join(',');
  // Mirror exact indentation and field order from existing entries
  return (
    `  {\n` +
    `    num: "${num}",\n` +
    `    category: "${data.category}",\n` +
    `    title: "${data.title}",\n` +
    `    descrption:\`${data.description}\`,\n` +
    `    stack: [${stackItems}],\n` +
    `    live: "${data.live}",\n` +
    `    github: "${data.github}",\n` +
    `  },`
  );
}

function buildExperienceEntry(data) {
  // Mirror exact indentation and field order from existing entries
  // Responsibilities are stored in a `description` field (not yet rendered by
  // the card, but preserved in the data for future use).
  const descLine = data.responsibilities.length
    ? `    description: \`${data.responsibilities.map(r => `● ${r}`).join('\n')}\`,\n`
    : '';
  return (
    `  {company: "${data.company}",\n` +
    `    position: "${data.position}",\n` +
    `    duration: "${data.start} - ${data.end}",\n` +
    descLine +
    `  },`
  );
}

// ─── collect project details ──────────────────────────────────────────────────

async function collectProject(existingContent) {
  console.log('\n── Project details ──────────────────────────\n');
  const title       = await ask('Project name? ');
  const category    = await ask('Category (e.g. Fullstack, AI/ML, Web3 Wallet)? ');
  const description = await ask('Short description (1–2 sentences)? ');
  const stackRaw    = await ask('Tech stack (comma separated)? ');
  const live        = await ask('Live URL [blank = empty]? ');
  const github      = await ask('GitHub URL [blank = empty]? ');

  const stack = stackRaw.split(',').map(s => s.trim()).filter(Boolean);
  return buildProjectEntry({ title, category, description, stack, live, github }, existingContent);
}

// ─── collect experience details ───────────────────────────────────────────────

async function collectExperience() {
  console.log('\n── Work Experience details ──────────────────\n');
  const company         = await ask('Company name? ');
  const position        = await ask('Your role / title? ');
  const start           = await ask('Start date (e.g. July 2022)? ');
  const end             = await ask('End date (or "Present")? ');
  const responsibilities = await askMultiLine('Responsibilities (each bullet on its own line):');

  return {
    entry: buildExperienceEntry({ company, position, start, end, responsibilities }),
    name: `${position} at ${company}`,
  };
}

// ─── main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n╔══════════════════════════════════════╗');
  console.log('║   Portfolio Entry Adder               ║');
  console.log('╚══════════════════════════════════════╝\n');

  const typeChoice = await ask(
    'What are you adding?\n' +
    '  1. Project\n' +
    '  2. Work Experience\n\n' +
    'Enter 1 or 2: '
  );

  if (typeChoice !== '1' && typeChoice !== '2') {
    console.error('\nInvalid choice. Please enter 1 or 2. Exiting.');
    rl.close();
    process.exit(1);
  }

  const type = typeChoice === '1' ? 'project' : 'experience';
  const filePath = FILES[type];
  const marker   = MARKERS[type];

  // Read source file once upfront
  let existingContent;
  try {
    existingContent = readFileSync(filePath, 'utf-8');
  } catch {
    console.error(`\nCould not read file: ${filePath}`);
    rl.close();
    process.exit(1);
  }

  // Verify marker exists before prompting for data
  if (!existingContent.includes(marker)) {
    console.error(`\nError: marker "${marker}" not found in:`);
    console.error(`  ${filePath}`);
    console.error('\nAdd the marker to the file first. No changes made.');
    rl.close();
    process.exit(1);
  }

  // Collect details
  let entry, entryName;
  if (type === 'project') {
    entry     = await collectProject(existingContent);
    // Extract title from the generated entry for the confirmation message
    const m   = entry.match(/title:\s*"([^"]+)"/);
    entryName = m ? m[1] : 'new project';
  } else {
    const result = await collectExperience();
    entry     = result.entry;
    entryName = result.name;
  }

  // Preview
  console.log('\nPreview:');
  console.log('---------');
  console.log(entry);
  console.log('---------');

  const confirm = await ask('\nWrite this to the file? (y/n): ');
  rl.close();

  if (confirm.toLowerCase() !== 'y') {
    console.log('\nAborted. No changes made.');
    process.exit(0);
  }

  // Insert and write
  const newContent = insertBeforeMarker(existingContent, marker, entry);
  if (newContent === null) {
    // Shouldn't reach here — already checked above — but guard anyway
    console.error(`\nError: marker "${marker}" disappeared unexpectedly. No changes made.`);
    process.exit(1);
  }

  try {
    writeFileSync(filePath, newContent, 'utf-8');
  } catch (err) {
    console.error(`\nFailed to write file: ${err.message}`);
    process.exit(1);
  }

  console.log(`\n✓ Added "${entryName}" to your portfolio.`);
  console.log('Run `npm run dev` to preview the changes.\n');
}

main().catch(err => {
  console.error('\nUnexpected error:', err.message);
  rl.close();
  process.exit(1);
});
