// Type definitions for direction 1.0
// Project: https://github.com/wooorm/direction#readme
// Definitions by: Andrey Romanov <https://github.com/andrew--r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace direction {
    type Direction = 'ltr' | 'rtl' | 'neutral';
}

/**
 * Detect direction: left-to-right, right-to-left, or neutral.
 *
 * @example
 * ```
 * direction('anglais') // => 'ltr'
 * direction('بسيطة') // => 'rtl'
 * direction('?') // => 'neutral'
 * ```
 */
declare function direction(value: string): direction.Direction;
export = direction;
