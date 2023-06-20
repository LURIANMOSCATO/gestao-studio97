import React, { useState } from 'react'
import '../App.css';
import {MdDashboard} from 'react-icons/md'
import {GiBeard} from 'react-icons/gi'
import {RiMenu4Fill} from  'react-icons/ri'
import { NavLink } from 'react-router-dom'

const Sidebar = ({children}) =>  {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "home",
            icon: <MdDashboard/>
        },
        {
            path: "/agenda",
            name: "agenda",
            icon: <MdDashboard/>
        }
    ]

  return (
    <div className="container">
        <div style={{width: isOpen ? "200px" : "60px"}}  className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}}  className="logo"><GiBeard/></h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}}  className="bars">
                    <RiMenu4Fill onClick={toggle}/>
                </div>
            </div>
            <div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}}  className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                <div>

                </div>
                <main>{children}</main>
                </div>

        </div>

    </div>
  )
}

export default  Sidebar;