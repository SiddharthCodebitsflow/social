import React from 'react';
import './css/profile.css';
import { Link } from 'react-router-dom';

export default function Profile(props) {
    return (
        <div className='profile'>
            <div className='profile-item'>
                <div className='profile-image'>
                    <label htmlFor="profile-image" className='profile-span'>
                        <span ><img className='image' height="100px" width='100px' src={props.profileImage} alt="Not Found" /></span>
                    </label>
                    <input type='file' id='profile-image' />
                </div>
                <div className='profile-menu'>
                    <div>Name</div>
                    <ul>
                        <li><Link className='link-route' to='/user'>Home</Link></li>
                        <li><Link className='link-route' to='/user/all-post'>All Post</Link></li>
                        <li><Link className='link-route' to='/user/add-post'>Add Post</Link></li>
                        <li><Link className='link-route' to='/user/add-friend'>Add Friend</Link></li>
                        <li><Link className='link-route' to='/user/message'>Message</Link></li>
                        <li><Link className='link-route' to='/user/requrest'>Show All Request</Link></li>
                        <li><Link className='link-route' to='/user/logout'>Login with Another Account</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
