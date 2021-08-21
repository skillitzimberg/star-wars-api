import Api from "./apiService";
import React from "react";
import "./App.css";
import Search from "./Search";
import SwapiTable from "./SwapiTable";

function App() {
  const swapi = new Api();
  const [characters, setCharacters] = React.useState([]);
  const [species, setSpecies] = React.useState([]);
  React.useEffect(() => {
    swapi.getPeople().then((resp) => {
      setCharacters(resp.data.results);
    });
  }, []);

  if (characters.length === 0) return null;
  console.log("Characters", characters);
  console.log("Species", species);
  return (
    <main>
      <h1>STAR WARS CHARACTER SEARCH</h1>
      <Search />
      <SwapiTable characters={characters} />
    </main>
  );
}

export default App;
