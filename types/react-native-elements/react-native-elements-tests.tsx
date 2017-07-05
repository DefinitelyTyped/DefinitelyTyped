import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class ButtonTest extends React.Component<any, any> {
  handleButtonPress() {
    console.log('I got pressed');
  }

  render() {
    return (
      <View>
        <Button title='BUTTON' onPress={() => this.handleButtonPress()} />

        <Button
          raised
          icon={{name: 'cached'}}
          title='BUTTON WITH ICON' onPress={() => this.handleButtonPress()} />

        <Button
          large
          iconRight
          icon={{name: 'code'}}
          title='LARGE WITH RIGHT ICON' onPress={() => this.handleButtonPress()} />

        <Button
          large
          icon={{name: 'envira', type: 'font-awesome'}}
          title='LARGE WITH RIGHT ICON' onPress={() => this.handleButtonPress()} />

        <Button
          large
          icon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
          title='OCTICON' onPress={() => this.handleButtonPress()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  someButtonStyle: {
    color: 'pink'
  }
});
