// Type definitions for react-router-navigation-core 1.0
// Project: https://github.com/LeoLeBras/react-router-navigation#readme
// Definitions by: Kalle Ott <https://github.com/kaoDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

// High-level wrappers
import { PureComponent, ReactNode, ComponentClass, ReactElement } from "react";
import { BackHandler, StyleProp, ViewStyle } from "react-native";
import { History, Location } from "history";
import { RouterProps, RouteProps, match } from "react-router";

export type Route<T = {}> = {
    key: string;
    routeName: string;
    match?: match<T>;
};

export type NavigationState<OwnRoute> = {
    index: number;
    routes: Array<Route & OwnRoute>;
};

export type RouteProps = {
    component?: ComponentClass<RouterProps>;
    render?: (props: RouterProps) => ReactNode;
    children?: ((props: RouterProps) => ReactNode) | ReactNode;
    path?: string;
    exact?: boolean;
    strict?: boolean;
};

export type Card = RouteProps & {
    key: string;
};

export type CardsRendererProps = {
    onNavigateBack: (routeKey?: string) => boolean;
    navigationState: NavigationState<{
        path?: string;
        params?: object;
    }>;
    cards: Card[];
};

export type Tab = RouteProps & {
    key: string;
    onIndexChange?: (index: number) => void;
};

export type TabsRendererProps = {
    onIndexChange: (index: number) => void;
    navigationState: NavigationState<{
        title?: string;
        testID?: string;
    }>;
    loadedTabs: string[];
    tabs: Tab[];
};

export type CardStackProps = {
    children?: ReactNode[];
    render: (props: CardsRendererProps) => ReactNode;
};

export class CardStack extends PureComponent<
    CardStackProps,
    {
        key: number;
        navigationState: NavigationState<{
            path?: string;
            params?: object;
        }>;
        cards: Card[];
    }
> {
    unlistenHistory: () => void;

    constructor(props: CardStackProps, context?: any);

    onListenHistory: (history: History, nextHistory: History) => void;

    // Pop to previous scene (n-1)
    onNavigateBack: () => boolean;
}

export type TabStackProps = {
    children?: ReactNode[];
    render: (props: TabsRendererProps) => ReactNode;
    lazy?: boolean;
    forceSync?: boolean;
    style?: StyleProp<ViewStyle>;
};

export class TabStack extends PureComponent<
    TabStackProps,
    {
        navigationState: NavigationState<{
            title?: string;
            testID?: string;
        }>;
        tabs: Tab[];
        loadedTabs: string[];
        rootIndex: number;
        tabsHistory: { [key: number]: Location[] };
    }
> {
    static defaultProps: {
        forceSync: false;
    };

    unlistenHistory?: () => void;

    constructor(props: TabStackProps);

    onListenHistory: (history: History, nextHistory: History) => void;

    onIndexChange: (index: number) => void;
}

// Test if current stack item should be updated
export const shouldUpdate: (
    currentItem: RouteProps,
    nextItem: RouteProps,
    currentLocation: Location,
    nextLocation: Location
) => boolean;

// Get stack item from a specific route
export const get: <Item extends Route>(items: Item[], route: Route) => Item;

// Generate unique key
export const createKey: (route: Route) => string;

// Get current route from a specific history location
export const getRoute: (
    stack: RouteProps[],
    location: Location
) => Route | undefined;

// Render a subview with props
export const renderSubView: (
    render: (propsA: any, propsB: any) => ReactNode,
    additionalProps?: any
) => (ownProps: any) => ReactNode;

// Build stack with React elements
export const build: <Item>(
    children: Array<ReactElement<Item>>,
    oldBuild?: Item[]
) => Item[];

// eslint-disable-next-line
export const runHistoryListenner: (
    history: History,
    onListenHistory: () => void
) => () => void;
