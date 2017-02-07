// Type definitions for range-parser 1.2
// Project: https://github.com/jshttp/range-parser
// Definitions by: Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function RangeParser(size: number, str: string, options?: RangeParser.Options): RangeParser.Result | RangeParser.Ranges;

declare namespace RangeParser {
    export interface Ranges extends Array<Range> {
        type: string;
    }
    export interface Range {
        start: number;
        end: number;
    }
    export interface Options {
        combine?: boolean;
    }
    export const enum Result {
        invaild = -2,
        unsatisifiable = -1,
    }
}

export = RangeParser;
