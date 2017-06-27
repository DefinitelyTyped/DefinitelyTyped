import * as React from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

class Example extends React.Component<{}, {}> {
  handleButton() {
    console.log('You pressed me');
  }

  render() {
    return (
      <View>
        {/* Normal Icon */}
        <MaterialIcon size={30} color="red" name="exit" />

        {/* Icon button  */}
        <FontAwesomeIcon.Button
          backgroundColor="#3b5998"
          name="facebook"
          onPress={() => this.handleButton()}
        >
          <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
            Login with Facebook
          </Text>
        </FontAwesomeIcon.Button>
      </View>
    );
  }
}
