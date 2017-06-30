// Type definitions for react-navigation 1.0
// Project: https://github.com/react-community/react-navigation
// Definitions by: Huhuanming <https://github.com/huhuanming>
//                 mhcgrq <https://github.com/mhcgrq>
//                 fangpenlin <https://github.com/fangpenlin>
//                 abrahambotros <https://github.com/abrahambotros>
//                 petejkim <https://github.com/petejkim>
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
} from 'react-native';

// @todo when we split types into common, native and web,
// we can properly change Animated.Value to its real value
type AnimatedValue = any;

export type HeaderMode = 'float' | 'screen' | 'none';

export type HeaderProps = NavigationSceneRendererProps & {
  mode: HeaderMode,
  router: NavigationRouter<
    NavigationState,
    NavigationAction,
    NavigationStackScreenOptions
  >,
  getScreenDetails: (navigationScene: NavigationScene) => NavigationScreenDetails<
    NavigationStackScreenOptions
  >,
  style: Style,
};

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
export type NavigationState = {
  /**
   * Index refers to the active child route in the routes array.
   */
  index: number,
  routes: Array<any>,
};

export type NavigationRoute<Params> = NavigationLeafRoute<Params> | NavigationStateRoute<Params>;

export type NavigationLeafRoute<Params> = {
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
  params?: Params,
};

export type NavigationStateRoute<NavigationLeafRouteParams> = NavigationLeafRoute<NavigationLeafRouteParams> & {
  index: number,
  routes: Array<NavigationRoute<any>>,
};

export type NavigationScreenOptionsGetter<Options, Action> = (
  navigation: NavigationScreenProp<NavigationRoute<any>, Action>,
  screenProps?: { [key: string]: any }
) => Options;

export type NavigationRouter<State, Action, Options> = {
  /**
   * The reducer that outputs the new navigation state for a given action, with
   * an optional previous state. When the action is considered handled but the
   * state is unchanged, the output state is null.
   */
  getStateForAction: (action: Action, lastState: (State | null)) => (State | null),

  /**
   * Maps a URI-like string to an action. This can be mapped to a state
   * using `getStateForAction`.
   */
  getActionForPathAndParams: (
    path: string,
    params?: NavigationParams
  ) => (Action | null),

  getPathAndParamsForState: (
    state: State
  ) => {
    path: string,
    params?: NavigationParams,
  },

  getComponentForRouteName: (routeName: string) => NavigationComponent,

  getComponentForState: (state: State) => NavigationComponent,

  /**
   * Gets the screen navigation options for a given screen.
   *
   * For example, we could get the config for the 'Foo' screen when the
   * `navigation.state` is:
   *
   *  {routeName: 'Foo', key: '123'}
   */
  getScreenOptions: NavigationScreenOptionsGetter<Options, Action>,
};

export type NavigationScreenOption<T> =
  T
  | ((
    navigation: NavigationScreenProp<NavigationRoute<any>, NavigationAction>,
    config: T
  ) => T);

export type Style = ViewStyle;

export type NavigationScreenDetails<T> = {
  options: T,
  state: NavigationRoute<any>,
  navigation: NavigationScreenProp<NavigationRoute<any>, NavigationAction>,
};

export type NavigationScreenOptions = {
  title?: string,
};

export type NavigationScreenConfigProps = {
  navigation: NavigationScreenProp<NavigationRoute<any>, NavigationAction>,
  screenProps: { [key: string]: any }
};

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

export type NavigationScreenComponent<T, Options> = React.ComponentClass<T> & {
  navigationOptions?: NavigationScreenConfig<Options>,
};

export type NavigationNavigator<T, State, Action, Options> = React.ComponentClass<T> & {
  router?: NavigationRouter<State, Action, Options>,
  navigationOptions?: NavigationScreenConfig<Options>,
};

export interface NavigationParams {
  [key: string]: any,
}

export interface NavigationNavigateActionPayload {
  routeName: string,
  params?: NavigationParams,

  // The action to run inside the sub-router
  action?: NavigationNavigateAction,
}

export interface NavigationNavigateAction extends NavigationNavigateActionPayload {
  type: 'Navigation/NAVIGATE',
}

export interface NavigationBackActionPayload {
  key?: string | null,
}

export interface NavigationBackAction extends NavigationBackActionPayload {
  type: 'Navigation/BACK',
}

export interface NavigationSetParamsActionPayload {
  // The key of the route where the params should be set
  key: string,

  // The new params to merge into the existing route params
  params?: NavigationParams,
}

export interface NavigationSetParamsAction extends NavigationSetParamsActionPayload {
  type: 'Navigation/SET_PARAMS',
}

export interface NavigationInitActionPayload {
  params?: NavigationParams,
}

export interface NavigationInitAction extends NavigationInitActionPayload {
  type: 'Navigation/INIT',
}

export interface NavigationResetActionPayload {
  index: number,
  key?: string | null,
  actions: Array<NavigationNavigateAction>,
}

export interface NavigationResetAction extends NavigationResetActionPayload {
  type: 'Navigation/RESET',
}

export interface NavigationUriActionPayload {
  uri: string,
}

export interface NavigationUriAction extends NavigationUriActionPayload {
  type: 'Navigation/URI',
}

export interface NavigationStackViewConfig {
  mode?: 'card' | 'modal',
  headerMode?: HeaderMode,
  cardStyle?: Style,
  transitionConfig?: () => TransitionConfig,
  onTransitionStart?: () => void,
  onTransitionEnd?: () => void,
}

export type NavigationStackScreenOptions = NavigationScreenOptions & {
  header?: (React.ReactElement<any> | ((headerProps: HeaderProps) => React.ReactElement<any>)) | null,
  headerTitle?: string | React.ReactElement<any>,
  headerTitleStyle?: Style,
  headerTintColor?: string,
  headerLeft?: React.ReactElement<any>,
  headerBackTitle?: string,
  headerTruncatedBackTitle?: string,
  headerBackTitleStyle?: Style,
  headerPressColorAndroid?: string,
  headerRight?: React.ReactElement<any>,
  headerStyle?: Style,
  gesturesEnabled?: boolean,
};

export interface NavigationStackRouterConfig {
  initialRouteName?: string,
  initialRouteParams?: NavigationParams,
  paths?: NavigationPathsConfig,
  navigationOptions?: NavigationScreenConfig<NavigationStackScreenOptions>,
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

export type NavigationPathsConfig = {
  [routeName: string]: string,
};

export interface NavigationTabRouterConfig {
  initialRouteName?: string,
  paths?: NavigationPathsConfig,
  navigationOptions?: NavigationScreenConfig<NavigationTabScreenOptions>,
  order?: Array<string>, // todo: type these as the real route names rather than 'string'

  // Does the back button cause the router to switch to the initial tab
  backBehavior?: 'none' | 'initialRoute', // defaults `initialRoute`
}

export type NavigationTabScreenOptions = NavigationScreenOptions & {
  tabBarIcon?:
    React.ReactElement<any>
    | ((options: { tintColor: (string | null), focused: boolean }) => (React.ReactElement<
      any
    > | null)),
  tabBarLabel?:
    string
    | React.ReactElement<any>
    | ((options: { tintColor: (string | null), focused: boolean }) => (React.ReactElement<
      any
    > | null)),
  tabBarVisible?: boolean,
};

export type NavigationDrawerScreenOptions = NavigationScreenOptions & {
  drawerIcon?:
    React.ReactElement<any>
    | ((options: { tintColor: (string | null), focused: boolean }) => (React.ReactElement<
      any
    > | null)),
  drawerLabel?:
    React.ReactElement<any>
    | ((options: { tintColor: (string | null), focused: boolean }) => (React.ReactElement<
      any
    > | null)),
};

export type NavigationRouteConfigMap = {
  [routeName: string]: NavigationRouteConfig<any>,
};

export type NavigationDispatch<A> = (action: A) => boolean;

export type NavigationProp<S, A> = {
  state: S,
  dispatch: NavigationDispatch<A>,
};

export type NavigationScreenProp<S, A> = {
  state: S,
  dispatch: NavigationDispatch<A>,
  goBack: (routeKey?: (string | null)) => boolean,
  navigate: (
    routeName: string,
    params?: NavigationParams,
    action?: NavigationAction
  ) => boolean,
  setParams: (newParams: NavigationParams) => boolean,
};

export type NavigationNavigatorProps<T> = {
  navigation?: NavigationProp<T, NavigationAction>,
  screenProps?: { [key: string]: any }
  navigationOptions?: any,
};

/**
 * Gestures, Animations, and Interpolators
 */

export type NavigationGestureDirection = 'horizontal' | 'vertical';

export type NavigationLayout = {
  height: AnimatedValue,
  initHeight: number,
  initWidth: number,
  isMeasured: boolean,
  width: AnimatedValue,
};

export type NavigationScene = {
  index: number,
  isActive: boolean,
  isStale: boolean,
  key: string,
  route: NavigationRoute<any>,
};

export type NavigationTransitionProps = {
  // The layout of the screen container
  layout: NavigationLayout,

  // The destination navigation state of the transition
  navigation: NavigationScreenProp<NavigationState, NavigationAction>,

  // The progressive index of the transitioner's navigation state.
  position: AnimatedValue,

  // The value that represents the progress of the transition when navigation
  // state changes from one to another. Its numberic value will range from 0
  // to 1.
  //  progress.__getAnimatedValue() < 1 : transtion is happening.
  //  progress.__getAnimatedValue() == 1 : transtion completes.
  progress: AnimatedValue,

  // All the scenes of the transitioner.
  scenes: Array<NavigationScene>,

  // The active scene, corresponding to the route at
  // `navigation.state.routes[navigation.state.index]`. When rendering
  // NavigationSceneRendererPropsIndex, the scene does not refer to the active
  // scene, but instead the scene that is being rendered. The index always
  // is the index of the scene
  scene: NavigationScene,
  index: number,

  screenProps?: { [key: string]: any }
};

// The scene renderer props are nearly identical to the props used for rendering
// a transition. The exception is that the passed scene is not the active scene
// but is instead the scene that the renderer should render content for.
export type NavigationSceneRendererProps = NavigationTransitionProps;

export type NavigationTransitionSpec = {
  duration?: number,
  // An easing function from `Easing`.
  easing?: (t: number) => number,
  // A timing function such as `Animated.timing`.
  timing?: (value: AnimatedValue, config: any) => any,
};

/**
 * Describes a visual transition from one screen to another.
 */
export type TransitionConfig = {
  // The basics properties of the animation, such as duration and easing
  transitionSpec?: NavigationTransitionSpec,
  // How to animate position and opacity of the screen
  // based on the value generated by the transitionSpec
  screenInterpolator?: (props: NavigationSceneRendererProps) => any,
};

export type NavigationAnimationSetter = (
  position: AnimatedValue,
  newState: NavigationState,
  lastState: NavigationState
) => void;

export type NavigationSceneRenderer = () => (React.ReactElement<any> | null);

export type NavigationStyleInterpolator = (
  props: NavigationSceneRendererProps
) => Style;

export type LayoutEvent = {
  nativeEvent: {
    layout: {
      x: number,
      y: number,
      width: number,
      height: number,
    },
  },
};

/**
 * END FLOW TYPEDEFINITION.JS PORT
 */


/**
 * BEGIN MANUAL DEFINITIONS OUTSIDE OF TYPEDEFINITION.JS
 */

// From addNavigatorHelpers.js
export function addNavigationHelpers<S>(navigation: NavigationProp<S, NavigationAction>): NavigationScreenProp<S, NavigationAction>;

// From createNavigationContainer.js
interface NavigationContainerProps {
  uriPrefix?: string | RegExp,
  onNavigationStateChange?: (
    prevNavigationState: NavigationState,
    nextNavigationState: NavigationState,
    action: NavigationAction,
  ) => void,
  style?: ViewStyle,
}

export interface NavigationContainer extends React.ComponentClass<
  NavigationContainerProps & NavigationNavigatorProps<any>
> {
  router: NavigationRouter<any, any, any>
  screenProps: { [key: string]: any },
  navigationOptions: any,
  state: { nav: NavigationState | null },
}

export interface StackNavigatorConfig extends NavigationStackViewConfig, NavigationStackRouterConfig {
  containerOptions?: any,
}

// Return createNavigationContainer
export function StackNavigator<T>(
  routeConfigMap: NavigationRouteConfigMap,
  stackConfig?: StackNavigatorConfig,
): NavigationContainer;

/**
 * Drawer Navigator
 */
export interface DrawerViewConfig {
  drawerWidth: number,
  drawerPosition: 'left' | 'right',
  contentComponent: React.ComponentClass<any>,
  contentOptions?: any,
  style?: ViewStyle,
}
export interface DrawerNavigatorConfig extends NavigationTabRouterConfig, DrawerViewConfig {
  containerConfig?: any,
  contentOptions?: {
    activeTintColor?: string,
    activeBackgroundColor?: string,
    inactiveTintColor?: string,
    inactiveBackgroundColor?: string,
    style?: ViewStyle,
    labelStyle?: TextStyle,
  }
}

export function DrawerNavigator<T>(
  routeConfigMap: NavigationRouteConfigMap,
  drawerConfig?: DrawerNavigatorConfig,
): NavigationContainer;

/**
 * Tab Navigator
 */

// From views/TabView/TabView.js
export interface TabViewConfig {
  tabBarComponent?: React.ComponentClass<any>,
  tabBarPosition?: 'top' | 'bottom',
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
  },
  swipeEnabled?: boolean,
  animationEnabled?: boolean,
  lazy?: boolean,
}

// From navigators/TabNavigator.js
export interface TabNavigatorConfig extends NavigationTabRouterConfig, TabViewConfig { }

// From navigators/TabNavigator.js
export function TabNavigator<T>(
  routeConfigMap: NavigationRouteConfigMap,
  drawConfig?: TabNavigatorConfig,
): NavigationContainer;

export const TabBarTop: React.ComponentClass<any>;
export const TabBarBottom: React.ComponentClass<any>;

/**
 * NavigationActions
 */
export namespace NavigationActions {
  export function init(options?: NavigationInitActionPayload): NavigationInitAction;
  export function navigate(options: NavigationNavigateActionPayload): NavigationNavigateAction;
  export function reset(options: NavigationResetActionPayload): NavigationResetAction;
  export function back(options?: NavigationBackActionPayload): NavigationBackAction;
  export function setParams(options: NavigationSetParamsActionPayload): NavigationSetParamsAction;
}

/**
 * Transitioner
 * @desc From react-navigation/src/views/Transitioner.js
 */
interface TransitionerProps {
  configureTransition: (
    transitionProps: NavigationTransitionProps,
    prevTransitionProps?: NavigationTransitionProps
  ) => NavigationTransitionSpec,
  navigation: NavigationScreenProp<NavigationState, NavigationAction>,
  onTransitionEnd?: () => void,
  onTransitionStart?: () => void,
  render: (
    transitionProps: NavigationTransitionProps,
    prevTransitionProps?: NavigationTransitionProps
  ) => any
  style?: ViewStyle,
}

interface TransitionerState {
  layout: NavigationLayout,
  position: Animated.Value,
  progress: Animated.Value,
  scenes: Array<NavigationScene>,
}

export class Transitioner extends React.Component<
  TransitionerProps,
  TransitionerState
> { }

/**
 * END MANUAL DEFINITIONS OUTSIDE OF TYPEDEFINITION.JS
 */


/**
 * BEGIN CUSTOM CONVENIENCE INTERFACES
 */

export interface NavigationScreenProps<Params> {
  navigation: NavigationScreenProp<NavigationRoute<Params>, NavigationAction>,
  screenProps?: { [key: string]: any },
  navigationOptions?: NavigationScreenConfig<any>,
}

/**
 * END CUSTOM CONVENIENCE INTERFACES
 */
