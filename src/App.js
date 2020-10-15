import React from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="titulo">
          <h1>Meu primeiro app com React</h1>
          <p>Lab Tekh: Estamos moldando o futuro com excelentes ideias desde 2018</p>
        </div>
      </div>
    </>
  );
}

export default App;
