import React from 'react'
import './Content.css'
import weekly from '../Images/Weekly.png'
import Meal from '../Images/Meal.png'
import profile from '../Images/Profile.jpeg'
import Four from '../Images/Four.png'
import Card from '../Card/Card'
import YoutubeCart from '../YoutubeCart'
import Form from '../Form/Form'
function Content() {
  return (
    <div>
        Exclusive Content
        <p>Get access to all the content</p>
        {/* Div 1 */}
        
    <Card img={weekly}
        heading="Weekly training"
        content="Get the inside view of what I did for training every week! FULL BREAKDOWN"
        button="Subscribe to unlock"
    />
    <Card img={Meal}
        heading="Weekly Meal"
        content="Each week I will document what I eat in an organised fashion"
        button="Subscribe to unlock"
    />
       <Card img={profile}
        heading="Daily Quotes !"
        content="A quote that will empower you to achieve your dreams!"
        button="Subscribe to unlock"
    />
     <Card img={Four}
        button="Buy for $4.99"
        className="cartt"
    />
     
    <div className='div-5'>
      <h3> Speed training playlist </h3>
      <p> Get faster for any sport with these speed tips </p>
    </div>
     
     <div className='div-6'>
        <h3> Workout vlog with Batman !</h3>
      <YoutubeCart embedId="fJGDnvoLKFA"/>
     </div>
     {/* div 7 */}
    <Form/>
      {/* div 8 */}
      <div className='div-6'>
      <h3>Racing people for $$$</h3>
      <YoutubeCart embedId="RGj5K54dd58"/>

      </div>
    </div>
  )
}

export default Content