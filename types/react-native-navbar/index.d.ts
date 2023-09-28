// Type definitions for react-native-navbar 2.1
// Project: https://github.com/react-native-community/react-native-navbar
// Definitions by: Ryo Kikuchi <https://github.com/ryokik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { TextProps, ViewStyle } from "react-native";

export interface NavigationBarButton {
    title: string;
    style?: ViewStyle | undefined;
    handler?: (() => void) | undefined;
    disable?: boolean | undefined;
}

export interface NavigationBarTitle {
    title: string;
    tintColor?: string | undefined;
    ellipsizeMode?: TextProps["ellipsizeMode"] | undefined;
    numberOfLines?: number | undefined;
}

export interface StatusBar {
    style?: "light-content" | "default" | undefined;
    hidden?: boolean | undefined;
    tintColor?: string | undefined;
    hideAnimation?: "fade" | "slide" | "none" | undefined;
    showAnimation?: "fade" | "slide" | "none" | undefined;
}

export interface NavigationBarProps {
    style?: ViewStyle | undefined;
    tintColor?: string | undefined;
    statusBar?: StatusBar | undefined;
    leftButton?: NavigationBarButton | React.ReactElement | null | undefined;
    rightButton?: NavigationBarButton | React.ReactElement | null | undefined;
    title?: NavigationBarTitle | React.ReactElement | null | undefined;
}

export default class NavigationBar extends React.Component<NavigationBarProps> {}
