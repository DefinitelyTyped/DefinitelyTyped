import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationScreenProps, NavigationRouteConfigMap } from 'react-navigation';
import { Transition, FluidNavigator } from 'react-navigation-fluid-transitions';

interface StartScreenNavigationParams {
  id: number;
  s: string;
}

interface NextScreenNavigationParams {
  id: number;
  name: string;
}

const ROUTES = {
  ROUTE_NAME_START_SCREEN: 'ROUTE_NAME_START_SCREEN',
  ROUTE_NAME_NEXT_SCREEN: 'ROUTE_NAME_NEXT_SCREEN',
};

const ROUTE_KEY_START_SCREEN = 'ROUTE_KEY_START_SCREEN';

const navigationOptions = {
  headerBackTitle: null,
};

const initialRouteParams: StartScreenNavigationParams = {
  id: 1,
  s: "Start",
};

class NextScreen extends React.Component<NavigationScreenProps<NextScreenNavigationParams>> {
  render() {
      // Implicit type checks.
      const navigationStateParams: NextScreenNavigationParams | undefined = this.props.navigation.state.params;
      const id = this.props.navigation.state.params && this.props.navigation.state.params.id;
      const name = this.props.navigation.getParam('name', 'Peter');

      return (
          <View>
            <Transition appear="bottom" disappear="bottom" />
            <Transition appear="top" disappear="top" delay />
            <Transition appear="left" disappear="left" />
            <Transition appear="right" disappear="right" />
            <Transition appear="flip" disappear="flip" />
            <Transition appear="scale" disappear="scale" />
            <Transition appear="vertical" disappear="vertical" />
            <Transition shared="shared">
              <View style={styles.layer2} />
            </Transition>
          </View>
      );
  }
}

class StartScreen extends React.Component<NavigationScreenProps<StartScreenNavigationParams>> {
  render() {
      // Implicit type checks.
      const navigationStateParams: StartScreenNavigationParams | undefined = this.props.navigation.state.params;
      const id = this.props.navigation.state.params && this.props.navigation.state.params.id;
      const s = this.props.navigation.state.params && this.props.navigation.state.params.s;

      return (
          <View>
              <Transition shared="shared">
                <View style={styles.layer1} />
              </Transition>
              <TouchableOpacity onPress={this.navigateToNextScreen} />
              <TouchableOpacity onPress={this.navigateDifferentlyToNextScreen} />
          </View>
      );
  }
  private readonly navigateToNextScreen = (): void => {
      const params = {
          id: this.props.navigation.state.params && this.props.navigation.state.params.id,
          name: this.props.navigation.state.params && this.props.navigation.state.params.s,
      };
      this.props.navigation.navigate(ROUTES.ROUTE_NAME_NEXT_SCREEN, params);
  }
  private readonly navigateDifferentlyToNextScreen = (): void => {
      const params = {
          id: this.props.navigation.state.params && this.props.navigation.state.params.id,
          name: this.props.navigation.state.params && this.props.navigation.state.params.s,
      };
      this.props.navigation.navigate({routeName: ROUTES.ROUTE_NAME_NEXT_SCREEN, params});
  }
}

const routeConfigMap: NavigationRouteConfigMap = {
  [ROUTES.ROUTE_NAME_START_SCREEN]: {
      path: "start",
      screen: StartScreen,
  },
  [ROUTES.ROUTE_NAME_NEXT_SCREEN]: {
      path: "next",
      screen: NextScreen,
  },
};

export const AppNavigator = FluidNavigator(
  routeConfigMap,
  {
    initialRouteName: ROUTES.ROUTE_NAME_START_SCREEN,
    initialRouteKey: ROUTE_KEY_START_SCREEN,
    initialRouteParams,
    navigationOptions
  }
);

const styles = StyleSheet.create({
  layer1: {
    width: 10,
    height: 10,
    borderRadius: 5
  },
  layer2: {
    width: 10,
    height: 10,
  }
});
