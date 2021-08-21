import axios from "axios";

class Swapi {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://swapi.dev/api/",
    });
  }

  async getPeople() {
    let people = [];
    await this.instance.get("people").then((resp) => {
      people = resp.data.results;
    });
    return people;
  }

  getPlanets() {
    return this.instance.get("planets");
  }

  getPlanet(id) {
    return this.instance.get(`planets/${id}`);
  }

  getSpecies() {
    return this.instance.get("species");
  }
}

export default Swapi;
