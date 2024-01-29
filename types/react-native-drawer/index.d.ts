import * as React from "react";
import { ScaledSize, ViewStyle } from "react-native";

export interface NestedViewStyles {
    main?: ViewStyle | undefined;
    drawerOverlay?: ViewStyle | undefined;
    mainOverlay?: ViewStyle | undefined;
}

export interface DrawerStyles extends NestedViewStyles {
    drawer?: ViewStyle | undefined;
}

export type TweenFunctions =
    | "linear"
    | "easeInQuad"
    | "easeOutQuad"
    | "easeInOutQuad"
    | "easeInCubic"
    | "easeOutCubic"
    | "easeInOutCubic"
    | "easeInQuart"
    | "easeOutQuart"
    | "easeInOutQuart"
    | "easeInQuint"
    | "easeOutQuint"
    | "easeInOutQuint"
    | "easeInSine"
    | "easeOutSine"
    | "easeInOutSine"
    | "easeInExpo"
    | "easeOutExpo"
    | "easeInOutExpo"
    | "easeInCirc"
    | "easeOutCirc"
    | "easeInOutCirc"
    | "easeInElastic"
    | "easeOutElastic"
    | "easeInOutElastic"
    | "easeInBack"
    | "easeOutBack"
    | "easeInOutBack"
    | "easeInBounce"
    | "easeOutBounce"
    | "easeInOutBounce";

export interface DrawerProperties {
    // Important

    children?: React.ReactNode;

    /**
     * Menu component
     */
    content?: React.ReactNode | undefined;
    /**
     * Type of drawer
     */
    type?: "displace" | "overlay" | "static" | undefined;
    /**
     * If true will trigger drawer open, if false will trigger close.
     */
    open?: boolean | undefined;
    /**
     * Can either be a integer (pixel value) or decimal (ratio of screen width). Defines the right hand margin when
     * the drawer is open. Or, can be function which returns offset
     */
    openDrawerOffset?: ((viewport: ScaledSize) => number) | number | undefined;
    /**
     * Same as openDrawerOffset, except defines left hand margin when drawer is closed
     */
    closedDrawerOffset?: (() => number) | number | undefined;
    /**
     * If true the drawer can not be opened and will not respond to pans
     */
    disabled?: boolean | undefined;
    /**
     * Styles for the drawer, main, drawerOverlay and mainOverlay container Views
     */
    styles?: DrawerStyles | undefined;

    // Animation / Tween

    /**
     * Takes in the pan ratio (decimal 0 to 1) that represents the tween percent. Returns an object of
     * native props to be set on the constituent views
     */
    tweenHandler?(ratio: number): NestedViewStyles;
    /**
     * The duration of the open/close animation
     */
    tweenDuration?: number | undefined;
    /**
     *  A easing type supported by tween-functions
     */
    tweenEasing?: TweenFunctions | undefined;

    // Event Handlers

    /**
     * Will be called immediately after the drawer has entered the open state
     */
    onOpen?(): void;
    /**
     * Callback fired at the start of an open animation
     */
    onOpenStart?(): void;
    /**
     * Callback fired when a drag gesture starts.
     */
    onDragStart?(): void;
    /**
     * Will be called immediately after the drawer has entered the closed state
     */
    onClose?(): void;
    /**
     * Ccallback fired at the start of a close animation
     */
    onCloseStart?(): void;

    // Gestures

    /**
     * If true, will capture all gestures inside of the pan mask. If 'open' will
     * only capture when drawer is open
     */
    captureGestures?: boolean | "open" | "closed" | undefined;
    /**
     * Toggle drawer when double tap occurs within pan mask?
     */
    acceptDoubleTap?: boolean | undefined;
    /**
     * Toggle drawer when any tap occurs within pan mask?
     */
    acceptTap?: boolean | undefined;
    /**
     * Allow for drawer pan (on touch drag). Set to false to effectively
     * disable the drawer while still allowing programmatic control
     */
    acceptPan?: boolean | undefined;
    /**
     * Allow Pan when drawer is 'open'
     */
    acceptPanOnDrawer?: boolean | undefined;
    /**
     * Same as acceptTap, except only for close
     */
    tapToClose?: boolean | undefined;
    /**
     * If true, attempts to handle only horizontal swipes, making it play well with a child ScrollView
     */
    negotiatePan?: boolean | undefined;

    // Additional Configurations

    /**
     * Ratio of screen width that must be travelled to trigger a drawer open/close
     */
    panThreshold?: number | undefined;
    /**
     * Ratio of screen width that is valid for the start of a pan open action. If null -> defaults to max(.05, closedDrawerOffset)
     */
    panOpenMask?: number | undefined;
    /**
     * Ratio of screen width that is valid for the start of a pan close action. If null -> defaults to max(.05, openDrawerOffset)
     */
    panCloseMask?: number | undefined;
    /**
     * Initialize with drawer open
     */
    initializeOpen?: number | undefined;
    /**
     * which side the drawer should be on.
     */
    side?: "left" | "right" | "top" | "bottom" | undefined;
    /**
     * if true will run InteractionManager for open/close animations.
     */
    useInteractionManager?: boolean | undefined;
    /**
     * (Android-only) Sets the elevation of the drawer using Android's underlying elevation API
     */
    elevation?: number | undefined;
}

export default class Drawer extends React.Component<DrawerProperties> {
    /** Close the drawer programmatically. */
    close(): void;

    /** Open the drawer programmatically. */
    open(): void;
}
