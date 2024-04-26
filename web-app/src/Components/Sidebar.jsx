import React from 'react'
import appLogo from '../assets/images.png'

export const Sidebar = () => {
    return (
        <div className="sidebar col-md-2 px-sm-5 px-md-5 pt-3">
            <img src={appLogo} alt="appLogo" className='myLogo' />
            <div className="side-menu mt-5"><i className="bi bi-people-fill"></i> CUSTOMERS</div>
        </div>
    )
}
