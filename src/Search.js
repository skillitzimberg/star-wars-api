import React from "react";

export default function Search(props) {
  function clearInput() {
    console.log("cleared");

    document.getElementById("search").value = "";
    props.onClear();
  }
  return (
    <>
      <label htmlFor="search">Search Characters</label>

      <input
        id="search"
        type="search"
        placeholder="Search Characters"
        name="search"
        onChange={props.onSearch}
      />

      <button onClick={clearInput}>Clear Search</button>
    </>
  );
}
