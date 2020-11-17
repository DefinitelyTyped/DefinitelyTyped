import * as React from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { Route } from '../../../native';
import type { Props as HeaderContainerProps } from '../Header/HeaderContainer';
import type { Scene, Layout, StackHeaderMode, StackCardMode, TransitionPreset } from '../../types';
declare type Props = TransitionPreset & {
    index: number;
    active: boolean;
    focused: boolean;
    closing: boolean;
    layout: Layout;
    gesture: Animated.Value;
    scene: Scene<Route<string>>;
    safeAreaInsetTop: number;
    safeAreaInsetRight: number;
    safeAreaInsetBottom: number;
    safeAreaInsetLeft: number;
    cardOverlay?: (props: {
        style: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    }) => React.ReactNode;
    cardOverlayEnabled?: boolean;
    cardShadowEnabled?: boolean;
    cardStyle?: StyleProp<ViewStyle>;
    getPreviousScene: (props: {
        route: Route<string>;
    }) => Scene<Route<string>> | undefined;
    getFocusedRoute: () => Route<string>;
    renderHeader: (props: HeaderContainerProps) => React.ReactNode;
    renderScene: (props: {
        route: Route<string>;
    }) => React.ReactNode;
    onOpenRoute: (props: {
        route: Route<string>;
    }) => void;
    onCloseRoute: (props: {
        route: Route<string>;
    }) => void;
    onTransitionStart?: (props: {
        route: Route<string>;
    }, closing: boolean) => void;
    onTransitionEnd?: (props: {
        route: Route<string>;
    }, closing: boolean) => void;
    onPageChangeStart?: () => void;
    onPageChangeConfirm?: () => void;
    onPageChangeCancel?: () => void;
    onGestureStart?: (props: {
        route: Route<string>;
    }) => void;
    onGestureEnd?: (props: {
        route: Route<string>;
    }) => void;
    onGestureCancel?: (props: {
        route: Route<string>;
    }) => void;
    gestureEnabled?: boolean;
    gestureResponseDistance?: {
        vertical?: number;
        horizontal?: number;
    };
    gestureVelocityImpact?: number;
    mode: StackCardMode;
    headerMode: StackHeaderMode;
    headerShown: boolean;
    hasAbsoluteHeader: boolean;
    headerHeight: number;
    onHeaderHeightChange: (props: {
        route: Route<string>;
        height: number;
    }) => void;
    isParentHeaderShown: boolean;
};
declare function CardContainer({ active, cardOverlay, cardOverlayEnabled, cardShadowEnabled, cardStyle, cardStyleInterpolator, closing, gesture, focused, gestureDirection, gestureEnabled, gestureResponseDistance, gestureVelocityImpact, getPreviousScene, getFocusedRoute, mode, headerMode, headerShown, headerStyleInterpolator, hasAbsoluteHeader, headerHeight, onHeaderHeightChange, isParentHeaderShown, index, layout, onCloseRoute, onOpenRoute, onPageChangeCancel, onPageChangeConfirm, onPageChangeStart, onGestureCancel, onGestureEnd, onGestureStart, onTransitionEnd, onTransitionStart, renderHeader, renderScene, safeAreaInsetBottom, safeAreaInsetLeft, safeAreaInsetRight, safeAreaInsetTop, scene, transitionSpec, }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof CardContainer>;
export default _default;
