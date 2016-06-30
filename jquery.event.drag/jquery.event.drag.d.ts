// Type definitions for jquery.events.drag v2.2
// Project: http://threedubmedia.com/code/event/drag
// Definitions by: berwyn <https://github.com/berwyn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQueryDragOptions {

    /**
     * A number that matches the "which" event property
     * to indicate the mousebutton that is pressed.
     * (0 = Any Button, 1 = Left Button, 2 = Middle Button, 3 = Right Button)
     * @default 1
     */
    which?: number;

    /**
     * A number representing the length of pixels that the mouse must move
     * before the "dragstart" event may fire.
     * @default 0
     */
    distance?: number;

    /**
     * A jquery selector expression that matches elements where dragging is
     * not allowed to begin.
     * @default ':input'
     */
    not?: string;

    /**
     * A jquery selector expression that matches elements where dragging is
     * allowed to begin.
     * @default null
     */
    handle?: string;

    /**
     * A boolean to indicate whether to use element position relative to the
     * document or the offset parent. This setting affects the values offsetX,
     * offsetY, originalX, and originalY. (FALSE = Position Relative to the Document)
     * @default false
     */
    relative?: boolean;

    /**
     * A boolean to indicate whether or not "click" events are allowed to fire after
     * the "dragend" event. (FALSE = No Click)
     * @default false
     */
    click?: boolean;

    /**
     * A boolean to indicate whether or not "drag" events are considered in the drag
     * interaction, or a jquery selector expression that should filter and match a subset
     * of the registered drop targets. (FALSE = No Dropping, TRUE = Drop Anywhere,
     * ":expr" = Drop in targets that match this expression)
     * @default true
     */
    drop?: boolean | string;
}

interface JQueryDragCallbackObject {

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
    drag(): JQuery;
    drag(type: string): JQuery;
    drag(handler: (evt?: JQueryEventObject, callback?: JQueryDragCallbackObject) => void, options?: JQueryDragOptions): JQuery;
    drag(type: string, handler: (evt?: JQueryEventObject, callback?: JQueryDragCallbackObject) => void, options?: JQueryDragOptions): JQuery;
}
