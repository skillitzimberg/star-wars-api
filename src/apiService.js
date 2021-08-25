import axios from "axios";

class Swapi {
  people = [];
  constructor() {
    this.instance = axios.create({
      baseURL: "https://swapi.dev/api/",
    });
  }

  async getCharacters() {
    return await this.fetchPeople().then(
      async (resp) => await this.mapHomeworldsAndSpecies(resp)
    );
  }

  // returns Promise<AxiosResponse<any>>
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

  // returns Promise<AxiosResponse<any>>
  async getHomeworld(homeworldURL) {
    const homeworldPath = this.getPath(homeworldURL);
    const homeworld = await this.instance.get(homeworldPath);
    return homeworld.data.name;
  }

  // returns Promise<AxiosResponse<any>>
  async getSpecies(speciesArray) {
    if (speciesArray.length === 0) return "Human";

    const speciesPath = this.getPath(speciesArray[0]);
    const species = await this.instance.get(speciesPath);
    return species.data.name;
  }

  async mapSpecies(resp) {
    console.log(resp.data);
    return await Promise.all(
      resp.data.results.map(async (person) => {
        person.species = await swapi.getSpecies(person.species);
        return person;
      })
    );
  }

  getPath = (URL) => URL.split("https://swapi.dev/api/")[1];
}

const swapi = new Swapi();
export default swapi;
