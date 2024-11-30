const mongoose = require('mongoose');
const Musica = require('./models/Musica'); // Importa o modelo da música

const MONGO_URI = 'mongodb+srv://bcaputo27:CczSMizXJtTYQXex@cluster0.8dyjs.mongodb.net/Orus';

const seedMusicas = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado ao MongoDB!');

    const musicas = [
      { nome: "Bohemian Rhapsody", letra: "Is this the real life? Is this just fantasy?" },
      { nome: "Imagine", letra: "Imagine there's no heaven, it's easy if you try." },
      { nome: "Let it Be", letra: "When I find myself in times of trouble, Mother Mary comes to me." },
      { nome: "Hey Jude", letra: "Hey Jude, don't make it bad, take a sad song and make it better." },
      { nome: "Stairway to Heaven", letra: "There’s a lady who’s sure all that glitters is gold." },
      { nome: "Smells Like Teen Spirit", letra: "Load up on guns, bring your friends, it’s fun to lose and to pretend." },
      { nome: "Like a Rolling Stone", letra: "Once upon a time, you dressed so fine, threw the bums a dime, in your prime, didn’t you?" },
      { nome: "What a Wonderful World", letra: "I see trees of green, red roses too, I see them bloom, for me and you." },
      { nome: "Yesterday", letra: "Yesterday, all my troubles seemed so far away." },
      { nome: "Hotel California", letra: "On a dark desert highway, cool wind in my hair." }
    ];

    await Musica.insertMany(musicas);
    console.log('Músicas inseridas com sucesso!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Erro ao inserir músicas:', error);
  }
};

seedMusicas();
