import { Event as GuacamoleEvent } from "./Event";
import { Position } from "./Position";

export {};

export namespace Mouse {
    export {};

    export namespace Event {
        export {};

        /**
         * An object which can dispatch {@link Mouse.Event} objects
         * representing mouse events. These mouse events may be produced from an actual
         * mouse device (as with {@link Mouse}), from an emulated mouse
         * device (as with {@link Mouse.Touchpad}, or may be programmatically
         * generated (using functions like [dispatch()]{@link Mouse.Event.Target#dispatch},
         * [press()]{@link Mouse.Event.Target#press}, and
         * [release()]{@link Mouse.Event.Target#release}).
         */
        export class Target extends GuacamoleEvent.Target {
            constructor();

            /**
             * The current mouse state. The properties of this state are updated when
             * mouse events fire. This state object is also passed in as a parameter to
             * the handler of any mouse events.
             */
            currentState: State;

            /**
             * Presses the given mouse button, if it isn't already pressed. Valid
             * button names are defined by {@link Mouse.State.Buttons} and
             * correspond to the button-related properties of
             * {@link Mouse.State}.
             *
             * @fires Mouse.Event.Target#mousedown
             *
             * @param button
             *     The name of the mouse button to press, as defined by
             *     {@link Mouse.State.Buttons}.
             *
             * @param [events=[]]
             *     The DOM events that are related to the mouse button press, if any.
             */
            press(button: string, events?: Event | Event[]): void;

            /**
             * Releases the given mouse button, if it isn't already released. Valid
             * button names are defined by {@link Mouse.State.Buttons} and
             * correspond to the button-related properties of
             * {@link Mouse.State}.
             *
             * @fires Mouse.Event.Target#mouseup
             *
             * @param button
             *     The name of the mouse button to release, as defined by
             *     {@link Mouse.State.Buttons}.
             *
             * @param [events=[]]
             *     The DOM events related to the mouse button release, if any.
             */
            release(button: string, events?: Event | Event[]): void;

            /**
             * Clicks (presses and releases) the given mouse button. Valid button
             * names are defined by {@link Mouse.State.Buttons} and
             * correspond to the button-related properties of
             * {@link Mouse.State}.
             *
             * @fires Mouse.Event.Target#mousedown
             * @fires Mouse.Event.Target#mouseup
             *
             * @param button
             *     The name of the mouse button to click, as defined by
             *     {@link Mouse.State.Buttons}.
             *
             * @param [events=[]]
             *     The DOM events related to the click, if any.
             */
            click(button: string, events?: Event | Event[]): void;

            /**
             * Moves the mouse to the given coordinates.
             *
             * @fires Mouse.Event.Target#mousemove
             *
             * @param {!(Position|object)} position
             *     The new coordinates of the mouse pointer. This object may be a
             *     {@link Position} or any object with "x" and "y"
             *     properties.
             *
             * @param {Event|Event[]} [events=[]]
             *     The DOM events related to the mouse movement, if any.
             */
            move(position: Position | object, events?: Event | Event[]): void;

            /**
             * Notifies event listeners that the mouse pointer has left the boundaries
             * of the area being monitored for mouse events.
             *
             * @fires Mouse.Event.Target#mouseout
             *
             * @param [events=[]]
             *     The DOM events related to the mouse leaving the boundaries of the
             *     monitored object, if any.
             */
            out(events?: Event | Event[]): void;

            /**
             * Releases all mouse buttons that are currently pressed. If all mouse
             * buttons have already been released, this function has no effect.
             *
             * @fires Mouse.Event.Target#mouseup
             *
             * @param [events=[]]
             *     The DOM event related to all mouse buttons being released, if any.
             */
            reset(events?: Event | Event[]): void;
        }
    }

    /**
     * Base event type for all mouse events. The mouse producing the event may be
     * the user's local mouse (as with {@link Mouse}) or an emulated
     * mouse (as with {@link Mouse.Touchpad}).
     */
    export class Event extends GuacamoleEvent.DOMEvent {
        /**
         * @param type
         *     The type name of the event ("mousedown", "mouseup", etc.)
         *
         * @param state
         *     The current mouse state.
         *
         * @param [events=[]]
         *     The DOM events that are related to this event, if any.
         */
        constructor(type: string, state: State, events?: Event | Event[]);

        /**
         * The current mouse state at the time this event was fired.
         */
        state: State;
    }

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

    class GuacTouchDevice extends Event.Target {
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
    }

    /**
     * Provides cross-browser relative touch event translation for a given element.
     *
     * Touch events are translated into mouse events as if the touches occurred
     * on a touchpad (drag to push the mouse pointer, tap to click).
     *
     * @example
     * var touchpad = new Guacamole.Mouse.Touchpad(client.getDisplay().getElement());
     *
     * // Emulate a mouse using touchpad-style gestures, forwarding all mouse
     * // interaction over Guacamole connection
     * touchpad.onEach(['mousedown', 'mousemove', 'mouseup'], function sendMouseEvent(e) {
     *
     *     // Re-show software mouse cursor if possibly hidden by a prior call to
     *     // showCursor(), such as a "mouseout" event handler that hides the
     *     // cursor
     *     client.getDisplay().showCursor(true);
     *
     *     client.sendMouseState(e.state, true);
     *
     * });
     */
    export class Touchpad extends GuacTouchDevice {
    }

    /**
     * Provides cross-browser absolute touch event translation for a given element.
     *
     * Touch events are translated into mouse events as if the touches occurred
     * on a touchscreen (tapping anywhere on the screen clicks at that point,
     * long-press to right-click).
     *
     * @example
     * var touchscreen = new Guacamole.Mouse.Touchscreen(client.getDisplay().getElement());
     *
     * // Emulate a mouse using touchscreen-style gestures, forwarding all mouse
     * // interaction over Guacamole connection
     * touchscreen.onEach(['mousedown', 'mousemove', 'mouseup'], function sendMouseEvent(e) {
     *
     *     // Re-show software mouse cursor if possibly hidden by a prior call to
     *     // showCursor(), such as a "mouseout" event handler that hides the
     *     // cursor
     *     client.getDisplay().showCursor(true);
     *
     *     client.sendMouseState(e.state, true);
     *
     * });
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
 *
 * @example
 * var mouse = new Guacamole.Mouse(client.getDisplay().getElement());
 *
 * // Forward all mouse interaction over Guacamole connection
 * mouse.onEach(['mousedown', 'mousemove', 'mouseup'], function sendMouseEvent(e) {
 *     client.sendMouseState(e.state, true);
 * });
 *
 * @example
 * // Hide software cursor when mouse leaves display
 * mouse.on('mouseout', function hideCursor() {
 *     client.getDisplay().showCursor(false);
 * });
 */
export class Mouse extends GuacamoleEvent.Target {
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
     * Changes the local mouse cursor to the given canvas, having the given
     * hotspot coordinates. This affects styling of the element backing this
     * Guacamole.Mouse only, and may fail depending on browser support for
     * setting the mouse cursor.
     *
     * If setting the local cursor is desired, it is up to the implementation
     * to do something else, such as use the software cursor built into
     * Guacamole.Display, if the local cursor cannot be set.
     *
     * @param canvas
     *     The cursor image.
     *
     * @param x
     *     The X-coordinate of the cursor hotspot.
     *
     * @param y
     *     The Y-coordinate of the cursor hotspot.
     *
     * @return
     *     true if the cursor was successfully set, false if the cursor could
     *     not be set for any reason.
     */
    setCursor(canvas: HTMLCanvasElement, x: number, y: number): boolean;

    /**
     * Presses the given mouse button, if it isn't already pressed. Valid
     * button names are defined by {@link Mouse.State.Buttons} and
     * correspond to the button-related properties of
     * {@link Mouse.State}.
     *
     * @fires Mouse.Event.Target#mousedown
     *
     * @param button
     *     The name of the mouse button to press, as defined by
     *     {@link Mouse.State.Buttons}.
     *
     * @param [events=[]]
     *     The DOM events that are related to the mouse button press, if any.
     */
    press(button: string, events?: Event | Event[]): void;

    /**
     * Releases the given mouse button, if it isn't already released. Valid
     * button names are defined by {@link Mouse.State.Buttons} and
     * correspond to the button-related properties of
     * {@link Mouse.State}.
     *
     * @fires Guacamole.Mouse.Event.Target#mouseup
     *
     * @param button
     *     The name of the mouse button to release, as defined by
     *     {@link Mouse.State.Buttons}.
     *
     * @param [events=[]]
     *     The DOM events related to the mouse button release, if any.
     */
    release(button: string, events?: Event | Event[]): void;

    /**
     * Clicks (presses and releases) the given mouse button. Valid button
     * names are defined by {@link Mouse.State.Buttons} and
     * correspond to the button-related properties of
     * {@link Mouse.State}.
     *
     * @fires Mouse.Event.Target#mousedown
     * @fires Mouse.Event.Target#mouseup
     *
     * @param button
     *     The name of the mouse button to click, as defined by
     *     {@link Mouse.State.Buttons}.
     *
     * @param [events=[]]
     *     The DOM events related to the click, if any.
     */
    click(button: string, events?: Event | Event[]): void;

    /**
     * Moves the mouse to the given coordinates.
     *
     * @fires Mouse.Event.Target#mousemove
     *
     * @param {!(Position|object)} position
     *     The new coordinates of the mouse pointer. This object may be a
     *     {@link Position} or any object with "x" and "y"
     *     properties.
     *
     * @param {Event|Event[]} [events=[]]
     *     The DOM events related to the mouse movement, if any.
     */
    move(position: Position | object, events?: Event | Event[]): void;

    /**
     * Notifies event listeners that the mouse pointer has left the boundaries
     * of the area being monitored for mouse events.
     *
     * @fires Mouse.Event.Target#mouseout
     *
     * @param [events=[]]
     *     The DOM events related to the mouse leaving the boundaries of the
     *     monitored object, if any.
     */
    out(events?: Event | Event[]): void;

    /**
     * Releases all mouse buttons that are currently pressed. If all mouse
     * buttons have already been released, this function has no effect.
     *
     * @fires Mouse.Event.Target#mouseup
     *
     * @param [events=[]]
     *     The DOM event related to all mouse buttons being released, if any.
     */
    reset(events?: Event | Event[]): void;
}
