import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Logo from '../../assets/logo.png';

function Header() {
  return (
    <div className='header'>
      <img src={Logo} alt="Logo Lab Tekh"/>
      <h1>Bem vindo!</h1>
      <h1><Link to="/">Home</Link> </h1>
      <h1><Link to="/users">Users</Link></h1>
    </div>
  );
}

export default Header;