import {StyleSheet, Text, View} from "react-native";
import moment from "moment";
import {BASE_FORMAT_DATE, TIME_FORMAT_DATE} from "../../../constants/datePatterns";

export const FlightInfo = ({airport, date}) => {

    const formatDateFlight = (date) => {
        return date ? moment(date).format(BASE_FORMAT_DATE) : null
    }

    const formatTimeFlight = (date) => {
        return date ? moment(date).format(TIME_FORMAT_DATE) : null
    }

    return <View style={styles.flightInfo}>
        <Text style={styles.airportIata}>{airport?.iata || '-'}</Text>
        <Text style={styles.city}>{airport?.city || '-'}</Text>
        <Text style={styles.date}>{formatDateFlight(date)}</Text>
        <Text style={styles.time}>{formatTimeFlight(date)}</Text>
    </View>

}

const styles = StyleSheet.create({
    flightInfo: {
        flex: 1,
        alignItems: "center"
    },
    city: {
        fontWeight: "600"
    },
    airportIata: {
        fontSize: 30
    },
    date: {
        marginTop: 5
    },
    time: {
        fontSize: 22
    }

});

