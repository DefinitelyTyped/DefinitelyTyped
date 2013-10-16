// Type definitions for Hammer.js 1.0.5
// Project: http://eightmedia.github.com/hammer.js/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

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

interface HammerPoint {
    x: number;
    y: number;
}

interface HammerEvent {
    originalEvent: Event;
    position: HammerPoint;
    touches: HammerPoint[];
}

interface HammertTransformEvent extends HammerEvent {
    scale: number;
    rotation: number;
}

interface HammerDirectionEvent extends HammerEvent {
    angle: number;
    direction: string;
    distance: number;
    distanceX: number;
    distanceY: number;
}

declare class Hammer {
    constructor (element: any, options?: HammerOptions);

    ondragstart: (event: HammerDirectionEvent) => void;
    ondrag: (event: HammerDirectionEvent) => void;
    ondragend: (event: HammerDirectionEvent) => void;
    onswipe: (event: HammerDirectionEvent) => void;
    ontap: (event: HammerEvent) => void;
    ondoubletap: (event: HammerEvent) => void;
    onhold: (event: HammerEvent) => void;
    ontransformstart: (event: HammertTransformEvent) => void;
    ontransform: (event:  HammertTransformEvent) => void;
    ontransformend: (event: HammertTransformEvent) => void;
    onrelease: (event: HammerEvent) => void;
}

interface JQuery {
    hammer(options?: HammerOptions): JQuery;
}
