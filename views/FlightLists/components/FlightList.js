import {ActivityIndicator, FlatList} from "react-native";
import {useContext, useEffect, useState} from "react";
import {FlightListItem} from "./FlightListItem";
import moment from "moment";
import {AirportContext} from "../../../context";

export default function FlightList({ id, getData, onClickItem }) {
    const [flights, setFlights] = useState([])
    const [loading, setLoading] = useState(true)
    const endDate = moment().add(1, 'days').toDate()
    const startDate = moment(endDate).add(-2, 'days').toDate()
    const airports = useContext(AirportContext)

    const formatUnixToDate = (unix) => {
        return new Date(unix * 1000)
    }

    const mapFlightToFlatListItem = (flights = []) => {
        return flights.map(flight => ({
            id: flight.icao24,
            flight: {
                ...flight,
                departureAirport: airports[flight.estDepartureAirport],
                arrivalAirport: airports[flight.estArrivalAirport],
                startDate: formatUnixToDate(flight.firstSeen),
                endDate: formatUnixToDate(flight.lastSeen),
            }
        }))
    }

    useEffect(() => {
        if (!id) return
        getData(id, startDate, endDate)
            .then(({data}) => setFlights(mapFlightToFlatListItem(data)))
            .catch(() => setFlights([]))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) {
        return <ActivityIndicator size="large" />
    }

    return (
        <FlatList
            data={flights}
            onPress
            renderItem={({item}) => <FlightListItem item={item} onPress={() => onClickItem(item.id)} />}
            keyExtractor={(item, index) => item.id + index}
        />
    );
}
