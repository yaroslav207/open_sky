import React, { useEffect,  useState } from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import {flightService} from "../../services";

export default function FlightDetails({route}) {
    const [flight, setFlight] = useState(null)

    useEffect(() => {
        flightService.getFlightDetails(route.params.id)
            .then((data) => {
                setFlight(data)
            }).catch(err => console.log(err))
    })

    return (
        <View>
            <MapView style={styles.map}>

            </MapView >
            <View>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: (Dimensions.get('window').height / 2) - 60,
    },
});
