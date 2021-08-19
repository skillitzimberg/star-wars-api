import React from "react";

function Character(props) {
  const { character } = props;
  return (
    <tr>
      <td>{character.name}</td>
      <td>{character.birth}</td>
      <td>{character.height}</td>
      <td>{character.mass}</td>
      <td>{character.home}</td>
      <td>{character.species}</td>
    </tr>
  );
}

export default Character;
