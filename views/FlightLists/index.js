import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {flightService} from "../../services";
import FlightList from "./components/FlightList";

const Tab = createMaterialTopTabNavigator();

export default function FlightLists({route, navigation}) {


    const getArrivalsFlightsByAirportId = (id, startDate, endDate) => {
        return flightService.getArrivalsFlightsByAirportId(id, startDate, endDate)
    }

    const getDeparturesFlightsByAirportId = (id, startDate, endDate) => {
        return flightService.getDeparturesFlightsByAirportId(id, startDate, endDate)
    }

    const goToFlightDetails = (idFlight) => {

        navigation.navigate("FlightDetails", {
            id: idFlight
        })
    }

    return (
        <Tab.Navigator>
            <Tab.Screen name="Arrivals">
                {() => <FlightList
                    id={route.params.id}
                    getData={getArrivalsFlightsByAirportId}
                    onClickItem={goToFlightDetails} />}
            </Tab.Screen>
            <Tab.Screen name="Departures" >
                {() => <FlightList
                    id={route.params.id}
                    getData={getDeparturesFlightsByAirportId}
                    onClickItem={goToFlightDetails}
                />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}
