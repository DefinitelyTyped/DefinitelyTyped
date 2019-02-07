// Type definitions for react-navigation 1.5
// Project: https://github.com/react-navigation/react-navigation
// Definitions by: Huhuanming <https://github.com/huhuanming>
//                 mhcgrq <https://github.com/mhcgrq>
//                 fangpenlin <https://github.com/fangpenlin>
//                 petejkim <https://github.com/petejkim>
//                 Kyle Roach <https://github.com/iRoachie>
//                 phanalpha <https://github.com/phanalpha>
//                 charlesfamu <https://github.com/charlesfamu>
//                 Tim Wang <https://github.com/timwangdev>
//                 Qibang Sun <https://github.com/bang88>
//                 Sergei Butko: <https://github.com/svbutko>
//                 Veit Lehmann: <https://github.com/levito>
//                 Steven Miller <https://github.com/YourGamesBeOver>
//                 Armando Assuncao <https://github.com/ArmandoAssuncao>
//                 Ciaran Liedeman <https://github.com/cliedeman>
//                 Edward Sammut Alessi <https://github.com/Slessi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/**
 * Reference: https://github.com/react-navigation/react-navigation/tree/3f3ef6485c8932f49fddc3dd2c508629110bf2b6
 *
 * NOTE: Please update the commit/link above when updating to a new Flow
 * react-navigation/flow/react-navigation.js reference, so we can conveniently just look at diffs on
 * react-navigation/flow/react-navigation.js between this latest reference point and the one you are
 * using when making new updates.
 */

import * as React from 'react';
import {
  Animated,
  TextStyle,
  ViewProps,
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

export type NavigationRoute<Params = NavigationParams> = NavigationLeafRoute<Params> | NavigationStateRoute<Params>;

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
  params?: Params;
}

export type NavigationStateRoute<NavigationLeafRouteParams> = NavigationLeafRoute<NavigationLeafRouteParams> & NavigationState;

export type NavigationScreenOptionsGetter<Options> = (
  navigation: NavigationScreenProp<NavigationRoute<any>>,
  screenProps?: { [key: string]: any }
) => Options;

export interface NavigationRouter<State = NavigationState, Options = {}> {
  /**
   * The reducer that outputs the new navigation state for a given action, with
   * an optional previous state. When the action is considered handled but the
   * state is unchanged, the output state is null.
   */
  getStateForAction: (action: NavigationAction, lastState?: State) => (State | null);

  /**
   * Maps a URI-like string to an action. This can be mapped to a state
   * using `getStateForAction`.
   */
  getActionForPathAndParams: (
    path: string,
    params?: NavigationParams
  ) => (NavigationAction | null);

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
  getScreenOptions: NavigationScreenOptionsGetter<Options>;
}

export type NavigationScreenOption<T> =
  T
  | ((
    navigation: NavigationScreenProp<NavigationRoute>,
    config: T
  ) => T);

export interface NavigationScreenDetails<T> {
  options: T;
  state: NavigationRoute;
  navigation: NavigationScreenProp<NavigationRoute>;
}

export type NavigationScreenOptions = NavigationStackScreenOptions & NavigationTabScreenOptions & NavigationDrawerScreenOptions;

export interface NavigationScreenConfigProps {
  navigation: NavigationScreenProp<NavigationRoute>;
  screenProps: { [key: string]: any };
}

export type NavigationScreenConfig<Options> =
  Options
  | ((navigationOptionsContainer: NavigationScreenConfigProps & {
      navigationOptions: NavigationScreenProp<NavigationRoute>,
    }) => Options);

export type NavigationComponent =
  NavigationScreenComponent<any, any, any>
  | NavigationNavigator<any, any, any>;

export type NavigationScreenComponent<
    Params = NavigationParams,
    Options = {},
    Props = {}
> = React.ComponentType<NavigationScreenProps<Params, Options> & Props> &
{ navigationOptions?: NavigationScreenConfig<Options> };

export type NavigationNavigator<
    State = NavigationState,
    Options = {},
    Props = {}
> = React.ComponentType<NavigationNavigatorProps<Options, State> & Props> & {
    router: NavigationRouter<State, Options>,
    navigationOptions?: NavigationScreenConfig<Options>,
};

export interface NavigationParams {
  [key: string]: any;
}

export interface NavigationNavigateActionPayload {
  routeName: string;
  params?: NavigationParams;

  // The action to run inside the sub-router
  action?: NavigationNavigateAction;

  key?: string;
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

export interface NavigationPopActionPayload {
  // n: the number of routes to pop of the stack
  n?: number;
  immediate?: boolean;
}

export interface NavigationPopAction extends NavigationPopActionPayload {
  type: 'Navigation/POP';
}

export interface NavigationPopToTopActionPayload {
  key?: string;
  immediate?: boolean;
}

export interface NavigationPopToTopAction extends NavigationPopToTopActionPayload {
  type: 'Navigation/POP_TO_TOP';
}

export interface NavigationStackViewConfig {
  mode?: 'card' | 'modal';
  headerMode?: HeaderMode;
  cardStyle?: StyleProp<ViewStyle>;
  transitionConfig?: (
    transitionProps: NavigationTransitionProps,
    prevTransitionProps: NavigationTransitionProps,
    isModal: boolean,
  ) => TransitionConfig;
  onTransitionStart?: (transitionProps: NavigationTransitionProps, prevTransitionProps?: NavigationTransitionProps) => Promise<void> | void;
  onTransitionEnd?: (transitionProps: NavigationTransitionProps, prevTransitionProps?: NavigationTransitionProps) => void;
}

export interface NavigationStackScreenOptions {
  title?: string;
  header?: (React.ReactElement<any> | ((headerProps: HeaderProps) => React.ReactElement<any>)) | null;
  headerTransparent?: boolean;
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
  headerBackground?: React.ReactNode | React.ReactType;
  gesturesEnabled?: boolean;
  gestureResponseDistance?: { vertical?: number; horizontal?: number };
}

export interface NavigationStackRouterConfig {
  headerTransitionPreset?: 'fade-in-place' | 'uikit';
  initialRouteName?: string;
  initialRouteParams?: NavigationParams;
  paths?: NavigationPathsConfig;
  navigationOptions?: NavigationScreenConfig<NavigationScreenOptions>;
  initialRouteKey?: string;
}

export type NavigationStackAction =
  NavigationInitAction
  | NavigationNavigateAction
  | NavigationBackAction
  | NavigationSetParamsAction
  | NavigationResetAction
  | NavigationPopAction
  | NavigationPopToTopAction;

export type NavigationTabAction =
  NavigationInitAction
  | NavigationNavigateAction
  | NavigationBackAction;

export type NavigationAction =
  NavigationInitAction
  | NavigationStackAction
  | NavigationTabAction;

export type NavigationRouteConfig = NavigationComponent | ({
  navigationOptions?: NavigationScreenConfig<any>,
  path?: string,
} & NavigationScreenRouteConfig);

export type NavigationScreenRouteConfig = NavigationComponent | {
    screen: NavigationComponent,
} | {
    getScreen: () => NavigationComponent,
};

export interface NavigationPathsConfig {
  [routeName: string]: string;
}

export interface NavigationTabRouterConfig {
  initialRouteName?: string;
  paths?: NavigationPathsConfig;
  navigationOptions?: NavigationScreenConfig<NavigationScreenOptions>;
  order?: string[]; // todo: type these as the real route names rather than 'string'

  // Does the back button cause the router to switch to the initial tab
  backBehavior?: 'none' | 'initialRoute'; // defaults `initialRoute`
}
export interface TabScene {
    route: NavigationRoute;
    focused: boolean;
    index: number;
    tintColor?: string;
}
export interface NavigationTabScreenOptions {
  title?: string;
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
  tabBarOnPress?: (options: {
    scene: TabScene,
    jumpToIndex: (index: number) => void
  }) => void;
}

export interface NavigationDrawerScreenOptions {
  title?: string;
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
  [routeName: string]: NavigationRouteConfig;
}

export type NavigationDispatch = (action: NavigationAction) => boolean;

export interface NavigationProp<S> {
  state: S;
  dispatch: NavigationDispatch;
}

export type EventType =
| 'willFocus'
| 'didFocus'
| 'willBlur'
| 'didBlur'
| 'action';

export interface NavigationEventPayload {
  type: EventType;
  action: NavigationAction;
  state: NavigationState;
  lastState: NavigationState;
}

export type NavigationEventCallback = (
  payload: NavigationEventPayload
) => void;

export interface NavigationEventSubscription {
  remove: () => void;
}

export interface NavigationScreenProp<S, P = NavigationParams> {
  state: S;
  dispatch: NavigationDispatch;
  goBack: (routeKey?: string | null) => boolean;
  navigate(options: {
    routeName: string;
    params?: NavigationParams;
    action?: NavigationAction;
    key?: string;
  }): boolean;
  navigate(
    routeNameOrOptions: string,
    params?: NavigationParams,
    action?: NavigationAction,
  ): boolean;
  getParam: <T extends keyof P>(param: T, fallback?: P[T]) => P[T];
  setParams: (newParams: P) => boolean;
  addListener: (
    eventName: string,
    callback: NavigationEventCallback
  ) => NavigationEventSubscription;
  push: (
    routeName: string,
    params?: NavigationParams,
    action?: NavigationNavigateAction
  ) => boolean;
  replace: (
    routeName: string,
    params?: NavigationParams,
    action?: NavigationNavigateAction
  ) => boolean;
  pop: (n?: number, params?: { immediate?: boolean }) => boolean;
  popToTop: (params?: { immediate?: boolean }) => boolean;
}

export interface NavigationNavigatorProps<O = {}, S = {}> {
  navigation?: NavigationProp<S>;
  screenProps?: { [key: string]: any };
  navigationOptions?: O;
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
  route: NavigationRoute;
}

export interface NavigationTransitionProps {
  // The layout of the screen container
  layout: NavigationLayout;

  // The destination navigation state of the transition
  navigation: NavigationScreenProp<NavigationState>;

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

export type NavigatorType =
| 'react-navigation/STACK'
| 'react-navigation/TABS'
| 'react-navigation/DRAWER';

export function addNavigationHelpers<S = {}>(
  navigation: {
    state: S;
    dispatch: (action: NavigationAction) => any;
    addListener?: (
      eventName: string,
      callback: NavigationEventCallback
    ) => NavigationEventSubscription;
  }
): NavigationScreenProp<S>;

export interface NavigationContainerProps {
  uriPrefix?: string | RegExp;
  onNavigationStateChange?: (
    prevNavigationState: NavigationState,
    nextNavigationState: NavigationState,
    action: NavigationAction,
  ) => void;
  style?: StyleProp<ViewStyle>;
}

export interface NavigationContainerComponent extends React.Component<
  NavigationContainerProps & NavigationNavigatorProps<any>
  > {
  dispatch: NavigationDispatch;
}

export interface NavigationContainer extends React.ComponentClass<
  NavigationContainerProps & NavigationNavigatorProps<any>
  > {
  new(props: NavigationContainerProps & NavigationNavigatorProps<any>, context?: any): NavigationContainerComponent;

  router: NavigationRouter<any, any>;
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

export interface SwitchNavigatorConfig {
  initialRouteName: string;
  resetOnBlur?: boolean;
  paths?: NavigationPathsConfig;
  backBehavior?: 'none' | 'initialRoute';
}

// Return createNavigationContainer
export function SwitchNavigator(
  routeConfigMap: NavigationRouteConfigMap,
  switchConfig?: SwitchNavigatorConfig
): NavigationContainer;

// DrawerItems
export const DrawerItems: React.ReactType;

/**
 * Drawer Navigator
 */
export interface DrawerViewConfig {
  drawerBackgroundColor?: string;
  drawerWidth?: number;
  drawerPosition?: 'left' | 'right';
  contentComponent?: React.ReactType;
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
  tabBarComponent?: React.ReactType;
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
    iconStyle?: StyleProp<ViewStyle>,
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
  lazy?: boolean;
  removeClippedSubviews?: boolean;
  initialLayout?: { height: number, width: number };
}

// From navigators/TabNavigator.js
export function TabNavigator(
  routeConfigMap: NavigationRouteConfigMap,
  drawConfig?: TabNavigatorConfig,
): NavigationContainer;

export interface TabBarTopProps {
  activeTintColor: string;
  inactiveTintColor: string;
  indicatorStyle: StyleProp<ViewStyle>;
  showIcon: boolean;
  showLabel: boolean;
  upperCaseLabel: boolean;
  allowFontScaling: boolean;
  position: AnimatedValue;
  tabBarPosition: string;
  navigation: NavigationScreenProp<NavigationState>;
  jumpToIndex: (index: number) => void;
  getLabel: (scene: TabScene) => (React.ReactNode | string);
  getOnPress: (
    previousScene: NavigationRoute,
    scene: TabScene
  ) => (args: {
    previousScene: NavigationRoute,
    scene: TabScene,
    jumpToIndex: (index: number) => void,
  }) => void;
  renderIcon: (scene: TabScene) => React.ReactElement<any>;
  labelStyle?: TextStyle;
  iconStyle?: ViewStyle;
}

export interface TabBarBottomProps {
  activeTintColor: string;
  activeBackgroundColor: string;
  adaptive?: boolean;
  inactiveTintColor: string;
  inactiveBackgroundColor: string;
  showLabel?: boolean;
  allowFontScaling: boolean;
  position: AnimatedValue;
  navigation: NavigationScreenProp<NavigationState>;
  jumpToIndex: (index: number) => void;
  getLabel: (scene: TabScene) => (React.ReactNode | string);
  getOnPress: (
    previousScene: NavigationRoute,
    scene: TabScene
  ) => (args: {
    previousScene: NavigationRoute,
    scene: TabScene,
    jumpToIndex: (index: number) => void,
  }) => void;
  getTestIDProps: (scene: TabScene) => (scene: TabScene) => any;
  renderIcon: (scene: TabScene) => React.ReactNode;
  style?: ViewStyle;
  animateStyle?: ViewStyle;
  labelStyle?: TextStyle;
  tabStyle?: ViewStyle;
  showIcon?: boolean;
}

export const TabBarTop: React.ComponentType<TabBarTopProps>;
export const TabBarBottom: React.ComponentType<TabBarBottomProps>;

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
  const POP: 'Navigation/POP';
  const POP_TO_TOP: 'Navigation/POP_TO_TOP';

  function init(options?: NavigationInitActionPayload): NavigationInitAction;
  function navigate(options: NavigationNavigateActionPayload): NavigationNavigateAction;
  function reset(options: NavigationResetActionPayload): NavigationResetAction;
  function back(options?: NavigationBackActionPayload): NavigationBackAction;
  function setParams(options: NavigationSetParamsActionPayload): NavigationSetParamsAction;
  function pop(options: NavigationPopActionPayload): NavigationPopAction;
  function popToTop(options: NavigationPopToTopActionPayload): NavigationPopToTopAction;
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
  navigation: NavigationScreenProp<NavigationState>;
  onTransitionStart?: (transitionProps: NavigationTransitionProps, prevTransitionProps?: NavigationTransitionProps) => Promise<void> | void;
  onTransitionEnd?: (transitionProps: NavigationTransitionProps, prevTransitionProps?: NavigationTransitionProps) => void;
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
): NavigationRouter<any, any>;

/**
 * Stack Router
 *
 * @desc from react-navigation/src/routers/StackRouter.js
 */
export function StackRouter(
  routeConfigs: NavigationRouteConfigMap,
  config: NavigationTabRouterConfig
): NavigationRouter<any, any>;

/**
 * Create Navigator
 *
 * @see https://github.com/react-navigation/react-navigation/blob/master/src/navigators/createNavigator.js
 */
export function createNavigator<C, S, Options>(
  router: NavigationRouter<S, Options>,
  routeConfigs?: NavigationRouteConfigMap,
  navigatorConfig?: {} | null,
  navigatorType?: NavigatorType
): (NavigationView: React.ComponentClass<C>) => NavigationNavigator<C, S, Options>;

/**
 * Create an HOC that injects the navigation and manages the navigation state
 * in case it's not passed from above.
 * This allows to use e.g. the StackNavigator and TabNavigator as root-level
 * components.
 *
 * @see https://github.com/react-navigation/react-navigation/blob/master/src/createNavigationContainer.js
 */
export function createNavigationContainer(
  Component: NavigationNavigator<any, any, any>
): NavigationContainer;
/**
 * END MANUAL DEFINITIONS OUTSIDE OF TYPEDEFINITION.JS
 */

/**
 * BEGIN CUSTOM CONVENIENCE INTERFACES
 */

export interface NavigationScreenProps<Params = NavigationParams, Options = any> {
  navigation: NavigationScreenProp<NavigationRoute<Params>, Params>;
  screenProps?: { [key: string]: any };
  navigationOptions?: NavigationScreenConfig<Options>;
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

export interface NavigationInjectedProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export function withNavigation<T = {}>(
  Component: React.ComponentType<T & NavigationInjectedProps>
): React.ComponentType<T>;

export function withNavigationFocus<T = {}>(
  Component: React.ComponentType<T & NavigationInjectedProps>
): React.ComponentType<T>;

/**
 * SafeAreaView Component
 */
export type SafeAreaViewForceInsetValue = 'always' | 'never';
export interface SafeAreaViewProps extends ViewProps {
  forceInset?: {
    top?: SafeAreaViewForceInsetValue;
    bottom?: SafeAreaViewForceInsetValue;
    left?: SafeAreaViewForceInsetValue;
    right?: SafeAreaViewForceInsetValue;
    horizontal?: SafeAreaViewForceInsetValue;
    vertical?: SafeAreaViewForceInsetValue;
  };
}

export const SafeAreaView: React.ComponentClass<SafeAreaViewProps>;
