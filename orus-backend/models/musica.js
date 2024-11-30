const mongoose = require('mongoose');

const MusicaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  letra: { type: String, required: true },
});

module.exports = mongoose.model('Musica', MusicaSchema);
