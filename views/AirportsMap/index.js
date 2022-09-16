import React, {useContext, useEffect, useMemo, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, Dimensions} from 'react-native';
import {mapAirports} from "./helpers/mapAirports";
import {AirportContext} from "../../context";

export default function AirportsMap({navigation}) {
    const airports = useContext(AirportContext)

    const mappedAirports = useMemo(() => {
        return mapAirports(airports)
    }, [airports])

    return (<MapView style={styles.map}>
        {
            mappedAirports.map(airport => {
                return (
                    <Marker
                        key={airport.id}
                        coordinate={{
                            latitude: airport.lat,
                            longitude: airport.lon }}
                        onPress={() => {
                            navigation.navigate("Flights", {
                                id: airport.id
                            })
                        }}
                    />
                )
            })
        }
    </MapView>);
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 60,
    },
});
