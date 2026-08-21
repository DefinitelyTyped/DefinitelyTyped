/* eslint-disable @definitelytyped/no-unnecessary-generics */

type Shortcuts =
    | "click"
    | "dblclick"
    | "mousedown"
    | "mouseup"
    | "mousemove"
    | "mouseover"
    | "mouseout"
    | "keydown"
    | "keyup"
    | "keypress"
    | "touchstart"
    | "touchmove"
    | "touchend";

type EventInit<T extends keyof GlobalEventHandlersEventMap> = {
    type: T;
} & Partial<GlobalEventHandlersEventMap[T]>;

declare const happen:
    & {
        makeEvent<T extends keyof GlobalEventHandlersEventMap>(
            options: EventInit<T>,
        ): GlobalEventHandlersEventMap[T];

        dispatchEvent(target: EventTarget, event: Event): void;

        once<T extends keyof GlobalEventHandlersEventMap>(
            target: EventTarget,
            options: EventInit<T>,
        ): void;
    }
    & {
        [T in Shortcuts]: (
            target: EventTarget,
            options?: Partial<GlobalEventHandlersEventMap[T]>,
        ) => void;
    };

export = happen;

export as namespace happen;
