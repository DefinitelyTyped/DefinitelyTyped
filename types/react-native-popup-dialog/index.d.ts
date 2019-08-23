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
    style?: StyleProp<ViewStyle>;
}

export interface DialogFooterProps {
    bordered?: boolean;
    style?: StyleProp<ViewStyle>;
}

export interface DialogButtonProps {
    text: string;
    align?: AlignTypes;
    onPress?: (event: GestureResponderEvent) => void;
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
    activeOpacity?: number;
    bordered?: boolean;
}

export interface DialogTitleProps {
    title: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    align?: AlignTypes;
    hasTitleBar?: boolean;
}

export interface OverlayProps {
    visible?: boolean;
    onPress: (event: GestureResponderEvent) => void;
    backgroundColor?: string;
    opacity?: number;
    animationDuration?: number;
    showOverlay?: boolean;
    pointerEvents?: string;
    useNativeDriver?: boolean;
}

export interface DialogProps {
    dialogTitle?: any;
    width?: number;
    height?: number;
    dialogAnimation?: FadeAnimation | ScaleAnimation | SlideAnimation;
    dialogStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    animationDuration?: number;
    hasOverlay?: boolean;
    overlayPointerEvents?: OverlayPointerEventTypes;
    overlayBackgroundColor?: string;
    overlayOpacity?: number;
    visible?: boolean;
    rounded?: boolean;
    onShow?: () => void;
    onDismiss?: () => void;
    onTouchOutside?: () => void;
    onHardwareBackPress?: () => boolean;
    footer?: any;
    useNativeDriver?: boolean;
}

export class FadeAnimation {
    constructor(toValue?: number);
    constructor(params: { toValue?: number, animationDuration?: number });
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
    constructor(params: { toValue?: number, slideFrom?: SlideFromTypes });
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
