const express = require('express');
const Usuario = require('../models/Usuario');
const router = express.Router();

// Rota para cadastrar um novo usuário
router.post('/cadastrar', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const novoUsuario = new Usuario({ nome, email, senha });
    await novoUsuario.save();
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao cadastrar usuário' });
  }
});

module.exports = router;
