export {};

export namespace Mouse {
    export {};
    /**
     * Simple container for properties describing the state of a mouse.
     */
    export class State {
        /**
         * @param x The X position of the mouse pointer in pixels.
         * @param y The Y position of the mouse pointer in pixels.
         * @param left Whether the left mouse button is pressed.
         * @param middle Whether the middle mouse button is pressed.
         * @param right Whether the right mouse button is pressed.
         * @param up Whether the up mouse button is pressed (the fourth button, usually part of a scroll wheel).
         * @param down Whether the down mouse button is pressed (the fifth button, usually part of a scroll wheel).
         */
        constructor(x: number, y: number, left: boolean, middle: boolean, right: boolean, up: boolean, down: boolean);

        /**
         * The current X position of the mouse pointer.
         */
        x: number;

        /**
         * The current Y position of the mouse pointer.
         */
        y: number;

        /**
         * Whether the left mouse button is currently pressed.
         */
        left: boolean;

        /**
         * Whether the middle mouse button is currently pressed.
         */
        middle: boolean;

        /**
         * Whether the right mouse button is currently pressed.
         */
        right: boolean;

        /**
         * Whether the up mouse button is currently pressed. This is the fourth
         * mouse button, associated with upward scrolling of the mouse scroll
         * wheel.
         */
        up: boolean;

        /**
         * Whether the down mouse button is currently pressed. This is the fifth
         * mouse button, associated with downward scrolling of the mouse scroll
         * wheel.
         */
        down: boolean;

        /**
         * Updates the position represented within this state object by the given
         * element and clientX/clientY coordinates (commonly available within event
         * objects). Position is translated from clientX/clientY (relative to
         * viewport) to element-relative coordinates.
         *
         * @param element The element the coordinates should be relative to.
         * @param clientX The X coordinate to translate, viewport-relative.
         * @param clientY The Y coordinate to translate, viewport-relative.
         */
        fromClientPosition(element: HTMLElement | HTMLDocument, clientX: number, clientY: number): State;
    }

    class GuacTouchDevice {
        /**
         * @param element The Element to use to provide touch events.
         */
        constructor(element: HTMLElement);

        /**
         * The distance a two-finger touch must move per scrollwheel event, in
         * pixels.
         */
        scrollThreshold: number;

        /**
         * The maximum number of milliseconds to wait for a touch to end for the
         * gesture to be considered a click.
         */
        clickTimingThreshold: number;

        /**
         * The maximum number of pixels to allow a touch to move for the gesture to
         * be considered a click.
         */
        clickMoveThreshold: number;

        /**
         * The current mouse state. The properties of this state are updated when
         * mouse events fire. This state object is also passed in as a parameter to
         * the handler of any mouse events.
         */
        currentState: State;

        /**
         * Fired whenever a mouse button is effectively pressed. This can happen
         * as part of a "click" gesture initiated by the user by tapping one
         * or more fingers over the touchpad element, as part of a "scroll"
         * gesture initiated by dragging two fingers up or down, etc.
         * @event
         * @param state The current mouse state.
         */
        onmousedown: null | ((state: State) => void);

        /**
         * Fired whenever a mouse button is effectively released. This can happen
         * as part of a "click" gesture initiated by the user by tapping one
         * or more fingers over the touchpad element, as part of a "scroll"
         * gesture initiated by dragging two fingers up or down, etc.
         * @event
         * @param state The current mouse state.
         */
        onmouseup: null | ((state: State) => void);

        /**
         * Fired whenever the user moves the mouse by dragging their finger over
         * the touchpad element.
         * @event
         * @param state The current mouse state.
         */
        onmousemove: null | ((state: State) => void);
    }

    /**
     * Provides cross-browser relative touch event translation for a given element.
     *
     * Touch events are translated into mouse events as if the touches occurred
     * on a touchpad (drag to push the mouse pointer, tap to click).
     * @param element The Element to use to provide touch events.
     */
    export class Touchpad extends GuacTouchDevice {}

    /**
     * Provides cross-browser absolute touch event translation for a given element.
     * Touch events are translated into mouse events as if the touches occurred
     * on a touchscreen (tapping anywhere on the screen clicks at that point,
     * long-press to right-click).
     * @param element The Element to use to provide touch events.
     */
    export class Touchscreen extends GuacTouchDevice {
        /**
         * The amount of time a press must be held for long press to be
         * detected.
         */
        longPressThreshold: number;
    }
}

/**
 * Provides cross-browser mouse events for a given element. The events of
 * the given element are automatically populated with handlers that translate
 * mouse events into a non-browser-specific event provided by the
 * Guacamole.Mouse instance.
 */
export class Mouse {
    /**
     * @param element The Element to use to provide mouse events.
     */
    constructor(element: HTMLDocument | HTMLElement);

    /**
     * The current mouse state. The properties of this state are updated when
     * mouse events fire. This state object is also passed in as a parameter to
     * the handler of any mouse events.
     */
    currentState: Mouse.State;

    /**
     * Fired whenever the user releases a mouse button down over the element
     * associated with this Guacamole.Mouse.
     *
     * @event
     * @param state The current mouse state.
     */
    onmouseup: null | ((state: Mouse.State) => void);

    /**
     * Fired whenever the user presses a mouse button down over the element
     * associated with this Guacamole.Mouse.
     *
     * @event
     * @param state The current mouse state.
     */
    onmousedown: null | ((state: Mouse.State) => void);

    /**
     * Fired whenever the user moves the mouse over the element associated with
     * this Guacamole.Mouse.
     *
     * @event
     * @param state The current mouse state.
     */
    onmousemove: null | ((state: Mouse.State) => void);

    /**
     * Fired whenever the mouse leaves the boundaries of the element associated
     * with this Guacamole.Mouse.
     *
     * @event
     */
    onmouseout: null | (() => void);
}
