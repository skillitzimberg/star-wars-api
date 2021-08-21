import React from "react";
import Table from "react-bootstrap/Table";
import Character from "./Character";

function SwapiTable({ characters }) {
  // console.log("Characters", characters);
  if (characters.length === 0) return null;

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
        <Character character={characters[0]} />
      </tbody>
    </Table>
  );
}

export default SwapiTable;
