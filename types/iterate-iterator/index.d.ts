// Type definitions for iterate-iterator 1.0
// Project: https://github.com/ljharb/iterate-iterator#readme
// Definitions by: Jason Kwok <https://github.com/JasonHK>
//                 Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function iterateIterator<T>(iterator: Iterator<T>): T[];
declare function iterateIterator<T>(iterator: Iterator<T>, callback: (value: T) => void): void;

export = iterateIterator;
