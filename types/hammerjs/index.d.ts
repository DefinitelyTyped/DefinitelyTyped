declare var Hammer: HammerStatic;

declare module "hammerjs" {
    export = Hammer;
}

interface HammerStatic {
    new(element: HTMLElement | SVGElement, options?: HammerOptions): HammerManager;

    defaults: HammerDefaults;

    VERSION: number;

    INPUT_START: 1;
    INPUT_MOVE: 2;
    INPUT_END: 4;
    INPUT_CANCEL: 8;

    STATE_POSSIBLE: 1;
    STATE_BEGAN: 2;
    STATE_CHANGED: 4;
    STATE_ENDED: 8;
    STATE_RECOGNIZED: 8; // same as STATE_ENDED
    STATE_CANCELLED: 16;
    STATE_FAILED: 32;

    DIRECTION_NONE: 1;
    DIRECTION_LEFT: 2;
    DIRECTION_RIGHT: 4;
    DIRECTION_UP: 8;
    DIRECTION_DOWN: 16;
    DIRECTION_HORIZONTAL: 6; // DIRECTION_LEFT | DIRECTION_RIGHT
    DIRECTION_VERTICAL: 24; // DIRECTION_UP | DIRECTION_DOWN
    DIRECTION_ALL: 30; // DIRECTION_HORIZONTAL | DIRECTION_VERTICAL

    Manager: HammerManagerConstructor;
    Input: HammerInput;
    TouchAction: TouchAction;

    TouchInput: TouchInput;
    MouseInput: MouseInput;
    PointerEventInput: PointerEventInput;
    TouchMouseInput: TouchMouseInput;
    SingleTouchInput: SingleTouchInput;

    Recognizer: RecognizerStatic;
    AttrRecognizer: AttrRecognizerStatic;
    Tap: TapRecognizerStatic;
    Pan: PanRecognizerStatic;
    Swipe: SwipeRecognizerStatic;
    Pinch: PinchRecognizerStatic;
    Rotate: RotateRecognizerStatic;
    Press: PressRecognizerStatic;

    on(target: EventTarget, types: string, handler: Function): void;
    off(target: EventTarget, types: string, handler: Function): void;
    each(obj: any, iterator: Function, context: any): void;
    merge(dest: any, src: any): any;
    extend(dest: any, src: any, merge: boolean): any;
    inherit(child: Function, base: Function, properties: any): any;
    bindFn(fn: Function, context: any): Function;
    prefixed(obj: any, property: string): string;
}

type RecognizerTuple =
    | [RecognizerStatic]
    | [RecognizerStatic, RecognizerOptions]
    | [RecognizerStatic, RecognizerOptions, string | string[]]
    | [RecognizerStatic, RecognizerOptions, string | string[], (string | Recognizer) | (string | Recognizer)[]];

interface HammerDefaults extends HammerOptions {
    domEvents: boolean;
    enable: boolean;
    preset: RecognizerTuple[];
    touchAction: string;
    cssProps: CssProps;

    inputClass: HammerInput;
    inputTarget: EventTarget;
}

interface CssProps {
    contentZooming: string;
    tapHighlightColor: string;
    touchCallout: string;
    touchSelect: string;
    userDrag: string;
    userSelect: string;
}

interface HammerOptions {
    cssProps?: CssProps | undefined;
    domEvents?: boolean | undefined;
    enable?: boolean | ((manager: HammerManager) => boolean) | undefined;
    preset?: RecognizerTuple[] | undefined;
    touchAction?: string | undefined;
    recognizers?: RecognizerTuple[] | undefined;

    inputClass?: HammerInput | undefined;
    inputTarget?: EventTarget | undefined;
}

interface HammerManagerConstructor {
    new(element: EventTarget, options?: HammerOptions): HammerManager;
}

interface HammerListener {
    (event: HammerInput): void;
}

interface HammerManager {
    add(recogniser: Recognizer): Recognizer;
    add(recogniser: Recognizer): HammerManager;
    add(recogniser: Recognizer[]): Recognizer;
    add(recogniser: Recognizer[]): HammerManager;
    destroy(): void;
    emit(event: string, data: any): void;
    get(recogniser: Recognizer): Recognizer;
    get(recogniser: string): Recognizer;
    off(events: string, handler?: HammerListener): void;
    on(events: string, handler: HammerListener): void;
    recognize(inputData: any): void;
    remove(recogniser: Recognizer): HammerManager;
    remove(recogniser: string): HammerManager;
    set(options: HammerOptions): HammerManager;
    stop(force: boolean): void;
}

declare class HammerInput {
    constructor(manager: HammerManager, callback: Function);

    destroy(): void;
    handler(): void;
    init(): void;

    /** Name of the event. Like panstart. */
    type: string;

    /** Movement of the X axis. */
    deltaX: number;

    /** Movement of the Y axis. */
    deltaY: number;

    /** Total time in ms since the first input. */
    deltaTime: number;

    /** Distance moved. */
    distance: number;

    /** Angle moved. */
    angle: number;

    /** Velocity on the X axis, in px/ms. */
    velocityX: number;

    /** Velocity on the Y axis, in px/ms */
    velocityY: number;

    /** Highest velocityX/Y value. */
    velocity: number;

    overallVelocity: number;

    overallVelocityX: number;

    overallVelocityY: number;

    /** Direction moved. Matches the DIRECTION constants. */
    direction: number;

    /** Direction moved from it's starting point. Matches the DIRECTION constants. */
    offsetDirection: number;

    /** Scaling that has been done when multi-touch. 1 on a single touch. */
    scale: number;

    /** Rotation that has been done when multi-touch. 0 on a single touch. */
    rotation: number;

    /** Center position for multi-touch, or just the single pointer. */
    center: HammerPoint;

    /** Source event object, type TouchEvent, MouseEvent or PointerEvent. */
    srcEvent: TouchEvent | MouseEvent | PointerEvent;

    /** Target that received the event. */
    target: HTMLElement;

    /** Primary pointer type, could be touch, mouse, pen or kinect. */
    pointerType: string;

    /** Event type, matches the INPUT constants. */
    eventType:
        | HammerStatic["INPUT_START"]
        | HammerStatic["INPUT_MOVE"]
        | HammerStatic["INPUT_END"]
        | HammerStatic["INPUT_CANCEL"];

    /** true when the first input. */
    isFirst: boolean;

    /** true when the final (last) input. */
    isFinal: boolean;

    /** Array with all pointers, including the ended pointers (touchend, mouseup). */
    pointers: any[];

    /** Array with all new/moved/lost pointers. */
    changedPointers: any[];

    /** Maximum number of pointers detected in the gesture */
    maxPointers: number;

    /** Timestamp of a gesture */
    timeStamp: number;

    /** Reference to the srcEvent.preventDefault() method. Only for experts! */
    preventDefault: Function;
}

declare class MouseInput extends HammerInput {
    constructor(manager: HammerManager, callback: Function);
}

declare class PointerEventInput extends HammerInput {
    constructor(manager: HammerManager, callback: Function);
}

declare class SingleTouchInput extends HammerInput {
    constructor(manager: HammerManager, callback: Function);
}

declare class TouchInput extends HammerInput {
    constructor(manager: HammerManager, callback: Function);
}

declare class TouchMouseInput extends HammerInput {
    constructor(manager: HammerManager, callback: Function);
}

interface RecognizerOptions {
    direction?: number | undefined;
    enable?: boolean | ((recognizer: Recognizer, inputData: HammerInput) => boolean) | undefined;
    event?: string | undefined;
    interval?: number | undefined;
    pointers?: number | undefined;
    posThreshold?: number | undefined;
    taps?: number | undefined;
    threshold?: number | undefined;
    time?: number | undefined;
    velocity?: number | undefined;
}

interface RecognizerStatic {
    new(options?: RecognizerOptions): Recognizer;
}

interface Recognizer {
    defaults: any;

    canEmit(): boolean;
    canRecognizeWith(otherRecognizer: Recognizer): boolean;
    dropRecognizeWith(otherRecognizer: Recognizer | Recognizer[] | string): Recognizer;
    dropRequireFailure(otherRecognizer: Recognizer | Recognizer[] | string): Recognizer;
    emit(input: HammerInput): void;
    getTouchAction(): any[];
    hasRequireFailures(): boolean;
    process(inputData: HammerInput): string;
    recognize(inputData: HammerInput): void;
    recognizeWith(otherRecognizer: Recognizer | Recognizer[] | string): Recognizer;
    requireFailure(otherRecognizer: Recognizer | Recognizer[] | string): Recognizer;
    reset(): void;
    set(options?: RecognizerOptions): Recognizer;
    tryEmit(input: HammerInput): void;
}

interface AttrRecognizerStatic {
    attrTest(input: HammerInput): boolean;
    process(input: HammerInput): any;
}

interface AttrRecognizer extends Recognizer {
    new(options?: RecognizerOptions): AttrRecognizer;
}

interface PanRecognizerStatic {
    new(options?: RecognizerOptions): PanRecognizer;
}

interface PanRecognizer extends AttrRecognizer {
}

interface PinchRecognizerStatic {
    new(options?: RecognizerOptions): PinchRecognizer;
}

interface PinchRecognizer extends AttrRecognizer {
}

interface PressRecognizerStatic {
    new(options?: RecognizerOptions): PressRecognizer;
}

interface PressRecognizer extends AttrRecognizer {
}

interface RotateRecognizerStatic {
    new(options?: RecognizerOptions): RotateRecognizer;
}

interface RotateRecognizer extends AttrRecognizer {
}

interface SwipeRecognizerStatic {
    new(options?: RecognizerOptions): SwipeRecognizer;
}

interface SwipeRecognizer extends AttrRecognizer {
}

interface TapRecognizerStatic {
    new(options?: RecognizerOptions): TapRecognizer;
}

interface TapRecognizer extends AttrRecognizer {
}

declare class TouchAction {
    constructor(manager: HammerManager, value: string);

    compute(): string;
    preventDefaults(input: HammerInput): void;
    preventSrc(srcEvent: any): void;
    set(value: string): void;
    update(): void;
}

interface HammerPoint {
    x: number;
    y: number;
}
