export type UIEventType =
    | "resize"
    | "resizeEnd"
    | "resizeStart"
    | "scroll"
    | "scrollEnd"
    | "scrollStart"
    | "visibilitychange";

export type TouchEventType =
    | "touchend"
    | "touchmove"
    | "touchmoveEnd"
    | "touchmoveStart"
    | "touchstart";

export type EventType = UIEventType | TouchEventType;

export interface SubscribeOptions {
    context?: any;
    enableResizeInfo?: boolean | undefined;
    enableScrollInfo?: boolean | undefined;
    enableTouchInfo?: boolean | undefined;
    eventOptions?: AddEventListenerOptions | undefined;
    target?: HTMLElement | Window | Document | null;
    throttleRate?: number | undefined;
    useRAF?: boolean | undefined;
}

export interface ArgmentedEvent<T extends EventType> {
    mainType: string;
    resize: {
        height: number;
        width: number;
    };
    scroll: {
        delta: number;
        top: number;
    };
    subType: string;
    type: T;
    touch: {
        axisIntention: "x" | "y" | "";
        deltaX: number;
        deltaY: number;
        startX: number;
        startY: number;
    };
}

export type UIEventCallback<T extends UIEventType = UIEventType> = (
    event: UIEvent,
    payload: ArgmentedEvent<T>,
) => any;

export type TouchEventCallback<T extends TouchEventType = TouchEventType> = (
    event: TouchEvent,
    payload: ArgmentedEvent<T>,
) => any;

export interface Subscription {
    unsubscribe: () => void;
}

export function subscribe<T extends UIEventType>(
    eventType: T,
    callback: UIEventCallback<T>,
    options?: SubscribeOptions,
): Subscription;

export function subscribe<T extends TouchEventType>(
    eventType: T,
    callback: TouchEventCallback<T>,
    options?: SubscribeOptions,
): Subscription;

export function unsubscribe<T extends UIEventType>(
    eventType: T,
    callback: UIEventCallback<T>,
): void;

export function unsubscribe<T extends TouchEventType>(
    eventType: T,
    callback: TouchEventCallback<T>,
): void;

export function listen(
    target: EventTarget,
    eventType: string,
    handler: EventListenerOrEventListenerObject,
    options?: AddEventListenerOptions,
): {
    remove: () => void;
};
