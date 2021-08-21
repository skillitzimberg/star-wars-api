import axios from "axios";

class Swapi {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://swapi.dev/api/",
    });
  }

  getPeople() {
    return this.instance.get("people");
  }

  getPlanets() {
    return this.instance.get("planets");
  }

  getSpecies() {
    return this.instance.get("species");
  }
}

export default Swapi;
