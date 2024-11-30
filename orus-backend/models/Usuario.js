const mongoose = require('mongoose');
const validator = require('validator'); // Pacote para validações adicionais

// Definição do esquema do usuário
const usuarioSchema = new mongoose.Schema({
  nome: { 
    type: String, 
    required: [true, 'O nome é obrigatório.'] 
  },
  email: { 
    type: String, 
    required: [true, 'O email é obrigatório.'], 
    unique: true, 
    validate: {
      validator: (value) => validator.isEmail(value), // Valida formato de email
      message: 'Email inválido.',
    },
  },
  senha: { 
    type: String, 
    required: [true, 'A senha é obrigatória.'], 
    minlength: [6, 'A senha deve ter no mínimo 6 caracteres.'],
  },
});

// Criar o modelo do usuário
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
