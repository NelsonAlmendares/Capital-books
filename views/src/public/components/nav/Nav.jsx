import React, { useState } from 'react'
import './Nav.css';
import logo_transparent_web from '../../assets/logos/logo_transparent_web.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Nav() {

   const [Toggle, showMenu] = useState(false);
   
   return (
      <header className="header">
         <div className="container sub_menu">
            <a href="#home">
               <img src={logo_transparent_web} className='logo_img logo_min' alt='logo.png'/>
            </a>
            <div className={Toggle ? "nav__menu show-menu content" : "nav__menu row"}>
               <div className="col-md-3" id='logo'>
                  <a href="#home">
                     <img src={logo_transparent_web} className='logo_img hide_logo' alt='logo.png'/>
                  </a>
               </div>
               <div className="col-md-5 listItems">
                  <ul className='nav-list'>
                     <li className='navItem active'>Home</li>
                     <li className='navItem'>Libros</li>
                     <li className='navItem'>Sobre Nostros</li>
                     <li className='navItem'>Escritura</li>
                  </ul>
               </div>
               <div className="col-md-4">
                  <div className="box">
                     <div className="container-1">
                        <input type="text" id='search' placeholder="Buscar..."/>
                        <button className='icon'><FontAwesomeIcon icon={faSearch} /></button>
                     </div>
                  </div>
               </div>
               <i className='bx bx-x btn__close' onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
               <i className='bx bxs-grid-alt nav__icon'></i>
            </div>
         </div>
      </header>
  )

}
export default Nav