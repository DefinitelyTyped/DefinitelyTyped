import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

// Component
import FlipCard from "react-native-flip-card";

export default class FlipCardTest extends React.Component {
  render() {
    return (
      <FlipCard
        style={{ backgroundColor: "#fff" }}
        flip={false}
        friction={10}
        perspective={10}
        flipHorizontal={true}
        flipVertical={false}
        clickable={true}
        onFlipStart={() => {}}
        onFlipEnd={() => {}}
        alignHeight={false}
        alignWidth={false}
        useNativeDriver={true}
      >
        <View>
          <Text>Front</Text>
        </View>
        <View>
          <Text>Back</Text>
        </View>
      </FlipCard>
    );
  }
}
