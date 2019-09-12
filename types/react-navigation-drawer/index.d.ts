// Type definitions for react-navigation-drawer 2.2
// Project: https://github.com/react-navigation/drawer#readme
// Definitions by: Haseeb Majid <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {
    NavigationScreenProp,
    NavigationState,
    NavigationRoute,
    NavigationParams,
    NavigationProp,
    NavigationDescriptor,
    SupportedThemes,
    NavigationScreenConfig,
} from 'react-navigation';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import Animated from 'react-native-reanimated';

export type Scene = {
    route: NavigationRoute;
    index: number;
    focused: boolean;
    tintColor?: string;
};

export type NavigationDrawerState = NavigationState & {
    isDrawerOpen: boolean;
};

export type NavigationDrawerProp<State = NavigationRoute, Params = NavigationParams> = NavigationScreenProp<
    State,
    Params
> & {
    openDrawer: () => void;
    closeDrawer: () => void;
    toggleDrawer: () => void;
    jumpTo: (routeName: string, key?: string) => void;
};

export type NavigationDrawerOptions = {
    title?: string;
    drawerLabel?: React.ReactNode | ((props: { tintColor?: string; focused: boolean }) => React.ReactNode);
    drawerIcon?: React.ReactNode | ((props: { tintColor?: string; focused: boolean }) => React.ReactNode);
    drawerLockMode?: 'unlocked' | 'locked-closed' | 'locked-open';
};

export type NavigationDrawerConfig = {
    contentComponent?: React.ComponentType<DrawerContentComponentProps>;
    edgeWidth?: number;
    minSwipeDistance?: number;
    drawerWidth?: number | (() => number);
    drawerPosition?: 'left' | 'right';
    drawerType?: 'front' | 'back' | 'slide';
    drawerLockMode?: 'unlocked' | 'locked-closed' | 'locked-open';
    keyboardDismissMode?: 'none' | 'on-drag';
    swipeEdgeWidth?: number;
    swipeDistanceThreshold?: number;
    swipeVelocityThreshold?: number;
    hideStatusBar?: boolean;
    statusBarAnimation?: 'slide' | 'none' | 'fade';
    drawerBackgroundColor?: ThemedColor;
    overlayColor?: ThemedColor;
    screenContainerStyle?: StyleProp<ViewStyle>;
};

export type NavigationDrawerRouterConfig = {
    unmountInactiveRoutes?: boolean;
    resetOnBlur?: boolean;
    initialRouteName?: string;
    contentComponent?: React.ComponentType<DrawerContentComponentProps>;
    contentOptions?: object;
    backBehavior?: 'none' | 'initialRoute' | 'history';
};

export type ThemedColor =
    | string
    | {
          light: string;
          dark: string;
      };

export type DrawerNavigatorItemsProps = {
    items: NavigationRoute[];
    activeItemKey?: string | null;
    activeTintColor?: string | ThemedColor;
    activeBackgroundColor?: string | ThemedColor;
    inactiveTintColor?: string | ThemedColor;
    inactiveBackgroundColor?: string | ThemedColor;
    getLabel: (scene: Scene) => React.ReactNode;
    renderIcon: (scene: Scene) => React.ReactNode;
    onItemPress: (scene: { route: NavigationRoute; focused: boolean }) => void;
    itemsContainerStyle?: StyleProp<ViewStyle>;
    itemStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    activeLabelStyle?: StyleProp<TextStyle>;
    inactiveLabelStyle?: StyleProp<TextStyle>;
    iconContainerStyle?: StyleProp<ViewStyle>;
    drawerPosition: 'left' | 'right';
};

export type DrawerContentComponentProps = DrawerNavigatorItemsProps & {
    navigation: NavigationProp<NavigationDrawerState>;
    descriptors: SceneDescriptorMap;
    drawerOpenProgress: Animated.Node<number>;
    screenProps: unknown;
};

export type NavigationDrawerScreenProps<Params = NavigationParams, ScreenProps = unknown> = {
    theme: SupportedThemes;
    navigation: NavigationDrawerProp<NavigationRoute, Params>;
    screenProps: ScreenProps;
};

export type NavigationDrawerScreenComponent<Params = NavigationParams, ScreenProps = unknown> = React.ComponentType<
    NavigationDrawerScreenProps<Params, ScreenProps>
> & {
    navigationOptions?: NavigationScreenConfig<NavigationDrawerOptions, NavigationDrawerProp<NavigationRoute, Params>>;
};

export type SceneDescriptorMap = {
    [key: string]: NavigationDescriptor<
        NavigationParams,
        NavigationDrawerOptions,
        NavigationDrawerProp<NavigationRoute, any>
    >;
};
