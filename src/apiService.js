import axios from "axios";

class Swapi {
  people = [];
  constructor() {
    this.instance = axios.create({
      baseURL: "https://swapi.dev/api/",
    });
  }

  // returns Promise<AxiosResponse<any>>
  getPeople() {
    return this.instance.get("people");
  }

  // returns Promise<AxiosResponse<any>>
  getPlanets() {
    return this.instance.get("planets");
  }

  // returns Promise<AxiosResponse<any>>
  getPlanet(url) {
    return this.instance.get(url);
  }
}

export default Swapi;
