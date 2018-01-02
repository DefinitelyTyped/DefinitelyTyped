// Type definitions for react-native-popup-dialog 0.9
// Project: https://github.com/jacklam718/react-native-popup-dialog/blob/master/README.md
// Definitions by: Paito Anderson <https://github.com/PaitoAnderson>
//                 connectdotz <https://github.com/connectdotz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle, TextStyle } from 'react-native';

export type AlignTypes = 'left' | 'right' | 'center';
export type OverlayPointerEventTypes = 'auto' | 'none';
export type SlideFromTypes = 'top' | 'bottom' | 'left' | 'right';

export interface DialogButtonProps {
    text: string;
    align?: AlignTypes;
    onPress?: (event: GestureResponderEvent) => void;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    textContainerStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
    activeOpacity?: number;
}

export interface DialogTitleProps {
    title: string;
    titleStyle?: StyleProp<ViewStyle>;
    titleTextStyle?: StyleProp<ViewStyle>;
    titleAlign?: AlignTypes;
    haveTitleBar?: boolean;
}

export interface OverlayProps {
    onPress: (event: GestureResponderEvent) => void;
    backgroundColor?: string;
    opacity?: number;
    animationDuration?: number;
    showOverlay?: boolean;
    pointerEvents?: string;
}

export interface PopupDialogProps {
    dialogTitle?: any;
    width?: number;
    height?: number;
    dialogAnimation?: FadeAnimation | ScaleAnimation | SlideAnimation;
    dialogStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    animationDuration?: number;
    overlayPointerEvents?: OverlayPointerEventTypes;
    overlayBackgroundColor?: string;
    overlayOpacity?: number;
    dismissOnTouchOutside?: boolean;
    dismissOnHardwareBackPress?: boolean;
    haveOverlay?: boolean;
    show?: boolean;
    onShown?: () => void;
    onDismissed?: () => void;
    actions?: any[];
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

export class DialogButton extends React.Component<DialogButtonProps, any> { }
export class DialogTitle extends React.Component<DialogTitleProps, any> { }
export class Overlay extends React.Component<OverlayProps, any> { }
export default class PopupDialog extends React.Component<PopupDialogProps, any> { }
