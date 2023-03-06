// Type definitions for locomotive-scroll 4.1
// Project: https://github.com/locomotivemtl/locomotive-scroll
// Definitions by: Colin Lienard <https://github.com/ColinLienard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace LocomotiveScroll {
    type Direction = 'vertical' | 'horizontal';

    type Offset = [number | string, number | string];

    type ScrollToTarget = HTMLElement | string | number;

    interface Position {
        x: number;
        y: number;
    }

    interface DeviceOptions {
        smooth?: boolean;
        direction?: Direction;
        gestureDirection?: Direction;
    }

    interface InstanceOptions {
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

    interface ScrollElement {
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

    interface OnScrollEvent {
        currentElements: Record<string, ScrollElement>;
        delta: Position;
        limit: Position;
        scroll: Position;
        speed: number;
    }

    interface ScrollToOptions {
        offset?: number;
        callback?: () => void;
        duration?: number;
        easing?: [number, number, number, number];
        disableLerp?: boolean;
    }
}

declare class LocomotiveScroll {
    constructor(options?: LocomotiveScroll.InstanceOptions);
    init(): () => void;
    on<EventName extends 'scroll' | 'call'>(
        eventName: EventName,
        callback: (event: EventName extends 'scroll' ? LocomotiveScroll.OnScrollEvent : string | string[]) => void,
    ): () => void;
    update(): () => void;
    destroy(): () => void;
    start(): () => void;
    stop(): () => void;
    scrollTo(target: LocomotiveScroll.ScrollToTarget, options?: LocomotiveScroll.ScrollToOptions): () => void;
}

export as namespace LocomotiveScroll;

export = LocomotiveScroll;
