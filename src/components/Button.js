import React from 'react';
import  './css/button.css'

export default function Button(props) {
  return (
    <div>
      <button className="button" id="button-addon2" type="submit">{props.btn_text}</button>
    </div>
  )
}
