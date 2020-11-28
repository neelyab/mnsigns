import React from 'react';
import logo from './signs4less.jpg';
import './App.css';
import sign from './sign.jpg';
import wrap from './wrap.jpg'

function App() {
  return (
    <main className='App'>
      <div className="container">
          <div className="text-container">
          <img className="logo" src={logo} alt="signs for less logo" />
            <h1>Website Coming Soon</h1>
            <p>In the meantime, we are open!</p>
            <div className="photos">
            <img src={wrap} alt="vehicle wrap" className="sign-photos"/>
            <img src={sign} alt="custom sign" className="sign-photos"/>
            </div>
            <a href="mailto:mnsigns@msn.com">
              <button className="email-us">Email Us</button>
              </a>
            <address><a id="phone-number" href="tel:(540) 548-2940">(540) 548-2940</a></address>
            <a href="https://goo.gl/maps/V2Tu15UFc7xrJnk79"><address> 6307 Old Plank Rd, 
            Fredericksburg, VA 22407
            </address>
            </a>
            <div className="map-container">
            <iframe className="map" title="Signs 4 Less Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4428.675808627878!2d-77.55546653961639!3d38.28999960356946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6bf987b93523f%3A0x9e161f4020e62ea8!2sMike&#39;s%20Signs%204%20Less!5e0!3m2!1sen!2sus!4v1606575882713!5m2!1sen!2sus" frameborder="0"  aria-hidden="false" ></iframe>
          </div>
          </div>
      </div>
    </main>
  );
}

export default App;