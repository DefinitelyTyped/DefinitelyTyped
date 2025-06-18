declare namespace Epub {
    interface Chapter {
        /** Chapter title */
        title?: string | undefined;
        /** Author of the chapter */
        author?: string | undefined;
        /** HTML String of the chapter content. */
        data: string;
        /** Exclude the chapter from the table of contents */
        excludeFromToc?: boolean | undefined;
        /** Show the chapter before table of contents. For example, copyright pages. */
        beforeToc?: boolean | undefined;
        /** Specify filename for the chapter */
        filename?: string | undefined;
    }

    interface Options {
        /** Title of the book */
        title: string;
        /** Name of the Author/Authors of the book */
        author?: string | string[] | undefined;
        /** Publisher name */
        publisher?: string | undefined;
        /** Book cover image. File path (absolute) or web url */
        cover?: string | undefined;
        /** Output path */
        output?: string | undefined;
        /** Epub version. If not specified, will fall back to 3. */
        version?: 2 | 3 | undefined;
        /** A CSS string to replace default style */
        css?: string | undefined;
        /** Absolute paths to font files, so that they can be used in custom CSS */
        fonts?: string[] | undefined;
        /** Language of the book in two letter code. If not specified, will fall back to `en` */
        lang?: string | undefined;
        /** Title of the table of contents. If not specified, will fallback to "Table Of Contents". */
        tocTitle?: string | undefined;
        /** Automatically append the chapter title at the beginning of each contents. */
        appendChapterTitles?: boolean | undefined;
        /** For advanced customizations: absolute path to an OPF template. */
        customOpfTemplatePath?: string | undefined;
        /** For advanced customizations: absolute path to a NCX toc template. */
        customNcxTemplatePath?: string | undefined;
        /** For advanced customizations: absolute path to a HTML toc template. */
        customHtmlTocTemplatePath?: string | undefined;
        /** Book Chapters content. */
        content: Chapter[];
        /**  Whether or not to log progress messages */
        verbose?: boolean | undefined;
    }
}

declare class Epub {
    constructor(options: Epub.Options, output?: string);
    promise: Promise<void>;
}

export = Epub;
