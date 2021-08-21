import React from "react";

function Character({ character }) {
  const noResultsCharacter = {
    name: "No Results Found",
    birth: null,
    height: null,
    mass: null,
    home: null,
    species: null,
  };

  if (!character) character = noResultsCharacter;
  return (
    <tr>
      <td>{character.name}</td>
      <td>{character.birth_year}</td>
      <td>{character.height}</td>
      <td>{character.mass}</td>
      <td>{character.homeworld}</td>
      <td>{character.species}</td>
    </tr>
  );
}

export default Character;
