import * as React from 'react';
import {
    TouchableOpacity,
    View,
} from 'react-native';
import {
    addNavigationHelpers,
    NavigationScreenProp,
    NavigationScreenProps,
    NavigationStackAction,
    NavigationTabScreenOptions,
    StackNavigator,
    TabNavigatorConfig,
    TabBarTop,
    Transitioner,
    NavigationProp,
    NavigationAction,
    NavigationTransitionProps,
} from 'react-navigation';

/**
 * @class StartScreen @extends React.Component
 * @desc Simple screen component class with typed component props that should
 *     receive the navigation prop from the AppNavigator.
 */
interface StartScreenNavigationParams {
    id: number,
    s: string,
}
interface StartScreenProps extends NavigationScreenProps<StartScreenNavigationParams> { }
class StartScreen extends React.Component<StartScreenProps, {}> {
    render() {
        // Implicit type checks.
        const navigationStateParams: StartScreenNavigationParams = this.props.navigation.state.params;
        const id = this.props.navigation.state.params.id;
        const s = this.props.navigation.state.params.s;

        return (
            <View>
                <TouchableOpacity onPress={this.navigateToNextScreen} />
            </View>
        );
    }
    private navigateToNextScreen = (): void => {
        this.props.navigation.navigate(
            ROUTE_NAME_NEXT_SCREEN,
            {
                id: this.props.navigation.state.params.id,
                name: this.props.navigation.state.params.s,
            } as NextScreenNavigationParams,
        );

    }
}

/**
 * @class NextScreen @extends React.Component
 */
const ROUTE_NAME_NEXT_SCREEN = "NextScreen";
interface NextScreenNavigationParams {
    id: number,
    name: string,
}
interface NextScreenProps extends NavigationScreenProps<NextScreenNavigationParams> { }
class NextScreen extends React.Component<NextScreenProps, {}> {
    render() {
        // Implicit type checks.
        const navigationStateParams: NextScreenNavigationParams = this.props.navigation.state.params;
        const id = this.props.navigation.state.params.id;
        const name = this.props.navigation.state.params.name;

        return (
            <View />
        );
    }
}

const initialRouteParams: StartScreenNavigationParams = {
    id: 1,
    s: "Start",
};
export const AppNavigator = StackNavigator({
    StartImage: {
        path: 'startImage',
        screen: StartScreen,
    },
}, {
    initialRouteName: 'StartImage',
    initialRouteParams,
});

/**
 * Router.
 */
const Router = (props: any) => (
  <AppNavigator
    navigation={
      addNavigationHelpers({
            dispatch: (action: NavigationStackAction): boolean => true,
            state: {},
        })
      }
    />
);

/**
 * Tab navigator.
 */

const tabNavigatorScreenOptions: NavigationTabScreenOptions = {
    title: 'title',
    tabBarVisible: true,
    tabBarIcon: <View />,
    tabBarLabel: 'label',
}

const tabNavigatorConfig: TabNavigatorConfig = {
    lazy: true,
    tabBarComponent: TabBarTop,
}


/**
 * @class CustomTransitioner @extends React.Component
 * @desc Custom transitioner component. Follows react-navigation/src/views/CardStackTransitioner.js.
 */
interface CustomTransitionerProps {
    navigation: NavigationScreenProp<any, NavigationAction>
}
class CustomTransitioner extends React.Component<CustomTransitionerProps, null> {
    render() {
        return (
            <Transitioner
                configureTransition={this._configureTransition}
                navigation={this.props.navigation}
                render={this._render}
                onTransitionStart={() => { }}
                onTransitionEnd={() => { }}
            />
        );
    }
    _render = (props: NavigationTransitionProps, prevProps: NavigationTransitionProps): React.ReactElement<any> => {
        return (
            <View />
        );
    }
    _configureTransition = (
        _transitionProps: NavigationTransitionProps,
        _prevTransitionProps: NavigationTransitionProps
    ) => {
        return {}
    }
}

const BasicStackNavigation = StackNavigator({
    StartScreen: { screen: Start }
});

<BasicStackNavigation style={{ marginTop: 52 }} />
