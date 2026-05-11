/// <reference types="jquery"/>

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

    // You shouldn't normally use this internal method. Only use it when you know what you're doing! You can read the sourcecode for information about how to use this.
    trigger(gesture: string, eventData: HammerGestureEventData): HammerInstance;
}

// Gesture Options : https://github.com/EightMedia/hammer.js/wiki/Getting-Started#gesture-options
interface HammerOptions {
    behavior?: {
        contentZooming?: string | undefined;
        tapHighlightColor?: string | undefined;
        touchAction?: string | undefined;
        touchCallout?: string | undefined;
        userDrag?: string | undefined;
        userSelect?: string | undefined;
    } | undefined;
    doubleTapDistance?: number | undefined;
    doubleTapInterval?: number | undefined;
    drag?: boolean | undefined;
    dragBlockHorizontal?: boolean | undefined;
    dragBlockVertical?: boolean | undefined;
    dragDistanceCorrection?: boolean | undefined;
    dragLockMinDistance?: number | undefined;
    dragLockToAxis?: boolean | undefined;
    dragMaxTouches?: number | undefined;
    dragMinDistance?: number | undefined;
    gesture?: boolean | undefined;
    hold?: boolean | undefined;
    holdThreshold?: number | undefined;
    holdTimeout?: number | undefined;
    preventDefault?: boolean | undefined;
    preventMouse?: boolean | undefined;
    release?: boolean | undefined;
    showTouches?: boolean | undefined;
    swipe?: boolean | undefined;
    swipeMaxTouches?: number | undefined;
    swipeMinTouches?: number | undefined;
    swipeVelocityX?: number | undefined;
    swipeVelocityY?: number | undefined;
    tap?: boolean | undefined;
    tapAlways?: boolean | undefined;
    tapMaxDistance?: number | undefined;
    tapMaxTime?: number | undefined;
    touch?: boolean | undefined;
    transform?: boolean | undefined;
    transformMinRotation?: number | undefined;
    transformMinScale?: number | undefined;
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
    clientX: number;
    clientY: number;
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
