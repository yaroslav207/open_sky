export const mapFlightToFlatListItem = (flights = []) => {
    return flights.map(flight => ({
        id: flight.icao24,
        flight
    }))
}