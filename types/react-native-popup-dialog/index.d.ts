// Type definitions for react-native-popup-dialog 0.16
// Project: https://github.com/jacklam718/react-native-popup-dialog/blob/master/README.md
// Definitions by: Paito Anderson <https://github.com/PaitoAnderson>
//                 connectdotz <https://github.com/connectdotz>
//                 Michele Bombardi <https://github.com/bm-software>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle, TextStyle } from 'react-native';

export type AlignTypes = 'left' | 'right' | 'center';
export type OverlayPointerEventTypes = 'auto' | 'none';
export type SlideFromTypes = 'top' | 'bottom' | 'left' | 'right';

export interface DialogContentProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle> | undefined;
}

export interface DialogFooterProps {
    bordered?: boolean | undefined;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle> | undefined;
}

export interface DialogButtonProps {
    text: string;
    align?: AlignTypes | undefined;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    textStyle?: StyleProp<TextStyle> | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    disabled?: boolean | undefined;
    activeOpacity?: number | undefined;
    bordered?: boolean | undefined;
}

export interface DialogTitleProps {
    title: string;
    style?: StyleProp<ViewStyle> | undefined;
    textStyle?: StyleProp<TextStyle> | undefined;
    align?: AlignTypes | undefined;
    hasTitleBar?: boolean | undefined;
}

export interface OverlayProps {
    visible?: boolean | undefined;
    onPress: (event: GestureResponderEvent) => void;
    backgroundColor?: string | undefined;
    opacity?: number | undefined;
    animationDuration?: number | undefined;
    showOverlay?: boolean | undefined;
    pointerEvents?: string | undefined;
    useNativeDriver?: boolean | undefined;
}

export interface DialogProps {
    children?: React.ReactNode;
    dialogTitle?: any;
    width?: number | undefined;
    height?: number | undefined;
    dialogAnimation?: FadeAnimation | ScaleAnimation | SlideAnimation | undefined;
    dialogStyle?: StyleProp<ViewStyle> | undefined;
    containerStyle?: StyleProp<ViewStyle> | undefined;
    animationDuration?: number | undefined;
    hasOverlay?: boolean | undefined;
    overlayPointerEvents?: OverlayPointerEventTypes | undefined;
    overlayBackgroundColor?: string | undefined;
    overlayOpacity?: number | undefined;
    visible?: boolean | undefined;
    rounded?: boolean | undefined;
    onShow?: (() => void) | undefined;
    onDismiss?: (() => void) | undefined;
    onTouchOutside?: (() => void) | undefined;
    onHardwareBackPress?: (() => boolean) | undefined;
    footer?: any;
    useNativeDriver?: boolean | undefined;
}

export class FadeAnimation {
    constructor(toValue?: number);
    constructor(params: { toValue?: number | undefined, animationDuration?: number | undefined });
    toValue(toValue: number): void;
    createAnimations(): object;
}

export class ScaleAnimation {
    constructor(toValue?: number);
    toValue(toValue: number): void;
    createAnimations(): object;
}

export class SlideAnimation {
    constructor(toValue?: number);
    constructor(params: { toValue?: number | undefined, slideFrom?: SlideFromTypes | undefined });
    toValue(toValue: number): void;
    createAnimations(): object;
}

export class DialogContent extends React.Component<DialogContentProps, any> { }
export class DialogFooter extends React.Component<DialogFooterProps, any> { }
export class DialogButton extends React.Component<DialogButtonProps, any> { }
export class DialogTitle extends React.Component<DialogTitleProps, any> { }
export class Overlay extends React.Component<OverlayProps, any> { }
export default class Dialog extends React.Component<DialogProps, any> {
    show(onShown?: () => void): void;
    dismiss(onDismissed?: () => void): void;
}
