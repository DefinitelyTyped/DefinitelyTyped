export as namespace MotionScroll;

export function scroll(config: {
    element?: HTMLElement | undefined;
    axis?: "x" | "y" | undefined;
    scrollTo?: number | undefined;
    speed?: number | undefined;
    easing?: (() => void) | undefined;
    callBack?: (() => void) | undefined;
    delay?: number | undefined;
    force?: boolean | undefined;
    minScrollTime?: number | undefined;
    maxScrollTime?: number | undefined;
}): void;
