import { Component, ReactNode } from "react";
import { Animated, GestureResponderEvent, PanResponderGestureState, ViewStyle } from "react-native";

export interface ReactNativeSideMenuProps {
    /**
     * Menu component
     */
    menu: ReactNode;
    /**
     * Props driven control over menu open state
     * @default false
     */
    isOpen?: boolean | undefined;
    /**
     * Content view left margin if menu is opened
     */
    openMenuOffset?: number | undefined;
    /**
     * Content view left margin if menu is hidden
     */
    hiddenMenuOffset?: number | undefined;
    /**
     * Edge distance on content view to open side menu, defaults to 60
     */
    edgeHitWidth?: number | undefined;
    /**
     * X axis tolerance
     */
    toleranceX?: number | undefined;
    /**
     * Y axis tolerance
     */
    toleranceY?: number | undefined;
    /**
     * Disable whether the menu can be opened with gestures or not
     * @default false
     */
    disableGestures?: boolean | undefined;
    /**
     * Function that accepts event as an argument and specify if side-menu should react on the touch or not.
     * Check https://facebook.github.io/react-native/docs/gesture-responder-system.html for more details
     */
    onStartShouldSetResponderCapture?: ((e: GestureResponderEvent) => boolean) | undefined;
    /**
     * Callback on menu open/close. Is passed isOpen as an argument
     */
    onChange?: ((isOpen: boolean) => void) | undefined;
    /**
     * Callback on menu move. Is passed left as an argument
     */
    onMove?: ((left: number) => void) | undefined;
    /**
     * Callback when menu is sliding. It returns a decimal from 0 to 1 which represents the percentage of menu offset between hiddenMenuOffset and openMenuOffset.
     */
    onSliding?: ((fraction: number) => void) | undefined;
    /**
     * @default left
     */
    menuPosition?: "left" | "right" | undefined;
    animationFunction?: ((prop: Animated.Value, value: number) => Animated.CompositeAnimation) | undefined;
    animationStyle?: ((value: number) => ViewStyle) | undefined;
    /**
     * Callback when menu animation has completed.
     */
    onAnimationComplete?: ((event: Animated.EndCallback) => void) | undefined;
    /**
     * When true, content view will bounce back to openMenuOffset when dragged further
     * @default true
     */
    bounceBackOnOverdraw?: boolean | undefined;
    /**
     * When true, menu close automatically as soon as an event occurs
     * @default true
     */
    autoClosing?: boolean | undefined;
}

export default class SideMenu extends Component<ReactNativeSideMenuProps> {
    openMenu(isOpen: boolean): void;
    moveLeft(offset: number): void;
}
