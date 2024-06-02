import React, { useState, useEffect } from 'react';
import './Footer.css';

function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${visible ? 'visible' : ''}`}>
      <div className="footer-content">
        <p>&copy; 2024 Chevrolet. All rights reserved.</p>
        <p>
          Follow us on:
          <a href="https://www.facebook.com/chevrolet" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://www.twitter.com/chevrolet" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://www.instagram.com/chevrolet" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;