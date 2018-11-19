import * as React from 'react';
import { Text, View } from "react-native";
import Placeholder from "rn-placeholder";

class CustomView extends React.Component {
  render() {
    return (
      <View>
        <Placeholder.Line />
        <Placeholder.Media />
        <Placeholder.Paragraph />
        <Placeholder.ImageContent />
        <Placeholder.Box />
      </View>
    )
  }
}