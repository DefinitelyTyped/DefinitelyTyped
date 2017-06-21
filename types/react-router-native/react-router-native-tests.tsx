import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter as Router, Route, Link} from 'react-router-native';

const Home: React.SFC<{}> = () => {
  return (
    <View>
      <Text style={styles.welcome}>
        Welcome to React Native!
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
    </View>
 );
};

const About: React.SFC<{}> = () => {
  return (
    <Text style={styles.header}>
      About
    </Text>
 );
};

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link to="/" style={styles.navItem}>
              <Text>Home</Text>
            </Link>
            <Link to="/about" style={styles.navItem}>
                <Text>About</Text>
            </Link>
          </View>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
