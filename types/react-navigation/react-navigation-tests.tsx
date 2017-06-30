import * as React from 'react';
import {
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import {
    NavigationAction,
    NavigationActions,
    NavigationBackAction,
    NavigationInitAction,
    NavigationNavigateAction,
    NavigationProp,
    NavigationResetAction,
    NavigationRouteConfigMap,
    NavigationScreenProp,
    NavigationScreenProps,
    NavigationSetParamsAction,
    NavigationStackAction,
    NavigationStackScreenOptions,
    NavigationTabScreenOptions,
    NavigationTransitionProps,
    StackNavigator,
    StackNavigatorConfig,
    TabBarTop,
    TabNavigator,
    TabNavigatorConfig,
    Transitioner,
    addNavigationHelpers,
} from 'react-navigation';

// Constants
const viewStyle: ViewStyle = {
    flex: 1,
    margin: 42,
    padding: 0,
    backgroundColor: "white",
};


/**
 * @class StartScreen @extends React.Component
 * @desc Simple screen component class with typed component props that should
 *     receive the navigation prop from the AppNavigator.
 */
const ROUTE_NAME_START_SCREEN = "StartScreen";
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
const routeConfigMap: NavigationRouteConfigMap = {
    [ROUTE_NAME_START_SCREEN]: {
        path: "start",
        screen: StartScreen,
    },
    [ROUTE_NAME_NEXT_SCREEN]: {
        path: "next",
        screen: NextScreen,
    },
};
export const AppNavigator = StackNavigator(
    routeConfigMap,
    {
        initialRouteName: ROUTE_NAME_START_SCREEN,
        initialRouteParams,
    },
);

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
};

const tabNavigatorConfig: TabNavigatorConfig = {
    lazy: true,
    tabBarComponent: TabBarTop,
    tabBarOptions: tabNavigatorScreenOptions,
};

const BasicTabNavigator = TabNavigator(
    routeConfigMap,
    tabNavigatorConfig,
);

function renderBasicTabNavigator(): JSX.Element {
    return (
        <BasicTabNavigator
            ref={(ref: any) => { }}
            style={viewStyle}
        />
    );
}


/**
 * Stack navigator.
 */

const stackNavigatorScreenOptions: NavigationStackScreenOptions = {
    title: 'title',
};

const stackNavigatorConfig: StackNavigatorConfig = {
    mode: "card",
    headerMode: "screen",
    navigationOptions: stackNavigatorScreenOptions,
};

const BasicStackNavigator = StackNavigator(
    routeConfigMap,
    stackNavigatorConfig,
);

function renderBasicStackNavigator(): JSX.Element {
    return (
        <BasicStackNavigator
            ref={(ref: any) => { }}
            style={viewStyle}
        />
    );
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

const initAction: NavigationInitAction = NavigationActions.init({
    params: {
        foo: "bar"
    }
})

const navigateAction: NavigationNavigateAction = NavigationActions.navigate({
    routeName: "FooScreen",
    params: {
        foo: "bar"
    },
    action: NavigationActions.navigate({ routeName: "BarScreen" })
})

const resetAction: NavigationResetAction = NavigationActions.reset({
    index: 0,
    key: "foo",
    actions: [
        NavigationActions.navigate({ routeName: "FooScreen" })
    ]
})

const backAction: NavigationBackAction = NavigationActions.back({
    key: "foo"
})

const setParamsAction: NavigationSetParamsAction = NavigationActions.setParams({
    key: "foo",
    params: {
        foo: "bar"
    }
})
