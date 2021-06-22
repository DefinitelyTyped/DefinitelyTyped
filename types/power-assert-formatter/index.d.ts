// Type definitions for power-assert-formatter 1.4.1
// Project: https://github.com/twada/power-assert-formatter
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function powerAssertFormatter(options?:powerAssertFormatter.Options):powerAssertFormatter.Formatter;

declare namespace powerAssertFormatter {
    export interface Options {
        lineDiffThreshold?: number;
        maxDepth?: number;
        outputOffset?: number;
        anonymous?: string;
        circular?: string;
        lineSeparator?: string;
        ambiguousEastAsianCharWidth?: number;
        widthOf?: Function;
        stringify?: Function;
        diff?: Function;
        writerClass?: {new (): any;};
        renderers?: any[]; // { string | Function }[]
    }

    export interface Formatter {
        (powerAssertContext:any): string;
    }

    export function defaultOptions():Options;
}

export = powerAssertFormatter;
export as namespace powerAssertFormatter;
