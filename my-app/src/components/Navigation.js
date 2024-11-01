import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navigation.css'
function Navigation() {
    return (
        <>
            <div className='nav'>
                <div className='ui__wrap'>
                    <Link to={"/"}>Home</Link>
                    <Link to={'/about'} state={{ fromNavgation: true }}>About</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation