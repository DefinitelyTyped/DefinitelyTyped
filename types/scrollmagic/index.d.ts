// Type definitions for scrollmagic 2.0
// Project: https://scrollmagic.io/
// Definitions by: Tim Weise <https://github.com/switchnollie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* Scrollmagic is a UMD module that exposes a global variable ScrollMagic
when loaded outside a module loader */
export as namespace ScrollMagic;
export type LogLevel = 0 | 1 | 2 | 3;
export type ElementOrSelector = Element | string;
export type TriggerHook = number | 'onEnter' | 'onCenter' | 'onLeave';
export type SceneState = 'BEFORE' | 'DURING' | 'AFTER';
export type ScrollDirection = 'PAUSED' | 'FORWARD' | 'REVERSE';

export const version: string;

export type EventType =
    | 'add'
    | 'change'
    | 'destroy'
    | 'end'
    | 'enter'
    | 'leave'
    | 'progress'
    | 'remove'
    | 'shift'
    | 'start'
    | 'update';

export interface Event<T> {
    readonly type: T;
    readonly target: ScrollMagic.Scene;
    readonly currentTarget: ScrollMagic.Scene;
    readonly namespace: string;
    readonly timeStamp: Date;
    readonly timestamp: Date;
}

export interface AddEvent extends Event<'add'> {
    readonly controller: ScrollMagic.Controller;
}

export interface RemoveEvent extends Event<'remove'> {}

export interface ChangeEvent extends Event<'change'> {
    readonly what: string;
    readonly newval: any;
}

export interface DestroyEvent extends Event<'destroy'> {
    readonly reset: boolean;
}

export interface EndEvent extends Event<'end'> {
    readonly progress: number;
    readonly state: SceneState;
}

export interface ShiftEvent extends Event<'shift'> {
    readonly reason: string;
}

export interface UpdateEvent extends Event<'update'> {
    readonly startPos: number;
    readonly endPos: number;
    readonly scrollPos: number;
}

export interface SceneProgressEvent<T> extends Event<T> {
    readonly progress: number;
    readonly state: SceneState;
    readonly scrollDirection: ScrollDirection;
}

export interface EnterEvent extends SceneProgressEvent<'enter'> {}
export interface LeaveEvent extends SceneProgressEvent<'leave'> {}
export interface StartEvent extends SceneProgressEvent<'start'> {}
export interface ProgressEvent extends SceneProgressEvent<'progress'> {}

export interface SceneConstructorOptions {
    duration?: (() => number | string) | number | string;
    offset?: number;
    triggerElement?: ElementOrSelector | null;
    triggerHook?: TriggerHook;
    reverse?: boolean;
    loglevel?: LogLevel;
}

export interface PinSettings {
    pushFollowers?: boolean;
    spacerClass?: string;
}

export interface IndicatorOptions {
    parent?: ElementOrSelector;
    name?: string;
    indent?: number;
    colorStart?: string;
    colorEnd?: string;
    colorTrigger?: string;
}

export type ScrollTarget = (newScrollPos: number, ...args: any[]) => void | number | ElementOrSelector | object;

export interface ControllerInfo {
    size: number;
    vertical: boolean;
    scrollPos: number;
    scrollDirection: string;
    container: Element | null;
    isDocument: boolean;
}

export type InfoOption = 'size' | 'vertical' | 'scrollPos' | 'scrollDirection' | 'container' | 'isDocument';

export interface ControllerConstructorOptions {
    container?: string | Element;
    vertical?: boolean;
    globalSceneOptions?: SceneConstructorOptions;
    loglevel?: number;
    refreshInterval?: number;
}

export class Scene {
    constructor(options?: SceneConstructorOptions);
    /* Getters/Setters */
    duration(): number;
    duration(newDuration: (() => number | string) | number | string): Scene;
    enabled(): boolean;
    enabled(newState: boolean): Scene;
    loglevel(): LogLevel;
    loglevel(newLogLevel: LogLevel): Scene;
    offset(): number;
    offset(newOffset: number): Scene;
    reverse(): boolean;
    reverse(newReverse: boolean): Scene;
    triggerElement(): ElementOrSelector | null;
    triggerElement(newTriggerElement: ElementOrSelector | null): Scene;
    triggerHook(): TriggerHook;
    triggerHook(newTriggerHook: TriggerHook): Scene;

    /* Getters */
    scrollOffset(): number;
    state(): SceneState;
    triggerPosition(): number;

    /* Event Handling */
    // tslint proposes to avoid Generics if they are used only once.
    // In the case of the on and off methods, the recommended approach
    // leads to errors (the compiler tries to match the event interfaces rather than
    // treating the generic Event interface as an abstract base interface
    // tslint:disable-next-line no-unnecessary-generics
    off<T extends Event<EventType>>(events: string, callback: (event: T) => any): Scene;
    // tslint:disable-next-line no-unnecessary-generics
    on<T extends Event<EventType>>(events: string, callback: (event: T) => any): Scene;
    trigger(name: string, vars?: object): Scene;

    /* Control Methods */
    addTo(controller: Controller): Scene;
    controller(): Controller;
    destroy(reset?: boolean): null;
    progress(): number;
    progress(progress: number): Scene;
    refresh(): Scene;
    remove(): Scene;
    removeClassToggle(reset?: boolean): Scene;
    removePin(reset?: boolean): Scene;
    setClassToggle(element: ElementOrSelector, classes: string): Scene;
    setPin(element: ElementOrSelector | null, settings?: PinSettings): Scene;
    update(immediately?: boolean): Scene;

    /* addIndicators Plugin */
    addIndicators?(options?: IndicatorOptions): Scene;
    removeIndicators?(): Scene;
}

export class Controller {
    constructor(options?: ControllerConstructorOptions);
    /* Getters/Setters */
    enabled(newState: boolean): Controller;
    enabled(): boolean;
    loglevel(newLogLevel: LogLevel): Controller;
    loglevel(): LogLevel;
    scrollPos(calcFn: () => number): Controller;
    scrollPos(): number;
    info(about?: InfoOption): ControllerInfo | number | string | boolean | Element | null;
    /* Control Methods */
    addScene: (newScene: Scene) => Controller;
    destroy: (resetScenes: boolean) => void;
    removeScene: (newScene: Scene) => Controller;
    scrollTo: (scrollTarget: ScrollTarget, additionalParameter?: any[]) => Controller;
    update: (immediately?: boolean) => Controller;
    updateScene: (scene: Scene, immediately?: boolean) => Controller;
}
