import Api from "./apiService";
import React from "react";
import "./App.css";
import Search from "./Search";
import SwapiTable from "./SwapiTable";

function App() {
  const swapi = new Api();
  const [characters, setCharacters] = React.useState([]);
  const [planets, setPlanets] = React.useState({});

  React.useEffect(() => {
    swapi
      .getPeople()
      .then((resp) => resp.data.results)
      .then((people) => {
        people.map((person) => {
          swapi.getPlanet(person.homeworld).then((planet) => {
            person.homeworld = planet.data.name;
          });
        });
        setCharacters(people);
      });
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
