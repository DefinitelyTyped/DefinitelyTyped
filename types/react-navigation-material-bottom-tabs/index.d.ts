// Type definitions for react-navigation-material-bottom-tabs 0.3
// Project: https://github.com/react-navigation/react-navigation-material-bottom-tab-navigator#readme
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import {
    NavigationContainer,
    NavigationPathsConfig,
    NavigationRouteConfigMap
} from 'react-navigation';

export interface TabConfig {
    shifting?: boolean;
    labeled?: boolean;
    activeTintColor?: string;
    inactiveTintColor?: string;
    barStyle?: StyleProp<ViewStyle>;
    initialRouteName?: string;
    order?: string[];
    paths?: NavigationPathsConfig;
    backBehavior?: 'initialRoute' | 'none';
}

export function createMaterialBottomTabNavigator(
    routeConfigMap: NavigationRouteConfigMap,
    config?: TabConfig
): NavigationContainer;
