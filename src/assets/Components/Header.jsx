// src/Header.js
import React from 'react';

const Header = () => {

    return (
      <header className="header">
        <div className='logo'>
          <a href="/"><img src='src/assets/img/logo_extension.svg' alt="Logo" /></a>
        </div>
        <nav>
          <ul>
            <li><a href="/agence">Agence</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </nav>
      </header>
      );
};

export default Header;