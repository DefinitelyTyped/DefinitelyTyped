import { Platform } from "react-native";

export interface Style {
    width?: number | undefined;
    height?: number | undefined;
    backgroundColor?: string | undefined;
    color?: string | undefined;
    borderWidth?: number | undefined;
    borderRadius?: number | undefined;

    // iOS-only
    borderColor?: string | undefined;

    // Android-only
    paddingLeft?: number | undefined;
    paddingRight?: number | undefined;
    paddingBottom?: number | undefined;
    paddingTop?: number | undefined;
    fontSize?: number | undefined;
    lines?: number | undefined;
    lineHeight?: number | undefined;
    xOffset?: number | undefined;
    yOffset?: number | undefined;
    letterSpacing?: number | undefined;
    fontWeight?: string | undefined;
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
