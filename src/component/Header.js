import React from 'react'
import {IoShareOutline} from 'react-icons/io5'
import {GoVerified,GoLocation,GoMail} from 'react-icons/go'
import {BsInstagram,BsTwitter,BsYoutube,BsDiscord,BsLinkedin,BsSpotify} from 'react-icons/bs'
import {ImHangouts} from 'react-icons/im'
import {FaTiktok} from 'react-icons/fa'
import {DiAppstore} from 'react-icons/di'

import "./Header.css"
import profile from './Images/Profile.jpeg'

function Header() {
  return (
    <div>
        <div className='header-top'>
          <IoShareOutline size={'20px'} style={{color:"black"}} className="icon"/> 
          <button className='button'> 💙 Subscribe</button> 
        </div>
        <img src={profile} className="profile"/>
        <h3> J Johnsan Jr {<GoVerified style={{color:"blue"}} size="1rem"/>}</h3>
        <p className='para'>Created by different elements ⚛️ Athlete & CEO</p>
        <p>{<GoLocation/>} Raliegh,NC</p>
        <div>
            <GoMail size="25px" className='icons'/>
            <BsInstagram size="25px"className="icons"/>
            <ImHangouts size="25px"className="icons"/>
            <BsTwitter size="25px"className="icons"/>
            <BsYoutube size="25px"className="icons"/>
            <BsDiscord size="25px"className="icons"/>
            <FaTiktok size="25px"className="icons"/>
            <BsLinkedin size="25px"className="icons"/>
            <BsSpotify size="25px"className="icons"/>
            <DiAppstore size="25px"className="icons"/>
        </div>
    </div>
  )
}

export default Header