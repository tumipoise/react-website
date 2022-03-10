import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
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
            <Link to='/'>Sponsorships</Link>
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
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2020</small>
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
  );
}

export default Footer;



// import React from "react";
// import { Button } from "./Button";
// import "./Footer.css";
// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <div className="footer-container">
//       <section className="footer-subscription">
//         <p className="footer-subscription-heading">
//           Join the Adventure newsletter to receive our best vacation deals
//         </p>
//         <p className="footer-subscription-text">
//           You can subscribe at any time
//         </p>
//         <div className="input-areas">
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             className="footer-input"
//           />
//           <Button buttonStyle="btn--outline">Subscribe</Button>
//         </div>
//       </section>
//       <div className="footer-links">
//         <div className="footer-link-wrapper">
//           <div className="footer-link-items">
//             <h2>About Us</h2>
//             <Link to="/sign-up">How it works</Link>
//             <Link to="/testimonials">Testimonials</Link>
        
//             <Link to="/careers">Careers</Link>
//             <Link to="/investors">Investors</Link>
//             <Link to="/terms-of-service">Terms of Services</Link>
//           </div>
//           <div className="footer-link-items">
//             <h2>Contact Us</h2>
//             <Link to="/contact">Contact</Link>
//             <Link to="/support">Support</Link>
            
//             <Link to="/careers">Destinations</Link>
//             <Link to="/investors">Investors</Link>
//             <Link to="/terms-of-service">Terms of Services</Link>
//           </div>
//         </div>
//         <div className="footer-link-wrapper">
//           <div className="footer-link-items">
//             <h2>Videos</h2>
//             <Link to="/submit-video">Submit Video</Link>
//             <Link to="/ambassadors">Ambassadors</Link>
           
//             <Link to="/agency">Agency</Link>
//             <Link to="/investors">Investors</Link>
//             <Link to="/terms-of-service">Terms of Services</Link>
//           </div>
//           <div className="footer-link-items">
//             <h2>Social Media</h2>
//             <Link to="/instagram">Instagram</Link>
//             <Link to="/facebook">Facebook</Link>
            
//             <Link to="/youtube">Youtube</Link>
//             <Link to="/investors">Investors</Link>
//             <Link to="/terms-of-service">Terms of Services</Link>
//           </div>
//         </div>
//       </div>
//       <section className="social-media">
//         <div className="social-media-wrap">
//           <div className="footer-logo">
//             <Link to="/home" className="footer-logo">
//               TRVL <i className="fab fa-typo3" />
//             </Link>
//           </div>
//           <small className="website-rights">TUMI &copy; 2022</small>
//           <div className="social-icons">
//             <Link
//               className="social-icon-link facebook"
//               to="/facebook"
//               target="_blank"
//               aria-label="Facebook"
//             >
//               <i className="fab fa-facebook-f"></i>
//             </Link>
//             <Link
//               className="social-icon-link instagram"
//               to="/instagram"
//               target="_blank"
//               aria-label="Instagram"
//             >
//               <i className="fab fa-instagram"></i>
//             </Link>
//             <Link
//               className="social-icon-link youtube"
//               to="/youtube"
//               target="_blank"
//               aria-label="Youtube"
//             >
//               <i className="fab fa-youtube"></i>
//             </Link>
//             <Link
//               className="social-icon-link twitter"
//               to="/twitter"
//               target="_blank"
//               aria-label="Twitter"
//             >
//               <i className="fab fa-twitter"></i>
//             </Link>
//             <Link
//               className="social-icon-link linkedin"
//               to="/linked-in"
//               target="_blank"
//               aria-label="LinkedIn"
//             >
//               <i className="fab fa-linkedin"></i>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Footer;
