import * as React from 'react';
import { View } from 'react-native';
import {
    addNavigationHelpers,
    NavigationStackAction,
    NavigationTabScreenOptions,
    StackNavigator,
    TabNavigatorConfig,
    TabBarTop,
    TabBarBottom,
} from 'react-navigation';

const Start = (
    <View />
);

export const AppNavigator = StackNavigator({
    StartImage: {
        path: 'startImage',
        screen: Start,
    },
}, {
    initialRouteName: 'StartImage',
});

const Router = (props: any) => (
  <AppNavigator
    navigation={
      addNavigationHelpers({
            dispatch: (action: NavigationStackAction): boolean => { return true; },
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
