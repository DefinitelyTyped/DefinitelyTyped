import * as React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
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
            textMessage={<Text>{"Hello"}</Text>}
            visible={true}
            bottom={8}
        />
    </View>
);

const WithAnimatedValues = () => {
    const bottom = React.useRef(new Animated.Value(8)).current;
    const left = React.useRef(new Animated.Value(8)).current;
    const right = React.useRef(new Animated.Value(8)).current;
    return (
        <SnackbarComponent
            autoHidingTime={2000}
            actionText={"OPEN"}
            textMessage={"Hello"}
            bottom={bottom}
            left={left}
            right={right}
            visible={true}
        />
    );
};

const WithStyles = () => {
    return (
        <SnackbarComponent
            actionText={"OPEN"}
            textMessage={"Hello"}
            position="top"
            containerStyle={styles.container}
            messageStyle={styles.message}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        flexDirection: "row",
    },
    message: {
        color: "blue",
        fontSize: 40,
    },
});
