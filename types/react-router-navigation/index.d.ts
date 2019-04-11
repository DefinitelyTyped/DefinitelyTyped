// Type definitions for react-router-navigation 1.0
// Project: https://github.com/LeoLeBras/react-router-navigation#readme
// Definitions by: Kalle Ott <https://github.com/kaoDev>
//                 John Reilly <https://github.com/johnnyreilly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactNode, ReactElement, ComponentClass } from "react";
import { StyleProp, ViewProps, ViewStyle, TextStyle } from "react-native";
import { RouteProps } from "react-router-navigation-core";
import {
    NavigationTransitionProps,
    NavigationTransitionSpec
} from "react-navigation";

/**
 * Navigation
 */

export type CardProps = RouteProps & NavBarProps;

// TODO specify exact type when lib changes
export type CardSubViewProps = any;
//  NavigationSceneRendererProps &
//   CardsRendererProps &
//   CardProps

export interface NavBarProps {
    // General
    hideNavBar?: boolean;
    renderNavBar?: (props: CardSubViewProps) => ReactNode;
    navBarStyle?: StyleProp<ViewStyle>;
    // Left button
    hideBackButton?: boolean;
    backButtonTintColor?: string;
    backButtonTitle?: string;
    renderLeftButton?: (props: CardSubViewProps) => ReactNode;
    // Title
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    renderTitle?: (props: CardSubViewProps) => ReactNode;
    // Right button
    renderRightButton?: (props: CardSubViewProps) => ReactNode;
}

export interface NavigationProps extends NavBarProps {
    cardStyle?: StyleProp<ViewStyle>;
    configureTransition?: (
        transitionProps: NavigationTransitionProps,
        prevTransitionProps?: NavigationTransitionProps
    ) => NavigationTransitionSpec;
    onTransitionStart?: (...args: any[]) => void;
    onTransitionEnd?: (...args: any[]) => void;
}

export interface Card extends CardProps {
    key: string;
}

/**
 * Tabs
 */

// TODO specify exact type when lib changes
export type TabSubViewProps = any;
//  SceneRendererProps &
//   TabsRendererProps &
// TabBarProps

export interface TabBarProps {
    hideTabBar?: boolean;
    renderTabBar?: (props: TabSubViewProps) => ReactNode;
    tabBarStyle?: StyleProp<ViewStyle>;
    tabStyle?: StyleProp<ViewStyle>;
    label?: string;
    labelStyle?: StyleProp<TextStyle>;
    renderLabel?: (props: TabSubViewProps) => ReactNode;
    tabTintColor?: string;
    tabActiveTintColor?: string;
    // <BottomNavigation /> only:
    renderTabIcon?: (props: TabSubViewProps) => ReactNode;
    // <Tabs /> only:
    tabBarPosition?: "top" | "bottom";
    tabBarIndicatorStyle?: StyleProp<ViewStyle>;
}

export interface TabsProps extends TabBarProps {
    // <Tabs /> only:
    initialLayout?: { width?: number; height?: number };
    configureTransition?: (
        transitionProps: NavigationTransitionProps,
        prevTransitionProps?: NavigationTransitionProps
    ) => NavigationTransitionSpec;
}

export interface TabProps extends RouteProps, TabBarProps {
    onReset?: (props: TabBarProps & RouteProps) => void;
    onIndexChange?: (index: number) => void;
}

export interface Tab extends TabProps {
    key: string;
}

// High-level wrappers
export interface BottomNavigationProps extends TabBarProps {
    children?: ReactNode[];
    lazy?: boolean;
    style?: StyleProp<ViewStyle>;
}

export class BottomNavigation extends Component<
    BottomNavigationProps,
    {
        key: string;
    }
> {
    static defaultProps: {
        lazy: true;
    };

    renderPager: (sceneProps: TabSubViewProps) => ReactNode;

    renderNavigationBar: (
        sceneProps: TabSubViewProps,
        props: TabSubViewProps
    ) => ReactNode;

    renderSceneView: (sceneProps: TabSubViewProps) => ReactNode;

    renderScene: (sceneProps: TabSubViewProps) => ReactElement<ViewProps>;
}

export function Card(props: CardProps): ReactElement<CardProps>;

export class NavBar extends Component<CardSubViewProps, void> {
    props: CardSubViewProps;

    renderLeftComponent: (sceneProps: CardSubViewProps) => ReactNode;

    renderTitleComponent: (sceneProps: CardSubViewProps) => ReactNode;

    renderRightComponent: (sceneProps: CardSubViewProps) => ReactNode;
}

export interface NavigationComponentProps extends NavigationProps {
    children?: ReactElement[];
}

export class Navigation extends Component<NavigationComponentProps> {
    props: NavigationComponentProps;

    renderHeader: (
        sceneProps: CardSubViewProps,
        props: CardSubViewProps
    ) => ReactNode;

    renderSceneComponent: (
        sceneProps: CardSubViewProps
    ) => ComponentClass<any> | undefined;
}

export function Tab(props: TabProps): ReactElement<{}>;

export interface TabBarComponentProps extends TabBarProps {
    children?: ReactElement[];
}

export class Tabs extends Component<
    TabBarComponentProps,
    {
        key: string;
    }
> {
    props: TabBarComponentProps;

    renderHeader: (sceneProps: TabSubViewProps) => ReactElement | null;

    renderFooter: (sceneProps: TabSubViewProps) => ReactElement | null;

    renderTabBar: (
        sceneProps: TabSubViewProps,
        props: TabSubViewProps
    ) => ReactElement | null;

    renderScene: (sceneProps: TabSubViewProps) => ReactElement | null;
}
