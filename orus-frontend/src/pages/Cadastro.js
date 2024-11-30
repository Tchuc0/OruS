import React, { useState } from 'react';

const Cadastro = () => {
  // States para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // State para mensagens de erro
  const [erro, setErro] = useState('');

  // Função para validar e enviar os dados
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (!nome || !email || !senha) {
      setErro('Todos os campos são obrigatórios!');
      return;
    }

    // Validação de email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErro('Por favor, insira um email válido!');
      return;
    }

    // Resetar erro e processar o envio (simulação)
    setErro('');
    alert('Cadastro realizado com sucesso!');

    // Aqui você poderia fazer o envio para uma API, por exemplo
    console.log({ nome, email, senha });

    // Limpar os campos após o envio
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <div className="cadastro">
      <div className="form-container">
        <h1>Cadastro de Usuário</h1>
        {erro && <p>{erro}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
