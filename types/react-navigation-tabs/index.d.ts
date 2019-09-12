// Type definitions for react-navigation-tabs 2.5
// Project: https://github.com/react-navigation/tabs#readme
// Definitions by: Haseeb Majid <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { NavigationContainer, NavigationRouteConfigMap, TabNavigatorConfig } from 'react-navigation';

export function createMaterialTopTabNavigator(
    routeConfigMap: NavigationRouteConfigMap,
    drawConfig?: TabNavigatorConfig,
): NavigationContainer;
