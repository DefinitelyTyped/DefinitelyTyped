// Type definitions for react-navigation 1.0
// Project: https://github.com/react-community/react-navigation
// Definitions by: Huhuanming <https://github.com/huhuanming>
//                 mhcgrq <https://github.com/mhcgrq>
//                 fangpenlin <https://github.com/fangpenlin>
//                 abrahambotros <https://github.com/abrahambotros>
//                 petejkim <https://github.com/petejkim>
//                 Kyle Roach <https://github.com/iRoachie>
//                 phanalpha <https://github.com/phanalpha>
//                 charlesfamu <https://github.com/charlesfamu>
//                 Tim Wang <https://github.com/timwangdev>
//                 Qibang Sun <https://github.com/bang88>
//                 Sergei Butko: <https://github.com/svbutko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/**
 * BEGIN FLOW TYPEDEFINITION.JS PORT
 * Reference: https://github.com/react-community/react-navigation/tree/52a2846e77119148320bcea83b8982a8bc6acce3
 *
 * NOTE: Please update the commit/link above when updating to a new Flow
 * TypeDefinition.js reference, so we can conveniently just look at diffs on
 * TypeDefinition.js between this latest reference point and the one you are
 * using when making new updates.
 */

import * as React from 'react';
import {
  Animated,
  TextStyle,
  ViewStyle,
  StyleProp,
} from 'react-native';

// @todo when we split types into common, native and web,
// we can properly change Animated.Value to its real value
export type AnimatedValue = any;

export type HeaderMode = 'float' | 'screen' | 'none';

export interface HeaderProps extends NavigationSceneRendererProps {
  mode: HeaderMode;
  router: NavigationRouter<
    NavigationState,
    NavigationAction,
    NavigationStackScreenOptions
  >;
  getScreenDetails: (navigationScene: NavigationScene) => NavigationScreenDetails<
    NavigationStackScreenOptions
  >;
  style: StyleProp<ViewStyle>;
}

/**
 * NavigationState is a tree of routes for a single navigator, where each child
 * route may either be a NavigationScreenRoute or a NavigationRouterRoute.
 * NavigationScreenRoute represents a leaf screen, while the
 * NavigationRouterRoute represents the state of a child navigator.
 *
 * NOTE: NavigationState is a state tree local to a single navigator and
 * its child navigators (via the routes field).
 * If we're in navigator nested deep inside the app, the state will only be the
 * state for that navigator.
 * The state for the root navigator of our app represents the whole navigation
 * state for the whole app.
 */
export interface NavigationState {
  /**
   * Index refers to the active child route in the routes array.
   */
  index: number;
  routes: any[];
}

export type NavigationRoute<Params> = NavigationLeafRoute<Params> | NavigationStateRoute<Params>;

export interface NavigationLeafRoute<Params> {
  /**
   * React's key used by some navigators. No need to specify these manually,
   * they will be defined by the router.
   */
  key: string;
  /**
   * For example 'Home'.
   * This is used as a key in a route config when creating a navigator.
   */
  routeName: string;
  /**
   * Path is an advanced feature used for deep linking and on the web.
   */
  path?: string;
  /**
   * Params passed to this route when navigating to it,
   * e.g. `{ car_id: 123 }` in a route that displays a car.
   */
  params: Params;
}

export interface NavigationStateRoute<NavigationLeafRouteParams> extends NavigationLeafRoute<NavigationLeafRouteParams> {
  index: number;
  routes: Array<NavigationRoute<any>>;
}

export type NavigationScreenOptionsGetter<Options, Action> = (
  navigation: NavigationScreenProp<NavigationRoute<any>, Action>,
  screenProps?: { [key: string]: any }
) => Options;

export interface NavigationRouter<State, Action, Options> {
  /**
   * The reducer that outputs the new navigation state for a given action, with
   * an optional previous state. When the action is considered handled but the
   * state is unchanged, the output state is null.
   */
  getStateForAction: (action: Action, lastState: (State | null)) => (State | null);

  /**
   * Maps a URI-like string to an action. This can be mapped to a state
   * using `getStateForAction`.
   */
  getActionForPathAndParams: (
    path: string,
    params?: NavigationParams
  ) => (Action | null);

  getPathAndParamsForState: (
    state: State
  ) => {
    path: string,
    params?: NavigationParams,
  };

  getComponentForRouteName: (routeName: string) => NavigationComponent;

  getComponentForState: (state: State) => NavigationComponent;

  /**
   * Gets the screen navigation options for a given screen.
   *
   * For example, we could get the config for the 'Foo' screen when the
   * `navigation.state` is:
   *
   *  {routeName: 'Foo', key: '123'}
   */
  getScreenOptions: NavigationScreenOptionsGetter<Options, Action>;
}

export type NavigationScreenOption<T> =
  T
  | ((
    navigation: NavigationScreenProp<NavigationRoute<any>, NavigationAction>,
    config: T
  ) => T);

export interface NavigationScreenDetails<T> {
  options: T;
  state: NavigationRoute<any>;
  navigation: NavigationScreenProp<NavigationRoute<any>, NavigationAction>;
}

export interface NavigationScreenOptions {
  title?: string;
}

export interface NavigationScreenConfigProps {
  navigation: NavigationScreenProp<NavigationRoute<any>, NavigationAction>;
  screenProps: { [key: string]: any };
}

export type NavigationScreenConfig<Options> =
  Options
  | (NavigationScreenConfigProps &
    ((navigationOptionsContainer: {
      navigationOptions: NavigationScreenProp<
        NavigationRoute<any>,
        NavigationAction
      >,
    }) => Options));

export type NavigationComponent =
  NavigationScreenComponent<any, any>
  | NavigationNavigator<any, any, any, any>;

export interface NavigationScreenComponent<T, Options> extends React.ComponentClass<T> {
  navigationOptions?: NavigationScreenConfig<Options>;
}

export interface NavigationNavigator<T, State, Action, Options> extends React.ComponentClass<T> {
  router?: NavigationRouter<State, Action, Options>;
  navigationOptions?: NavigationScreenConfig<Options>;
}

export interface NavigationParams {
  [key: string]: any;
}

export interface NavigationNavigateActionPayload {
  routeName: string;
  params?: NavigationParams;

  // The action to run inside the sub-router
  action?: NavigationNavigateAction;
}

export interface NavigationNavigateAction extends NavigationNavigateActionPayload {
  type: 'Navigation/NAVIGATE';
}

export interface NavigationBackActionPayload {
  key?: string | null;
}

export interface NavigationBackAction extends NavigationBackActionPayload {
  type: 'Navigation/BACK';
}

export interface NavigationSetParamsActionPayload {
  // The key of the route where the params should be set
  key: string;

  // The new params to merge into the existing route params
  params?: NavigationParams;
}

export interface NavigationSetParamsAction extends NavigationSetParamsActionPayload {
  type: 'Navigation/SET_PARAMS';
}

export interface NavigationInitActionPayload {
  params?: NavigationParams;
}

export interface NavigationInitAction extends NavigationInitActionPayload {
  type: 'Navigation/INIT';
}

export interface NavigationResetActionPayload {
  index: number;
  key?: string | null;
  actions: NavigationNavigateAction[];
}

export interface NavigationResetAction extends NavigationResetActionPayload {
  type: 'Navigation/RESET';
}

export interface NavigationUriActionPayload {
  uri: string;
}

export interface NavigationUriAction extends NavigationUriActionPayload {
  type: 'Navigation/URI';
}

export interface NavigationStackViewConfig {
  mode?: 'card' | 'modal';
  headerMode?: HeaderMode;
  cardStyle?: StyleProp<ViewStyle>;
  transitionConfig?: () => TransitionConfig;
  onTransitionStart?: () => void;
  onTransitionEnd?: () => void;
}

export type NavigationStackScreenOptions = NavigationScreenOptions & {
  header?: (React.ReactElement<any> | ((headerProps: HeaderProps) => React.ReactElement<any>)) | null;
  headerTitle?: string | React.ReactElement<any>;
  headerTitleStyle?: StyleProp<TextStyle>;
  headerTintColor?: string;
  headerLeft?: React.ReactElement<any>;
  headerBackTitle?: string | null;
  headerTruncatedBackTitle?: string;
  headerBackTitleStyle?: StyleProp<TextStyle>;
  headerPressColorAndroid?: string;
  headerRight?: React.ReactElement<any>;
  headerStyle?: StyleProp<ViewStyle>;
  gesturesEnabled?: boolean;
  gestureResponseDistance?: { vertical?: number; horizontal?: number };
};

export interface NavigationStackRouterConfig {
  initialRouteName?: string;
  initialRouteParams?: NavigationParams;
  paths?: NavigationPathsConfig;
  navigationOptions?: NavigationScreenConfig<NavigationStackScreenOptions>;
}

export type NavigationStackAction =
  NavigationInitAction
  | NavigationNavigateAction
  | NavigationBackAction
  | NavigationSetParamsAction
  | NavigationResetAction;

export type NavigationTabAction =
  NavigationInitAction
  | NavigationNavigateAction
  | NavigationBackAction;

export type NavigationAction =
  NavigationInitAction
  | NavigationStackAction
  | NavigationTabAction;

export type NavigationRouteConfig<T> = T & {
  navigationOptions?: NavigationScreenConfig<any>,
  path?: string,
};

export type NavigationScreenRouteConfig =
  {
      screen: NavigationComponent,
    }
  | {
      getScreen: () => NavigationComponent,
    };

export interface NavigationPathsConfig {
  [routeName: string]: string;
}

export interface NavigationTabRouterConfig {
  initialRouteName?: string;
  paths?: NavigationPathsConfig;
  navigationOptions?: NavigationScreenConfig<NavigationTabScreenOptions>;
  order?: string[]; // todo: type these as the real route names rather than 'string'

  // Does the back button cause the router to switch to the initial tab
  backBehavior?: 'none' | 'initialRoute'; // defaults `initialRoute`
}
export interface TabScene {
    route: NavigationRoute<any>;
    focused: boolean;
    index: number;
    tintColor?: string;
}
export interface NavigationTabScreenOptions extends NavigationScreenOptions {
  tabBarIcon?:
    React.ReactElement<any>
    | ((options: { tintColor: (string | null), focused: boolean }) => (React.ReactElement<
      any
    > | null));
  tabBarLabel?:
    string
    | React.ReactElement<any>
    | ((options: { tintColor: (string | null), focused: boolean }) => (React.ReactElement<
      any
    > | string | null));
  tabBarVisible?: boolean;
  tabBarTestIDProps?: { testID?: string, accessibilityLabel?: string };
  tabBarOnPress?: (
    scene: TabScene,
    jumpToIndex: (index: number) => void
  ) => void;
}

export interface NavigationDrawerScreenOptions extends NavigationScreenOptions {
  drawerIcon?:
    React.ReactElement<any>
    | ((options: { tintColor: (string | null), focused: boolean }) => (React.ReactElement<
      any
    > | null));
  drawerLabel?:
    string
    | React.ReactElement<any>
    | ((options: { tintColor: (string | null), focused: boolean }) => (React.ReactElement<
      any
    > | null));
}

export interface NavigationRouteConfigMap {
  [routeName: string]: NavigationRouteConfig<any>;
}

export type NavigationDispatch<A> = (action: A) => boolean;

export interface NavigationProp<S, A> {
  state: S;
  dispatch: NavigationDispatch<A>;
}

export interface NavigationScreenProp<S, A> {
  state: S;
  dispatch: NavigationDispatch<A>;
  goBack: (routeKey?: (string | null)) => boolean;
  navigate: (
    routeName: string,
    params?: NavigationParams,
    action?: NavigationAction
  ) => boolean;
  setParams: (newParams: NavigationParams) => boolean;
}

export interface NavigationNavigatorProps<T> {
  navigation?: NavigationProp<T, NavigationAction>;
  screenProps?: { [key: string]: any };
  navigationOptions?: any;
}

/**
 * Gestures, Animations, and Interpolators
 */

export type NavigationGestureDirection = 'horizontal' | 'vertical';

export interface NavigationLayout {
  height: AnimatedValue;
  initHeight: number;
  initWidth: number;
  isMeasured: boolean;
  width: AnimatedValue;
}

export interface NavigationScene {
  index: number;
  isActive: boolean;
  isStale: boolean;
  key: string;
  route: NavigationRoute<any>;
}

export interface NavigationTransitionProps {
  // The layout of the screen container
  layout: NavigationLayout;

  // The destination navigation state of the transition
  navigation: NavigationScreenProp<NavigationState, NavigationAction>;

  // The progressive index of the transitioner's navigation state.
  position: AnimatedValue;

  // The value that represents the progress of the transition when navigation
  // state changes from one to another. Its numberic value will range from 0
  // to 1.
  //  progress.__getAnimatedValue() < 1 : transtion is happening.
  //  progress.__getAnimatedValue() == 1 : transtion completes.
  progress: AnimatedValue;

  // All the scenes of the transitioner.
  scenes: NavigationScene[];

  // The active scene, corresponding to the route at
  // `navigation.state.routes[navigation.state.index]`. When rendering
  // NavigationSceneRendererPropsIndex, the scene does not refer to the active
  // scene, but instead the scene that is being rendered. The index always
  // is the index of the scene
  scene: NavigationScene;
  index: number;

  screenProps?: { [key: string]: any };
}

// The scene renderer props are nearly identical to the props used for rendering
// a transition. The exception is that the passed scene is not the active scene
// but is instead the scene that the renderer should render content for.
export type NavigationSceneRendererProps = NavigationTransitionProps;

export interface NavigationTransitionSpec {
  duration?: number;
  // An easing function from `Easing`.
  easing?: (t: number) => number;
  // A timing function such as `Animated.timing`.
  timing?: (value: AnimatedValue, config: any) => any;
}

/**
 * Describes a visual transition from one screen to another.
 */
export interface TransitionConfig {
  // The basics properties of the animation, such as duration and easing
  transitionSpec?: NavigationTransitionSpec;
  // How to animate position and opacity of the screen
  // based on the value generated by the transitionSpec
  screenInterpolator?: (props: NavigationSceneRendererProps) => any;
}

export type NavigationAnimationSetter = (
  position: AnimatedValue,
  newState: NavigationState,
  lastState: NavigationState
) => void;

export type NavigationSceneRenderer = () => (React.ReactElement<any> | null);

export type NavigationStyleInterpolator = (
  props: NavigationSceneRendererProps
) => ViewStyle;

export interface LayoutEvent {
  nativeEvent: {
    layout: {
      x: number,
      y: number,
      width: number,
      height: number,
    },
  };
}

/**
 * END FLOW TYPEDEFINITION.JS PORT
 */

/**
 * BEGIN MANUAL DEFINITIONS OUTSIDE OF TYPEDEFINITION.JS
 */

// From navigators/NavigatorTypes.js
export type NavigatorType =
| 'react-navigation/STACK'
| 'react-navigation/TABS'
| 'react-navigation/DRAWER';

// From addNavigatorHelpers.js
export function addNavigationHelpers<S>(navigation: NavigationProp<S, NavigationAction>): NavigationScreenProp<S, NavigationAction>;

// From createNavigationContainer.js
export interface NavigationContainerProps {
  uriPrefix?: string | RegExp;
  onNavigationStateChange?: (
    prevNavigationState: NavigationState,
    nextNavigationState: NavigationState,
    action: NavigationAction,
  ) => void;
  style?: StyleProp<ViewStyle>;
}

export interface NavigationContainer extends React.ComponentClass<
  NavigationContainerProps & NavigationNavigatorProps<any>
> {
  router: NavigationRouter<any, any, any>;
  screenProps: { [key: string]: any };
  navigationOptions: any;
  state: { nav: NavigationState | null };
}

export interface StackNavigatorConfig extends NavigationStackViewConfig, NavigationStackRouterConfig {
  containerOptions?: any;
}

// Return createNavigationContainer
export function StackNavigator(
  routeConfigMap: NavigationRouteConfigMap,
  stackConfig?: StackNavigatorConfig,
): NavigationContainer;

// DrawerItems
export const DrawerItems: React.ComponentType;

/**
 * Drawer Navigator
 */
export interface DrawerViewConfig {
  drawerWidth?: number;
  drawerPosition?: 'left' | 'right';
  contentComponent?: React.ComponentType;
  contentOptions?: any;
  style?: StyleProp<ViewStyle>;
}
export interface DrawerNavigatorConfig extends NavigationTabRouterConfig, DrawerViewConfig {
  containerConfig?: any;
  contentOptions?: {
    activeTintColor?: string,
    activeBackgroundColor?: string,
    inactiveTintColor?: string,
    inactiveBackgroundColor?: string,
    style?: StyleProp<ViewStyle>,
    labelStyle?: StyleProp<TextStyle>,
  };
}

export function DrawerNavigator(
  routeConfigMap: NavigationRouteConfigMap,
  drawerConfig?: DrawerNavigatorConfig,
): NavigationContainer;

/**
 * Tab Navigator
 */

// From views/TabView/TabView.js
export interface TabViewConfig {
  tabBarComponent?: React.ComponentType;
  tabBarPosition?: 'top' | 'bottom';
  tabBarOptions?: {
    activeTintColor?: string,
    allowFontScaling?: boolean,
    activeBackgroundColor?: string,
    inactiveTintColor?: string,
    inactiveBackgroundColor?: string,
    showLabel?: boolean,
    style?: StyleProp<ViewStyle>,
    labelStyle?: StyleProp<TextStyle>,

    // Top
    showIcon?: boolean,
    upperCaseLabel?: boolean,
    pressColor?: string,
    pressOpacity?: number,
    scrollEnabled?: boolean,
    tabStyle?: StyleProp<ViewStyle>,
    indicatorStyle?: StyleProp<ViewStyle>,
  };
  swipeEnabled?: boolean;
  animationEnabled?: boolean;
  lazy?: boolean;
}

// From navigators/TabNavigator.js
export interface TabNavigatorConfig extends NavigationTabRouterConfig, TabViewConfig {
  initialLayout?: { height: number, width: number };
}

// From navigators/TabNavigator.js
export function TabNavigator(
  routeConfigMap: NavigationRouteConfigMap,
  drawConfig?: TabNavigatorConfig,
): NavigationContainer;

export const TabBarTop: React.ComponentType;
export const TabBarBottom: React.ComponentType;

/**
 * NavigationActions
 */
export namespace NavigationActions {
  const BACK: 'Navigation/BACK';
  const INIT: 'Navigation/INIT';
  const NAVIGATE: 'Navigation/NAVIGATE';
  const RESET: 'Navigation/RESET';
  const SET_PARAMS: 'Navigation/SET_PARAMS';
  const URI: 'Navigation/URI';

  function init(options?: NavigationInitActionPayload): NavigationInitAction;
  function navigate(options: NavigationNavigateActionPayload): NavigationNavigateAction;
  function reset(options: NavigationResetActionPayload): NavigationResetAction;
  function back(options?: NavigationBackActionPayload): NavigationBackAction;
  function setParams(options: NavigationSetParamsActionPayload): NavigationSetParamsAction;
}

/**
 * Transitioner
 * @desc From react-navigation/src/views/Transitioner.js
 */
export interface TransitionerProps {
  configureTransition: (
    transitionProps: NavigationTransitionProps,
    prevTransitionProps?: NavigationTransitionProps
  ) => NavigationTransitionSpec;
  navigation: NavigationScreenProp<NavigationState, NavigationAction>;
  onTransitionEnd?: () => void;
  onTransitionStart?: () => void;
  render: (
    transitionProps: NavigationTransitionProps,
    prevTransitionProps?: NavigationTransitionProps
  ) => any;
  style?: StyleProp<ViewStyle>;
}

export interface TransitionerState {
  layout: NavigationLayout;
  position: Animated.Value;
  progress: Animated.Value;
  scenes: NavigationScene[];
}

export class Transitioner extends React.Component<
  TransitionerProps,
  TransitionerState
> { }

/**
 * Tab Router
 *
 * @desc from react-navigation/src/routers/TabRouter.js
 */
export function TabRouter(
  routeConfigs: NavigationRouteConfigMap,
  config: NavigationTabRouterConfig
): NavigationRouter<any, any, any>;

/**
 * Stack Router
 *
 * @desc from react-navigation/src/routers/StackRouter.js
 */
export function StackRouter(
  routeConfigs: NavigationRouteConfigMap,
  config: NavigationTabRouterConfig
): NavigationRouter<any, any, any>;

/**
 * Create Navigator
 *
 * @see https://github.com/react-community/react-navigation/blob/master/src/navigators/createNavigator.js
 */
export function createNavigator<C, S, A, Options>(
  router: NavigationRouter<S, A, Options>,
  routeConfigs?: NavigationRouteConfigMap,
  navigatorConfig?: {} | null,
  navigatorType?: NavigatorType
): (NavigationView: React.ComponentClass<C>) => NavigationNavigator<C, S, A, Options>;

/**
 * Create an HOC that injects the navigation and manages the navigation state
 * in case it's not passed from above.
 * This allows to use e.g. the StackNavigator and TabNavigator as root-level
 * components.
 *
 * @see https://github.com/react-community/react-navigation/blob/master/src/createNavigationContainer.js
 */
export function createNavigationContainer(
  Component: NavigationNavigator<any, any, any, any>
): NavigationContainer;
/**
 * END MANUAL DEFINITIONS OUTSIDE OF TYPEDEFINITION.JS
 */

/**
 * BEGIN CUSTOM CONVENIENCE INTERFACES
 */

export interface NavigationScreenProps<Params> {
  navigation: NavigationScreenProp<NavigationRoute<Params>, NavigationAction>;
  screenProps?: { [key: string]: any };
  navigationOptions?: NavigationScreenConfig<any>;
}

/**
 * END CUSTOM CONVENIENCE INTERFACES
 */

/*
 * Header
 */

// src/views/HeaderBackButton.js

export interface HeaderBackButtonProps {
  onPress?: () => void;
  pressColorAndroid?: string;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  tintColor?: string;
  truncatedTitle?: string;
  width?: number;
}

export const HeaderBackButton: React.ComponentClass<HeaderBackButtonProps>;
/**
 * Header Component
 */
export const Header: React.ComponentClass<HeaderProps>;
