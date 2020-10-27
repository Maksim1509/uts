import React from 'react';
import logo from '../../Bitmap.svg';
import './header.scss';

const Header = () => {
  const header = (
    <header className="header">
      <div className="lights">
        <div className="lights-item lights-item--red" />
        <div className="lights-item lights-item--yellow" />
        <div className="lights-item lights-item--green" />
      </div>
      <div>
        <a href="/">
          <img className="header-logo" src={logo} alt="logo" />
        </a>
      </div>
    </header>
  );
  return header;
};

export default Header;