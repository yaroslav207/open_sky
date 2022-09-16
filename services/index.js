import {AirportsServices} from "./airports.services";
import {FlightServices} from "./flight.services";

const airportsServices = new AirportsServices();
const flightService = new FlightServices();

export {
    airportsServices,
    flightService
}