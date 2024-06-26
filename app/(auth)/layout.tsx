import React, { Children } from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='auth'>
      {children}
    </main>
  )
}

export default Layout
