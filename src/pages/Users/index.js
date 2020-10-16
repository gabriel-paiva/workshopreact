import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';

import './styles.css';

function Users() {

  const [username, setUsername] = useState('');
  const [circulo1, setCirculo1] = useState('');
  const [condicional, setCondicional] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data)
    });
  }, [users]);

  async function handleNewUser(e) {
    e.preventDefault();

    const data = {
      name: username
    }

    await api.post('users', data);
    alert('Usuário cadastrado!');
  }

  function handleAparecer(){
    setCirculo1(<div className="circulo"></div>);
  }

  function handleDesaparecer(){
    setCirculo1(null);
  }

  function handleCondicional(){
    setCondicional(!condicional);
  }

  return (
    <>
      < Header />
      <div className="container">
        <h1>Página de Usuários</h1>
        <form onSubmit={handleNewUser} >
          <h2>Alterando um estado:</h2>
          <label htmlFor="user">Digite o nome de usuário:</label>
          <input id="user" type="text" onChange={e => setUsername(e.target.value)} />
          <button type="submit">Enviar</button>
        </form>
        <h2>{username}</h2>
        
        <div className="mostrausers">
          <h2>Mostrando usuários da API (GET):</h2>
          
          {users.map(user => <div key={user.id} className="user"><p>{user.name}</p></div>)}
        </div>

        <div className="renderizacao">
          <h2>Renderização Condicional 1:</h2>
          {circulo1}
          <div className="buttons">
            <button onClick={handleAparecer}>Aparecer</button>
            <button onClick={handleDesaparecer}>Desaparecer</button>
          </div>
        </div>
        <div className="renderizacao">
          <h2>Renderização Condicional 2:</h2>
          {condicional && <div className="circulo"></div>}
          <div className="buttons">
            <button onClick={handleCondicional}>Mudar Condicional</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;