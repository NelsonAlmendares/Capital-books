import React from 'react'
import './footer.css'
import logo from '../../assets/logos/logo_transparent_web.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container logo-img">
        <img src={logo} alt="logo.png" className='logo' />
      </div>
      <div className="contents container">
        <div className="content1">
          <h4 className='title'>Conoce más: </h4>
            <ul className='list-container'>
              <li className='list-item mt-3'>Nosotros</li>
              <li className='list-item'>Ubicación</li>
              <li className='list-item'>Clubes</li>
            </ul>
        </div>
        <div className="content2">
          <h4 className='title'>Mi Cuenta </h4>
            <ul className='list-container'>
              <li className='list-item mt-3'>Ajustes</li>
              <li className='list-item'>Mi historial de Compras</li>
              <li className='list-item'>Lista de Deseos</li>
              <li className='list-item'>Encargos</li>
              <li className='list-item'>Soporte y Ayuda</li>
            </ul>
        </div>
        <div className="content3"> 
          <h4 className='title'>Nuestras Redes </h4>
            <ul className='list-container'>
              <li className='list-item mt-3'>Fecebook</li>
              <li className='list-item'>Twitter</li>
              <li className='list-item'>Instagram</li>
              <li className='list-item'>Linked In</li>
            </ul>
        </div>
        <div className="content4">
          <h4 className='title'>Público </h4>
            <ul className='list-container'>
              <li className='list-item mt-3'>Nosotros</li>
              <li className='list-item'>Ubicación</li>
              <li className='list-item'>Clubes</li>
            </ul>
            <h4 className='title mt-3'>Políticas y Privacidad </h4>
            <ul className='list-container last-container'>
              <li className='list-item mt-3'>Reglamento</li>
              <li className='list-item'>Terminos y Condiciones</li>
              <li className='list-item'>Politicas de privacidad</li>
            </ul>
        </div>
      </div>
      <h3 className='copyright'>2023 Capital Books.© All rights reserved</h3>
    </footer>
  )
}

export default Footer