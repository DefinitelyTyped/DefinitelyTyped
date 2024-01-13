export = MarkdownPDF;

declare function MarkdownPDF(options?: MarkdownPDF.Options): MarkdownPDF.OptionsBuilder;

declare namespace MarkdownPDF {
    /** Configuration options */
    interface Options {
        /** Current working directory. */
        cwd?: string | undefined;
        /** Path to the phantomjs library. */
        phantomPath?: string | undefined;
        /** Path to custom CSS file, relative to current directory. */
        cssPath?: string | undefined;
        /** Path to custorm highlight CSS file (for code highlighting with highlight.js), relative to the current directory. */
        highlightCssPath?: string | undefined;
        /** Path to CommonJS module which sets the page header and footer (see runnings.js). */
        runningsPath?: string | undefined;
        /** Delay (in ms) before the PDF is rendered. */
        renderDelay?: number | undefined;
        /** If renderDelay option isn't set, this is the timeout (in ms) before the page is rendered in case the page.onLoadFinished event doesn't fire. */
        loadTimeout?: number | undefined;
        /** Supported dimension units are: 'mm', 'cm', 'in', 'px' */
        paperBorder?: string | undefined;
        paperFormat?: PaperFormat | undefined;
        paperOrientation?: PaperOrientation | undefined;
        /** A function that returns a through2 stream that transforms the markdown before it is converted to HTML. */
        preProcessMd?: (() => any) | undefined;
        /** A function that returns a through2 stream that transforms the HTML before it is converted to PDF. */
        preProcessHtml?: (() => any) | undefined;
        /** A config object that is passed to remarkable, the underlying markdown parser */
        remarkable?: any; // FIXME: remarkable config types
    }
    type PaperFormat = "A3" | "A4" | "A5" | "Legal" | "Letter" | "Tabloid";
    type PaperOrientation = "portait" | "landscape";

    interface OptionsBuilder {
        /** Create a readable stream and pipe it to markdown pdf. */
        from: FromOptionsBuilder & FromFunction;
        /** Concatenates stream and pipe them to markdown pdf. */
        concat: ConcatOptionsBuilder;
    }

    type FromFunction =
        /** Create a readable stream from path and pipe to markdown-pdf. path can be a single path or array of paths. */
        (path: string | string[]) => ToOptionsBuilder;
    interface FromOptionsBuilder {
        /** Create a readable stream from string and pipe to markdown-pdf. string can be a single string or array of strings. */
        string(markdown: string | string[]): ToOptionsBuilder;
        /** Create a readable stream from path and pipe to markdown-pdf. path can be a single path or array of paths. */
        path(path: string | string[], opts: any): ToOptionsBuilder;
    }

    interface ConcatOptionsBuilder {
        from: ConcatFromOptionsBuilder;
    }
    interface ConcatFromOptionsBuilder {
        /** Create and concatenate readable streams from strings and pipe to markdown-pdf. */
        strings(markdownTexts: string[], opts: any): ToOptionsBuilder;
        /** Create and concatenate readable streams from paths and pipe to markdown-pdf. */
        paths(paths: string[], opts: any): ToOptionsBuilder;
    }

    interface ToOptionsBuilder {
        to: ToBuilder & ToFunction;
    }

    interface ToBuilder {
        /**
         * Create a writeable stream to path and pipe output from markdown-pdf to it.
         * path can be a single path, or array of output paths if you specified an array of inputs.
         * The callback function cb will be invoked when data has finished being written.
         */
        path(path: string, callback?: () => void): void;
        /** Create a concat-stream and pipe output from markdown-pdf to it. The callback function cb will be invoked when the buffer has been created. */
        buffer(opts: any, callback?: (err: any, buffer: ArrayBuffer) => void): void;
        /** Create a concat-stream and pipe output from markdown-pdf to it. The callback function cb will be invoked when the string has been created. */
        string(opts: any, callback?: () => void): void;
    }

    type ToFunction =
        /**
         * Create a writeable stream to path and pipe output from markdown-pdf to it.
         * path can be a single path, or array of output paths if you specified an array of inputs.
         * The callback function cb will be invoked when data has finished being written.
         */
        (path: string, callback?: () => void) => void;
}
