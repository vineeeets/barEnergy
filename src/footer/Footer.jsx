
import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact Us: <a className="mail" href='mailto:balkrishnasharma.14@gmail.com'>balkrishnasharma.14@gmail.com</a></p>
        <p>Phone: <a className='phone' href="tel:+91-9768309536">+91-9768309536</a></p>
        <p>Address: 1234 Street, City, Country</p>
      </div>
    </footer>
  );
};

export default Footer;
