// Type definitions for toposort 2.0
// Project: https://github.com/marcelklehr/toposort
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
//                 Prokop Simek <https://github.com/prokopsimek>
//                 Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function toposort<T = string>(edges: ReadonlyArray<readonly [T, T | undefined]>): T[];
declare namespace toposort {
    export function array<T = string>(nodes: ReadonlyArray<T>, edges: ReadonlyArray<readonly [T, T | undefined]>): T[]
}
export = toposort;
