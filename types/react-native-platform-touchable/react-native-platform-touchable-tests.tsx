import * as React from "react";
import { Text, View } from "react-native";
import Touchable from "react-native-platform-touchable";

class PlatformTouchableExample extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Touchable
          onPress={() => {}}
          style={{ backgroundColor: "#eee", padding: 30 }}
          foreground={Touchable.Ripple("pink", false)}
        >
          <Text>Hello there!</Text>
        </Touchable>
        <Touchable
          onPress={() => {}}
          style={{ backgroundColor: "#eee", padding: 30 }}
          background={Touchable.Ripple("pink", false)}
        >
          <Text>Hello there!</Text>
        </Touchable>
      </View>
    );
  }
}
