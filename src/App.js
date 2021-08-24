import axios from "axios";
import React from "react";
import "./App.css";
import Search from "./Search";
import SwapiTable from "./SwapiTable";

function App() {
  const [characters, setCharacters] = React.useState([]);
  const [planets, setPlanets] = React.useState({});

  React.useEffect(() => {
    const getCharacterData = () => {
      axios
        .get("https://swapi.dev/api/people")
        .then((resp) => {
          const people = resp.data.results;
          console.log("people: ", people);
          people.map(async (person) => {
            person.homeworld = getHomeworld(person);

            return setCharacters([...characters, people]);
          });
        })
        .catch((err) => console.log(err));
    };
    getCharacterData();
  }, [characters]);

  const getHomeworld = async (character) => {
    const homeworld = axios.get(character.homeworld);
    return homeworld.data.name;
  };

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
