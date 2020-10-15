import React from 'react';
import './styles.css';

import Logo from '../../assets/logo.png';

function Header() {
  return (
    <div className='header'>
      <img src={Logo} alt="Logo Lab Tekh"/>
      <h1>Olá, user</h1>
      <h1>Botão 1</h1>
      <h1>Botão 2</h1>
    </div>
  );
}

export default Header;