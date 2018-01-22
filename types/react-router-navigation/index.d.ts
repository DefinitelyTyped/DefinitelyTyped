// Type definitions for react-router-navigation 1.0
// Project: https://github.com/LeoLeBras/react-router-navigation#readme
// Definitions by: Kalle Ott <https://github.com/kaoDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Component, ReactNode, ReactElement, ComponentClass } from "react";
import { StyleProp, ViewProperties, ViewStyle, TextStyle } from "react-native";
import { TabViewAnimated, TabViewPagerPan } from "react-native-tab-view";
import { RouteProps } from "react-router-navigation-core";
import {
    NavigationTransitionProps,
    NavigationTransitionSpec
} from "react-navigation";

/**
 * Navigation
 */

export type CardProps = RouteProps & NavBarProps;

export type CardSubViewProps = any;
//  NavigationSceneRendererProps &
//   CardsRendererProps &
//   CardProps

export type NavBarProps = {
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
};

export type NavigationProps = NavBarProps & {
    cardStyle?: StyleProp<ViewStyle>;
    configureTransition?: (
        transitionProps: NavigationTransitionProps,
        prevTransitionProps?: NavigationTransitionProps
    ) => NavigationTransitionSpec;
    onTransitionStart?: (...args: any[]) => void;
    onTransitionEnd?: (...args: any[]) => void;
};

export type Card = CardProps & { key: string };

/**
 * Tabs
 */

export type TabSubViewProps = any;
//  SceneRendererProps &
//   TabsRendererProps &
// TabBarProps

export type TabBarProps = {
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
};

export type TabsProps = TabBarProps & {
    // <Tabs /> only:
    initialLayout?: { width?: number; height?: number };
    configureTransition?: (
        transitionProps: NavigationTransitionProps,
        prevTransitionProps?: NavigationTransitionProps
    ) => NavigationTransitionSpec;
};

export type TabProps = RouteProps &
    TabBarProps & {
        onReset?: (props: TabBarProps & RouteProps) => void;
        onIndexChange?: (index: number) => void;
    };

export type Tab = TabProps & { key: string };

// High-level wrappers
export type BottomNavigationProps = TabBarProps & {
    children?: ReactNode[];
    lazy?: boolean;
    style?: StyleProp<ViewStyle>;
};

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

    renderScene: (sceneProps: TabSubViewProps) => ReactElement<ViewProperties>;
}

export const Card: (props: CardProps) => ReactElement<CardProps>;

export class NavBar extends Component<CardSubViewProps, void> {
    props: CardSubViewProps;

    renderLeftComponent: (sceneProps: CardSubViewProps) => ReactNode;

    renderTitleComponent: (sceneProps: CardSubViewProps) => ReactNode;

    renderRightComponent: (sceneProps: CardSubViewProps) => ReactNode;
}

export type NavigationComponentProps = NavigationProps & {
    children?: Array<ReactElement<any>>;
};

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

export const Tab: (props: TabProps) => ReactElement<{}>;

export type TabBarComponentProps = TabBarProps & {
    children?: Array<ReactElement<any>>;
};

export class Tabs extends Component<
    TabBarComponentProps,
    {
        key: string;
    }
> {
    props: TabBarComponentProps;

    renderHeader: (sceneProps: TabSubViewProps) => ReactElement<any> | null;

    renderFooter: (sceneProps: TabSubViewProps) => ReactElement<any> | null;

    renderTabBar: (
        sceneProps: TabSubViewProps,
        props: TabSubViewProps
    ) => ReactElement<any> | null;

    renderScene: (sceneProps: TabSubViewProps) => ReactElement<any> | null;
}
