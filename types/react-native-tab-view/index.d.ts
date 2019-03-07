// Type definitions for react-native-tab-view 1.0
// Project: https://github.com/react-native-community/react-native-tab-view
// Definitions by: Kalle Ott <https://github.com/kaoDev>
//                 Kyle Roach <https://github.com/iRoachie>
//                 Tim Wang <https://github.com/timwangdev>
//                 Gerardo Pacheco <https://github.com/geriux>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import { PureComponent, ReactNode, ComponentType } from 'react'
import {
  Animated,
  StyleProp,
  ViewStyle,
  EasingFunction
} from 'react-native'

export type Key = { key: string }
export type RouteBase = Key & { testID?: string }

export type Route<T extends RouteBase = RouteBase> = T

export type NavigationState<T extends Key> = {
  index: number
  routes: T[]
}

export type Scene<T> = {
  route: T
  focused: boolean
  index: number
}

export type Layout = {
  height: number
  width: number
}

export type SceneRendererProps<T extends RouteBase = RouteBase> = {
  layout: Layout & {
    measured: boolean
  }
  navigationState: NavigationState<T>
  position: Animated.Value
  jumpTo: (key: string) => void
  getLastPosition: () => number
  subscribe: (
    event: SubscriptionName,
    callback: () => void
  ) => { remove: () => void }
}

export type SubscriptionName = 'reset' | 'position'

export type TransitionProps = {
  progress: number
}

export type NavigationTransitionSpec = {
  duration?: number,
  // An easing function from `Easing`.
  easing?: EasingFunction,
  // A timing function such as `Animated.timing`.
  timing?: (value: Animated.Value, config: any) => any,
}

export type TransitionConfigurator = (
  currentTransitionProps: TransitionProps,
  nextTransitionProps: TransitionProps
) => NavigationTransitionSpec

export type PagerProps = {
  configureTransition?: TransitionConfigurator
  animationEnabled?: boolean
  swipeEnabled?: boolean
  swipeDistanceThreshold?: number
  swipeVelocityThreshold?: number
  children?: ReactNode
}

export type TabViewProps<
  T extends RouteBase = RouteBase
> = PagerProps & {
  navigationState: NavigationState<T>
  tabBarPosition?: 'bottom' | 'top'
  onIndexChange: (index: number) => void
  onPositionChange?: (props: { value: number }) => void
  initialLayout?: Layout
  canJumpToTab?: (route: T) => boolean
  renderPager?: (props: SceneRendererProps<T> & PagerProps) => ReactNode
  renderScene: (props: SceneRendererProps<T> & Scene<T>) => ReactNode
  renderTabBar?: (props: SceneRendererProps<T>) => ReactNode
  lazy?: boolean
  style?: StyleProp<ViewStyle>
}

export class TabView<T extends Route = Route> extends PureComponent<TabViewProps<T>> {}

export type GestureEvent = {
  nativeEvent: {
    changedTouches: any[]
    identifier: number
    locationX: number
    locationY: number
    pageX: number
    pageY: number
    target: number
    timestamp: number
    touches: any[]
  }
}

export type GestureState = {
  stateID: number
  moveX: number
  moveY: number
  x0: number
  y0: number
  dx: number
  dy: number
  vx: number
  vy: number
  numberActiveTouches: number
}

export type GestureHandler = (event: GestureEvent, state: GestureState) => void

export type PagerPanProps<
  T extends RouteBase = RouteBase
> = SceneRendererProps<T> & {
  configureTransition?: TransitionConfigurator
  animationEnabled?: boolean
  swipeEnabled?: boolean
  swipeDistanceThreshold?: number
  swipeVelocityThreshold?: number
  onSwipeStart?: GestureHandler
  onSwipeEnd?: GestureHandler
  children?: ReactNode
}

export type DefaultTransitionSpec = {
  timing: typeof Animated.spring
  tension: 300
  friction: 35
}

export class PagerPan<T extends Route = Route> extends PureComponent<PagerPanProps<T>> {
  static defaultProps: {
    configureTransition: () => DefaultTransitionSpec
    initialLayout: {
      height: 0
      width: 0
    }
    swipeDistanceThreshold: 120
    swipeVelocityThreshold: 0.25
  }
}

export type ScrollEvent = {
  nativeEvent: {
    contentOffset: {
      x: number
      y: number
    }
  }
}

export type PagerScrollProps<
  T extends RouteBase = RouteBase
> = SceneRendererProps<T> & {
  animationEnabled?: boolean
  swipeEnabled?: boolean
  children?: ReactNode
}

export class PagerScroll<T extends Route = Route> extends PureComponent<PagerScrollProps<T>> {}

export type PageScrollEvent = {
  nativeEvent: {
    position: number
    offset: number
  }
}

export type PageScrollState = 'dragging' | 'settling' | 'idle'

export type PagerAndroidProps<
  T extends RouteBase = RouteBase
> = SceneRendererProps<T> & {
  animationEnabled?: boolean
  swipeEnabled?: boolean
  children?: ReactNode
}

export class PagerAndroid<T extends Route = Route> extends PureComponent<PagerAndroidProps<T>> {}

export type IndicatorProps<
  T extends RouteBase = RouteBase
> = SceneRendererProps<T> & {
  width: Animated.Value
}

export type TabBarProps<T extends RouteBase = RouteBase> = SceneRendererProps<
  T
> & {
  getLabelText?: (scene: Scene<T>) => string | undefined | null
  getAccessible?: (scene: Scene<T>) => boolean
  getAccessibilityLabel?: (scene: Scene<T>) => string | undefined | null
  getTestID?: (scene: Scene<T>) => string | undefined | null
  renderIcon?: (scene: Scene<T>) => ReactNode
  renderLabel?: (scene: Scene<T>) => ReactNode
  renderIndicator?: (props: IndicatorProps<T>) => ReactNode
  renderBadge?: (scene: Scene<T>) => ReactNode
  onTabPress?: (scene: Scene<T>) => void
  onTabLongPress?: (scene: Scene<T>) => void
  activeColor?: string
  inactiveColor?: string
  pressColor?: string
  pressOpacity?: number
  scrollEnabled?: boolean
  bounces?: boolean
  useNativeDriver?: boolean;
  tabStyle?: StyleProp<ViewStyle>
  indicatorStyle?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
}

export class TabBar<T extends Route = Route> extends PureComponent<TabBarProps<T>> {}

export function SceneMap(scenes: {
  [key: string]: ComponentType<any>
}): (props: { route: Route }) => ReactNode
