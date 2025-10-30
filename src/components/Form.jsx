import { useState } from "react";

function Form({ setGames, games }) {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [ability, setAbility] = useState();

  const formSubmit = (e) => {
    e.preventDefault();
    const newGame = {
      id: games.length + 1,
      name,
      types: [type],
      abilities: [ability],
      height: 0.4,
      weight: 4.2,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    };

    setGames((prev) => [...prev, newGame]);
  };

  return (
    <>
      <h2>Создание нового персонажа</h2>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">Name of game</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          id="name"
          placeholder="Enter name of game"
        />
        <label htmlFor="type"></label>
        <input
          onChange={(e) => setType(e.target.value)}
          value={type}
          type="text"
          id="type"
          placeholder="Enter type of game"
        />
        <label htmlFor="ability"></label>
        <input
          onChange={(e) => setAbility(e.target.value)}
          value={ability}
          type="text"
          id="ability"
          placeholder="Enter ability of game"
        />
        <button type="submit">Добавить</button>
      </form>
    </>
  );
}

export default Form
