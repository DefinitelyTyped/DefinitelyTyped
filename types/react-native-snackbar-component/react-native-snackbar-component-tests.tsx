import * as React from "react";
import { View } from "react-native";
import SnackbarComponent from "react-native-snackbar-component";

class SnackbarComponentTest extends React.Component {
    render() {
        return (
            <View>
                <SnackbarComponent
                    autoHidingTime={2000}
                    actionText={"OPEN"}
                    textMessage="Hello"
                    visible={true}
                />
            </View>
        );
    }
}
