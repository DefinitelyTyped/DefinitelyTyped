// Type definitions for lazy-value 1.0
// Project: https://github.com/sindresorhus/lazy-value
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Create a [lazily evaluated](https://en.wikipedia.org/wiki/Lazy_evaluation) value.
 *
 * Useful when a value is expensive to generate, so you want to delay the computation until the value is needed.
 * For example, improving startup performance by deferring nonessential operations.
 *
 * @param fn Expected to return a value.
 */
declare function lazyValue<T extends () => any>(fn: T): T;
export = lazyValue;
