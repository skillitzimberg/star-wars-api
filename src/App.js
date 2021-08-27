import swapi from "./apiService";
import React from "react";
import "./App.css";
import Search from "./Search";
import CharacterTable from "./CharacterTable";
import PaginationControl from "./PaginationControl";

function App() {
  const [path, setPath] = React.useState("people");
  const [reset, setReset] = React.useState(0.0);
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    const getCharacters = async () => {
      const people = await swapi.getCharacters(path);
      if (!reset) setReset(false);
      setCharacters(people);
    };
    getCharacters();
  }, [path, reset]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const result = await swapi.search(e.target.value);
    setCharacters(result);
  };

  const handlePagination = (newPath) => {
    if (newPath) setPath(newPath);
  };

  const handleClear = () => {
    console.log(reset);
    setReset(Math.random());
  };

  return (
    <main>
      <header>
        <h1>STAR WARS CHARACTER SEARCH</h1>
        <Search onSearch={handleSearch} onClear={handleClear} />
      </header>

      <CharacterTable characters={characters} />

      <PaginationControl
        onNewPageReq={handlePagination}
        paths={swapi.paginationPaths}
      />
    </main>
  );
}

export default App;
