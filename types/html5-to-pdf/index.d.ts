import { LaunchOptions, Page, PDFOptions } from "puppeteer";

declare class HTML5ToPDF {
    constructor(options: HTML5ToPDF.Options);

    build(): Promise<Buffer>;

    close(): Promise<void>;

    includeAssets(): Promise<void>;

    parseOptions(options: HTML5ToPDF.Options): HTML5ToPDF.ParsedOptions;

    start(): Promise<Page>;
}

declare namespace HTML5ToPDF {
    interface FileDef {
        /**
         * File type
         */
        type: "css" | "js";
        /**
         * File path
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
         */
        pageSize?: "A3" | "A4" | "Legal" | "Tabloid" | undefined;
        /**
         * [COMPATIBLE]\
         * True for landscape, false for portrait.
         */
        landscape?: boolean | undefined;
        /**
         * [NOT COMPATIBLE]\
         * 0 - default\
         * 1 - none\
         * 2 - minimum
         */
        marginsType?: number | undefined;
        /**
         * [COMPATIBLE]\
         * Whether to print CSS backgrounds.
         */
        printBackground?: boolean | undefined;
    }

    interface Options {
        /**
         * Path to the input HTML.
         */
        inputPath?: string | undefined;
        /**
         * Path to the input html as a String, or Buffer. If specified this will override inputPath.
         */
        inputBody?: string | Buffer | undefined;
        /**
         * Path to the output pdf file.
         */
        outputPath?: string | undefined;
        /**
         * Delay in milliseconds before rendering the PDF (give HTML and CSS a chance to load).
         */
        rendererDelay?: number | undefined;
        /**
         * A list of CSS or JS assets to include.
         */
        include?: Array<string | FileDef> | undefined;
        /**
         * The template to use when rendering the html.
         */
        template?: string | undefined;
        /**
         * The template to use for rendering the html. If this is set, it will use this instead of the template path.
         */
        templateUrl?: string | undefined;
        /**
         * This object will be passed directly to `puppeteer`.
         */
        pdf?: PDFOptions | undefined;
        /**
         * This object will be passed directly to `puppeteer`.
         */
        launchOptions?: LaunchOptions | undefined;
        /**
         * @deprecated Legacy Options.
         * See `options.pdf` for pdf options. Since some of these options are converted over to work with `puppeteer`,
         * this is automatically done if `options.pdf` is left empty.
         */
        options?: LegacyOptions | undefined;
    }
}

export = HTML5ToPDF;
