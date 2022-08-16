import React  , { useRef }  from 'react'
import emailjs from 'emailjs-com';
import './contact.css'
import {RiFacebookFill} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs';
import {MdOutlineMarkEmailRead} from 'react-icons/md'
const Contact = () => {
  // const form = useRef();

  function sendEmail  (e)  {
    e.preventDefault();
    const contactForm = document.querySelector('.contact-form');
    emailjs.sendForm('service_488w8ip', 'template_us91ocs', contactForm, 'fLb_IO_LOrPaXxCVQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      document.querySelectorAll('.input').forEach(input=>{
        input.value='';
      })
  };

  return (
    <div className='contact-container'>
      <h5>contact</h5>
      <h2>me</h2>
      <section className="contact-section" id='contact-section'  data-aos='fade-up' >
      <div className="contact-details-container">
        <article className='contact-card'>
          <BsWhatsapp className='contact-icon' />
          <h5>whatsapp</h5>
          <h5>+234 07042244539</h5>
          <h2>whatsapp us</h2>
        </article>
        <article className='contact-card'>
          <RiFacebookFill className='contact-icon' />
          <h5>www.facebook.com @kelvinogodo</h5>
          <h2>chat us</h2>
        </article>
        <article className='contact-card'>
          <MdOutlineMarkEmailRead className='contact-icon'/>
          <h5>kelvinchukwuebuka385@gmail.com</h5>
          <h2>send us a message</h2>
        </article>
      </div>
      <form action="" className='contact-form' onSubmit={sendEmail}>
        <input type="email" name="email-address" id="" placeholder='your email' required className='input'/>
        <input type="tel" name="phone-number" id="" placeholder='your whatsapp number' className='input' required />
        <textarea type="text" name="message" id="" className='textarea input' placeholder='your message'  />
          <button className='submit-btn' type="submit" >
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
      </form>
    </section>
    </div>
    
  )
}

export default Contact

// import React,  from 'react';

// export const ContactUs = () => {
  
//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };