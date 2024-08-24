import React from 'react'

const PageTransition = ({children}) => {
  return (
    <AnimatePresence>
        {children}
        HI
    </AnimatePresence>
  )
}

export default PageTransition;