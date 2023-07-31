import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='p-4 flex flex-col min-h-screen' >
        <Header/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default Layout