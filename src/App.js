import swapi from "./apiService";
import React from "react";
import "./App.css";
import Search from "./Search";
import CharacterTable from "./CharacterTable";
import PaginationControl from "./PaginationControl";

function App() {
  const [path, setPath] = React.useState("people");
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    const getCharacters = async () => {
      const people = await swapi.getCharacters(path);
      setCharacters(people);
    };
    getCharacters();
  }, [path]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setPath(`people/?search=${e.target.value}`);
  };

  const handlePagination = (newPath) => {
    if (newPath) setPath(newPath);
  };

  const handleClear = async () => {
    setPath("people");
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
