import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Service from './components/service/Service';
import Booking from './components/bookings/Booking';
import Project from './components/project/Project'
import  Review from './components/review/Reivew'
import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
// import { useState } from 'react';

const App = () => {
// (counter,setCounter)=useState(0);
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Service />
      <Booking />
      <Project />
      <Review />
      <Contact />
    </div>
  )
}

export default App


