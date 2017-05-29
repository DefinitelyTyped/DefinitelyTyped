import * as React from 'react';
import { View } from 'react-native';
import {
    addNavigationHelpers,
    StackNavigator,
    TabNavigatorScreenOptions
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
            dispatch: {},
            state: {},
        })
      }
    />
);

const tabNavigatorScreenOptions: TabNavigatorScreenOptions = {
    title: 'title',
    tabBarVisible: true,
    tabBarIcon: <View />,
    tabBarLabel: 'label'
}
