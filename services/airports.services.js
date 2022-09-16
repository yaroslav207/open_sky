import {HttpServices} from "./http.services";

const AIRPORTS_API_URL = 'https://raw.githubusercontent.com/mwgg/Airports/master/airports.json'

class AirportsServices extends HttpServices{
    constructor() {
        super({baseUrl: AIRPORTS_API_URL});
    }

    getAirports() {
        return this.get()
            .then(result => result.json())
    }
}

export {
    AirportsServices
}