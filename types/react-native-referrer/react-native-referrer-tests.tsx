import * as React from "react";
import { Platform } from "react-native";
import ReactNativeReferrer from "react-native-referrer";

if (Platform.OS === 'android') {
    ReactNativeReferrer.getReferrer().then(referrerString => {
        console.log(referrerString);
    });
}
