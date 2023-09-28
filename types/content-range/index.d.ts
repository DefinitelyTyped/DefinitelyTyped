// Type definitions for content-range 1.1
// Project: https://github.com/neoziro/content-range
// Definitions by: Alex Brick <https://github.com/bricka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ContentRangeFormatOptions {
    first?: number | undefined;
    last?: number | undefined;
    length: number | null;
    limit?: number | undefined;
    unit: string;
}

export interface ContentRangeParts {
    first: number | null;
    last: number | null;
    length: number | null;
    unit: string;
}

export function format(options: ContentRangeFormatOptions): string;
export function parse(str: string): ContentRangeParts | null;
