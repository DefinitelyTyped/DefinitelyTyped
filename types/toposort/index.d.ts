// Type definitions for toposort 2.0
// Project: https://github.com/marcelklehr/toposort
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
//                 Prokop Simek <https://github.com/prokopsimek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function toposort(graph: Array<[string, string | undefined]>): string[];
export = toposort;
