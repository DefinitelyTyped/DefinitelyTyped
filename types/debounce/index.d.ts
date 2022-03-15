// Type definitions for debounce 1.2
// Project: https://github.com/component/debounce
// Definitions by: Denis Sokolov <https://github.com/denis-sokolov>
//                 Wayne Carson <https://github.com/wcarson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace _debounce {
    const debounce: typeof _debounce;
}

declare function _debounce<A extends Function>(f: A, interval?: number, immediate?: boolean): A & { clear(): void; }
    & { flush(): void };

export = _debounce;
