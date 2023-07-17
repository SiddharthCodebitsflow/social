import React from 'react';
import './css/card.css';


export default function Card(props) {
    return (
        <div>
            <div className='post-card-item'>
                <div className='post-card'>this is Header</div>
                <div className='post-card-body'>
                   <img className='post-image' src={props.postImage} alt="not Found"/>
                </div>
                <div className='post-card-footer'>
                    this is footer
                </div>
            </div>
        </div>
    )
}
