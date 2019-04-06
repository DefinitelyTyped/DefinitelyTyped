// Type definitions for body-scroll-lock 2.6
// Project: https://github.com/willmcpo/body-scroll-lock
// Definitions by: kimcoder <https://github.com/kimcoder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface BodyScrollOptions {
    reserveScrollBarGap?: boolean;
    allowTouchMove?: (el: HTMLElement) => void;
}

export function disableBodyScroll(targetElement: HTMLElement, options?: BodyScrollOptions): void;
export function enableBodyScroll(targetElement: HTMLElement): void;
export function clearAllBodyScrollLocks(): void;

export as namespace bodyScrollLock;
