import * as React from 'react';
import { View } from 'react-native';
import {
    addNavigationHelpers,
    NavigationScreenProps,
    NavigationStackAction,
    NavigationTabScreenOptions,
    StackNavigator,
    TabNavigatorConfig,
    TabBarTop,
    TabBarBottom,
} from 'react-navigation';

/**
 * @class StartScreen @extends React.Component
 * @desc Simple screen component class with typed component props that should
 *     receive the navigation prop from the AppNavigator.
 */
interface StartScreenComponentProps {
    id: number,
    s: string,
}
interface StartScreenProps extends NavigationScreenProps<StartScreenComponentProps> { }
class StartScreen extends React.Component<StartScreenProps, {}> {
    render() {
        // Implicit type checks.
        const navigationStateParams: StartScreenComponentProps = this.props.navigation.state.params;
        const id = this.props.navigation.state.params.id;
        const s = this.props.navigation.state.params.s;

        return (
            <View />
        );
    }
}

export const AppNavigator = StackNavigator({
    StartImage: {
        path: 'startImage',
        screen: StartScreen,
    },
}, {
    initialRouteName: 'StartImage',
});

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
