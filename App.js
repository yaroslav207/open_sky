import * as React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AirportsMap from './views/AirportsMap';
import FlightLists from "./views/FlightLists";
import {useEffect, useState} from "react";
import {AirportContext} from "./context";
import {mapAirports} from "./views/AirportsMap/helpers/mapAirports";
import FlightDetails from "./views/FlightDetails";

const Stack = createNativeStackNavigator();

export default function App() {
    const [airports, setAirports] = useState({})

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mwgg/Airports/master/airports.json')
            .then(result => result.json())
            .then(data => {
                setAirports(data)
            })
    }, [])

    return (
        <NavigationContainer>
            <AirportContext.Provider value={airports}>
                <Stack.Navigator>
                    <Stack.Screen name="Map" component={AirportsMap} />
                    <Stack.Screen name="Flights" component={FlightLists} />
                    <Stack.Screen name="FlightDetails" component={FlightDetails} />
                </Stack.Navigator>
            </AirportContext.Provider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});
