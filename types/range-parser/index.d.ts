// Type definitions for range-parser 1.2
// Project: https://github.com/jshttp/range-parser
// Definitions by: Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function RangeParser(size: number, str: string, options?: RangeParser.Options): RangeParser.Result | RangeParser.Ranges;

declare namespace RangeParser {
    interface Ranges extends Array<Range> {
        type: string;
    }
    interface Range {
        start: number;
        end: number;
    }
    interface Options {
        combine?: boolean;
    }
    const enum Result {
        invaild = -2,
        unsatisifiable = -1,
    }
}

export = RangeParser;
