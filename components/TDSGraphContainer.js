import { View } from "react-native";

const TDSGraphContainer = ({ children }) => {
    return (
        <View
            style={{
                position: "relative",
                width: 200,
                height: 200,
                borderColor: "#000000",
                backgroundColor: "#888888",
                borderRadius: 5,
            }}
        >
            {children}

            <View style={{
                position: "absolute",
                width: "100%",
                height: "100",
                display: "flex",
                flexDirection: "column",
            }}>
                <View style={{ height: 200 / 3, width: "100%", borderBottomWidth: 1, borderColor: "rgba(0,0,0,0.5)" }}></View>
                <View style={{ height: 200 / 3, width: "100%", borderBottomWidth: 1, borderColor: "rgba(0,0,0,0.5)" }}></View>
                <View style={{ height: 200 / 3, width: "100%" }}></View>
            </View>
            <View style={{
                position: "absolute",
                width: "100%",
                height: 200,
                display: "flex",
                flexDirection: "row",
            }}>
                <View style={{ width: 200 / 3, height: "100%", borderRightWidth: 1, borderColor: "rgba(0,0,0,0.5)" }}></View>
                <View style={{ width: 200 / 3, height: "100%", borderRightWidth: 1, borderColor: "rgba(0,0,0,0.5)" }}></View>
                <View style={{ width: 200 / 3, height: "100%", }}></View>
            </View>
        </View>
    )
}

export default TDSGraphContainer;