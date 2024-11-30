import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Importar os componentes das páginas
import Home from './pages/Home'; 
import Cadastro from './pages/Cadastro'; 
import Listagem from './pages/Listagem';
import Letra from './pages/letra.js'; 

function App() {
  return (
    <Router>
      {/* Cabeçalho */}
      <header className="header">
        <h1>Orus</h1>
        <p>Gerenciamento Simplificado</p>
      </header>

      {/* Container principal: menu lateral e conteúdo */}
      <div className="main-container">
        {/* Menu lateral */}
        <nav className="sidebar">
          <h2>Menu</h2>
          <Link to="/">Home</Link>
          <Link to="/cadastro">Cadastro de Usuário</Link>
          <Link to="/listagem">Listagem</Link>
        </nav>

        {/* Conteúdo principal */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/listagem" element={<Listagem />} />
            <Route path="/letra/:id" element={<Letra />} /> {/* Rota para a letra da música */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
