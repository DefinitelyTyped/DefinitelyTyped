/// <reference types="node" />

import Highland = require("highland");

export = Tabula;

/**
 * Convert tables inside PDFs to CSV via tabula-java using JavaScript.
 */
declare class Tabula {
    /**
     * @param path Path (relative or absolute) to a valid PDF.
     */
    constructor(path: string, options?: Tabula.Options);

    getData(): Promise<{ output: string; error: string }>;

    streamSections(callback: (err: Error | null, data: string | null) => void): void;

    stream(): Highland.Stream<Buffer>;
}

declare namespace Tabula {
    interface Options {
        /**
         * Entire page	Co-ordinates of the portion(s) of the page to analyze, formatted in strings in the following format `top,left,bottom,right`.
         *
         * @default Entire page
         * @example
         * { area: "269.875,12.75,790.5,561" }
         * { area: ["269.875,12.75,790.5,561", "132.45,23.2,256.3,534"] }
         */
        area?: string | readonly string[] | undefined;

        /**
         * X coordinates of column boundaries.
         *
         * @example
         * { columns: "10.1,20.2,30.3" }
         */
        columns?: string | undefined;

        /**
         * Print detected table areas instead of processing them.
         *
         * @default false
         */
        debug?: boolean | undefined;

        /**
         * Guess the portion(s) of the page to analyze and process.
         *
         * @default true
         */
        guess?: boolean | undefined;

        /**
         * Suppresses all `stderr` output from the tabula-java JAR only. JavaScript errors will still be logged.
         *
         * @default false
         */
        silent?: boolean | undefined;

        /**
         * Force PDF not to be extracted using spreadsheet-style extraction (if there are ruling lines separating each cell, as in a PDF of an Excel spreadsheet).
         *
         * @default false
         */
        noSpreadsheet?: boolean | undefined;

        /**
         * Comma separated list of ranges, or all.
         *
         * @default "1"
         * @example
         * { pages: "1-3,5-7" }
         * { pages: "3" }
         * { pages: "all" }
         */
        pages?: string | undefined;

        /**
         * Force PDF to be extracted using spreadsheet-style extraction (if there are ruling lines separating each cell, as in a PDF of an Excel spreadsheet).
         *
         * @default false
         */
        spreadsheet?: boolean | undefined;

        /**
         * Password used to decrypt/access the document.
         *
         * @default ""
         */
        password?: string | undefined;

        /**
         * Use embedded line returns in cells (only in spreadsheet mode).
         *
         * @default false
         */
        useLineReturns?: boolean | undefined;
    }
}
