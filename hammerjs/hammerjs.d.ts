// Type definitions for Hammer.js 1.0.10
// Project: http://eightmedia.github.com/hammer.js/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

declare var Hammer: HammerStatic;

interface HammerStatic {
    (element: any, options?: HammerOptions): HammerInstance;

    VERSION: number;
    HAS_POINTEREVENTS: boolean;
    HAS_TOUCHEVENTS: boolean;
    UPDATE_VELOCITY_INTERVAL: number;
    POINTER_MOUSE: HammerPointerType;
    POINTER_TOUCH: HammerPointerType;
    POINTER_PEN: HammerPointerType;

    DIRECTION_UP: HammerDirectionType;
    DIRECTION_DOWN: HammerDirectionType;
    DIRECTION_LEFT: HammerDirectionType;
    DIRECTION_RIGH: HammerDirectionType;

    EVENT_START: HammerTouchEventState;
    EVENT_MOVE: HammerTouchEventState;
    EVENT_END: HammerTouchEventState;

    plugins: any;
    gestures: any;
    READY: boolean;


}

declare class HammerInstance {
    constructor(element: any, options?: HammerOptions);

    on(gesture: string, handler: (event: HammerEvent) => void): HammerInstance;
    off(gesture: string, handler: (event: HammerEvent) => void): HammerInstance;
    enable(toggle: boolean): HammerInstance;

    // You shouldn't use this, this is an internally method use by the gestures. Only use it when you know what you're doing! You can read the sourcecode about how to use this.
    trigger(gesture: string, eventData: HammerGestureEventData): HammerInstance;
}

// Gesture Options : https://github.com/EightMedia/hammer.js/wiki/Getting-Started#gesture-options
interface HammerOptions {
    drag?: boolean;
    drag_block_horizontal?: boolean;
    drag_block_vertical?: boolean;
    drag_lock_to_axis?: boolean;
    drag_max_touches?: number;
    drag_min_distance?: number;
    hold?: boolean;
    hold_threshold?: number;
    hold_timeout?: number;
    prevent_default?: boolean;
    prevent_mouseevents?: boolean;
    release?: boolean;
    show_touches?: boolean;
    stop_browser_behavior?: any;
    swipe?: boolean;
    swipe_max_touches?: number;
    swipe_velocity?: number;
    tap?: boolean;
    tap_always?: boolean;
    tap_max_distance?: number;
    tap_max_touchtime?: number;
    doubletap_distance?: number;
    doubletap_interval?: number;
    touch?: boolean;
    transform?: boolean;
    transform_always_block?: boolean;
    transform_min_rotation?: number;
    transform_min_scale?: number;
}

interface HammerGestureEventData {
    timestamp: number;
    target: HTMLElement;
    touches: HammerPoint[];
    pointerType: HammerPointerType;
    center: HammerPoint;
    deltaTime: number;
    deltaX: number;
    deltaY: number;
    velocityX: number;
    velocityY: number;
    angle: number;
    interimAngle: number;
    direction: HammerDirectionType;
    interimDirection: HammerDirectionType;
    distance: number;
    scale: number;
    rotation: number;
    eventType: HammerTouchEventState;
    srcEvent: any;
    startEvent: any;

    stopPropagation(): void;
    preventDefault(): void;
    stopDetect(): void;
}

interface HammerPoint {
    pageX: number;
    pageY: number;
}

interface HammerEvent {
    type: string;
    gesture: HammerGestureEventData;

    stopPropagation(): void;
    preventDefault(): void;

}

declare enum HammerPointerType {
}
declare enum HammerDirectionType {
}
declare enum HammerTouchEventState {
}

interface JQuery {
    hammer(options?: HammerOptions): JQuery;
}
