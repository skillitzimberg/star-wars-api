import React from "react";
import Table from "react-bootstrap/Table";
import Character from "./Character";

function SwapiTable({ characters }) {
  if (characters.length === 0) {
    characters.push({
      name: "No Results Found",
      birth: null,
      height: null,
      mass: null,
      home: null,
      species: null,
    });
  }

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
      <tbody>{renderCharacters(characters)}</tbody>
    </Table>
  );
}

function renderCharacters(characters) {
  return characters.map((character) => {
    return <Character key={character.name} character={character} />;
  });
}

export default SwapiTable;
