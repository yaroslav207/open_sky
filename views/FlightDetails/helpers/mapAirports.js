export const mapAirports = (airports) => {
    const mappedAirports = []

    Object.keys(airports).forEach((airportKey) => {
        if(airports[airportKey].iata) {
            mappedAirports.push({
                id: airportKey,
                ...airports[airportKey]
            })
        }
    })

    return mappedAirports
}