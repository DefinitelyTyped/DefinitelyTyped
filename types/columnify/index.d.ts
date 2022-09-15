// Type definitions for columnify 1.5
// Project: https://github.com/timoxley/columnify
// Definitions by: Gary King <https://github.com/garyking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare function columnify(data: Record<string, any> | any[], options?: columnify.GlobalOptions): string;

declare namespace columnify {
    interface Options {
        align?: 'left' | 'center' | 'centre' | 'right' | undefined;
        dataTransform?: ((data: string) => string) | undefined;
        headingTransform?: ((data: string) => string) | undefined;
        minWidth?: number | undefined;
        maxWidth?: number | undefined;
        paddingChr?: string | undefined;
        preserveNewLines?: boolean | undefined;
        showHeaders?: boolean | undefined;
        truncateMarker?: string | undefined;
    }

    interface GlobalOptions extends Options {
        columns?: string[] | undefined;
        columnSplitter?: string | undefined;
        config?: {
            [columnName: string]: Options;
        } | undefined;
        maxLineWidth?: number | undefined;
        truncate?: boolean | undefined;
        widths?: {
            [columnName: string]: Pick<Options, 'minWidth' | 'maxWidth'>;
        } | undefined;
    }
}

export = columnify;
