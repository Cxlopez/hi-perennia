import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='nav'>
      <img className='hello-logo' src="https://github.com/Cxlopez/hi-perennia/assets/93356900/4f91aa0b-705b-4268-8960-7d782c593e94" alt="logo" />

      <nav>
        <ul>
          <li><a href="https://github.com/Cxlopez">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/cristian-sanchez-lopez/">LinkedIn</a></li>
          <li><a href="https://cristian-sanchez-lopez.netlify.app">Portfolio</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar