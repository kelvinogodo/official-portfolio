import React from 'react'
import './header.css'
import BtnContainer from './Btncontainer'
import Profile from '../../assets/profile.png'
import {FaFacebookMessenger} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoIosArrowDropup} from 'react-icons/io';
import {BsWhatsapp} from 'react-icons/bs'
import {MdOutgoingMail} from 'react-icons/md'
const Header = () => {
  return (
    <header className='header'>   
        <h5>hello, i'm </h5>
        <h2>chukwurah victor</h2>
        <p>graphic designer</p>
        <div className="my-profile-container">
            <img src={Profile} alt="" />
        </div>
        <BtnContainer />
        <div className="header-socials">
           <a href="https://m.me/kelvinc.ogodo/" target='blank'><FaFacebookMessenger className='icon' /></a> 
           <a href="https://api.whatsapp.com/send?phone=+2347042244539" target='blank'><BsWhatsapp className='icon' /></a> 
           <a href="https://facebook.com"  target='blank'><FiInstagram className='icon' /></a>
           <a href="mailto:kelvinchukwuebuka385@gmail.com" target='blank'><MdOutgoingMail className='icon' /></a> 
        </div>
        <a href="#"><IoIosArrowDropup className='floating-arrow icon' /></a> 
    </header>
  )
}

export default Header