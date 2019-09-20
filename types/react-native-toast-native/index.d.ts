// Type definitions for react-native-toast-native 0.1
// Project: https://github.com/onemolegames/react-native-toast-native
// Definitions by: Michele Bombardi <https://github.com/bm-software>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Platform } from 'react-native';

export interface Style {
    width?: number;
    height?: number;
    backgroundColor?: string;
    color?: string;
    borderWidth?: number;
    borderRadius?: number;

    // iOS-only
    borderColor?: string;

    // Android-only
    paddingLeft?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingTop?: number;
    fontSize?: number;
    lines?: number;
    lineHeight?: number;
    xOffset?: number;
    yOffset?: number;
    letterSpacing?: number;
    fontWeight?: string;
}

interface ToastNative {
    // Toast duration constants
    SHORT: any;
    LONG: any;

    // Toast gravity constants
    TOP: any;
    BOTTOM: any;
    CENTER: any;

    show(message?: string): void;
    show(message: string, duration: any, position: any, styles: Style): void;
}

declare const ToastNative: ToastNative;
export default ToastNative;
