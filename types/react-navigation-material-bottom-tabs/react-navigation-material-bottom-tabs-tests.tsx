import * as React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const Tab1 = () => <View />;
const Tab2 = () => <View />;

export default createMaterialBottomTabNavigator(
    {
        tab1: {
            screen: Tab1
        },
        tab2: {
            screen: Tab2
        }
    },
    {
        activeTintColor: 'blue',
        inactiveTintColor: 'red',
        labeled: false,
        barStyle: {
            backgroundColor: '#fff'
        },
        shifting: false,
        initialRouteName: 'tab2',
        order: ['tab2', 'tab1'],
        backBehavior: 'none'
    }
);
