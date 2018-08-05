import * as React from "react";
import { View, Text } from "react-native";
import NavigationBar from "react-native-navbar";

class NavigationBarTest extends React.Component {
    render() {
        return (
            <View>
                <NavigationBar tintColor={'red'} leftButton={{
                    title: "Back",
                    handler: () => { console.log("Back"); },
                }}
                    rightButton={<Text>Next</Text>}
                    title={null}
                />
            </View>
        );
    }
}
