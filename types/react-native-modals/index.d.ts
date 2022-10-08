// Type definitions for react-native-modals 0.22
// Project: https://github.com/jacklam718/react-native-modals/blob/master/README.md
// Definitions by: Paito Anderson <https://github.com/PaitoAnderson>
//                 Jean-Baptiste Crestot <https://github.com/jbcrestot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { StyleProp, ViewStyle, TextStyle, Animated } from 'react-native';

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
    swipeDirection: SwipeDirection | null;
}

export interface ModalContentProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export interface BackdropProps {
    visible: boolean;
    opacity: number;
    onPress?: () => void;
    backgroundColor?: string;
    animationDuration?: number;
    pointerEvents?: string;
    useNativeDriver?: boolean;
}

export interface ModalFooterProps {
    bordered?: boolean;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export interface ModalButtonProps {
    text: string;
    onPress: () => void;
    align?: AlignTypes;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
    activeOpacity?: number;
    bordered?: boolean;
}

export interface ModalTitleProps {
    title: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    align?: AlignTypes;
    hasTitleBar?: boolean;
}

export interface ModalProps {
    children?: React.ReactNode;
    visible?: boolean;
    width?: number;
    height?: number;
    rounded?: boolean;
    hasOverlay?: boolean;
    overlayPointerEvents?: OverlayPointerEventTypes;
    overlayBackgroundColor?: string;
    overlayOpacity?: number;
    modalTitle?: React.ReactNode;
    modalAnimation?: FadeAnimation | ScaleAnimation | SlideAnimation;
    modalStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    animationDuration?: number;
    onTouchOutside?: () => void;
    onHardwareBackPress?: () => boolean;
    onShow?: () => void;
    onDismiss?: () => void;
    footer?: React.ReactNode;
    onMove?: (event: DragEvent) => void;
    onSwiping?: (event: DragEvent) => void;
    onSwipeRelease?: (event: DragEvent) => void;
    onSwipingOut?: (event: DragEvent) => void;
    onSwipeOut?: (event: DragEvent) => void;
    swipeDirection?: SwipeDirection | SwipeDirection[];
    swipeThreshold?: number;
    useNativeDriver?: boolean;
}

export interface DraggableViewProps {
    style?: StyleProp<ViewStyle>;
    onMove?: (event: DragEvent) => void;
    onSwiping?: (event: DragEvent) => void;
    onRelease?: (event: DragEvent) => void;
    onSwipingOut?: (event: DragEvent) => void;
    onSwipeOut?: (event: DragEvent) => void;
    swipeThreshold?: number;
    swipeDirection?: SwipeDirection | SwipeDirection[];
}

export class FadeAnimation {
    constructor(params: { animationDuration?: number; useNativeDriver?: boolean });
    in(onFinised?: boolean): void;
    out(onFinised?: boolean): void;
    getAnimations(): object;
}

export class ScaleAnimation {
    constructor(params: { animationDuration?: number; useNativeDriver?: boolean });
    in(onFinised?: boolean): void;
    out(onFinised?: boolean): void;
    getAnimations(): object;
}

export class SlideAnimation {
    constructor(params: { animationDuration?: number; useNativeDriver?: boolean; slideFrom?: SlideFromTypes });
    in(onFinised?: boolean): void;
    out(onFinised?: boolean): void;
    getAnimations(): object;
}

export class ModalContent extends React.Component<ModalContentProps> {}
export class ModalFooter extends React.Component<ModalFooterProps> {}
export class ModalButton extends React.Component<ModalButtonProps> {}
export class ModalTitle extends React.Component<ModalTitleProps> {}
export class Backdrop extends React.Component<BackdropProps> {}
export class DraggableView extends React.Component<DraggableViewProps> {}
export class ModalPortal extends React.Component {
    get ref(): Modal;
    get size(): number;
    get current(): Modal;
    static show(children: React.ReactNode, props?: ModalProps): Modal;
    static update(key: any, props?: ModalProps): void;
    static dismiss(key: any): void;
    static dismissAll(): void;
}
export class Modal extends React.Component<ModalProps> {}
export default Modal;
