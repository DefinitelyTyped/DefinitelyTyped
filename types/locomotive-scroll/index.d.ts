// Type definitions for locomotive-scroll 4.1
// Project: https://github.com/locomotivemtl/locomotive-scroll
// Definitions by: Colin Lienard <https://github.com/ColinLienard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Direction = 'vertical' | 'horizontal';

export type Offset = [number | string, number | string];

export type ScrollToTarget = HTMLElement | string | number;

export interface Position {
    x: number;
    y: number;
}

export interface DeviceOptions {
    smooth?: boolean;
    direction?: Direction;
    gestureDirection?: Direction;
}

export interface InstanceOptions {
    el?: HTMLElement;
    name?: string;
    offset?: Offset;
    repeat?: boolean;
    smooth?: boolean;
    initPosition?: Position;
    direction?: Direction;
    lerp?: number;
    getDirection?: boolean;
    getSpeed?: boolean;
    class?: string;
    initClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    scrollbarContainer?: HTMLElement | false;
    scrollbarClass?: string;
    multiplier?: number;
    firefoxMultiplier?: number;
    touchMultiplier?: number;
    scrollFromAnywhere?: boolean;
    gestureDirection?: string;
    tablet?: DeviceOptions & { breakpoint: number };
    smartphone?: DeviceOptions;
    reloadOnContextChange?: boolean;
    resetNativeScroll?: boolean;
}

export interface ScrollElement {
    bottom: number;
    call?: () => void;
    class: string;
    delay?: number;
    direction?: Direction;
    el: HTMLElement;
    id: string;
    inView: boolean;
    left: number;
    middle: Position;
    offset: Offset;
    position?: Position;
    progress: number;
    repeat: boolean;
    right: number;
    section: {
        el: HTMLElement;
        id: string;
        inView: true;
        limit: Position;
        offset: Position;
        persistent: boolean;
    };
    speed: number | boolean;
    sticky: boolean;
    target: HTMLElement;
    top: number;
}

export interface OnScrollEvent {
    currentElements: Record<string, ScrollElement>;
    delta: Position;
    limit: Position;
    scroll: Position;
    speed: number;
}

export interface ScrollToOptions {
    offset?: number;
    callback?: () => void;
    duration?: number;
    easing?: [number, number, number, number];
    disableLerp?: boolean;
}

export default class LocomotiveScroll {
    constructor(options?: InstanceOptions);
    init(): () => void;
    on<EventName extends 'scroll' | 'call'>(
        eventName: EventName,
        callback: (event: EventName extends 'scroll' ? OnScrollEvent : string | string[]) => void,
    ): () => void;
    update(): () => void;
    destroy(): () => void;
    start(): () => void;
    stop(): () => void;
    scrollTo(target: ScrollToTarget, options?: ScrollToOptions): () => void;
}
