import React from 'react'
import { Outlet } from 'react-router-dom'
import Newsnavbar from './Newsnavbar'
import LoadingBar from 'react-top-loading-bar'

const Layout = (props) => {
  return (
    <div>
        <Newsnavbar/>
        <LoadingBar
        color='#f11946'
        progress={props.progress}
        height={5}
        />
        <div className="container">
      <Outlet/>
        </div>
    </div>
  )
}

export default Layout
