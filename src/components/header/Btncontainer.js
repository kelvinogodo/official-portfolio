import React from 'react'
import cv from '../../assets/cv.pdf';
const BtnContainer = () => {
  return (
    <div className='btn-container'>
      <a href={cv} download> download cv</a>
      <a href="#contact-section"> lets talk</a>
    </div>
  )
}

export default BtnContainer