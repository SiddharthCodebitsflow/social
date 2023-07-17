import React from 'react';
import './css/notfound.css';
export default function NotFound() {
    return (
        <>
            <div className='not-found'>
                <div className='card-404'>
                    <div className='card-text'>
                        <h1 className='page-404'>404</h1>
                        <h1>Oops! Page Not Found</h1>
                        <p>Sorry, the page you're looking for doesn't exit.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
