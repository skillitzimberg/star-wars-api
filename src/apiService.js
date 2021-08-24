import axios from "axios";

class Swapi {
  people = [];
  constructor() {
    this.instance = axios.create({
      baseURL: "https://swapi.dev/api/",
    });
  }

  // returns Promise<AxiosResponse<any>>
  async getPeople() {
    return await this.instance.get("people");
  }

  // returns Promise<AxiosResponse<any>>
  getPlanets() {
    return this.instance.get("planets");
  }

  // returns Promise<AxiosResponse<any>>
  async getHomeworld(url) {
    const homeworld = await this.instance.get(url);
    console.log(homeworld);
    return homeworld.data.name;
  }
}

export default Swapi;
