import React, { useState, useEffect, useRef } from 'react';
import './welcomePage.css';
import logo from './icons/BB.png';
import falafel from './icons/falafel.jpg';
import shawarma from './icons/shawarma.jpg';
import kyckling from './icons/kyckling.jpg';

import '@fortawesome/fontawesome-free/css/all.min.css';

function WelcomePage() {
  const [destinationsVisible, setDestinationsVisible] = useState({
    0: true,
    1: false,
    2: false,
  });

  useEffect(() => {
    function handleScroll() {
      const destinationContainers = document.querySelectorAll(
        ".recommended-destinations-container"
      );
      const windowHeight = window.innerHeight;

      destinationContainers.forEach((container, index) => {
        const containerTop = container.getBoundingClientRect().top;

        if (containerTop < windowHeight - 100) {
          setDestinationsVisible({
            ...destinationsVisible,
            [index]: true,
          });
        }
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [destinationsVisible]);
      
    
  return (
    <div>
      <header class="header">
        <div class="header-left">
        <a href=""><img src={logo} alt="logo" /></a>

          <nav class="header-nav">
            <a href="#">Hotels & Destinations</a>
            <a href="#">Meetings</a>
            <a href="#">Offers</a>
          </nav>
        </div>
        <div class="header-right">
          <a href="login" class="login-btn"><i class="fa-solid fa-circle-user"></i> Login</a>
          <a href="register" class="signup-btn">Sign up</a>
        </div>
      </header>
      <div class="search-container">
        <div class="search-form-container">
          <form class="search-form">
            <div class="form-row">
              <div class="form-group">
                <label htmlFor="destination">Where do you want to travel?</label>
                <input type="text" id="destination" placeholder='Distination or hotel' name="destination" required />
              </div>
              <div class="form-group">
                <label htmlFor="check-in">Dates</label>
                <input type="date" id="check-in" name="check-in" required />
                <input type="date" id="check-in" name="check-out" required />

              </div>
            
              <div class="form-group">
                <label htmlFor="accommodation">Accommodation & Guests</label>
                <div class="form-row">
                  <select id="accommodation" name="accommodation" defaultValue={'Hotels'} required>
                    <option value="All">All</option>
                    <option value="Hotels">Hotels</option>
                    <option value="Guest houses">Guest houses</option>
                    <option value="Boutique hotels">Boutique hotels</option>
                    <option value="Chalets">Chalets</option>
                    <option value="Cottages">Cottages</option>

                  </select>
                        
                  <input type="number" id="guests" name="guests" min="1" max="10" defaultValue={1} required />
                </div>
              </div>
              <div class="form-group">
                <button type="submit">Search</button>
              </div>
            </div>
          </form>
        </div>
        </div>

        <br></br>

        <div class={`recommended-destinations-container ${destinationsVisible[0] ? 'fade-in' : ''
        }`}>  
    <div class="content">
    <h2 class='heading'>Recommended destinations</h2>
    <p>
   <a href='https://malmo.se/Welcome-to-Malmo/Visit-Malmo.html' target={'_blank'}> <b>Malmö</b></a>, located in the southernmost part of Sweden, offers an alluring combination 
      of history, art, and contemporary design that makes it an enticing destination for travelers seeking a unique and enriching experience.
    </p>
    <br></br>
    <p>
    One of Malmö's most appealing aspects is its stunning architecture. The city features an eclectic mix of modern and traditional buildings that are sure to leave a lasting impression on visitors. Notably, the Turning Torso, one of Sweden's tallest buildings, is a fascinating and 
    </p>
  </div>
  <div class="image">
    <img class='recommendedImage' src={falafel} alt="Turning turso" />
  </div>
  
  
</div>
<div class={`recommended-destinations-container ${
  destinationsVisible[1] ? 'fade-in' : ''
}`}>  <div class="content">
    <p>
    <a href='https://www.goteborg.com/en' target={'_blank'}> <b>Gothenborg</b></a>, a friendly city on the west coast of Sweden, home to a vibrant cultural scene, world-class restaurants, sustainable living and a fascinating history – all within walking distance. Adventure is never far away, with wide open spaces and magical archipelago islands waiting to be explored.
    </p>
    <br></br>
    <p>
    Visit Gothenburg in the summer of 2023 and you’ll catch Gothenburg City’s 400th anniversary celebrations from June through August – no matter when you visit, you’ll find plenty of things to do in Gothenburg, whether you’re here on a city break or about to embark on your West Coast adventure.    </p>
  </div>
  <div class="image">
    <img class='recommendedImage' src={shawarma} alt="Gothenborg" />
  </div>
  
</div>


<div class={`recommended-destinations-container ${
  destinationsVisible[2] ? 'fade-in' : ''
}`}>  <div class="content">
    <p>
    <a href='https://www.visitstockholm.com/' target={'_blank'}> <b>Stockholm</b></a>, An open city for different perspectives and new ideas. A vibrant destination where innovations in music, design, fashion and technology are born. A place for you.
    </p>
    <br></br>
    <p>
    Stockholm is a modern hub for tech, fashion, music, ﬁlm, design, gaming, and food. A city offering exciting flavors and unique experiences.
    </p>
  </div>
  <div class="image">
    <img class='recommendedImage' src={kyckling} alt="Stockholm" />
  </div>
  
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

export default WelcomePage;
