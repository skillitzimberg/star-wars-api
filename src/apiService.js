import axios from "axios";

class Swapi {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://swapi.dev/api/",
    });
  }

  async search(query) {
    return await this.instance
      .get(`people/?search=${query}`)
      .then(async (resp) => await this.mapHomeworldsAndSpecies(resp));
  }

  async getCharacters() {
    return await this.fetchPeople().then(
      async (resp) => await this.mapHomeworldsAndSpecies(resp)
    );
  }

  async fetchPeople() {
    return await this.instance.get("people");
  }

  async mapHomeworldsAndSpecies(resp) {
    return await Promise.all(
      resp.data.results.map(async (person) => {
        person.homeworld = await swapi.getHomeworld(person.homeworld);
        person.species = await swapi.getSpecies(person.species);
        return person;
      })
    );
  }

  async getHomeworld(homeworldURL) {
    const homeworldPath = this.getPath(homeworldURL);
    const homeworld = await this.instance.get(homeworldPath);
    return homeworld.data.name;
  }

  async getSpecies(speciesArray) {
    if (speciesArray.length === 0) return "Human";

    const speciesPath = this.getPath(speciesArray[0]);
    const species = await this.instance.get(speciesPath);
    return species.data.name;
  }

  getPath = (URL) => URL.split("https://swapi.dev/api/")[1];
}

const swapi = new Swapi();
export default swapi;
