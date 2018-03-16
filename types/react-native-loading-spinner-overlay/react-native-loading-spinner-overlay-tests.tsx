import * as React from "react";
import Spinner from "react-native-loading-spinner-overlay";

() => {
    <Spinner />;
};

() => {
    <Spinner
        cancelable={false}
        color="red"
        animation="slide"
        overlayColor="black"
        size="small"
        textContent="text"
        textStyle={{ fontSize: 14 }}
        visible={true}
    />;
};
