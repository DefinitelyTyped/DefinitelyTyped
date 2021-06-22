// Type definitions for react-native-material-ripple 0.9
// Project: https://github.com/n4kz/react-native-material-ripple
// Definitions by: Serhiy Zhelizniak <https://github.com/SerhiyZheliznjak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { TouchableWithoutFeedback, Animated, ViewProps } from 'react-native';

export type RippleProps = TouchableWithoutFeedback['props'] &
    Animated.AnimatedProps<ViewProps> & {
        rippleColor?: string;
        rippleOpacity?: number;
        rippleDuration?: number;
        rippleSize?: number;
        rippleContainerBorderRadius?: number;
        rippleCentered?: boolean;
        rippleSequential?: boolean;
        rippleFades?: boolean;
        disabled?: boolean;
        onRippleAnimation?(animation: Animated.CompositeAnimation, callback: () => void): void;
    };

export default class Ripple extends React.Component<RippleProps> {}
