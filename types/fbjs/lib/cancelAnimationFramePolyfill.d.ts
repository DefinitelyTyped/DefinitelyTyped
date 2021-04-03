/**
 * Here is the native and polyfill version of cancelAnimationFrame.
 * Please don't use it directly and use cancelAnimationFrame module instead.
 */
declare function cancelAnimationFrame(handle: number): void;

declare namespace cancelAnimationFrame {}

export = cancelAnimationFrame;
