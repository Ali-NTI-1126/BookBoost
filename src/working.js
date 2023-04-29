import React, { useState, useEffect } from 'react';
import './Working.css';
import logo from './icons/BB.png';

function Working(props) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    async function fetchUserName() {
      const response = await fetch('http://127.0.0.1:8000/api/auth/register');
      const data = await response.json();
      setUserName(data.name);
    }
    fetchUserName();
  }, []);
  
  return (
    <div>
    <div className="welcome-page">
      <h1 className="welcome-heading">Welcome to BookBoost, {userName}name!</h1>
      <p className="welcome-message">We're excited to help you find your perfect hotel and amenities! Here are some of the features that we offer:</p>
      <ul className="welcome-features">
        <li><i className="fas fa-check"></i> Comprehensive hotel search engine</li>
        <li><i className="fas fa-check"></i> Detailed hotel reviews and ratings</li>
        <li><i className="fas fa-check"></i> Customizable search filters</li>
        <li><i className="fas fa-check"></i> Convenient booking system</li>
        <li><i className="fas fa-check"></i> Interactive facility exploration tools</li>
      </ul>
      <p className="welcome-tips">To get started, we recommend that you take a few minutes to explore our website and familiarize yourself with its features. Here are a few tips to help you get started:</p>
      <ol className="welcome-steps">
        <li><i className="fas fa-search"></i> Use our search engine to find your desired hotel based on your criteria.</li>
        <li><i className="fas fa-star"></i> Read hotel reviews and ratings to get an idea of the quality of the hotel.</li>
        <li><i className="fas fa-sliders-h"></i> Customize your search with our filters to find the best hotel for you.</li>
        <li><i className="fas fa-calendar"></i> Book your hotel quickly and easily with our booking system.</li>
        <li><i className="fas fa-map-marked-alt"></i> Explore the facilities of the hotel you're interested in with our interactive tools.</li>
      </ol>
      <p className="welcome-visit-site">When you're ready to start your search, click the button below to visit our website and get started!</p>
      <a href="/" className="welcome-button">Go To BookBoost Now</a>
      <br></br>
      <p className="welcome-thanks">Thank you for joining BookBoost! If you have any questions or need any assistance, please don't hesitate to contact us.</p>
      <br></br>
     
     

    </div>

    <footer>
    <div class="container">
    <div class="footer-menu">
    <a href=""><img class='footerLogo' src={logo} alt="logo" /></a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
    <div class="hotel-categories">
      <h3>Hotel Categories</h3>
      <ul>
        <li><a href="#">Luxury Hotels</a></li>
        <li><a href="#">Budget Hotels</a></li>
        <li><a href="#">Family Hotels</a></li>
        <li><a href="#">Business Hotels</a></li>
        <li><a href="#">Pet-Friendly Hotels</a></li>
      </ul>
    </div>
    <div class="popular-destinations">
      <h3>Popular Destinations</h3>
      <ul>
        <li><a href="#">Malmö</a></li>
        <li><a href="#">Gothenburg</a></li>
        <li><a href="#">Stockholm</a></li>
        <li><a href="#">Umeå</a></li>
        <li><a href="#">Lund</a></li>
      </ul>
    </div>
    <div class="contact-information">
      <h3>Contact Information</h3>
      <a href="mailto:info@bookboost.io"><p> <i class='fa-solid fa-envelope'></i> Email: info@bookboost.io</p></a>
      <p> <i class='fa-solid fa-phone'></i> Phone: <a href="tel:+46 761 87 87 80">+46 761 87 87 80</a></p>
      <p> <i class='fa-solid fa-location-dot'></i> Address: Anckargripsgatan 3, 211 19 Malmö</p>
      <p><a href="https://goo.gl/maps/8Hv5dv3gAuYTJSSN6" target={'_blank'}> <i class="fa-solid fa-map-location-dot"></i> Open in google maps </a></p>

    </div>
    
    <div class="social-media">
      <h3>Follow Us</h3>
      <ul>
        <li><a href="https://www.facebook.com/bookboost/?locale=sv_SE"><i class="fab fa-facebook-f" target={'_blank'}></i></a></li>
        <li><a href="https://twitter.com/bookboost_ab" target={'_blank'}><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://www.linkedin.com/company/bookboost/?originalSubdomain=se" target={'_blank'}><i class="fab fa-linkedin-in" target={'_blank'}></i></a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>Copyright © 2023 Made in Rosengård.</p>
  </div>
</footer>
    
    </div>
  );
}

export default Working;
