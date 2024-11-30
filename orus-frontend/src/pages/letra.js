import React from "react";
import { useParams, Link } from "react-router-dom";

const musicas = [
  { id: 1, nome: "Bohemian Rhapsody", letra: "Is this the real life? Is this just fantasy?" },
  { id: 2, nome: "Imagine", letra: "Imagine there's no heaven, it's easy if you try." },
  { id: 3, nome: "Let it Be", letra: "When I find myself in times of trouble, Mother Mary comes to me." },
  { id: 4, nome: "Hey Jude", letra: "Hey Jude, don't make it bad, take a sad song and make it better." },
  { id: 5, nome: "Stairway to Heaven", letra: "There’s a lady who’s sure all that glitters is gold." },
  { id: 6, nome: "Smells Like Teen Spirit", letra: "Load up on guns, bring your friends, it’s fun to lose and to pretend." },
  { id: 7, nome: "Like a Rolling Stone", letra: "Once upon a time, you dressed so fine, threw the bums a dime, in your prime, didn’t you?" },
  { id: 8, nome: "What a Wonderful World", letra: "I see trees of green, red roses too, I see them bloom, for me and you." },
  { id: 9, nome: "Yesterday", letra: "Yesterday, all my troubles seemed so far away." },
  { id: 10, nome: "Hotel California", letra: "On a dark desert highway, cool wind in my hair." },
  { id: 11, nome: "Shape of You", letra: "The club isn't the best place to find a lover, so the bar is where I go." },
];

const Letra = () => {
  const { id } = useParams();
  const musica = musicas.find((musica) => musica.id === parseInt(id));

  if (!musica) {
    return <h1>Música não encontrada!</h1>;
  }

  return (
    <div>
      <h1>{musica.nome}</h1>
      <p>{musica.letra}</p>
      <Link to="/listagem">Voltar para a listagem</Link>
    </div>
  );
};

export default Letra;
