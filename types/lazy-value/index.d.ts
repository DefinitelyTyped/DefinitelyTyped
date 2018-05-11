// Type definitions for lazy-value 1.0
// Project: https://github.com/sindresorhus/lazy-value
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function lazyValue<T extends () => any>(fn: T): T;
export = lazyValue;
