// Type definitions for body-scroll-lock 3.1
// Project: https://github.com/willmcpo/body-scroll-lock
// Definitions by: kimcoder <https://github.com/kimcoder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface BodyScrollOptions {
    reserveScrollBarGap?: boolean | undefined;
    allowTouchMove?: ((el: HTMLElement | Element) => boolean) | undefined;
}

export function disableBodyScroll(targetElement: HTMLElement | Element, options?: BodyScrollOptions): void;
export function enableBodyScroll(targetElement: HTMLElement | Element): void;
export function clearAllBodyScrollLocks(): void;

export as namespace bodyScrollLock;
