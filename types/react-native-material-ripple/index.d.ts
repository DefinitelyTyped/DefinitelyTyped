import * as React from "react";
import { Animated, TouchableWithoutFeedback, ViewProps } from "react-native";

export type RippleProps =
    & TouchableWithoutFeedback["props"]
    & Animated.AnimatedProps<ViewProps>
    & {
        rippleColor?: string | undefined;
        rippleOpacity?: number | undefined;
        rippleDuration?: number | undefined;
        rippleSize?: number | undefined;
        rippleContainerBorderRadius?: number | undefined;
        rippleCentered?: boolean | undefined;
        rippleSequential?: boolean | undefined;
        rippleFades?: boolean | undefined;
        disabled?: boolean | undefined;
        onRippleAnimation?(animation: Animated.CompositeAnimation, callback: () => void): void;
    };

export default class Ripple extends React.Component<RippleProps> {}
