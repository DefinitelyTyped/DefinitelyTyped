import * as React from "react";
import { Text, View } from "react-native";
import SnackbarComponent from "react-native-snackbar-component";

const SnackbarComponentTest = () => (
    <View>
        <SnackbarComponent
            autoHidingTime={2000}
            actionText={"OPEN"}
            textMessage="Hello"
            visible={true}
        />
    </View>
    );

const WithRendererTextMessage = () => (
    <View>
        <SnackbarComponent
            autoHidingTime={2000}
            actionText={"OPEN"}
            textMessage={<Text>{'Hello'}</Text>}
            visible={true}
        />
    </View>
    );
