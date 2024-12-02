// src/components/Welcome.js
import React, { useState } from 'react';
import '../styles/Welcome.css';
import Image from '../assets/bookPic-1.jpeg'

const Welcome = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <>
      <div>
        <img className='image' src={Image} alt='' />
      </div>

      <div className="welcome-container">
        <h4>Welcome to my little corner of the internet -where charm meets curiosity! </h4>
        <h4> Stick around; you might just fall for more than my content!</h4>
        <form onSubmit={handleSubmit} className="welcome-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="name-input"
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </>

  );
};

export default Welcome;