export interface BodyScrollOptions {
    reserveScrollBarGap?: boolean | undefined;
    allowTouchMove?: ((el: HTMLElement | Element) => boolean) | undefined;
}

export function disableBodyScroll(targetElement: HTMLElement | Element, options?: BodyScrollOptions): void;
export function enableBodyScroll(targetElement: HTMLElement | Element): void;
export function clearAllBodyScrollLocks(): void;

export as namespace bodyScrollLock;
