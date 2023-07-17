import React from 'react';
import './input.css';

export default function Inpute(props) {
  
  return (
    <div>
      <div className="">
        <input type={props.type} onKeyUp={props.errorRemove} name={props.name} className="input-field" placeholder={props.placeholder} aria-describedby="addon-wrapping" />
        <div>
          <p className='text-error-color'>{props.error[0][props.name]}</p>
        </div>
      </div>
    </div>
  )
}
