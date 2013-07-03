// Type definitions for Hammer.js 0.6
// Project: http://eightmedia.github.com/hammer.js/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface HammerOptions {
    prevent_default?: boolean;
    css_hacks?: boolean;
    swipe?: boolean;
    swipe_time?: number;
    swipe_min_distance?: number;
    drag?: boolean;
    drag_vertical?: boolean;
    drag_horizontal?: boolean;
    drag_min_distance?: number;
    transform?: boolean;
    scale_treshold?: number;
    rotation_treshold?: number;
    tap?: boolean;
    tap_double?: boolean;
    tap_max_interval?: number;
    tap_max_distance?: number;
    tap_double_distance?: number;
    hold?: boolean;
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
