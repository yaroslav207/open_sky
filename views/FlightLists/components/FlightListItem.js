import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FlightInfo} from "./FlightInfo";
import AirplaneIcon from "../../../assets/icons/airplane.png";
import moment from "moment";

export const FlightListItem = ({item, onPress}) => {

    const calculateTimeFlight = (startDate, endDate) => {
        const startDateMoment = moment(startDate)
        const endDateMoment = moment(endDate)

        const hours = endDateMoment.diff(startDateMoment, "hour");
        startDateMoment.add(hours, "hours")
        const minutes = endDateMoment.diff(startDateMoment, "minutes");

        return  `${hours ? hours + 'h ' : ''}${minutes ? minutes + 'm': ''}`
    }

    return <TouchableOpacity style={styles.itemWrapper} onPress={onPress}>
        <FlightInfo
            airport={item.flight.departureAirport}
            date={item.flight?.startDate}
        />
        <View style={styles.flightInfo}>
            <Image source={AirplaneIcon} style={styles.airplaneImage}/>
            <Text>{calculateTimeFlight(item.flight?.startDate, item.flight?.endDate)}</Text>
        </View>
        <FlightInfo
            airport={item.flight.arrivalAirport}
            date={item.flight?.endDate}
        />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    itemWrapper: {
        height: 120,
        paddingVertical: 20,
        borderBottomColor: '#ffffff',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    dateWrapper: {
        width: 50,
        height: 50
    },
    airplaneImage: {
        width: 24,
        height: 24,
        transform: [{ rotate: '45deg'}],
        marginBottom: 10
    },
    flightInfo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20
    }
});

