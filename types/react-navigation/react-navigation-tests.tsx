import * as React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import {
    createDrawerNavigator,
    createBottomTabNavigator,
    DrawerNavigatorConfig,
    NavigationAction,
    NavigationActions,
    NavigationEvents,
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
    StackViewTransitionConfigs,
    createStackNavigator,
    StackNavigatorConfig,
    createSwitchNavigator,
    SwitchNavigatorConfig,
    TabBarTop,
    createTabNavigator,
    TabNavigatorConfig,
    Transitioner,
    HeaderBackButton,
    Header,
    NavigationContainer,
    NavigationParams,
    NavigationPopAction,
    NavigationPopToTopAction,
    NavigationScreenComponent,
    NavigationContainerComponent,
    withNavigation,
    NavigationInjectedProps,
    withNavigationFocus,
    NavigationFocusInjectedProps
} from 'react-navigation';

// Constants
const viewStyle: ViewStyle = {
    flex: 1,
    margin: 42,
    padding: 0,
    backgroundColor: "white",
};

const ROUTE_NAME_START_SCREEN = "StartScreen";
const ROUTE_KEY_START_SCREEN = "StartScreen-key";

interface StartScreenNavigationParams {
    id: number;
    s: string;
}

/**
 * @desc Simple screen component class with typed component props that should
 *     receive the navigation prop from the AppNavigator.
 */
class StartScreen extends React.Component<NavigationScreenProps<StartScreenNavigationParams>> {
    render() {
        // Implicit type checks.
        const navigationStateParams: StartScreenNavigationParams | undefined = this.props.navigation.state.params;
        const id = this.props.navigation.state.params && this.props.navigation.state.params.id;
        const s = this.props.navigation.state.params && this.props.navigation.state.params.s;

        return (
            <View>
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
        this.props.navigation.navigate(ROUTE_NAME_NEXT_SCREEN, params);
    }
    private readonly navigateDifferentlyToNextScreen = (): void => {
        const params = {
            id: this.props.navigation.state.params && this.props.navigation.state.params.id,
            name: this.props.navigation.state.params && this.props.navigation.state.params.s,
        };
        this.props.navigation.navigate({routeName: ROUTE_NAME_NEXT_SCREEN, params});
    }
}

const ROUTE_NAME_NEXT_SCREEN = "NextScreen";

interface NextScreenNavigationParams {
    id: number;
    name: string;
}

class NextScreen extends React.Component<NavigationScreenProps<NextScreenNavigationParams>> {
    render() {
        // Implicit type checks.
        const navigationStateParams: NextScreenNavigationParams | undefined = this.props.navigation.state.params;
        const id = this.props.navigation.state.params && this.props.navigation.state.params.id;
        const name = this.props.navigation.getParam('name', 'Peter');

        return (
            <View />
        );
    }
}

const navigationOptions = {
    headerBackTitle: null,
};
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
export const AppNavigator = createStackNavigator(
    routeConfigMap,
    {
        initialRouteName: ROUTE_NAME_START_SCREEN,
        initialRouteKey: ROUTE_KEY_START_SCREEN,
        initialRouteParams,
        navigationOptions,
    },
);

interface StatelessScreenParams {
    testID: string;
}

const StatelessScreen: NavigationScreenComponent<StatelessScreenParams> = (props) =>
    <View testID={props.navigation.getParam('testID', 'fallback')}/>;

StatelessScreen.navigationOptions = { title: 'Stateless' };

const SimpleStackNavigator = createStackNavigator(
    {
        simple: {
            screen: StatelessScreen,
        },
    }
);

/**
 * Tab navigator.
 */

const tabNavigatorScreenOptions: NavigationTabScreenOptions = {
    title: 'title',
    tabBarVisible: true,
    tabBarIcon: <View />,
    tabBarLabel: 'label',
    tabBarOnPress: ({scene, jumpToIndex}) => {}
};

const tabNavigatorConfig: TabNavigatorConfig = {
    lazy: true,
    tabBarComponent: TabBarTop,
    tabBarOptions: { activeBackgroundColor: "blue" },
    navigationOptions: () => ({
        tabBarOnPress: ({ scene, jumpToIndex }) => jumpToIndex(scene.index)
    })
};

const tabNavigatorConfigWithInitialLayout: TabNavigatorConfig = {
  ...tabNavigatorConfig,
  initialLayout: { height: 0, width: 100 },
};

const tabNavigatorConfigWithNavigationOptions: TabNavigatorConfig = {
    ...tabNavigatorConfig,
    navigationOptions: {
        tabBarOnPress: ({scene, jumpToIndex}) => {
            jumpToIndex(scene.index);
        },
        headerStyle: {
            backgroundColor: 'red',
        },
    },
};

const BasicTabNavigator = createTabNavigator(
    routeConfigMap,
    tabNavigatorConfig,
);

function renderBasicTabNavigator(): JSX.Element {
    return (
        <BasicTabNavigator
            ref={(ref: any) => { }}
            style={[viewStyle, undefined]} // Test that we are using StyleProp
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

const BasicStackNavigator = createStackNavigator(
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

const stackNavigatorConfigWithNavigationOptionsAsFunction: StackNavigatorConfig = {
    mode: "card",
    headerMode: "screen",
    navigationOptions: ({navigationOptions, navigation, screenProps}) => (stackNavigatorScreenOptions),
};

const AdvancedStackNavigator = createStackNavigator(
    routeConfigMap,
    stackNavigatorConfigWithNavigationOptionsAsFunction
);

function renderAdvancedStackNavigator(): JSX.Element {
    return (
        <AdvancedStackNavigator
            ref={(ref: any) => { }}
            style={viewStyle}
        />
    );
}

/**
 * Switch navigator.
 */

const switchNavigatorConfig: SwitchNavigatorConfig = {
    initialRouteName: 'screen',
    resetOnBlur: false,
    backBehavior: 'none'
};

const BasicSwitchNavigator = createSwitchNavigator(
    routeConfigMap,
    switchNavigatorConfig,
);

function renderBasicSwitchNavigator(): JSX.Element {
    return (
        <BasicSwitchNavigator
            ref={(ref: any) => { }}
            style={viewStyle}
        />
    );
}

const switchNavigatorConfigWithInitialRoute: SwitchNavigatorConfig = {
    initialRouteName: 'screen',
    resetOnBlur: false,
    backBehavior: 'initialRoute'
};

const SwitchNavigatorWithInitialRoute = createSwitchNavigator(
    routeConfigMap,
    switchNavigatorConfigWithInitialRoute,
);

function renderSwitchNavigatorWithInitialRoute(): JSX.Element {
    return (
        <SwitchNavigatorWithInitialRoute
            ref={(ref: any) => { }}
            style={viewStyle}
        />
    );
}

/**
 * Drawer navigator.
 */

const drawerNavigatorScreenOptions: NavigationTabScreenOptions = {
    title: 'title',
};

const drawerNavigatorConfig: DrawerNavigatorConfig = {
    drawerBackgroundColor: '#777777',
    contentOptions: {
        activeTintColor: '#7A9B49',
        inactiveTintColor: '#FFFFFF',
    },
};

const BasicDrawerNavigator = createDrawerNavigator(
    routeConfigMap,
    stackNavigatorConfig,
);

function renderBasicDrawerNavigator(): JSX.Element {
    return (
        <BasicDrawerNavigator
            ref={(ref: any) => { }}
            style={viewStyle}
        />
    );
}

interface ParamsOnStateProps {
    navigation: NavigationScreenProp<{}, { foobar: string }>;
}

class ParamsOnState extends React.Component<ParamsOnStateProps> {
    render() {
        if (this.props.navigation.state.params) {
            // $ExpectType string
            this.props.navigation.state.params.foobar;
        } else {
            // $ExpectType undefined
            this.props.navigation.state.params;
        }

        return <View />;
    }
}

interface CustomTransitionerProps {
    navigation: NavigationScreenProp<any, any>;
}
/**
 * @desc Custom transitioner component. Follows react-navigation/src/views/CardStackTransitioner.js.
 */
class CustomTransitioner extends React.Component<CustomTransitionerProps, null> {
    render() {
        return (
            <Transitioner
                configureTransition={this._configureTransition}
                navigation={this.props.navigation}
                render={this._render}
                onTransitionStart={(curr, prev) => {
                    if (prev) {
                        prev.position.setValue(curr.navigation.state.index);
                    }
                }}
                onTransitionEnd={(curr, prev) => {
                    if (prev) {
                        prev.position.setValue(curr.navigation.state.index);
                    }
                }}
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
        return {};
    }
}

/**
 * Header
 */
const height = Header.HEIGHT;

function renderHeaderBackButton(schema: string): JSX.Element {
    switch (schema) {
        case 'compact':
            return (
                <HeaderBackButton />
            );

        default:
            return (
                <HeaderBackButton
                    onPress={() => 'noop'}
                    pressColorAndroid="#ccc"
                    title="Press Me"
                    titleStyle={{ color: '#333' }}
                    tintColor="#2196f3"
                    truncatedTitle="Press"
                    width={85}
                />
            );
    }
}

const initAction: NavigationInitAction = NavigationActions.init({
    params: {
        foo: "bar"
    }
});

const navigateAction: NavigationNavigateAction = NavigationActions.navigate({
    routeName: "FooScreen",
    params: {
        foo: "bar"
    },
    action: NavigationActions.navigate({ routeName: "BarScreen" })
});

const backAction: NavigationBackAction = NavigationActions.back({
    key: "foo"
});

const setParamsAction: NavigationSetParamsAction = NavigationActions.setParams({
    key: "foo",
    params: {
        foo: "bar"
    }
});

class Page1 extends React.Component { }

const RootNavigator: NavigationContainer = createSwitchNavigator({
    default: { getScreen: () => Page1 },
});

class Page2 extends React.Component {
    navigatorRef: NavigationContainerComponent | null;

    componentDidMount() {
        if (this.navigatorRef) {
            this.navigatorRef.dispatch(NavigationActions.navigate({ routeName: 'default' }));
        }
    }

    render() {
        return <RootNavigator ref={(instance: NavigationContainerComponent | null): void => { this.navigatorRef = instance; }} />;
    }
}

const BottomStack = createBottomTabNavigator({
    Posts: {
        screen: Page2,
        navigationOptions: ({ navigation }: NavigationScreenProps) => {
            let tabBarVisible = true;

            if (navigation.state.index > 0) {
                tabBarVisible = false;
            }

            return {
                tabBarVisible
            };
        }
    }
}, {
    navigationOptions: () => ({
        tabBarOnPress: ({ defaultHandler }) => defaultHandler()
    })
});

const CustomHeaderStack = createStackNavigator({
    Page1: { screen: Page1 },
    Page2: { screen: Page2 }
},
{
    navigationOptions: {
        header: headerProps => {
            const { scene } = headerProps;
            const { options } = scene.descriptor;
            const { title, headerStyle, headerTitleStyle } = options;
            return (
                <View style={headerStyle}>
                    <Text style={headerTitleStyle}>{title}</Text>
                </View>
            );
        }
    }
});

interface ScreenProps {
    name: string;
    optionalAge?: number;
    onPlay(): void;
}

class SetParamsTest extends React.Component<NavigationScreenProps<ScreenProps>> {
    componentDidMount() {
        this.props.navigation.setParams({
            onPlay: this.onPlay
        });
    }

    onPlay = () => {
        //
    }

    render() {
        const name = this.props.navigation.getParam('name');
        const age = this.props.navigation.getParam('optionalAge');

        // $ExpectType number | undefined
        this.props.navigation.getParam('optionalAge');

        // $ExpectType number
        this.props.navigation.getParam('optionalAge', 0);

        return (
            <Text>My name is {name} and I am {age} years old.</Text>
        );
    }
}

// Test withNavigation

interface BackButtonProps { title: string; }
class MyBackButton extends React.Component<BackButtonProps & NavigationInjectedProps> {
    triggerBack() {
        console.log("Not implemented, すみません");
    }
    render() {
      return <button title={this.props.title} onClick={() => { this.props.navigation.goBack(); }} />;
    }
}

// withNavigation returns a component that wraps MyBackButton and passes in the navigation prop.
// If you have class methods, you should have a way to use them.
const BackButtonWithNavigation = withNavigation(MyBackButton);
const BackButtonInstance = <BackButtonWithNavigation
    title="Back" onRef={ref => {
        // ref is inferred as MyBackButton | null
        if (!ref) return;
        ref.triggerBack();
    }}
/>;

function StatelessBackButton(props: BackButtonProps & NavigationInjectedProps) {
  return <MyBackButton {...props} />;
}

// Wrapped stateless components don't accept an onRef
const StatelessBackButtonWithNavigation = withNavigation(StatelessBackButton);
const StatelessBackButtonInstance = <StatelessBackButtonWithNavigation title="Back" />;

// The old way of passing in the props should still work
const BackButtonWithNavigationWithExplicitProps = withNavigation<BackButtonProps>(MyBackButton);
const BackButtonWithExplicitPropsInstance = <BackButtonWithNavigationWithExplicitProps
    title="Back" onRef={ref => {
        if (!ref) return;
        // We can't infer the component type if we pass in the props
        (ref as MyBackButton).triggerBack();
    }}
/>;

// Test withNavigationFocus

interface MyFocusedComponentProps { expectsFocus: boolean; }
class MyFocusedComponent extends React.Component<MyFocusedComponentProps & NavigationFocusInjectedProps> {
    render() {
      return <button title={`${this.props.expectsFocus} vs ${this.props.isFocused}`} onClick={() => { this.props.navigation.goBack(); }} />;
    }
}

// withNavigationFocus returns a component that wraps MyFocusedComponent and passes in the
// navigation and isFocused prop
const MyFocusedComponentWithNavigationFocus = withNavigationFocus(MyFocusedComponent);
const MyFocusedComponentInstance = <MyFocusedComponentWithNavigationFocus
    expectsFocus={true} onRef={ref => { const backButtonRef = ref; }}
/>;

// Test Screen with params

interface MyScreenParams { title: string; }
class MyScreen extends React.Component<NavigationInjectedProps<MyScreenParams>> {
    render() {
        const title = this.props.navigation.getParam('title');
        return <button title={title} onClick={() => { this.props.navigation.goBack(); }} />;
    }
}

// Test createStackNavigator

createStackNavigator(
    routeConfigMap,
    {transitionConfig: () => ({screenInterpolator: StackViewTransitionConfigs.SlideFromRightIOS.screenInterpolator})}
);

// Test NavigationEvents component

const ViewWithNavigationEvents = (
  <NavigationEvents
    onWillFocus={console.log}
    onDidFocus={console.log}
    onWillBlur={console.log}
    onDidBlur={console.log}
  />
);
