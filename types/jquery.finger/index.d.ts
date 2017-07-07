// Type definitions for jquery.finger.js
// Project: http://ngryman.sh/jquery.finger/
// Definitions by: Max Ackley <https://github.com/maxackley/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace JQueryFinger {
    export interface JQueryFingerOptions {
        /**
          * The time the user must hold in order to fire a press event. If this
          * time is not reached, a tap event will be fired instead.
          *     Default: 300(ms).
          */
        pressDuration: number;

        /**
          * The maximum time between two tap events to fire a doubletap event.
          * If this time is reached, two distinct tap events will be fired instead.
          *     Default: 300(ms).
          */
        doubleTapInterval: number;

        /**
          * The maximum time the user will have to swipe in order to fire a flick
          * event. If this time is reached, only drag events will continue to be
          * fired.
          *     Default: 150(ms).
          */
        flickDuration: number;

        /**
          * The number of pixels the user will have to move in order to fire motion
          * events (drag or flick). If this time is not reached, no motion will
          * be handled and tap, doubletap or press event will be fired.
          *     Default: 5(px).
          */
        motionThreshhold: number;

        /**
          * Globally prevents every native default behavior.
          *     Default: undefined.
          */
        preventDefault: boolean;
    }
}

interface JQueryFingerEventObject extends JQueryEventObject {
    /**
      * The x page coordinate.
      */
    x: number;

    /**
      * The y page coordinate.
      */
    y: number;

    /**
      * The x delta since the last event.
      */
    dx: number;

    /**
      * The y delta since the last event.
      */
    dy: number;

    /**
      * The absolute x delta since the last event.
      */
    adx: number;

    /**
      * The absolute y delta since the last event.
      */
    ady: number;

    /**
      * The orientation of the motion. Adjusted by $.Finger.motionThreshhold.
      * Value is 'horizontal' or 'vertical'.
      */
    orientation: string;

    /**
      * The direction of the motion. Value is 1 if the motion is 'positive'
      * (left-to-right or top-to-bottom) or -1 if 'negative'(right-to-left or
      * bottom-to-top).
      */
    direction: number;
}

interface JQuery {
    on(events: 'tap', handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any): JQuery;
    on(events: 'doubletap', handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any): JQuery;
    on(events: 'press', handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any): JQuery;
    on(events: 'drag', handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any): JQuery;
    on(events: 'flick', handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any): JQuery;

    on(events: 'tap', data: any, handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any): JQuery;
    on(events: 'doubletap', data: any, handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any): JQuery;
    on(events: 'press', data: any, handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any): JQuery;
    on(events: 'drag', data: any, handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any): JQuery;
    on(events: 'flick', data: any, handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any): JQuery;
}

interface JQueryStatic {
    Finger: JQueryFinger.JQueryFingerOptions;
}
