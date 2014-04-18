// Type definitions for jquery.finger.js
// Project: http://ngryman.sh/jquery.finger/
// Definitions by: Max Ackley <https://github.com/maxackley/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

declare module JQueryFinger {
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
          * The number of pixel the user will have to move in order to fire motion
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
    x: number;
    y: number;
    dx: number;
    dy: number;
    adx: number;
    ady: number;
    orientation: string;
    direction: number;
}

interface JQueryStatic {
    Finger: JQueryFinger.JQueryFingerOptions;
}
