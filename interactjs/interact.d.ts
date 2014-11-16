// Type definitions for Interacting for interact.js v1.0.25
// Project: https://github.com/taye/interact.js
// Definitions by: Douglas Eichelberger <https://github.com/dduugg>, Adi Dahiya <https://github.com/adidahiya>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// API documentation: http://interactjs.io/docs

interface Interactable {
    // returns Element or string
    accept(): any;
    accept(newValue: Element): Interactable;
    accept(newValue: string): Interactable;
    actionChecker(): Function;
    actionChecker(checker: Function): Interactable;
    // returns boolean or {[key: string]: any}
    autoScroll(): any;
    autoScroll(options: boolean): Interactable;
    autoScroll(options: {[key: string]: any}): Interactable;
    context(): Node;
    defaultActionChecker(event: any): string;
    deltaSource(): string;
    // returns Interactable if newValue is "page" or "client", otherwise returns string
    deltaSource(newValue: String): Interactable;
    draggable(): boolean;
    draggable(options: boolean): Interactable;
    draggable(options: {[key: string]: any}): Interactable;
    dropCheck(event: MouseEvent): boolean;
    dropCheck(event: TouchEvent): boolean;
    dropChecker(): Function;
    dropChecker(checker: Function): Interactable;
    // returns boolean or {[key: string]: any}
    dropzone(): any;
    dropzone(options: boolean): Interactable;
    dropzone(options: {[key: string]: any}): Interactable;
    // return HTMLElement or SVGElement
    element(): Element;
    fire(iEvent: InteractEvent): Interactable;
    // returns boolean or {[key: string]: any}
    gesturable(): any;
    gesturable(options: boolean): Interactable;
    gesturable(options: {[key: string]: any}): Interactable;
    getRect(): ClientRect;
    // returns Element or string
    ignoreFrom(): any;
    ignoreFrom(newValue: string): Interactable;
    ignoreFrom(newValue: Element): Interactable;
    // returns boolean or {[key: string]: any}
    inertia(): any;
    inertia(options: boolean): Interactable;
    inertia(options: {[key: string]: any}): Interactable;
    off(eventType: string, listener: Function, useCapture?: boolean): Interactable;
    on(eventType: string, listener: Function, useCapture?: boolean): Interactable;
    origin(): Point;
    origin(newValue: HTMLElement): Interactable;
    origin(newValue: SVGElement): Interactable;
    origin(newValue: Point): Interactable;
    rectChecker(): Function;
    rectChecker(newValue: Function): Interactable;
    resizable(): Interactable;
    resizable(options: boolean): Interactable;
    resizable(options: {[key: string]: any}): Interactable;
    restrict(): Restrict;
    restrict(newValue: Restrict): Interactable;
    set(options: {[key: string]: any}): Interactable;
    // returns boolean or {[key: string]: any}
    snap(): any;
    snap(options: boolean): Interactable;
    snap(options: {[key: string]: any}): Interactable;
    squareResize(): boolean;
    squareResize(newValue: boolean): Interactable;
    styleCursor(): boolean;
    styleCursor(newValue: boolean): Interactable;
    unset(): InteractStatic;
    validateSetting(context: string, option: string, value: any): any;
}

interface Coordinates {
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    timeStamp: number;
}

interface Debug {
    target: any;
    dragging: any;
    resizing: any;
    gesturing: any;
    prepared: any;

    prevCoords: Coordinates;
    downCoords: Coordinates;

    pointerIds: any[];
    pointerMoves: any[];
    addPointer: any;
    removePointer: any;
    recordPointers: any;

    inertia: InertiaStatus;

    downTime: any;
    downEvent: any;
    prevEvent: any;

    Interactable: any;
    IOptions: any;
    interactables: any;
    dropzones: any;
    pointerIsDown: any;
    defaultOptions: any;
    defaultActionChecker: any;

    actions: any;
    dragMove: any;
    resizeMove: any;
    gestureMove: any;
    pointerUp: any;
    pointerDown: any;
    pointerMove: any;
    pointerHover: any;

    events: any;
    globalEvents: any;
    delegatedEvents: any;
}

interface InertiaStatus {
    active: boolean;
    target: any;
    targetElement: any;

    startEvent: any;
    pointerUp: any

    xe: number;
    ye: number;
    duration: number;

    t0: number;
    vx0: number;
    vys: number;

    lambda_v0: number;
    one_ve_v0: number;
    i: any;
}

interface Point {
    x: number;
    y: number;
}

// value types are either ClientRect or Element
interface Restrict {
    drag?: any;
    gesture?: any;
    resize?: any;
    elementRect?: {[direction: string]: number};
}

interface InteractEvent {
    altKey: boolean;
    axes: string;
    button: number
    clientX0: number;
    clientX: number
    clientY0: number;
    clientY: number
    ctrlKey: boolean
    dt: number;
    duration: number;
    dx: number;
    dy: number;
    metaKey: boolean;
    pageX: number;
    pageY: number;
    shiftKey: boolean;
    speed: number;
    t0: number;
    target: any;
    timeStamp: number;
    type: string;
    velocityX: number;
    velocityY: number;
    x0: number;
    y0: number;
}

interface TouchEvent {
    changedTouches: any[];
    pageX: number;
    pageY: number;
    touches: any[];
    type: string;
}

interface InteractStatic {
    (element: HTMLElement): Interactable;
    (element: SVGElement): Interactable;
    (element: string): Interactable;
    // returns boolean or {[key: string]: any}
    autoScroll(): any;
    autoScroll(options: boolean): InteractStatic;
    autoScroll(options: {[key: string]: any}): InteractStatic;
    currentAction(): string
    debug(): Debug;
    deltaSource(): string;
    // "page" and "client" are the valid parameters
    deltaSource(newValue: string): InteractStatic;
    dynamicDrop(): boolean;
    dynamicDrop(newValue: boolean): InteractStatic;
    enableDragging(): boolean;
    enableDragging(newValue: boolean): InteractStatic;
    enableGesturing(): boolean;
    enableGesturing(newValue: boolean): InteractStatic;
    enableResizing(): boolean;
    enableResizing(newValue: boolean): InteractStatic;
    // returns boolean or {[key: string]: any}
    inertia(): any;
    inertia(options: boolean): InteractStatic;
    inertia(options: {[key: string]: any}): InteractStatic;
    isSet(element: Element): boolean;
    margin(): number;
    margin(newvalue: number): InteractStatic;
    off(type: string, listener: Function, useCapture?: boolean): InteractStatic;
    on(type: string, listener: Function, useCapture?: boolean): InteractStatic;
    restrict(): Restrict;
    restrict(newValue: Restrict): InteractStatic;
    simulate(action: string, element: Element, pointerEvent?: any): InteractStatic;
    // returns boolean or {[key: string]: any}
    snap(): any;
    snap(options: boolean): InteractStatic;
    snap(options: {[key: string]: any}): InteractStatic;
    stop(event: Event): InteractStatic;
    styleCursor(): boolean;
    styleCursor(newValue: boolean): InteractStatic;
    supportsTouch(): boolean
}

declare var interact: InteractStatic;

declare module "interact" {
    export = interact;
}
