// High-level wrappers
import { History, Location } from "history";
import { ComponentClass, PureComponent, ReactElement, ReactNode } from "react";
import { BackHandler, StyleProp, ViewStyle } from "react-native";
import { match, RouterProps } from "react-router";

export type Route<Params extends { [K in keyof Params]?: string } = {}> = {
    key: string;
    routeName: string;
    match?: match<Params> | undefined;
};

export type NavigationState<OwnRoute> = {
    index: number;
    routes: Array<Route & OwnRoute>;
};

export type RouteProps = {
    component?: ComponentClass<RouterProps> | undefined;
    render?: ((props: RouterProps) => ReactNode) | undefined;
    children?: ((props: RouterProps) => ReactNode) | ReactNode | undefined;
    path?: string | undefined;
    exact?: boolean | undefined;
    strict?: boolean | undefined;
};

export type Card = RouteProps & {
    key: string;
};

export type CardsRendererProps = {
    onNavigateBack: (routeKey?: string) => boolean;
    navigationState: NavigationState<{
        path?: string | undefined;
        params?: object | undefined;
    }>;
    cards: Card[];
};

export type Tab = RouteProps & {
    key: string;
    onIndexChange?: ((index: number) => void) | undefined;
};

export type TabsRendererProps = {
    onIndexChange: (index: number) => void;
    navigationState: NavigationState<{
        title?: string | undefined;
        testID?: string | undefined;
    }>;
    loadedTabs: string[];
    tabs: Tab[];
};

export type CardStackProps = {
    children?: ReactNode[] | undefined;
    render: (props: CardsRendererProps) => ReactNode;
};

export class CardStack extends PureComponent<
    CardStackProps,
    {
        key: number;
        navigationState: NavigationState<{
            path?: string | undefined;
            params?: object | undefined;
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
    children?: ReactNode[] | undefined;
    render: (props: TabsRendererProps) => ReactNode;
    lazy?: boolean | undefined;
    forceSync?: boolean | undefined;
    style?: StyleProp<ViewStyle> | undefined;
};

export class TabStack extends PureComponent<
    TabStackProps,
    {
        navigationState: NavigationState<{
            title?: string | undefined;
            testID?: string | undefined;
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

    unlistenHistory?: (() => void) | undefined;

    constructor(props: TabStackProps);

    onListenHistory: (history: History, nextHistory: History) => void;

    onIndexChange: (index: number) => void;
}

// Test if current stack item should be updated
export const shouldUpdate: (
    currentItem: RouteProps,
    nextItem: RouteProps,
    currentLocation: Location,
    nextLocation: Location,
) => boolean;

// Get stack item from a specific route
export const get: <Item extends Route>(items: Item[], route: Route) => Item;

// Generate unique key
export const createKey: (route: Route) => string;

// Get current route from a specific history location
export const getRoute: (
    stack: RouteProps[],
    location: Location,
) => Route | undefined;

// Render a subview with props
export const renderSubView: (
    render: (propsA: any, propsB: any) => ReactNode,
    additionalProps?: any,
) => (ownProps: any) => ReactNode;

// Build stack with React elements
export const build: <Item>(
    children: Array<ReactElement<Item>>,
    oldBuild?: Item[],
) => Item[];

export const runHistoryListenner: (
    history: History,
    onListenHistory: () => void,
) => () => void;
