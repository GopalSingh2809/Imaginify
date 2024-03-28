import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import React, { Children } from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='root'>
        {/* SideBar Component */}
        <Sidebar/>
        {/* Mobile Navigation Component */}
        <MobileNav/>
        <div className="root-container">
            <div className="wrapper">
                {children}  
            </div>
        </div>
        <Toaster/>
    </main>
  )
}

export default Layout
