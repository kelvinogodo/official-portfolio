import React from 'react';
import './review.css'
import pic1 from '../../assets/profile1.jpg'

const Reivew = () => {
  return (
   <section className="review-section">
     <div className="review-header">
       <h2>review</h2>
       <h5>section</h5>
     </div>
     <div className="review-card-container">
      <div className="review-card">
        <img src={pic1} alt="" className="review-img" />
        <p className='name'></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quisquam perspiciatis. Voluptates obcaecati numquam necessitatibus a est possimus recusandae molestiae.</p>
      </div>
      <div className="review-card">
        <img src={pic1} alt="" className="review-img" />
        <p className='name'></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quisquam perspiciatis. Voluptates obcaecati numquam necessitatibus a est possimus recusandae molestiae.</p>
      </div>
      <div className="review-card">
        <img src={pic1} alt="" className="review-img" />
        <p className='name'></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quisquam perspiciatis. Voluptates obcaecati numquam necessitatibus a est possimus recusandae molestiae.</p>
      </div>
      <div className="review-card">
        <img src={pic1} alt="" className="review-img" />
        <p className='name'></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quisquam perspiciatis. Voluptates obcaecati numquam necessitatibus a est possimus recusandae molestiae.</p>
      </div>
     </div>
   </section>
  )
}

export default Reivew