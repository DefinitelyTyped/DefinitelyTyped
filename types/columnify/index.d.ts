// Type definitions for columnify 1.5
// Project: https://github.com/timoxley/columnify
// Definitions by: Gary King <https://github.com/garyking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare function columnify(data: Record<string, any> | any[], options?: columnify.GlobalOptions): string;

declare namespace columnify {
    interface Options {
        align?: 'left' | 'center' | 'centre' | 'right';
        dataTransform?: (data: string) => string;
        headingTransform?: (data: string) => string;
        minWidth?: number;
        maxWidth?: number;
        paddingChr?: string;
        preserveNewLines?: boolean;
        showHeaders?: boolean;
        truncateMarker?: string;
    }

    interface GlobalOptions extends Options {
        columns?: string[];
        columnSplitter?: string;
        config?: {
            [columnName: string]: Options;
        };
        maxLineWidth?: number;
        truncate?: boolean;
        widths?: {
            [columnName: string]: Pick<Options, 'minWidth' | 'maxWidth'>;
        };
    }
}

export = columnify;
