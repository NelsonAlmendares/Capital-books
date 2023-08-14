import React from 'react';
import './Top_nav.css';

function TopNav() {
  return (
    <header className='header-top'>
      <div className="TopHeader container TopNav">
        <ul className='navTopList'>
          <li className="navTop-item">Ofertas</li>
          <li className="navTop-item">Contacto</li>
          <li className="navTop-item">Registrarme</li>
          <li className="navTop-item">Login</li>
        </ul>
      </div>
    </header>
  )
}

export default TopNav