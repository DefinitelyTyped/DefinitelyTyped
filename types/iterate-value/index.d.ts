// Type definitions for iterate-value 1.0
// Project: https://github.com/ljharb/iterate-value#readme
// Definitions by: Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function iterateValue<T>(iterator: Iterable<T>): T[];
declare function iterateValue<T>(iterator: Iterable<T>, callback: (value: T) => void): void;

export = iterateValue;
