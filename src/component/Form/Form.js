import React from 'react'
import './Form.css'
import { useState } from 'react';
function Form() {
  const [Type, setType] = useState("I'm a Fan");
  return (
    <div className='div-7'>

        <h3> Join our squad</h3>
        <h6> Know when I drop merch & speed vlogs</h6>
        <form>
        <ul>
          <li>
        <input placeholder='Email'/></li>
        <li><input placeholder='Phone #'/></li>
        <li>
    
         <div className="radio-btn-container">
        <div
          className="radio-btn"
          onClick={() => {
            setType("I'm a Fan");
          }}
        >
          <input
            type="radio"
            value={Type}
            name="Type"
            checked={Type == "I'm a Fan"}
          />
          I'm a Fan
        </div>
        <div
          className="radio-btn"
          onClick={() => {
            setType("I'm a Brand");
          }}
        >
          <input
            type="radio"
            value={Type}
            name="Type"
            checked={Type == "I'm a Brand"}
          />
          I'm a Brand
        </div>
        <div
          className="radio-btn"
          onClick={() => {
            setType("I'm a Creater");
          }}
        >
          <input
            type="radio"
            value={Type}
            name="Type"
            checked={Type == "I'm a Creater"}
          />
          I'm a Creater
        </div>
      </div>
        </li>
        </ul>
        <button type='submit' className='buttons'>Submit </button>
        </form>
    </div>
  )
}

export default Form