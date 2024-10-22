import React from 'react'
import MyNav from './MyNav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
     <MyNav />
     <Outlet />
    </div>
  )
}

export default Layout