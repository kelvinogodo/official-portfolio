import React from 'react'
import './project.css'
import pic1 from '../../assets/img (7).jpg'
import pic2 from '../../assets/flier (7).jpg'
import pic3 from '../../assets/flier (14).jpg'
import pic4 from '../../assets/flier (16).jpg'
import pic5 from '../../assets/flier (24).jpg'
import pic6 from '../../assets/girl (2).jpg'
import pic7 from '../../assets/girl (7).jpg'
import pic8 from '../../assets/girl (2).jpg'
import pic9 from '../../assets/flier (20).jpg'
import pic10 from '../../assets/flier (11).jpg'
import pic11 from '../../assets/art (1).jpg'


const Project = () => {
  return (
      <section className="my-container">
        <h5>check out my</h5>
        <h2>projects</h2>        
        <div className="project-card-container">
          <img src={pic11} alt="" className='project-img'/>
          <img src={pic2} alt="" className='project-img'/>
          <img src={pic3} alt="" className='project-img'/>
          <img src={pic4} alt="" className='project-img'/>
          <img src={pic5} alt="" className='project-img'/>
          <img src={pic6} alt="" className='project-img'/>
        </div>
    </section> 
  )
}

export default Project