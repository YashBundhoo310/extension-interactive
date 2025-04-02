// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.facebook.com/extension.france/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/xtnsio" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/xtnsio/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/company/extension-interactive" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
        <div className="legal-mentions">
          <a href="/mention-legales">Mentions Légales</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© EXTENSION INTERACTIVE 2016</p>
      </div>
    </footer>
  );
};

export default Footer;