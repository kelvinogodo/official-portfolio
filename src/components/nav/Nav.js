import React from 'react'
import {AiOutlineHome} from 'react-icons/ai';
import {FiServer} from 'react-icons/fi';
// import {AiOutlineUser} from 'react-icons/ai';
import {RiContactsLine} from 'react-icons/ri';
import {IoIosMailUnread} from 'react-icons/io';
// import {GrCertificate} from 'react-icons/gr';
import {AiOutlineSafetyCertificate} from 'react-icons/ai';
import './nav.css'
const Nav = () => {
  return (
    <nav>
        <a href="#" className='nav-icon'><AiOutlineHome /></a> 
        <a href="#about-section" className='nav-icon'><RiContactsLine /></a>
        <a href="#service-section" className='nav-icon'><FiServer /></a>
        {/* <a href="" className='icon'><AiOutlineUser /></a> */}       
        {/* <a href="" className='icon'><GrCertificate /></a> */}
        <a href="#booking-section" className='nav-icon'><AiOutlineSafetyCertificate /></a>
        <a href="#contact-section" className='nav-icon'><IoIosMailUnread /></a>
    </nav>
  )
}

export default Nav