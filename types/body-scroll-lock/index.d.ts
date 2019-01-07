// Type definitions for body-scroll-lock 2.6
// Project: https://github.com/willmcpo/body-scroll-lock (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: kimcoder <https://github.com/kimcoder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface BodyScrollOptions {
    reserveScrollBarGap?: boolean;
    allowTouchMove?: (el: HTMLElement) => void;
}

export function disableBodyScroll(targetElement: HTMLElement, options?: BodyScrollOptions): void;
export function enableBodyScroll(targetElement: HTMLElement): void;
export function clearAllBodyScrollLocks(): void;
