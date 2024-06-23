import * as React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type SlideFromTypes = "top" | "bottom" | "left" | "right";
export type AlignTypes = "flex-start" | "flex-end" | "center";
export type OverlayPointerEventTypes = "auto" | "none";
export type SwipeDirection = "up" | "down" | "left" | "right";
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
    visible?: boolean | undefined;
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

export class Animation {
    constructor(params: { animationDuration?: number | undefined; useNativeDriver?: boolean | undefined });
    in(onFinised?: boolean): void;
    out(onFinised?: boolean): void;
    getAnimations(): object;
}
export class FadeAnimation extends Animation {}

export class ScaleAnimation extends Animation {}

export class SlideAnimation extends Animation {
    constructor(params: {
        animationDuration?: number | undefined;
        useNativeDriver?: boolean | undefined;
        slideFrom?: SlideFromTypes | undefined;
    });
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
export class BottomModal extends React.Component<ModalProps> {}
export class Modal extends React.Component<ModalProps> {}
export default Modal;
