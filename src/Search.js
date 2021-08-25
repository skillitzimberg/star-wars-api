import React from "react";

export default function Search(props) {
  return (
    <input
      type="search"
      placeholder="Search"
      name="search"
      onChange={props.onSearch}
    />
  );
}
