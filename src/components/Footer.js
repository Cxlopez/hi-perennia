import React from 'react';
import "../styles/Footer.css";


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <a href="mailto:cristianslcodes@gmail.com">
          <img className='contact-me' src="https://github.com/Cxlopez/hi-perennia/assets/93356900/e7af6804-8073-431a-9b56-0d9f5d661104" alt="contact-me" />
        </a>
      </div>
      <div className="credit-name">© Cristian Sanchez Lopez</div>
    </div>
  )
}

export default Footer