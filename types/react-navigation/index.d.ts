// Type definitions for react-navigation 1.0
// Project: https://github.com/react-community/react-navigation
// Definitions by: Huhuanming <https://github.com/huhuanming>
//                 mhcgrq <https://github.com/mhcgrq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react'
import {
  Animated,
  ViewStyle,
  TextStyle
} from 'react-native'

export type HeaderMode = 'float' | 'screen' | 'none'

export function addNavigationHelpers(params: any): any

type SubViewProps = NavigationSceneRendererProps & {
  onNavigateBack?: () => void,
}

type SubViewRenderer = (subViewProps: SubViewProps) => React.ReactElement<any> | undefined

export type HeaderProps = NavigationSceneRendererProps & {
  mode: HeaderMode,
  onNavigateBack?: () => void,
  renderLeftComponent: SubViewRenderer,
  renderRightComponent: SubViewRenderer,
  renderTitleComponent: SubViewRenderer,
  tintColor?: string,
  router: NavigationRouter,
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
  index: number,
  routes: any[],
}

export interface NavigationRoute<P> {
  /**
   * React's key used by some navigators. No need to specify these manually,
   * they will be defined by the router.
   */
  key: string,
  /**
   * For example 'Home'.
   * This is used as a key in a route config when creating a navigator.
   */
  routeName: string,
  /**
   * Path is an advanced feature used for deep linking and on the web.
   */
  path?: string,
  /**
   * Params passed to this route when navigating to it,
   * e.g. `{ car_id: 123 }` in a route that displays a car.
   */
  params: P,
}

export interface NavigationRouter {
  /**
   * The reducer that outputs the new navigation state for a given action, with
   * an optional previous state. When the action is considered handled but the
   * state is unchanged, the output state is null.
   */
  getStateForAction: (
    action: NavigationAction,
    lastState?: NavigationState,
  ) => NavigationState | undefined,

  /**
   * Maps a URI-like string to an action. This can be mapped to a state
   * using `getStateForAction`.
   */
  getActionForPathAndParams: (path: string, params?: NavigationParams) => NavigationAction | undefined,

  getPathAndParamsForState: (state: NavigationState) => { path: string, params?: NavigationParams },

  getComponentForRouteName: (routeName: string) => NavigationComponent,

  getComponentForState: (state: NavigationState) => NavigationComponent,

  /**
   * Gets the screen config for a given navigation screen prop.
   *
   * For example, we could get the config for a 'Foo' screen when the
   * `navigation.state` is:
   *
   *  {routeName: 'Foo', key: '123'}
   */
  getScreenConfig: (
    navigation: NavigationScreenProp<any, NavigationAction>,
    optionName: string,
  ) => any, // todo, fix this any type to become a key of NavigationScreenConfig
}

type NavigationFunc<E> = (navigation: NavigationScreenProp<any, NavigationAction>, config: E) => E

export type NavigationScreenOption<T> = T | NavigationFunc<T>

export interface HeaderConfig {
  /**
   * Title string used by the navigation bar, or a custom component
   */
  title?: string | React.ReactElement<any>;

  /**
   * Whether the navigation bar is visible.
   */
  visible?: boolean;

  /**
   * Renders a custom right component
   */
  right?: React.ReactElement<any>,

  /**
   * Renders a custom left component
   */
  left?: React.ReactElement<any>

  /**
   * Style passed into navigation bar container
   */
  style?: ViewStyle,

  /**
   * Style passed into navigation bar title
   */
  titleStyle?: TextStyle,

  // // Style of title text
  // titleTextStyle?: $NavigationThunk<Object>,
  // // Tint color of navigation bar contents
  // tintColor?: $NavigationThunk<string>,
  // // Navigation bar height
  // height?: $NavigationThunk<number>,
  // // Navigation bar translucentcy
  // translucent?: $NavigationThunk<boolean>,
  // // Renders a custom left component
  // renderLeft?: React.Element<*> |
  //   (navigation: NavigationProp<*>, canGoBack: boolean) => React.Element<*>,
  // // Renders a custom navigation bar background
  // renderBackground?: $NavigationThunk<React.Element<*>>,
}

export interface TabBarConfig {
  /**
   * Icon used by the tab bar.
   */
  icon?: (options: { tintColor: string, focused: boolean }) => React.ReactElement<any> | undefined;
  /**
   * Label text used by the tab bar.
   */
  label?: string | React.ReactElement<any>;
}

export interface DrawerConfig {
  /**
   * Icon used by the drawer.
   */
  icon?: (options: { tintColor: string, focused: boolean }) => React.ReactElement<any> | undefined;
  /**
   * Label text used by the drawer.
   */
  label?: string;
}

export interface CardStackConfig {
  /**
   * Whether you can use gestures to dismiss this screen.
   * Defaults to true on iOS, false on Android.
   */
  gesturesEnabled?: boolean;
}

export interface NavigationScreenOptions {
  /**
   * Title is rendered by certain navigators, e.g. the tab navigator,
   * or on web as the title of the browser tab.
   */
  title?: NavigationScreenOption<string>;
  /**
   * Options passed to the navigation bar for this screen.
   */
  header?: NavigationScreenOption<HeaderConfig>;
  /**
   * Options passed to the tab bar for this screen.
   */
  tabBar?: NavigationScreenOption<TabBarConfig>;
  /**
   * Options passed to the drawer for this screen.
   */
  drawer?: NavigationScreenOption<DrawerConfig>;
  /**
   * Options passed to the card stack for this screen.
   */
  cardStack?: NavigationScreenOption<CardStackConfig>;
}

export interface NavigationScreenConfig {
  title?: string,
  header?: HeaderConfig,
  tabBar?: TabBarConfig,
  drawer?: DrawerConfig;
}

export type NavigationComponent = NavigationScreenComponent<any> | NavigationNavigator<any>

export type NavigationScreenComponent<T> = React.ComponentClass<T> & {
  navigationOptions?: NavigationScreenOptions,
}

export type NavigationNavigator<T> = React.ComponentClass<T> & {
  router?: NavigationRouter,
  navigationOptions?: NavigationScreenOptions,
}

export interface NavigationParams {
  [key: string]: any,
}

export interface NavigationNavigateAction {
  type?: 'Navigation/NAVIGATE',
  routeName: string,
  params?: NavigationParams,

  // The action to run inside the sub-router
  action?: NavigationNavigateAction,
}

export interface NavigationBackAction {
  type?: 'Navigation/BACK',
  key?: string,
}

export interface NavigationSetParamsAction {
  type?: 'Navigation/SET_PARAMS',

  // The key of the route where the params should be set
  key: string,

  // The new params to merge into the existing route params
  params?: NavigationParams,
}

export interface NavigationInitAction {
  type?: 'Navigation/INIT',
  params?: NavigationParams,
}

export interface NavigationResetAction {
  type?: 'Navigation/RESET',
  index: number,
  actions: NavigationNavigateAction[],
}

export interface NavigationUriAction {
  type?: 'Navigation/URI',
  uri: string,
}

export interface NavigationContainerOptions {
  // This is used to extract the path from the URI passed to the app for a deep link
  URIPrefix?: string,
}

export interface NavigationContainerConfig {
  containerOptions?: NavigationContainerOptions,
}

export interface NavigationStackViewConfig {
  mode?: 'card' | 'modal',
  headerMode?: HeaderMode,
  headerComponent?: React.ComponentClass<HeaderProps>,
  cardStyle?: ViewStyle,
  onTransitionStart?: () => void,
  onTransitionEnd?: () => void,
}

export interface NavigationStackRouterConfig {
  initialRouteName?: string,
  initialRouteParams?: NavigationParams,
  paths?: NavigationPathsConfig,
  navigationOptions?: NavigationScreenOptions,
}

export type NavigationStackAction =
  NavigationInitAction
  | NavigationNavigateAction
  | NavigationBackAction
  | NavigationSetParamsAction
  | NavigationResetAction

export type NavigationTabAction =
  NavigationInitAction
  | NavigationNavigateAction
  | NavigationBackAction

export type NavigationAction =
  NavigationInitAction
  | NavigationStackAction
  | NavigationTabAction

export namespace NavigationActions {
  function navigate(options: NavigationNavigateAction): any;
  function reset(options: NavigationResetAction): any;
  function back(options?: NavigationBackAction): any;
  function setParams(options: NavigationSetParamsAction): any;
}

export type NavigationRouteConfig<T> = T & {
  navigationOptions?: NavigationScreenOptions,
  path?: string,
}

export interface NavigationPathsConfig {
  [routeName: string]: string,
}

export interface NavigationTabRouterConfig {
  initialRouteName?: string,
  paths?: NavigationPathsConfig,
  navigationOptions?: NavigationScreenOptions,
  order?: string[], // todo: type these as the real route names rather than 'string'

  // Does the back button cause the router to switch to the initial tab
  backBehavior?: 'none' | 'initialRoute', // defaults `initialRoute`
}

export interface NavigationRouteConfigMap {
  [routeName: string]: NavigationRouteConfig<any>,
}

export type NavigationDispatch<A> = (action: A) => boolean

export interface NavigationProp<S, A> {
  state: S,
  dispatch: NavigationDispatch<A>,
}

export type NavigationScreenProp<S, A> = NavigationProp<S, A> & {
  goBack: (routeKey?: string) => boolean,
  navigate: (routeName: string, params?: NavigationParams, action?: NavigationAction) => boolean,
  setParams: (newParams: NavigationParams) => boolean,
}

export interface NavigationNavigatorProps<P> {
  navigation: NavigationProp<NavigationRoute<P>, NavigationAction>,
}

/**
 * Gestures, Animations, and Interpolators
 */

export type NavigationAnimatedValue = Animated.Value

export type NavigationGestureDirection = 'horizontal' | 'vertical'

export interface NavigationLayout {
  height: NavigationAnimatedValue,
  initHeight: number,
  initWidth: number,
  isMeasured: boolean,
  width: NavigationAnimatedValue,
}

export interface NavigationScene {
  index: number,
  isActive: boolean,
  isStale: boolean,
  key: string,
  route: any,
}

export interface NavigationTransitionProps {
  // The layout of the transitioner of the scenes.
  layout: NavigationLayout,

  // The navigation state of the transitioner.
  navigationState: NavigationState,

  // The progressive index of the transitioner's navigation state.
  position: NavigationAnimatedValue,

  // The value that represents the progress of the transition when navigation
  // state changes from one to another. Its numberic value will range from 0
  // to 1.
  //  progress.__getAnimatedValue() < 1 : transtion is happening.
  //  progress.__getAnimatedValue() == 1 : transtion completes.
  progress: NavigationAnimatedValue,

  // All the scenes of the transitioner.
  scenes: NavigationScene[],

  // The active scene, corresponding to the route at
  // `navigationState.routes[navigationState.index]`. When rendering
  // NavigationSceneRendererPropsIndex, the scene does not refer to the active
  // scene, but instead the scene that is being rendered. The index always
  // is the index of the scene
  scene: NavigationScene,
  index: number,
  navigation: NavigationScreenProp<any, NavigationAction>,

  // The gesture distance for `horizontal` and `vertical` transitions
  gestureResponseDistance?: number,
}

// The scene renderer props are nearly identical to the props used for rendering
// a transition. The exception is that the passed scene is not the active scene
// but is instead the scene that the renderer should render content for.
export type NavigationSceneRendererProps = NavigationTransitionProps

export interface NavigationPanHandlers {
  onMoveShouldSetResponder: () => void,
  onMoveShouldSetResponderCapture: () => void,
  onResponderEnd: () => void,
  onResponderGrant: () => void,
  onResponderMove: () => void,
  onResponderReject: () => void,
  onResponderRelease: () => void,
  onResponderStart: () => void,
  onResponderTerminate: () => void,
  onResponderTerminationRequest: () => void,
  onStartShouldSetResponder: () => void,
  onStartShouldSetResponderCapture: () => void,
}

export interface NavigationTransitionSpec {
  duration?: number,
  // An easing function from `Easing`.
  easing?: () => any,
  // A timing function such as `Animated.timing`.
  timing?: (value: NavigationAnimatedValue, config: any) => any,
}

export type NavigationAnimationSetter = (
  position: NavigationAnimatedValue,
  newState: NavigationState,
  lastState: NavigationState,
) => void

export type NavigationSceneRenderer = (
  props: NavigationSceneRendererProps,
) => React.ReactElement<any>

export type NavigationStyleInterpolator = (
  props: NavigationSceneRendererProps,
) => ViewStyle

export interface LayoutEvent {
  nativeEvent: {
    layout: {
      x: number;
      y: number;
      width: number;
      height: number;
    },
  }
}

interface NavigationContainerProps {
  navigation: NavigationProp<any, NavigationAction>
  onNavigationStateChange?: (
    preNavigationState: NavigationState,
    nextNavigationState: NavigationState,
  ) => void
}

interface NavigationContainerState {
  nav?: NavigationState
}

export interface NavigationContainer extends React.ComponentClass<
  NavigationContainerProps
> {
  router: any
}

export type StackNavigatorConfig =
  NavigationContainerConfig
  & NavigationStackViewConfig
  & NavigationStackRouterConfig;

// Return createNavigationContainer
export function StackNavigator(
  routeConfigMap: NavigationRouteConfigMap,
  stackConfig?: StackNavigatorConfig,
): NavigationContainer

/**
 * Drawer Navigator
 */
export interface DrawNavigatorConfig {
  drawerWidth?: number,
  drawerPosition?: 'left'|'right',
  contentComponent?: React.ReactElement<any>,
  contentOptions?: {
    activeTintColor?: string,
    activeBackgroundColor?: string,
    inactiveTintColor?: string,
    inactiveBackgroundColor?: string,
    style?: ViewStyle,
    labelStyle?: TextStyle
  }
}

export function DrawerNavigator(
  routeConfigMap: NavigationRouteConfigMap,
  drawConfig?: DrawNavigatorConfig,
): NavigationContainer;

/**
 * Tab Navigator
 */
export interface TabNavigatorConfig {
  tabBarComponent?: React.ReactElement<any>,
  tabBarPosition?: 'top'|'bottom',
  swipeEnabled?: boolean,
  animationEnabled?: boolean,
  lazy?: boolean,
  tabBarOptions?: {
    activeTintColor?: string,
    activeBackgroundColor?: string,
    inactiveTintColor?: string,
    inactiveBackgroundColor?: string,
    showLabel?: boolean,
    style?: ViewStyle,
    labelStyle?: TextStyle,

    // Top
    showIcon?: boolean,
    upperCaseLabel?: boolean,
    pressColor?: string,
    pressOpacity?: number,
    scrollEnabled?: boolean,
    tabStyle?: ViewStyle,
    indicatorStyle?: ViewStyle
  }
  initialRouteName?: string,
  order?: string[],
  paths?: any     // TODO: better def
  backBehavior?: 'initialRoute'|'none'
}

export function TabNavigator(
  routeConfigMap: NavigationRouteConfigMap,
  drawConfig?: TabNavigatorConfig,
): NavigationContainer;
/**
 * Screen Options
 */
export interface StackNavigatorScreenOptions {
  title?: string;
  headerVisible?: boolean;
  headerTitle?: string|React.ReactElement<any>;
  headerBackTitle?: string|null;
  headerTruncatedBackTitle?: string;
  headerRight?: React.ReactElement<any>;
  headerLeft?: React.ReactElement<any>;
  headerStyle?: ViewStyle;
  headerTitleStyle?: ViewStyle;
  headerTintColor?: string;
  headerPressColorAndroid?: string;
  gesturesEnabled?: boolean;
}

export interface TabNavigatorScreenOptions {
  title?: string;
  tabBarVisible?: boolean;
  tabBarIcon?: React.ReactElement<any>;
  tabBarLaben?: string
      |React.ReactElement<any>
      | ((options: {focused: boolean, tintColor: string}) => React.ReactElement<any>)
  ;
}

export interface DrawerNavigatorScreenOptions {
  title?: string;
  drawerLabel?: string
      |React.ReactElement<any>
      | ((options: {focused: boolean, tintColor: string}) => React.ReactElement<any>)
  ;
  drawerIcon?: React.ReactElement<any>
      | ((options: {focused: boolean, tintColor: string}) => React.ReactElement<any>)
  ;
}
