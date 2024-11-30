// Importar os módulos necessários
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usuarioRoutes = require('./routes/usuarioRoutes'); // Importa as rotas de usuário

// Criar a aplicação Express
const app = express();

// Configurações do servidor
const PORT = 5000; // Porta do servidor
const MONGO_URI = 'mongodb+srv://bcaputo27:CczSMizXJtTYQXex@cluster0.8dyjs.mongodb.net/Orus'; // Conexão com o MongoDB

// Middlewares
app.use(cors()); // Habilitar CORS
app.use(bodyParser.json()); // Parse de JSON nas requisições
app.use(bodyParser.urlencoded({ extended: true })); // Parse de dados de formulários

// Conectar ao MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rota para testar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor Orus!');
});

// Usar as rotas de usuário
app.use('/api/usuarios', usuarioRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
