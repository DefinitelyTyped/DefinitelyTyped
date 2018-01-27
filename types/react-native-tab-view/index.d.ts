// Type definitions for react-native-tab-view 0.0
// Project: https://github.com/react-native-community/react-native-tab-view
// Definitions by: Kalle Ott <https://github.com/kaoDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

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
  jumpToIndex: (index: number) => void
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

export type TabViewAnimatedProps<
  T extends RouteBase = RouteBase
> = PagerProps & {
  navigationState: NavigationState<T>
  onIndexChange: (index: number) => void
  onPositionChange?: (props: { value: number }) => void
  initialLayout?: Layout
  canJumpToTab?: (route: T) => boolean
  renderPager?: (props: SceneRendererProps<T> & PagerProps) => ReactNode
  renderScene: (props: SceneRendererProps<T> & Scene<T>) => ReactNode
  renderHeader?: (props: SceneRendererProps<T>) => ReactNode
  renderFooter?: (props: SceneRendererProps<T>) => ReactNode
  lazy?: boolean
  style?: StyleProp<ViewStyle>
}

export class TabViewAnimated<T extends Route = Route> extends PureComponent<
  TabViewAnimatedProps<T>,
  any
> {}

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

export type TabViewPagerPanProps<
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

export class TabViewPagerPan<T extends Route = Route> extends PureComponent<
  TabViewPagerPanProps<T>,
  void
> {
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

export type TabViewPagerScrollProps<
  T extends RouteBase = RouteBase
> = SceneRendererProps<T> & {
  animationEnabled?: boolean
  swipeEnabled?: boolean
  children?: ReactNode
}

export class TabViewPagerScroll<T extends Route = Route> extends PureComponent<
  TabViewPagerScrollProps<T>,
  any
> {}

export type PageScrollEvent = {
  nativeEvent: {
    position: number
    offset: number
  }
}

export type PageScrollState = 'dragging' | 'settling' | 'idle'

export type TabViewPagerAndroidProps<
  T extends RouteBase = RouteBase
> = SceneRendererProps<T> & {
  animationEnabled?: boolean
  swipeEnabled?: boolean
  children?: ReactNode
}

export class TabViewPagerAndroid<T extends Route = Route> extends PureComponent<
  TabViewPagerAndroidProps<T>,
  void
> {}

export type IndicatorProps<
  T extends RouteBase = RouteBase
> = SceneRendererProps<T> & {
  width: Animated.Value
}

export type TabBarProps<T extends RouteBase = RouteBase> = SceneRendererProps<
  T
> & {
  scrollEnabled?: boolean
  pressColor?: string
  pressOpacity?: number
  getLabelText?: (scene: Scene<T>) => string | undefined | null
  renderLabel?: (scene: Scene<T>) => ReactNode
  renderIcon?: (scene: Scene<T>) => ReactNode
  renderBadge?: (scene: Scene<T>) => ReactNode
  renderIndicator?: (props: IndicatorProps<T>) => ReactNode
  onTabPress?: (scene: Scene<T>) => void
  tabStyle?: StyleProp<ViewStyle>
  indicatorStyle?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
}

export class TabBar<T extends Route = Route> extends PureComponent<
  TabBarProps<T>,
  any
> {}

export function SceneMap(scenes: {
  [key: string]: ComponentType<any>
}): (props: { route: Route }) => ReactNode
