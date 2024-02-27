import React, { useState } from "react";
import { Button } from "./button-1";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Alert, Space } from "antd";
import Swal from "sweetalert2";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubscribe = () => {
    if (email === subscribedEmail) {
      setShowAlert(true);
    } else {
      setSubscribedEmail(email);
      setShowAlert(false);
    
    }
  };

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join Xventure to receive out best Adventure deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
              value={email}
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />

             <Button
              to='#'
              buttonStyle='btn--outline'
              onClick={handleSubscribe}
            >Subscribe</Button>
          </form>
          {showAlert && (
            <Alert message={`We send email to ${subscribedEmail} Already`} type="info" />
          )}
        </div>
      </section>
      

        <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <a href="/brochure.pdf" download="/brochure.pdf" onClick={() => alert("You are about to download a file to your local drive.")} id="downloadLink">Download a full brochure</a>


          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              XVenture
              <i class="fa-solid fa-earth-americas"></i>
            </Link>
          </div>
          <small class='website-rights'>XVenture © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer