import React from 'react';
import Header from '../../components/Header';
import Bgimage from '../../assets/programmer.svg';

import './styles.css'

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="titulo">
          <h1>Meu primeiro app com React</h1>
          <p>Lab Tekh: Estamos moldando o futuro com excelentes ideias desde 2018</p>
        </div>
        <img src={Bgimage} alt="Imagem de fundo"/>
      </div>
    </>
  );
}

export default Home;