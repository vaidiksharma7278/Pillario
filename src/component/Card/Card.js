import React from 'react'
import './Card.css'
import weekly from '../Images/Weekly.png'
function Card(props) {
  return (
    <div className='main-div'>
        <div >
        <img src={props.img} className='imgdiv'/>
        </div>
        <div className='textdiv'>
            <h2>{props.heading}</h2>
            <p> {props.content}</p>
            <button className='buttons'> {props.button}</button>
        </div>
    </div>
  )
}

export default Card