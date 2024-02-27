import React from 'react';
import './Cards.css'

function MapComponent() {
  return (
    <div className='cards'>
      <div className='cards__container' style={{backgroundColor:'#fff',padding: 10 }}>
        <h1>Want to visit us at our office?</h1>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.511275816798!2d101.31195061223562!3d12.939102287320715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102dfc4a13b32e9%3A0x9eb2eac077c16e50!2sD%20Dew%20coffee!5e0!3m2!1sth!2sth!4v1708870078873!5m2!1sth!2sth" 
        width="1024" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      </div>  
    </div>
  );
}

export default MapComponent;