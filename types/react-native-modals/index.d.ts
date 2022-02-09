// Type definitions for react-native-modals 0.19
// Project: https://github.com/jacklam718/react-native-modals/blob/master/README.md
// Definitions by: Paito Anderson <https://github.com/PaitoAnderson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export type SlideFromTypes = 'top' | 'bottom' | 'left' | 'right';
export type AlignTypes = 'flex-start' | 'flex-end' | 'center';
export type OverlayPointerEventTypes = 'auto' | 'none';
export type SwipeDirection = 'up' | 'down' | 'left' | 'right';
export interface DragEvent {
    axis: {
        x: number;
        y: number;
    };
    layout: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    swipeDirection: string | null;
}

export interface ModalContentProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle> | undefined;
}

export interface BackdropProps {
    visible: boolean;
    opacity: number;
    onPress?: (() => void) | undefined;
    backgroundColor?: string | undefined;
    animationDuration?: number | undefined;
    pointerEvents?: string | undefined;
    useNativeDriver?: boolean | undefined;
}

export interface ModalFooterProps {
    bordered?: boolean | undefined;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle> | undefined;
}

export interface ModalButtonProps {
    text: string;
    onPress: () => void;
    align?: AlignTypes | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    textStyle?: StyleProp<TextStyle> | undefined;
    disabled?: boolean | undefined;
    activeOpacity?: number | undefined;
    bordered?: boolean | undefined;
}

export interface ModalTitleProps {
    title: string;
    style?: StyleProp<ViewStyle> | undefined;
    textStyle?: StyleProp<TextStyle> | undefined;
    align?: AlignTypes | undefined;
    hasTitleBar?: boolean | undefined;
}

export interface ModalProps {
    children?: React.ReactNode;
    visible: boolean;
    width?: number | undefined;
    height?: number | undefined;
    rounded?: boolean | undefined;
    hasOverlay?: boolean | undefined;
    overlayPointerEvents?: OverlayPointerEventTypes | undefined;
    overlayBackgroundColor?: string | undefined;
    overlayOpacity?: number | undefined;
    modalTitle?: React.ReactNode | undefined;
    modalAnimation?: FadeAnimation | ScaleAnimation | SlideAnimation | undefined;
    modalStyle?: StyleProp<ViewStyle> | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    animationDuration?: number | undefined;
    onTouchOutside?: (() => void) | undefined;
    onHardwareBackPress?: (() => boolean) | undefined;
    onShow?: (() => void) | undefined;
    onDismiss?: (() => void) | undefined;
    footer?: React.ReactNode | undefined;
    onMove?: ((event: DragEvent) => void) | undefined;
    onSwiping?: ((event: DragEvent) => void) | undefined;
    onSwipeRelease?: ((event: DragEvent) => void) | undefined;
    onSwipingOut?: ((event: DragEvent) => void) | undefined;
    onSwipeOut?: ((event: DragEvent) => void) | undefined;
    swipeDirection?: SwipeDirection | SwipeDirection[] | undefined;
    swipeThreshold?: number | undefined;
    useNativeDriver?: boolean | undefined;
}

export interface DraggableViewProps {
    style?: StyleProp<ViewStyle> | undefined;
    onMove?: ((event: DragEvent) => void) | undefined;
    onSwiping?: ((event: DragEvent) => void) | undefined;
    onRelease?: ((event: DragEvent) => void) | undefined;
    onSwipingOut?: ((event: DragEvent) => void) | undefined;
    onSwipeOut?: ((event: DragEvent) => void) | undefined;
    swipeThreshold?: number | undefined;
    swipeDirection?: SwipeDirection | SwipeDirection[] | undefined;
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

export class ModalContent extends React.Component<ModalContentProps> { }
export class ModalFooter extends React.Component<ModalFooterProps> { }
export class ModalButton extends React.Component<ModalButtonProps> { }
export class ModalTitle extends React.Component<ModalTitleProps> { }
export class Backdrop extends React.Component<BackdropProps> { }
export class DraggableView extends React.Component<DraggableViewProps> { }
export default class Modal extends React.Component<ModalProps> {
    show(): void;
    dismiss(): void;
    modalSize: { width: number, height: number };
    pointerEvents: 'auto' | 'none';
}
