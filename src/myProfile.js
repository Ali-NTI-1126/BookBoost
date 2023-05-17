import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './myProfile.css';
import logo from './icons/BB.png';

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleFormChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.phone]: event.target.value,
    });
  };

  useEffect(() => {
    async function fetchUserName() {
      const response = await fetch('http://127.0.0.1:8000/api/myProfile');
      const data = await response.json();
      console.log(data);
    }
    fetchUserName();
  }, []);

  const handleFormSubmit = event => {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/api/myProfile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // TODO: handle successful update
    })
    .catch(error => {
      console.error('Error:', error);
      // TODO: handle error
    });
  };

  const handleDelete = () => {
    fetch('/api/profile', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'http://127.0.0.1:8000/api/myProfile',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(data => {
      // TODO: handle successful delete
    })
    .catch(error => {
      console.error('Error:', error);
      // TODO: handle error
    });
  };

  useEffect(() => {
    fetch('/api/profile', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setFormData(data);
    })
    .catch(error => {
      console.error('Error:', error);
      // TODO: handle error
    });
  }, []);

  return (
    <div>
    <div className="profile">
        <div className='flex justify-center mb-7'>
        <a href="/"><img src={logo} alt="logo" /></a>
        </div>
        <hr></hr>
      {isEditing ? (
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={formData.name}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              defaultValue={formData.email}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              defaultValue={formData.phone}
              onChange={handleFormChange}
              //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              max={15}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              name="password"
              defaultValue={formData.password}
              onChange={handleFormChange}
              minLength="6"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleFormChange}
              placeholder='Confirm you new password...'
              minLength="6"
            />
          </div>
          <div className="form-buttons">
            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="profile-details">
          <p>
            <strong>Name:</strong> 
            {formData.name}
          </p>
          <p>
            <strong>Email:</strong> 
            {formData.email}
          </p>
          <p>
            <strong>Phone:</strong> 
            {formData.phone}
          </p>
          <div className="profile-buttons">
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            <button onClick={handleDelete}>Delete Account</button>
          </div>
        </div>
      )}
      <div className="my-amenities">
        <h2>your Hotel Amenities</h2>
        <p>You haven't choose any Amenities yet.</p>
        <a href='/offers' className='amenities' to="/offers">See all Amenities</a>
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

export default ProfilePage;
