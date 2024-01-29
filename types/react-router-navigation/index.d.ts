import { Component, ComponentClass, ReactElement, ReactNode } from "react";
import { StyleProp, TextStyle, ViewProps, ViewStyle } from "react-native";
import { NavigationTransitionProps, NavigationTransitionSpec } from "react-navigation";
import { RouteProps } from "react-router-navigation-core";

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
    hideNavBar?: boolean | undefined;
    renderNavBar?: ((props: CardSubViewProps) => ReactNode) | undefined;
    navBarStyle?: StyleProp<ViewStyle> | undefined;
    // Left button
    hideBackButton?: boolean | undefined;
    backButtonTintColor?: string | undefined;
    backButtonTitle?: string | undefined;
    renderLeftButton?: ((props: CardSubViewProps) => ReactNode) | undefined;
    // Title
    title?: string | undefined;
    titleStyle?: StyleProp<TextStyle> | undefined;
    renderTitle?: ((props: CardSubViewProps) => ReactNode) | undefined;
    // Right button
    renderRightButton?: ((props: CardSubViewProps) => ReactNode) | undefined;
}

export interface NavigationProps extends NavBarProps {
    cardStyle?: StyleProp<ViewStyle> | undefined;
    configureTransition?:
        | ((
            transitionProps: NavigationTransitionProps,
            prevTransitionProps?: NavigationTransitionProps,
        ) => NavigationTransitionSpec)
        | undefined;
    onTransitionStart?: ((...args: any[]) => void) | undefined;
    onTransitionEnd?: ((...args: any[]) => void) | undefined;
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
    hideTabBar?: boolean | undefined;
    renderTabBar?: ((props: TabSubViewProps) => ReactNode) | undefined;
    tabBarStyle?: StyleProp<ViewStyle> | undefined;
    tabStyle?: StyleProp<ViewStyle> | undefined;
    label?: string | undefined;
    labelStyle?: StyleProp<TextStyle> | undefined;
    renderLabel?: ((props: TabSubViewProps) => ReactNode) | undefined;
    tabTintColor?: string | undefined;
    tabActiveTintColor?: string | undefined;
    // <BottomNavigation /> only:
    renderTabIcon?: ((props: TabSubViewProps) => ReactNode) | undefined;
    // <Tabs /> only:
    tabBarPosition?: "top" | "bottom" | undefined;
    tabBarIndicatorStyle?: StyleProp<ViewStyle> | undefined;
}

export interface TabsProps extends TabBarProps {
    // <Tabs /> only:
    initialLayout?: { width?: number | undefined; height?: number | undefined } | undefined;
    configureTransition?:
        | ((
            transitionProps: NavigationTransitionProps,
            prevTransitionProps?: NavigationTransitionProps,
        ) => NavigationTransitionSpec)
        | undefined;
}

export interface TabProps extends RouteProps, TabBarProps {
    onReset?: ((props: TabBarProps & RouteProps) => void) | undefined;
    onIndexChange?: ((index: number) => void) | undefined;
}

export interface Tab extends TabProps {
    key: string;
}

// High-level wrappers
export interface BottomNavigationProps extends TabBarProps {
    children?: ReactNode[] | undefined;
    lazy?: boolean | undefined;
    style?: StyleProp<ViewStyle> | undefined;
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
        props: TabSubViewProps,
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
    children?: ReactElement[] | undefined;
}

export class Navigation extends Component<NavigationComponentProps> {
    props: NavigationComponentProps;

    renderHeader: (
        sceneProps: CardSubViewProps,
        props: CardSubViewProps,
    ) => ReactNode;

    renderSceneComponent: (
        sceneProps: CardSubViewProps,
    ) => ComponentClass<any> | undefined;
}

export function Tab(props: TabProps): ReactElement<{}>;

export interface TabBarComponentProps extends TabBarProps {
    children?: ReactElement[] | undefined;
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
        props: TabSubViewProps,
    ) => ReactElement | null;

    renderScene: (sceneProps: TabSubViewProps) => ReactElement | null;
}
