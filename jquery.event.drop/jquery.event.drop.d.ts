// Type definitions for jquery.events.drop v2.2
// Project: http://threedubmedia.com/code/event/drop
// Definitions by: berwyn <https://github.com/berwyn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQueryDropOptions {
    /**
     * A string which matches any one of the configured tolerance
     * modes (fit, intersect, middle, overlap) If a mode is not found,
     * the plugin will use the mouse position as a fallback.
     * @default 'overlap'
     */
    mode?: 'fit' | 'intersect' | 'middle' | 'overlap' | string;

    // TODO: There's not a strong type for proxy/target on the docs.
    // It's implied that it's an Element, but it doesn't use Element properties

    /**
     * An optional function to use instead of a configured tolerance
     * mode. The function has the same signature as any tolerance
     * mode function.
     * @default null
     */
    tolerance?: (event: JQueryEventObject, proxy: any, target: any) => number;

    /**
     * A number which indicates the frequency to check drop target
     * tolerances during "drag" events. This can be used to tune
     * performance when dealing with many elements.
     * @default 20
     */
    delay?: number;

    /**
     * A value which indicates how many drop targets are allowed to
     * be win per interaction for each dragged element.
     * (true = unlimited, false = none)
     * @default 1
     */
    multi?: boolean | number;
}

interface JQueryDropCallbackObject {

    /**
     * The drag element, or the drop element, to which the event
     * handler has been bound. (Always the same as "this" within
     * an event handler)
     */
    target: Element;

    /**
     * The dragged element for the given interaction to which the
     * drag event has been bound.
     */
    drag: Element;

    /**
     * The dragged element, or any element returned by the "dragstart"
     * handler. The proxy element is used to determine the drop target
     * tolerance.
     */
    proxy: Element;

    /**
     * Contains all of the active drop targets for the current interaction.
     */
    drop: any[]; // TODO: Array elements aren't described in the docs :/

    /**
     * Contains all of the available drop targets for the current interaction.
     */
    available: any[];

    /**
     * A helper function which updates the locations of all of the available
     * drop targets for the current interaction.
     */
    update: () => void;

    /**
     * The horizontal location of the "mousedown" event.
     */
    startX: number;

    /**
     * The vertical location of the "mousedown" event.
     */
    startY: number;

    /**
     * The horizontal distance moved from "startX".
     */
    deltaX: number;

    /**
     * The horizontal distance moved from "startY".
     */
    deltaY: number;

    /**
     * The starting horizontal position of the drag "target" element.
     */
    originalX: number;

    /**
     * The starting vertical position of the drag "target" element.
     */
    originalY: number;

    /**
     * The the moved horizontal position of the drag "target" element.
     */
    offsetX: number;

    /**
     * The the moved vertical position of the drag "target" element.
     */
    offsetY: number;

}

declare interface JQuery {
    drop(): JQuery;
    drop(type: string): JQuery;
    drop(handler: (evt?: JQueryEventObject, callback?: JQueryDropCallbackObject) => void): JQuery;
    drop(type: string, handler: (evt?: JQueryEventObject, callback?: JQueryDropCallbackObject) => void): JQuery;
}

declare interface JQueryStatic {
    drop(options: JQueryDropOptions): void;
}
