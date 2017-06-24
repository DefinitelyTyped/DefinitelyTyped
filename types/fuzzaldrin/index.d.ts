// Type definitions for fuzzaldrin 2.1
// Project: https://github.com/atom/fuzzaldrin
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function filter<T>(candidates: T[], query: string, options?: { key?: string, maxResults?: number }): T[];
export function match(string: string, query: string): any;
export function score(string: string, query: string): number;
