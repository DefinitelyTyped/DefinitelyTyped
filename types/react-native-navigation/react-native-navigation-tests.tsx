import * as React from 'react';
import { Text, View } from 'react-native';
import { Navigation, NavigationComponentProps, NavigatorStyle, NavigatorButtons } from 'react-native-navigation';

class Screen1 extends React.Component<NavigationComponentProps<{ height: number }>> {
    static navigatorButtons: NavigatorButtons = {
        leftButtons: [{
            id: 'sideMenu'
        }]
    };

    componentDidMount() {
        this.props.navigator.push({ screen: 'example.Screen2' });
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

Navigation.registerComponent('example.Screen1', () => Screen1);
Navigation.registerComponent('example.Screen2', () => Screen2);
Navigation.registerComponent('example.Drawer', () => Drawer);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'example.Screen1',
        title: 'Screen 1',
    },
    drawer: {
        left: {
            screen: 'example.Drawer',
        }
    }
});
