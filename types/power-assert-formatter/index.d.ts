declare function powerAssertFormatter(options?: powerAssertFormatter.Options): powerAssertFormatter.Formatter;

declare namespace powerAssertFormatter {
    export interface Options {
        lineDiffThreshold?: number | undefined;
        maxDepth?: number | undefined;
        outputOffset?: number | undefined;
        anonymous?: string | undefined;
        circular?: string | undefined;
        lineSeparator?: string | undefined;
        ambiguousEastAsianCharWidth?: number | undefined;
        widthOf?: Function | undefined;
        stringify?: Function | undefined;
        diff?: Function | undefined;
        writerClass?: { new(): any } | undefined;
        renderers?: any[] | undefined; // { string | Function }[]
    }

    export interface Formatter {
        (powerAssertContext: any): string;
    }

    export function defaultOptions(): Options;
}

export = powerAssertFormatter;
export as namespace powerAssertFormatter;
