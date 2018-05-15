import * as React from 'react';
import { Text, View } from 'react-native';
import { Navigation, NavigationComponentProps, NavigatorStyle, NavigatorButtons, NavigatorEvent } from 'react-native-navigation';

type Props = NavigationComponentProps & { height: number };

class Screen1 extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event: NavigatorEvent) => {
        if (event.id === 'willAppear') {
            console.log('will appear');
        }
    }

    static navigatorButtons: NavigatorButtons = {
        leftButtons: [{
            id: 'sideMenu'
        }]
    };

    componentDidMount() {
        this.props.navigator.push({ screen: 'example.Screen2', overrideBackPress: false });
        this.props.navigator.setTabBadge({ badge: null });
    }

    render() {
        return (
            <View style={{ height: this.props.height }}>
                <Text>Screen 1</Text>
            </View>
        );
    }
}

class Screen2 extends React.Component<NavigationComponentProps> {
    static navigatorStyle: NavigatorStyle = {
        drawUnderNavBar: true,
        navBarTranslucent: true
    };

    componentDidMount() {
        this.props.navigator.resetTo({ screen: 'example.Screen1' });
    }

    render() {
        return (
            <View>
                <Text>Screen 2</Text>
            </View>
        );
    }
}

const Drawer = (props: NavigationComponentProps) => {
    return (
        <View>
            <Text>Drawer</Text>
        </View>
    );
};

interface TestProviderProps {
    test: string;
}

class TestProvider extends React.Component<TestProviderProps> {
    getChildContext() {
        return {
            test: this.props.test
        };
    }

    render() {
        return this.props.children;
    }
}

Navigation.registerComponent('example.Screen1', () => Screen1, {}, TestProvider, {test: "test"});
Navigation.registerComponent('example.Screen2', () => Screen2);
Navigation.registerComponent('example.Drawer', () => Drawer);

Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'One',
            screen: 'example.FirstTabScreen',
            icon: require('../img/one.png'),
            selectedIcon: require('../img/one_selected.png'),
            iconInsets: {
                top: 6,
                left: 0,
                bottom: -6,
                right: 0
            },
            title: 'Screen One',
            titleImage: {},
            navigatorStyle: {},
            navigatorButtons: {},
        },
        {
            label: 'Two',
            screen: 'example.SecondTabScreen',
            icon: require('../img/two.png'),
            selectedIcon: require('../img/two_selected.png'),
            title: 'Screen Two'
        }
    ],
    tabsStyle: {
        tabBarButtonColor: '#ffff00',
        tabBarSelectedButtonColor: '#ff9900',
        tabBarBackgroundColor: '#551A8B',
        initialTabIndex: 1,
    },
    appStyle: {
        orientation: 'portrait',
        bottomTabBadgeTextColor: 'red',
        bottomTabBadgeBackgroundColor: 'green',
        backButtonImage: {},
        hideBackButtonTitle: true
    },
    drawer: {
        left: {
            screen: 'example.FirstSideMenu',
            passProps: {},
            fixedWidth: 500,
        },
        right: {
            screen: 'example.SecondSideMenu',
            passProps: {},
            fixedWidth: 500,
        },
        style: {
            drawerShadow: true,
            contentOverlayColor: 'rgba(0,0,0,0.25)',
            leftDrawerWidth: 50,
            rightDrawerWidth: 50,
            shouldStretchDrawer: true
        },
        type: 'MMDrawer',
        animationType: 'door',

        disableOpenGesture: false
    },
    passProps: {},
    animationType: 'slide-down'
});

Navigation.startSingleScreenApp({
    screen: {
        screen: 'example.WelcomeScreen',
        title: 'Welcome',
        navigatorStyle: {},
        navigatorButtons: {}
    },
    drawer: {
        left: {
            screen: 'example.FirstSideMenu',
            passProps: {},
            disableOpenGesture: false,
            fixedWidth: 500
        },
        right: {
            screen: 'example.SecondSideMenu',
            passProps: {},
            disableOpenGesture: false,
            fixedWidth: 500
        },
        style: {
            drawerShadow: true,
            contentOverlayColor: 'rgba(0,0,0,0.25)',
            leftDrawerWidth: 50,
            rightDrawerWidth: 50
        },
        type: 'MMDrawer',
        animationType: 'door',

        disableOpenGesture: false
    },
    passProps: {},
    animationType: 'slide-down'
});
