// Type definitions for Hammer.js 0.6
// Project: http://eightmedia.github.com/hammer.js/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface HammerOptions {
    prevent_default?: bool;
    css_hacks?: bool;
    swipe?: bool;
    swipe_time?: number;
    swipe_min_distance?: number;
    drag?: bool;
    drag_vertical?: bool;
    drag_horizontal?: bool;
    drag_min_distance?: number;
    transform?: bool;
    scale_treshold?: number;
    rotation_treshold?: number;
    tap?: bool;
    tap_double?: bool;
    tap_max_interval?: number;
    tap_max_distance?: number;
    tap_double_distance?: number;
    hold?: bool;
    hold_timeout?: number;
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

class Hammer {
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