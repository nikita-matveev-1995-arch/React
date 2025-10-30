import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
const data = [
  {
    id: "1",
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    height: 0.7,
    weight: 6.9,
    abilities: ["Overgrow"],
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: "2",
    name: "Charmander",
    types: ["Fire"],
    height: 0.6,
    weight: 8.5,
    abilities: ["Blaze"],
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: "3",
    name: "Squirtle",
    types: ["Water"],
    height: 0.5,
    weight: 9.0,
    abilities: ["Torrent"],
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: "4",
    name: "Pikachu",
    types: ["Electric"],
    height: 0.4,
    weight: 6.0,
    abilities: ["Static"],
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    id: "5",
    name: "Meowth",
    types: ["Normal"],
    height: 0.4,
    weight: 4.2,
    abilities: ["Pickup"],
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
  },
];
function App() {
  const [games, setGames] = useState(data);
  console.log(games);

  return (
    <>
      <Form games={games} setGames={setGames} />
      {games.map((game) => (
        <Card setGames={setGames} key={game.id} game={game} />
      ))}
    </>
  );
}

export default App;
