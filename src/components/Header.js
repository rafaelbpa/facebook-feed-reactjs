import React from 'react';

import logo from '../assets/facebook-1.png';

function Header() {
  return (
    <header id="main-header">
      <div className="content">
        <img src={logo} className="facebook_logo" />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </div>
    </header>
  );
}

export default Header;