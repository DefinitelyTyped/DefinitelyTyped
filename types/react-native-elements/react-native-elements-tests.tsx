import * as React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Button, Text, Badge } from 'react-native-elements';

class TextTest extends React.Component<any, any> {
  render() {
    return (
      <View>
        <Text h1>Heading 1</Text>
        <Text h2>Heading 2</Text>
        <Text h3>Heading 3</Text>
        <Text h4>Heading 4</Text>
      </View>
    );
  }
}

class BadgeTest extends React.Component<any, any> {
  render() {
    return (
      <View>
        <Badge
          value={3}
          textStyle={{ color: 'orange' }}
        />

        <Badge containerStyle={{ backgroundColor: 'violet'}}>
          <Text>User 1</Text>
        </Badge>

        <Badge onPress={() => console.log('pressed')} value="5" />

        <Badge component={TouchableNativeFeedback} value={10} />
      </View>
    );
  }
}

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
