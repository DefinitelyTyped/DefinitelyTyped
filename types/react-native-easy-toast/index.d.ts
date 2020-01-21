// Type definitions for react-native-easy-toast 1.2
// Project: https://github.com/crazycodeboy/react-native-easy-toast/pulls
// Definitions by: Deividi Cavarzan <https://github.com/cavarzan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { StyleProp, TextStyle, ViewProps, ViewStyle } from 'react-native';

export interface DURATION {
    LENGTH_SHORT: number;
    FOREVER: number;
}

export interface ToastProps {
    style?: StyleProp<ViewStyle> | StyleProp<ViewProps>;
    textStyle?: StyleProp<TextStyle>;
    position?: 'top' | 'center' | 'bottom';
    positionValue?: number;
    fadeInDuration?: number;
    fadeOutDuration?: number;
    opacity?: number;
}

export default class Toast extends React.Component<ToastProps> {
    show: (text: string | React.ReactNode, duration?: number, callback?: () => void) => void;
    close: (duration?: number) => void;
}
