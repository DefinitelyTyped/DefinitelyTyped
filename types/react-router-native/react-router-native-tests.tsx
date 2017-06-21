import * as React from 'react';
import {View} from 'react-native';
import {NativeRouter as Router} from 'react-router-native';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <View>
          Welcome!
        </View>
      </Router>
    );
  }
}
