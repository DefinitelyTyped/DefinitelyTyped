// Type definitions for fuzzaldrin 2.1
// Project: https://github.com/atom/fuzzaldrin, http://atom.github.io/fuzzaldrin
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export function filter(candidates: string[], query: string, options?: {maxResults?: number}): string[];
export function filter<T, K extends keyof T>(candidates: T[], query: string & T[K], options: {key: K, maxResults?: number}): T[];
export function match(string: string, query: string): any;
export function score(string: string, query: string): number;
