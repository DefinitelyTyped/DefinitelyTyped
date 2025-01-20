import * as React from "react";
import Button from "react-native-button";

export default class ExampleComponent extends React.Component {
    _handlePress() {
        console.log("Pressed!");
    }

    render() {
        return (
            <Button
                style={{ fontSize: 20, color: "green" }}
                styleDisabled={{ color: "red" }}
                onPress={() => this._handlePress()}
            >
                Press Me!
            </Button>
        );
    }
}
