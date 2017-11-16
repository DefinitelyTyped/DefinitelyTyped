// Type definitions for debounce 1.0
// Project: https://github.com/component/debounce
// Definitions by: Denis Sokolov <https://github.com/denis-sokolov>
//                 faergeek <https://github.com/faergeek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const debounce: <A extends Function>(f: A, interval?: number, immediate?: boolean) => A & { clear(): void; };
export = debounce;
