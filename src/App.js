import swapi from "./apiService";
import React from "react";
import "./App.css";
import Search from "./Search";
import SwapiTable from "./SwapiTable";

function App() {
  const [characters, setCharacters] = React.useState([]);
  const [planets, setPlanets] = React.useState({});

  React.useEffect(() => {
    const getCharacters = async () => {
      const people = await swapi.getCharacters();
      setCharacters(people);
    };
    getCharacters();
  }, []);

  if (!characters || characters.length === 0) return null;
  console.log("Characters", characters);
  console.log("Planets", planets);

  return (
    <main>
      <h1>STAR WARS CHARACTER SEARCH</h1>
      <Search />
      <SwapiTable characters={characters} />
    </main>
  );
}

export default App;
