// Type definitions for debounce 3.0
// Project: https://github.com/component/debounce
// Definitions by: Denis Sokolov <https://github.com/denis-sokolov>
//                 Josh Goldberg <https://github.com/joshuakgoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace _debounce {
    const debounce: typeof _debounce;
}

declare function _debounce<A extends Function>(f: A, interval?: number, immediate?: boolean): A & { clear(): void; };

export = _debounce;
