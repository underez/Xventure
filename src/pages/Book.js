import React, { useState } from 'react';
import './Book.css';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';

function Book() {
    const [destination, setDestination] = useState('');
    const [travelDate, setTravelDate] = useState('');
    const [activityTypes, setActivityTypes] = useState([]);
  
    const handleDestinationChange = (e) => {
      setDestination(e.target.value);
    };
  
    const handleDateChange = (e) => {
      setTravelDate(e.target.value);
    };
  
    const handleActivityTypeChange = (e) => {
      const options = Array.from(e.target.options);
      const selectedOptions = options.filter(option => option.selected).map(option => option.value);
      setActivityTypes(selectedOptions);
    };
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', { destination, travelDate, activityTypes });
   
      setActivityTypes([]);
      
      Swal.fire({
        title: 'Booking Confirmed!',
        text: 'Your booking has been confirmed. Enjoy your journey!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    };
  

return (
<div>
    <div className='booking-container'>
    <h1 className="start-journey" style={{ fontFamily: 'Arial, sans-serif', fontSize: '40px', fontWeight: 'bold', color: 'black' }}>Start your journey</h1>

      <div className="form-box">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <select
              id="destination"
              value={destination} 
              onChange={handleDestinationChange}
              className="form-control"
            >
            <option value="">Select Destination</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Australia & New Zealand">Australia & New Zealand</option>
            <option value="Europe">Europe</option>
            <option value="South East Asia">South East Asia</option>
            <option value="Middle East Asia">Middle East Asia</option>
          </select>
          </div>
          <div className="form-group">
            <label htmlFor="travelDate">Travel Date:</label>
            <input
              type="date"
              id="travelDate"
              value={travelDate} 
              onChange={handleDateChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="activityTypes">Activity Types:</label>
            <select
              id="activityTypes"
              value={activityTypes} 
              onChange={handleActivityTypeChange}
              className="form-control"
             
            >
            <option value="hiking">Hiking</option>
            <option value="swimming">Swimming</option>
            <option value="sightseeing">Sightseeing</option>
            <option value="camping">Camping</option>
            <option value="city">City</option>
            <option value="adventure">Adventure</option>
            <option value="Sports">Sports</option>
            </select>
          </div>
          <button type="submit" className="btn-primary">Book Now</button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
}
export default Book;
