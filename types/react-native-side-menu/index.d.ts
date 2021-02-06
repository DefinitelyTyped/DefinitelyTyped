// Type definitions for react-native-side-menu 1.1
// Project: https://github.com/react-native-community/react-native-side-menu#readme
// Definitions by: Jules Samuel Randolph <https://github.com/jsamr>
//                 Matt Pawley <https://github.com/toughdeveloper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReactNode, Component } from 'react';
import { GestureResponderEvent, PanResponderGestureState, Animated, ViewStyle } from 'react-native';

export interface ReactNativeSideMenuProps {
    /**
     * Menu component
     */
    menu: ReactNode;
    /**
     * Props driven control over menu open state
     * @default false
     */
    isOpen?: boolean;
    /**
     * Content view left margin if menu is opened
     */
    openMenuOffset?: number;
    /**
     * Content view left margin if menu is hidden
     */
    hiddenMenuOffset?: number;
    /**
     * Edge distance on content view to open side menu, defaults to 60
     */
    edgeHitWidth?: number;
    /**
     * X axis tolerance
     */
    toleranceX?: number;
    /**
     * Y axis tolerance
     */
    toleranceY?: number;
    /**
     * Disable whether the menu can be opened with gestures or not
     * @default false
     */
    disableGestures?: boolean;
    /**
     * Function that accepts event as an argument and specify if side-menu should react on the touch or not.
     * Check https://facebook.github.io/react-native/docs/gesture-responder-system.html for more details
     */
    onStartShouldSetResponderCapture?: (e: GestureResponderEvent) => boolean;
    /**
     * Callback on menu open/close. Is passed isOpen as an argument
     */
    onChange?: (isOpen: boolean) => void;
    /**
     * Callback on menu move. Is passed left as an argument
     */
    onMove?: (left: number) => void;
    /**
     * Callback when menu is sliding. It returns a decimal from 0 to 1 which represents the percentage of menu offset between hiddenMenuOffset and openMenuOffset.
     */
    onSliding?: (fraction: number) => void;
    /**
     * @default left
     */
    menuPosition?: 'left' | 'right';
    animationFunction?: (prop: Animated.Value, value: number) => Animated.CompositeAnimation;
    animationStyle?: (value: number) => ViewStyle;
    /**
     * Callback when menu animation has completed.
     */
    onAnimationComplete?: (event: Animated.EndCallback) => void;
    /**
     * When true, content view will bounce back to openMenuOffset when dragged further
     * @default true
     */
    bounceBackOnOverdraw?: boolean;
    /**
     * When true, menu close automatically as soon as an event occurs
     * @default true
     */
    autoClosing?: boolean;
}

export default class SideMenu extends Component<ReactNativeSideMenuProps> {
    openMenu(isOpen: boolean): void;
    moveLeft(offset: number): void;
}
