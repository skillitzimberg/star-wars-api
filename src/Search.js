import React from "react";

export default function Search(props) {
  function clearInput() {
    document.getElementById("search").value = "";
    props.onClear();
  }
  return (
    <>
      <label htmlFor="search">Search Characters</label>

      <div id="search-row">
        <input
          id="search"
          type="search"
          placeholder="Search Characters"
          name="search"
          onChange={props.onSearch}
        />

        <button id="clearSearch" onClick={clearInput}>
          clear
        </button>
      </div>
    </>
  );
}
