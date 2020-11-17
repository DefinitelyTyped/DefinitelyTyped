import * as React from 'react';
import { Animated, ViewProps, StyleProp, ViewStyle } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import type { TransitionSpec, StackCardStyleInterpolator, GestureDirection, Layout } from '../../types';
declare type Props = ViewProps & {
    index: number;
    closing: boolean;
    next?: Animated.AnimatedInterpolation;
    current: Animated.AnimatedInterpolation;
    gesture: Animated.Value;
    layout: Layout;
    insets: EdgeInsets;
    pageOverflowEnabled: boolean;
    gestureDirection: GestureDirection;
    onOpen: () => void;
    onClose: () => void;
    onTransitionStart?: (props: {
        closing: boolean;
    }) => void;
    onGestureBegin?: () => void;
    onGestureCanceled?: () => void;
    onGestureEnd?: () => void;
    children: React.ReactNode;
    overlay: (props: {
        style: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    }) => React.ReactNode;
    overlayEnabled: boolean;
    shadowEnabled: boolean;
    gestureEnabled: boolean;
    gestureResponseDistance?: {
        vertical?: number;
        horizontal?: number;
    };
    gestureVelocityImpact: number;
    transitionSpec: {
        open: TransitionSpec;
        close: TransitionSpec;
    };
    styleInterpolator: StackCardStyleInterpolator;
    containerStyle?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
};
export default class Card extends React.Component<Props> {
    static defaultProps: {
        overlayEnabled: boolean;
        shadowEnabled: boolean;
        gestureEnabled: boolean;
        gestureVelocityImpact: number;
        overlay: ({ style, }: {
            style: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
        }) => JSX.Element | null;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    private isCurrentlyMounted;
    private isClosing;
    private inverted;
    private layout;
    private isSwiping;
    private interactionHandle;
    private pendingGestureCallback;
    private lastToValue;
    private animate;
    private getAnimateToValue;
    private setPointerEventsEnabled;
    private handleStartInteraction;
    private handleEndInteraction;
    private handleGestureStateChange;
    private getInterpolatedStyle;
    private getCardAnimationContext;
    private gestureActivationCriteria;
    private contentRef;
    render(): JSX.Element;
}
export {};
