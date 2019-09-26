// Type definitions for react-native-navbar 2.1
// Project: https://github.com/react-native-community/react-native-navbar
// Definitions by: Ryo Kikuchi <https://github.com/ryokik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { ViewStyle, TextProps } from 'react-native';

export interface NavigationBarButton {
    title: string;
    style?: ViewStyle;
    handler?: () => void;
    disable?: boolean;
}

export interface NavigationBarTitle {
    title: string;
    tintColor?: string;
    ellipsizeMode?: TextProps["ellipsizeMode"];
    numberOfLines?: number;
}

export interface StatusBar {
    style?: 'light-content' | 'default';
    hidden?: boolean;
    tintColor?: string;
    hideAnimation?: 'fade' | 'slide' | 'none';
    showAnimation?: 'fade' | 'slide' | 'none';
}

export interface NavigationBarProps {
    style?: ViewStyle;
    tintColor?: string;
    statusBar?: StatusBar;
    leftButton?: NavigationBarButton | React.ReactElement | null;
    rightButton?: NavigationBarButton | React.ReactElement | null;
    title?: NavigationBarTitle | React.ReactElement | null;
}

export default class NavigationBar extends React.Component<NavigationBarProps> {}
