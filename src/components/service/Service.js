import React from 'react'
import './service.css'
import {GrStatusGoodSmall} from 'react-icons/gr'
// import {RiInstagramFill} from 'react-icons/ri'
// import {ImTwitter} from 'react-icons/im
const Service = () => {
  return (
    <section className='container service-section ' id='service-section'>
      <div className="service-card-container1">
        <article className='service-card'>
          <GrStatusGoodSmall className='icon'/>
          <div className="service-text">
            <h5 className='small-h5'>graphic design</h5>
            <p className='small-p'>advanced level</p>
          </div>
        </article>
        <article className='service-card'>
          <GrStatusGoodSmall className='icon'/>
          <div className="service-text">
            <h5 className='small-h5'>branding</h5>
            <p className='small-p'>advanced level</p>
          </div>
        </article>
        <article className='service-card'>
          <GrStatusGoodSmall className='icon'/>
          <div className="service-text">
            <h5 className='small-h5'>logo design</h5>
            <p className='small-p'>advanced level</p>
          </div>
        </article>
        <article className='service-card'>
          <GrStatusGoodSmall className='icon'/>
          <div className="service-text">
            <h5 className='small-h5'>birthday and other gift cards design</h5>
            <p className='small-p'>advanced level</p>
          </div>
        </article>
      </div>
      <div className="service-card-container2">
        <article className='service-card'>
            <GrStatusGoodSmall className='icon'/>
            <div className="service-text">
              <h5 className='small-h5'>cartoon design</h5>
              <p className='small-p'>advanced level</p>
            </div>
          </article>
          <article className='service-card'>
            <GrStatusGoodSmall className='icon'/>
            <div className="service-text">
              <h5 className='small-h5'>animations</h5>
              <p className='small-p'>advanced level</p>
            </div>
          </article>
          <article className='service-card'>
            <GrStatusGoodSmall className='icon'/>
            <div className="service-text">
              <h5 className='small-h5'>music art-work</h5>
              <p className='small-p'>advanced level</p>
            </div>
          </article>
          <article className='service-card'>
            <GrStatusGoodSmall className='icon'/>
            <div className="service-text">
              <h5 className='small-h5'>toon-your-pics design</h5>
              <p className='small-p'>advanced level</p>
            </div>
          </article>
      </div>
    </section>
  )
}

export default Service