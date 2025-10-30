import { useState } from "react";

function Card({ game, setGames }) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [ability, setAbility] = useState();

  const deleteGame = (id) => {
    setGames((games) => games.filter((game) => game.id !== id));
  };

  const updateGames = (e, id) => {
    e.preventDefault();
    setGames((games) =>
      games.map((game) =>
        game.id == id
          ? { ...game, types: [type], abilities: [ability], name }
          : game
      )
    );
  };

  return (
    <>
      <div>
        <img src={game.imageUrl} alt="Game Image" />
        <h2>Name: {game.name}</h2>
        <p>type: {game.types}</p>
        <p>Abilities: {game.abilities}</p>
      </div>
      <button onClick={() => deleteGame(game.id)}>Delete</button>
      <button onClick={() => setShowForm((prev) => !prev)}>Update Game</button>

      {showForm && (
        <form onSubmit={(e) => updateGames(e, game.id)}>
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
          <button type="submit">Обновить</button>
        </form>
      )}
    </>
  );
}

export default Card;
