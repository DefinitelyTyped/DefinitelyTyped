// Type definitions for react-native-tab-navigator 0.3
// Project: https://github.com/exponentjs/react-native-tab-navigator#readme
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { ViewStyle, TextStyle } from 'react-native';

export interface TabNavigatorProps {
    children?: React.ReactNode;

    /**
     * Define for rendered scene
     */
    sceneStyle?: ViewStyle | undefined;

    /**
     * Define style for TabBar
     */
    tabBarStyle?: ViewStyle | undefined;

    /**
     * Define shadow style for tabBar
     */
    tabBarShadowStyle?: ViewStyle | undefined;

    /**
     * Disable onPress opacity for Tab
     *
     * @default false
     */
    hidesTabTouch?: boolean | undefined;
}

interface TabNavigatorItemProps {
    /**
     * Allow font scaling for title
     */
    allowFontScaling?: boolean | undefined;

    /**
     * Text for Item badge
     */
    badgeText?: string | number | undefined;

    children?: React.ReactNode;

    /**
     * Return whether the item is selected
     */
    selected?: boolean | undefined;

    /**
     * Styling for selected Item title
     */
    selectedTitleStyle?: TextStyle | undefined;

    /**
     * Styling for tab
     */
    tabStyle?: ViewStyle | undefined;

    /**
     * Item title
     */
    title?: string | undefined;

    /**
     * Styling for Item title
     */
    titleStyle?: TextStyle | undefined;

    /**
     * onPress method for Item
     */
    onPress?(): void;

    /**
     * Returns Item badge
     */
    renderBadge?(): JSX.Element;

    /**
     * Returns Item icon
     */
    renderIcon?(): JSX.Element;

    /**
     * Returns selected Item icon
     */
    renderSelectedIcon?(): JSX.Element;
}

export class TabNavigator extends React.Component<TabNavigatorProps, any> {}

export namespace TabNavigator {
    class Item extends React.Component<TabNavigatorItemProps, any> {}
}

export default TabNavigator;
