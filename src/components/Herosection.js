import React, { useState } from 'react';
import './Herosection.css';
import '../App.css';

const Herosection = () => {
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const openVideoPopup = () => {
    setShowVideoPopup(true);
  };

  const closeVideoPopup = () => {
    setShowVideoPopup(false);
  };

  return (
    <div className='hero-container'>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        
      <button
  className='btns'
  style={{
    backgroundColor: 'white', 
    color: 'black', 
    fontSize: '1em', 
    padding: '10px 20px',
    border: 'none',
  }}
  onClick={openVideoPopup}
>
  WATCH TRAILER <i className='fa-regular fa-circle-play'></i>
</button>


      </div>

      {showVideoPopup && (
        <div className="video-popup">
          <video src="/videos/video-2.mp4" autoPlay controls />
          <button onClick={closeVideoPopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Herosection;

