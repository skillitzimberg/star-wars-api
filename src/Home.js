import React from "react";
import SwapiTable from "./SwapiTable";
import Search from "./Search";

function Home() {
  return (
    <main>
      <h1>STAR WARS CHARACTER SEARCH</h1>
      <Search />
      <SwapiTable />
    </main>
  );
}

export default Home;
