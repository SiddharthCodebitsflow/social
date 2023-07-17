import React from 'react';
import './css/home.css'
import Card from './Card';
import image1 from '../image/1.jpg';

export default function Home() {
    return (
        <div className='page'>
            <Card postImage={image1} />
        </div>
    )
}
