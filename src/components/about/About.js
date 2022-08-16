import React from 'react'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {FaCertificate} from 'react-icons/fa'
import {RiDashboardFill} from 'react-icons/ri'
import Profile from '../../assets/profile1.jpg'
import './about.css'
import aos from 'aos'
const About = () => {
  return (
      <section id='about-section' data-aos="fade-up">
      <h5>get in touch</h5>
      <h2>let's talk</h2>
      <div className="container about-container">
        <div className="profile-pics-container">
          <img src={Profile} alt="" />
        </div>
        <div className="experience-card-container">
          <div className="card-container">
            <article className="card">
              <AiOutlineUsergroupAdd className='icon' />
              <h5 className='small-h5'>clients</h5>
              <p>1,000 <sup>+</sup> </p>
            </article>
            <article className="card">
            <FaCertificate className='icon' />
              <h5 className='small-h5'>qualifications</h5>
              <p>3<sup>+</sup> years experience </p>
            </article>
            <article className="card">
            <RiDashboardFill className='icon' />
              <h5 className='small-h5'>projects</h5>
              <p>completed 1,000 <sup>+</sup> </p>
            </article>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos voluptatibus blanditiis atque neque libero quos voluptas, et dolorem expedita quisquam aliquam mollitia voluptate numquam, porro, veniam aspernatur consectetur ipsam quasi.
          </p>
          <a href="" className='btn'>chat me</a>
        </div>
      </div>
    </section>
  )
}

export default About