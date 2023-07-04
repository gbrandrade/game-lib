import Game from "./components/Game";
import GameForm from "./components/GameForm";
import useGameCollection from "./hooks/useGameCollection";

export default function App() {
  const { games, addGame, removeGame } = useGameCollection();

  return (
    <div>
      <h1>Biblioteca de jogos</h1>
      {<GameForm addGame={addGame}></GameForm>}

      <div className="games">
        {games.map((game) => (
          <Game
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() => removeGame(game.id)}
          ></Game>
        ))}
      </div>
    </div>
  );
}
