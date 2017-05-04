import * as React from 'react';
import { View } from 'react-native';
import {
    addNavigationHelpers,
    StackNavigator,
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
