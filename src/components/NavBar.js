import React, { useState } from 'react';
import './css/navbar.css';
import user from '../image/user.png'

export default function NavBar() {
    const [classMenu, setClassMenu] = useState({
        status: false,
        menuClass: ''
    });
    const changeStatusMenuClass = () => {
        if (classMenu.status === false) {
            setClassMenu({
                status: true,
                menuClass: 'small-menu'
            });
        } else {
            setClassMenu({
                status: false,
                menuClass: ''
            }
            );
        }
    }
    return (
        <div className='navbar-main'>
            <div className='navbar-logo'>
                <img height='20px' width='20px' src={user} alt='Not Found' />
            </div>
            <div className='navbar-menu'>
                <ul className={`navbar-menu-ul ${classMenu.menuClass}`}>
                    <li>Home</li>
                    <li>Add Friend</li>
                    <li>Message</li>
                    <li>Show All Request</li>
                    <li>LogOut</li>
                    <li className='search-li '>
                        <input  className='search-main' type='search' placeholder='search friends'/>
                        <button className='search-btn'>Search</button>
                    </li>
                </ul>
            </div>
            <div className='search'>
                <input className='search-main' placeholder='Search friends' />
                <button className='search-btn'>Search</button>
            </div>
            <button onClick={changeStatusMenuClass} className='navbar-menu-button'><img src="https://img.icons8.com/ios-glyphs/30/null/menu--v1.png" alt='icon' /></button>
        </div>
    )
}
