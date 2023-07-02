// Type definitions for react-native-slider 0.11
// Project: https://github.com/jeanregisser/react-native-slider#readme
// Definitions by: Ankan Bhattacharya <https://github.com/Ankan002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { JSX } from 'react';
import { ViewStyle, ImageSourcePropType, Animated } from 'react-native';

export interface ReactNativeSliderProps {
    value?: number;
    disabled?: boolean;
    minimumValue?: number;
    maximumValue?: number;
    step?: number;
    minimumTrackTintColor?: string;
    maximumTrackTintColor?: string;
    thumbTintColor?: string;
    thumbTouchSize?: {
        width?: number;
        height?: number;
    };
    onValueChange?: (e: number) => void;
    onSlidingStart?: (e: number) => void;
    onSlidingComplete?: (e: number) => void;
    style?: ViewStyle;
    trackStyle?: ViewStyle;
    thumbStyle?: ViewStyle;
    thumbImage?: ImageSourcePropType;
    debugTouchArea?: boolean;
    animateTransitions?: boolean;
    animationType?: 'spring' | 'timing';
    animationConfig?: Animated.SpringAnimationConfig | Animated.TimingAnimationConfig;
}

export default function Slider(props: ReactNativeSliderProps): JSX.Element;
