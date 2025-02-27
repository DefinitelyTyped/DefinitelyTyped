/// <reference types="jquery" />

interface JQuery<TElement = HTMLElement> {
    /**
     * The main API entry point of the touch swipe jQuery plugin accessible via `$.swipe`.
     */
    swipe: JQueryTouchSwipe.Swipe<TElement>;
}

/**
 * Namespace for the JQuery TouchSwipe plugin.
 *
 * A jQuery plugin to be used on touch devices such as iPad, iPhone, Android etc.
 *
 * Detects single and multiple finger swipes, pinches and falls back to mouse 'drags' on the desktop.
 *
 * Time and distance thresholds can be set to distinguish between swipe gesture and slow drag.
 *
 * Allows exclusion of child elements (interactive elements) as well allowing page scrolling or page zooming depending on configuration.
 *
 * See https://github.com/mattbryson/TouchSwipe-Jquery-Plugin.
 */
declare namespace JQueryTouchSwipe {
    /**
     * Event handler for pointer related events.
     */
    type PointerHandler =
        /**
         * @param event The original event object
         * @param target The element clicked on.
         */
        (this: JQuery, event: JQuery.TriggeredEvent, target: HTMLElement) => void;

    /**
     * Event handler for swipe related events.
     */
    type SwipeHandler =
        /**
         * @param event The original event object
         * @param direction The direction the user swiped in. See {@link Swipe.directions | $.fn.swipe.directions}.
         * @param distance The distance the user swiped.
         * @param duration The duration of the swipe in milliseconds.
         * @param fingerCount The number of fingers used. See {@link Swipe.fingers | $.fn.swipe.fingers}.
         * @param fingerData The coordinates of fingers in event.
         * @param currentDirection The current direction the user is swiping. See
         * {@link Swipe.directions | $.fn.swipe.directions}.
         */
        (
            this: JQuery,
            event: JQuery.TriggeredEvent,
            direction: Direction,
            distance: number,
            duration: number,
            fingerCount: Finger,
            fingerData: FingerData,
            currentDirection: Direction,
        ) => void;

    /**
     * Event handler for swipe related events during a certain phase.
     */
    type SwipePhaseHandler =
        /**
         * @param event The original event object
         * @param phase The phase of the swipe event. See {@link Swipe.phases | $.fn.swipe.phases}.
         * @param direction The direction the user swiped in. This is null if the user has yet to move.
         * See {@link Swipe.directions | $.fn.swipe.directions}.
         * @param distance The distance the user swiped. This is 0 if the user has yet to move.
         * @param duration The duration of the swipe in milliseconds.
         * @param fingerCount The number of fingers used. See {@link Swipe.fingers | $.fn.swipe.fingers}.
         * @param fingerData The coordinates of fingers in event.
         * @param currentDirection The current direction the user is swiping. See
         * {@link Swipe.directions | $.fn.swipe.directions}.
         */
        (
            this: JQuery,
            event: JQuery.TriggeredEvent,
            phase: Phase,
            direction: Direction | null,
            distance: number,
            duration: number,
            fingerCount: Finger,
            fingerData: FingerData,
            currentDirection: Direction | null,
        ) => void;

    /**
     * Event handler for pinch related events.
     */
    type PinchHandler =
        /**
         * @param event The original event object
         * @param direction The direction the user swiped in. See {@link Swipe.directions | $.fn.swipe.directions}.
         * @param distance The distance the user pinched.
         * @param duration The duration of the swipe in milliseconds.
         * @param fingerCount The number of fingers used. See {@link Swipe.fingers | $.fn.swipe.fingers}.
         * @param zoom The zoom / scale level the user pinched too, 0-1.
         * @param fingerData The coordinates of the fingers.
         */
        (
            this: JQuery,
            event: JQuery.TriggeredEvent,
            direction: Direction,
            distance: number,
            duration: number,
            fingerCount: Finger,
            zoom: number,
            fingerData: FingerData,
        ) => void;

    /**
     * Event handler for pinch related events during a certain phase.
     */
    type PinchPhaseHandler =
        /**
         * @param event The original event object
         * @param phase The phase of the swipe event. See {@link Swipe.phases | $.fn.swipe.phases}.
         * @param direction The direction the user swiped in. See {@link Swipe.directions | $.fn.swipe.directions}.
         * @param distance The distance the user swiped.
         * @param duration The duration of the swipe in milliseconds.
         * @param fingerCount The number of fingers used.
         * @param zoom The zoom/scale level the user pinched too, 0-1.
         */
        (
            this: JQuery,
            event: JQuery.TriggeredEvent,
            phase: Phase,
            direction: Direction | null,
            distance: number,
            duration: number,
            fingerCount: Finger,
            zoom: number,
            fingerData: FingerData,
        ) => void;

    /**
     * The direction constants that are passed to the event handlers. These properties are read-only, attempting to
     * change them will not alter the values passed to the event handlers.
     * @see {@link Directions | $.fn.swipe.directions}
     */
    interface Directions {
        /**
         * Constant indicating the left direction.
         */
        readonly LEFT: "left";

        /**
         * Constant indicating the right direction.
         */
        readonly RIGHT: "right";

        /**
         * Constant indicating the up direction.
         */
        readonly UP: "up";

        /**
         * Constant indicating the down direction.
         */
        readonly DOWN: "down";

        /**
         * Constant indicating the in direction.
         */
        readonly IN: "in";

        /**
         * Constant indicating the out direction.
         */
        readonly OUT: "out";
    }

    /**
     * Union type of the possible values for the direction constants that are passed to the event handlers.
     * @see {@link Directions | $.fn.swipe.directions}
     */
    type Direction = Directions[keyof Directions];

    /**
     * Constants representing the number of fingers used in a swipe. These are used to set both the value of
     * {@link Settings.fingers | fingers} in the options object, as well as the value of the fingers event property.
     * These properties are read-only, attempting to change them will not alter the values passed to the event handlers.
     * @see {@link Fingers | $.fn.swipe.fingers}
     */
    interface Fingers {
        /**
         * Constant indicating 1 finger is to be detected / was detected.
         */
        readonly ONE: 1;

        /**
         * Constant indicating 2 finger is to be detected / was detected.
         */
        readonly TWO: 2;

        /**
         * Constant indicating 3 finger is to be detected / was detected.
         */
        readonly THREE: 3;

        /**
         * Constant indicating 4 finger is to be detected / was detected.
         */
        readonly FOUR: 4;

        /**
         * Constant indicating 5 finger is to be detected / was detected.
         */
        readonly FIVE: 5;

        /**
         * Constant indicating any combination of finger are to be detected.
         */
        readonly ALL: "all";
    }

    /**
     * Union type of the possible values representing the number of fingers used in a swipe.
     * @see {@link Fingers | $.fn.swipe.fingers}
     */
    type Finger = Fingers[keyof Fingers];

    /**
     * The page scroll constants that can be used to set the value of {@link Settings.allowPageScroll | allowPageScroll}
     * option. These properties are read-only.
     * @see {@link PageScrolls | $.fn.swipe.pageScroll}
     */
    interface PageScrolls {
        /**
         * Constant indicating no page scrolling is allowed.
         *
         * The page will not scroll when user swipes.
         */
        readonly NONE: "none";

        /**
         * Constant indicating horizontal page scrolling is allowed.
         *
         * Will force page to scroll on horizontal swipes.
         */
        readonly HORIZONTAL: "horizontal";

        /**
         * Constant indicating vertical page scrolling is allowed.
         *
         * Will force page to scroll on vertical swipes.
         */
        readonly VERTICAL: "vertical";

        /**
         * Constant indicating either horizontal or vertical will be allowed, depending on the swipe handlers
         * registered.
         *
         * All undefined swipes will cause the page to scroll in that direction.
         */
        readonly AUTO: "auto";
    }

    /**
     * Union type of the possible values that can be used to set the value of
     * {@link Settings.allowPageScroll | allowPageScroll} option.
     * @see {@link PageScrolls | $.fn.swipe.pageScroll}
     */
    type PageScroll = PageScrolls[keyof PageScrolls];

    /**
     * The phases that a touch event goes through. The phase is passed to the event handlers. These properties are
     * read-only, attempting to change them will not alter the values passed to the event handlers.
     * @see {@link Phases | $.fn.swipe.phases}
     */
    interface Phases {
        /**
         * Constant indicating the start phase of the touch event.
         */
        readonly PHASE_START: "start";

        /**
         * Constant indicating the move phase of the touch event.
         */
        readonly PHASE_MOVE: "move";

        /**
         * Constant indicating the end phase of the touch event.
         */
        readonly PHASE_END: "end";

        /**
         * Constant indicating the cancel phase of the touch event.
         */
        readonly PHASE_CANCEL: "cancel";
    }

    /**
     * Union type of the possible values for the phases that a touch event goes through.
     * @see {@link Phases | $.fn.swipe.phases}
     */
    type Phase = Phases[keyof Phases];

    /**
     * Represents some details about the position of the fingers.
     */
    interface FingerData {
        /**
         * The point where the swipe started.
         */
        readonly start: CartesianPoint;

        /**
         * The point where the finger(s) were more recently.
         */
        readonly last: CartesianPoint;

        /**
         * The point where the swipe ended.
         */
        readonly end: CartesianPoint;
    }

    /**
     * Represents a two dimensional point in a cartesian coordinate system.
     */
    interface CartesianPoint {
        /**
         * The horizontal coordinate of the point.
         */
        readonly x: number;

        /**
         * The vertical coordinate of the point.
         */
        readonly y: number;
    }

    /**
     * Optional settings that can be passed when creating a new touch swipe instance to customize its behavior.
     */
    interface Settings {
        /**
         * How the browser handles page scrolls when the user is swiping on a touchSwipe object. See {@link pageScroll}.
         *
         * Defaults to `auto`.
         */
        allowPageScroll: PageScroll | undefined;

        /**
         * The number of pixels that the user must move their finger back from the original swipe direction to cancel
         * the gesture.
         *
         * Defaults to `null`.
         */
        cancelThreshold: number | null;

        /**
         * A handler triggered when a user double taps on the item. The delay between taps can be set with the
         * {@link doubleTapThreshold} property.
         *
         * Note: If you set both {@link doubleTap} and {@link tap} handlers, the tap event will be delayed by the
         * {@link doubleTapThreshold} as the script needs to check if its a double tap.
         *
         * Defaults to `null`.
         */
        doubleTap: PointerHandler | null;

        /**
         * Time in milliseconds between 2 taps to count as a double tap.
         *
         * Defaults to `200`.
         */
        doubleTapThreshold: number;

        /**
         * A jQuery selector that specifies child elements that do NOT trigger swipes. By default this excludes elements
         * with the class `.noSwipe`.
         *
         * Defaults to `".noSwipe"`.
         */
        excludedElements: string;

        /**
         * If `true` mouse events are used when run on a non-touch device, `false` will stop swipes being triggered by
         * mouse events on non-touch devices.
         *
         * Defaults to `true`.
         */
        fallbackToMouseEvents: boolean;

        /**
         * Time in milliseconds between releasing multiple fingers.  If 2 fingers are down, and are released one after
         * the other, if they are within this threshold, it counts as a simultaneous release.
         *
         * Defaults to `250`.
         */
        fingerReleaseThreshold: number;

        /**
         * The number of fingers to detect in a swipe. Any swipes that do not meet this requirement will NOT trigger
         * swipe handlers.
         *
         * Defaults to `1`.
         */
        fingers: Finger;

        /**
         * A handler triggered when a user reaches {@link longTapThreshold} on the item.
         *
         * The hold tap handler is triggered as soon as the {@link longTapThreshold} is reached. You can set the time
         * delay for a long tap with the {@link longTapThreshold | $.fn.swipe.defaults.longTapThreshold} property.
         *
         * Defaults to `null`.
         */
        hold: PointerHandler | null;

        /**
         * A handler triggered when a user long taps on the item. The delay between start and end can be set with the
         * {@link longTapThreshold} property.
         *
         * The long tap handler is triggered once a tap has been released if the tap was longer than the
         * {@link longTapThreshold}. You can set the time delay for a long tap with the
         * {@link longTapThreshold | $.fn.swipe.defaults#longTapThreshold} property.
         *
         * Defaults to `null`.
         */
        longTap: PointerHandler | null;

        /**
         * Time in milliseconds between tap and release for a long tap.
         *
         * Defaults to `500`.
         */
        longTapThreshold: number;

        /**
         * Time, in milliseconds, between `touchStart` and `touchEnd` must NOT exceed in order to be considered a swipe.
         *
         * Defaults to `null`.
         */
        maxTimeThreshold: number | null;

        /**
         * A handler triggered for pinch in events. See also the `pinchIn` event.
         *
         * Defaults to `null`.
         */
        pinchIn: PinchHandler | null;

        /**
         * A handler triggered for pinch out events. See also the `pinchOut` event.
         *
         * Defaults to `null`.
         */
        pinchOut: PinchHandler | null;

        /**
         * A handler triggered for every phase of a pinch. This handler is constantly fired for the duration of the
         * pinch. This is triggered regardless of thresholds. See also the `pinchStatus` event.
         *
         * Defaults to `null`.
         */
        pinchStatus: PinchPhaseHandler | null;

        /**
         * The number of pixels that the user must pinch their finger by before it is considered a pinch.
         *
         * Defaults to `20`.
         */
        pinchThreshold: number;

        /**
         * By default events are cancelled, so the page does not move. You can disable this so both native events fire
         * as well as your handlers.
         *
         * Defaults to `true`.
         */
        preventDefaultEvents: boolean;

        /**
         * A catch all handler that is triggered for all swipe directions. See also the `swipe` event.
         *
         * Defaults to `null`.
         */
        swipe: SwipeHandler | null;

        /**
         * A handler that is triggered for `down` swipes. See also the `swipeDown` event.
         *
         * Defaults to `null`.
         */
        swipeDown: SwipeHandler | null;

        /**
         * A handler that is triggered for `left` swipes. See also the `swipeLeft` event.
         *
         * Defaults to `null`.
         */
        swipeLeft: SwipeHandler | null;

        /**
         * A handler that is triggered for `right` swipes. See also the `swipeRight` event.
         *
         * Defaults to `null`.
         */
        swipeRight: SwipeHandler | null;

        /**
         * A handler triggered for every phase of the swipe. This handler is constantly fired for the duration of the
         * pinch. This is triggered regardless of swipe thresholds.See also the `swipeStatus` event.
         *
         * Defaults to `null`.
         */
        swipeStatus: SwipePhaseHandler | null;

        /**
         * A handler that is triggered for `up` swipes. See also the `swipeUp` event.
         *
         * Defaults to `null`.
         */
        swipeUp: SwipeHandler | null;

        /**
         * A handler triggered when a user just taps on the item, rather than swipes on an element. If they do not move,
         * tap is triggered, if they do move, it is not.
         *
         * Defaults to `null`.
         */
        tap: PointerHandler | null;

        /**
         * The number of pixels that the user must move their finger by before it is considered a swipe.
         *
         * Defaults to `75`.
         */
        threshold: number;

        /**
         * If `true`, the swipe events are triggered when the touch end event is received (user releases finger).  If
         * `false`, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
         *
         * Defaults to `true`.
         */
        triggerOnTouchEnd: boolean;

        /**
         * If true, then when the user leaves the swipe object, the swipe will end and trigger appropriate handlers.
         *
         * Defaults to `false`.
         */
        triggerOnTouchLeave: boolean;
    }

    /**
     * The main API entry point of the touch swipe jQuery plugin accessible via `$.swipe`.
     * @typeParam TElement Type of the wrapped DOM element in the JQuery selection.
     */
    interface Swipe<TElement = HTMLElement> {
        /**
         * Initializes TouchSwipe with the given settings.
         * @returns this jQuery instance for chaining.
         */
        (settings?: Partial<JQueryTouchSwipe.Settings>): JQuery<TElement>;

        /**
         * Destroy the swipe plugin completely. To use any swipe methods, you must reinitialize the plugin.
         * @param method The method to call on the TouchSwipe plugin.
         * @returns undefined when the element was destroyed, jQuery instance when it was not initialized.
         */
        (method: "destroy"): JQuery<TElement> | undefined;

        /**
         * Disables the swipe plugin.
         * @param method The method to call on the TouchSwipe plugin.
         * @returns this jQuery instance for chaining.
         */
        (method: "disable"): JQuery<TElement>;

        /**
         * Re-enables the swipe plugin with the previous configuration.
         * @param method The method to call on the TouchSwipe plugin.
         * @returns this jQuery instance for chaining.
         */
        (method: "enable"): JQuery<TElement>;

        /**
         * Retrieves the option with the given name.
         * @typeParam OptionName Name of the option to retrieve.
         * @param method The method to call on the TouchSwipe plugin.
         * @param name Name of the option to retrieve.
         * @returns The current value of the given option. JQuery instance when the selection was not yet initialized.
         */
        <OptionName extends keyof JQueryTouchSwipe.Settings>(
            method: "option",
            name: OptionName,
        ): JQueryTouchSwipe.Settings[OptionName] | JQuery<TElement>;

        /**
         * Updates the given option with a new value.
         * @typeParam OptionName Name of the option to retrieve.
         * @param method The method to call on the TouchSwipe plugin.
         * @param name Name of the option to update.
         * @param value New value for the option.
         * @returns null when the option was set. JQuery instance when the selection was not yet initialized.
         */
        <OptionName extends keyof JQueryTouchSwipe.Settings>(
            method: "option",
            name: OptionName,
            value: JQueryTouchSwipe.Settings[OptionName],
        ): JQuery<TElement> | null;

        /**
         * Updates the given options.
         * @param method The method to call on the TouchSwipe plugin.
         * @param settings The new settings to apply.
         * @returns null when the options were set. JQuery instance when the selection was not yet initialized.
         */
        (method: "option", settings: Partial<JQueryTouchSwipe.Settings>): JQuery<TElement> | null;

        /**
         * Retrieves the current settings of the TouchSwipe plugin.
         * @param method The method to call on the TouchSwipe plugin.
         * @returns The current settings. JQuery instance when the selection was not yet initialized.
         */
        (method: "option"): JQueryTouchSwipe.Settings | JQuery<TElement>;

        /**
         * The default configuration, and available options to configure touch swipe with. You can set the default
         * values by updating any of the properties prior to instantiation.
         */
        defaults: JQueryTouchSwipe.Settings;

        /**
         * The direction constants that are passed to the event handlers. These properties are read-only, attempting to
         * change them will not alter the values passed to the event handlers.
         */
        directions: JQueryTouchSwipe.Directions;

        /**
         * Constants representing the number of fingers used in a swipe. These are used to set both the value of
         * {@link Settings.fingers | fingers} in the options object, as well as the value of the fingers event property.
         * These properties are read-only, attempting to change them will not alter the values passed to the event
         * handlers.
         */
        fingers: JQueryTouchSwipe.Fingers;

        /**
         * The page scroll constants that can be used to set the value of
         * {@link JQueryTouchSwipe.Settings.allowPageScroll | allowPageScroll} option. These properties are read-only.
         */
        pageScroll: JQueryTouchSwipe.PageScrolls;

        /**
         * The phases that a touch event goes through. The phase is passed to the event handlers. These properties are
         * read-only, attempting to change them will not alter the values passed to the event handlers.
         */
        phases: JQueryTouchSwipe.Phases;

        /**
         * The version of the plugin.
         */
        version: string;
    }
}
