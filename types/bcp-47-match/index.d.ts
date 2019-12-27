// Type definitions for bcp-47-match 1.0
// Project: https://github.com/wooorm/bcp-47-match#readme
// Definitions by: Chris Barth <https://github.com/cjbarth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function basicFilter(tags: string | string[], ranges: string | string[]): string[];
export function extendedFilter(tags: string | string[], ranges: string | string[]): string[];
export function lookup(tags: string | string[], ranges: string | string[]): string | undefined;
