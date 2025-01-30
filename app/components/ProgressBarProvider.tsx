'use client'
import React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressBarProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#000"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}

export default ProgressBarProvider