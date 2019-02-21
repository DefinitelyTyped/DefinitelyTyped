import * as React from "react";
import { View } from "react-native";
import PercentageCircle from "react-native-percentage-circle";

class PercentageCircleTest extends React.Component {
    render() {
        return (
            <View>
                <PercentageCircle 
                    borderWidth={5}
                    color="#000"
                    percent={100}
                    radius={10}
                />
            </View>
        );
    }
}