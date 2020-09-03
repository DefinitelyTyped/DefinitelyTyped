// Type definitions for throttle-debounce 2.1
// Project: https://github.com/niksy/throttle-debounce
// Definitions by: Marek Buchar <https://github.com/czbuchi>, Frank Li <https://github.com/franklixuefei>, Thomas Oddsund <https://github.com/oddsund>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export {};

interface Cancel {
    cancel: () => void;
}

export type throttle<T> = T & Cancel;
export type debounce<T> = throttle<T>;

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param delay
 * A zero-or-greater delay in milliseconds. For event callbacks, values around
 * 100 or 250 (or even higher) are most useful.
 *
 * @param noTrailing
 * If noTrailing is true, callback will only execute every `delay` milliseconds
 * while the throttled-function is being called. If noTrailing is false or
 * unspecified, callback will be executed one final time fter the last
 * throttled-function call. (After the throttled-function has not been called
 * for `delay` milliseconds, the internal counter is reset)
 *
 * @param callback
 * A function to be executed after delay milliseconds. The `this` context and
 * all arguments are passed through, as-is, to `callback` when the
 * throttled-function is executed.
 *
 * @param debounceMode If `debounceMode` is true (at begin), schedule
 * `callback` to execute after `delay` ms. If `debounceMode` is false (at end),
 * schedule `callback` to execute after `delay` ms.
 *
 * @return
 * A new, throttled, function.
 */
export function throttle<T extends (...args: any[]) => any>(
    delay: number,
    noTrailing: boolean,
    callback: T,
    debounceMode?: boolean
): throttle<T>;

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param delay
 * A zero-or-greater delay in milliseconds. For event callbacks, values around
 * 100 or 250 (or even higher) are most useful.
 *
 * @param callback
 * A function to be executed after delay milliseconds. The `this` context and
 * all arguments are passed through, as-is, to `callback` when the
 * throttled-function is executed.
 *
 * @param debounceMode If `debounceMode` is true (at begin), schedule
 * `callback` to execute after `delay` ms. If `debounceMode` is false (at end),
 * schedule `callback` to execute after `delay` ms.
 *
 * @return
 * A new, throttled, function.
 */
export function throttle<T extends (...args: any[]) => any>(
    delay: number,
    callback: T,
    debounceMode?: boolean
): throttle<T>;

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param delay
 * A zero-or-greater delay in milliseconds. For event callbacks, values around
 * 100 or 250 (or even higher) are most useful.
 *
 * @param atBegin
 * If atBegin is false or unspecified, callback will only be executed `delay`
 * milliseconds after the last debounced-function call. If atBegin is true,
 * callback will be executed only at the first debounced-function call. (After
 * the throttled-function has not been called for `delay` milliseconds, the
 * internal counter is reset).
 *
 * @param callback
 * A function to be executed after delay milliseconds. The `this` context and
 * all arguments are passed through, as-is, to `callback` when the
 * debounced-function is executed.
 *
 * @return
 * A new, debounced function.
 */
export function debounce<T extends (...args: any[]) => any>(
    delay: number,
    atBegin: boolean,
    callback: T
): debounce<T>;

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param delay
 * A zero-or-greater delay in milliseconds. For event callbacks, values around
 * 100 or 250 (or even higher) are most useful.
 *
 * @param callback
 * A function to be executed after delay milliseconds. The `this` context and
 * all arguments are passed through, as-is, to `callback` when the
 * debounced-function is executed.
 *
 * @return
 * A new, debounced function.
 */
export function debounce<T extends (...args: any[]) => any>(
    delay: number,
    callback: T
): debounce<T>;
