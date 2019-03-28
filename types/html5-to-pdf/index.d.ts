// Type definitions for html5-to-pdf 3.1
// Project: https://github.com/peterdemartini/html5-to-pdf
// Definitions by: Sam Alexander <https://github.com/samalexander>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { LaunchOptions, PDFOptions, Page } from "puppeteer";

declare class HTML5ToPDF {
    constructor(options: HTML5ToPDF.Options);

    build(): Promise<Buffer>;

    close(): Promise<void>;

    includeAssets(): Promise<void[]>;

    parseOptions(options: HTML5ToPDF.Options): HTML5ToPDF.ParsedOptions;

    start(): Promise<Page>;

}

declare namespace HTML5ToPDF {
    interface FileDef {
        /**
         * File type
         * @type {("css" | "js")}
         */
        type: "css" | "js";
        /**
         * File path
         * @type {string}
         */
        filePath: string;
    }

    interface ParsedOptions {
        body: string | Buffer;
        pdf: PDFOptions;
        templatePath: string;
        templateUrl: string;
        launchOptions: LaunchOptions;
        include: FileDef[];
        renderDelay: number;
    }

    interface LegacyOptions {
        /**
         * [COMPATIBLE]\
         * Page size
         * @type {("A3" | "A4" | "Legal" | "Tabloid")}
         */
        pageSize?: "A3" | "A4" | "Legal" | "Tabloid";
        /**
         * [COMPATIBLE]\
         * True for landscape, false for portrait.
         * @type {boolean}
         */
        landscape?: boolean;
        /**
         * [NOT COMPATIBLE]\
         * 0 - default\
         * 1 - none\
         * 2 - minimum
         * @type {number}
         */
        marginsType?: number;
        /**
         * [COMPATIBLE]\
         * Whether to print CSS backgrounds.
         * @type {boolean}
         */
        printBackground?: boolean;
    }

    interface Options {
        /**
         * Path to the input HTML.
         * @type {string}
         */
        inputPath?: string;
        /**
         * Path to the input html as a String, or Buffer. If specified this will override inputPath.
         * @type {string | Buffer}
         */
        inputBody?: string | Buffer;
        /**
         * Path to the output pdf file.
         * @type {string}
        */
        outputPath?: string;
        /**
         * Delay in milliseconds before rendering the PDF (give HTML and CSS a chance to load).
         * @type {number}
         */
        rendererDelay?: number;
        /**
         * A list of CSS or JS assets to include.
         * @type {Array<string | FileDef>}
         */
        include?: Array<string | FileDef>
        /**
         * The template to use when rendering the html.
         * @type {string}
         */
        template?: string;
        /**
         * The template to use for rendering the html. If this is set, it will use this instead of the template path.
         * @type {string}
         */
        templateUrl?: string;
        /**
         * This object will be passed directly to `puppeteer`.
         * @type {PDFOptions}
         */
        pdf?: PDFOptions;
        /**
         * This object will be passed directly to `puppeteer`.
         * @type {LaunchOptions}
         */
        launchOptions?: LaunchOptions;
        /**
         * @deprecated Legacy Options.
         * See `options.pdf` for pdf options. Since some of these options are converted over to work with `puppeteer`,
         * this is automatically done if `options.pdf` is left empty.
         * @type {LegacyOptions}
         */
        options?: LegacyOptions;
    }
}

export = HTML5ToPDF;

export as namespace HTML5ToPDF;
