import {HttpServices} from "./http.services";

const BASE_URL = "opensky-network.org/api"
const USERNAME = "yarick1217"
const PASSWORD = "Cleveroad11"


class FlightServices extends HttpServices {
    constructor() {
        super({
            baseUrl: BASE_URL,
            username: USERNAME,
            password: PASSWORD
        });
    }

    getArrivalsFlightsByAirportId(airportId, startDate, endDate) {
        return this.get(`/flights/arrival`, {
            params: {
                airport: airportId,
                begin: this._formatDateToUnix(startDate),
                end: this._formatDateToUnix(endDate)
            },
        })
    }

    getDeparturesFlightsByAirportId(airportId, startDate, endDate) {
        return this.get(`/flights/departure`, {
            params: {
                airport: airportId,
                begin: this._formatDateToUnix(startDate),
                end: this._formatDateToUnix(endDate)
            },
        })
    }

    getFlightDetails(flightId) {
        return this.get(`/states/all`, {
            params: {
                icao24: flightId,
            },
        })
    }

    _formatDateToUnix(date) {
        return Math.floor(date.getTime() / 1000)
    }
}

export {
    FlightServices
}