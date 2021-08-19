import React from "react";
import Table from "react-bootstrap/Table";
import Character from "./Character";

function SwapiTable() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth Date</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Home World</th>
          <th>Species</th>
        </tr>
      </thead>
      <tbody>
        <Character character={character} />
      </tbody>
    </Table>
  );
}

const character = {
  name: "Han Solo",
  birth: "2090.12.03",
  height: "2 meters",
  mass: "80kg",
  home: "Corelia",
  species: "Human",
};

export default SwapiTable;
