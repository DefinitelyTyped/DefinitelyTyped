// Type definitions for epub-gen 0.1
// Project: https://github.com/cyrilis/epub-gen
// Definitions by: Sam Tyler <https://github.com/styler3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Chapter {
    /** Chapter title */
    title?: string;
    /** Author of the chapter */
    author?: string;
    /** HTML String of the chapter content. */
    data: string;
    /** Exclude the chapter from the table of contents */
    excludeFromToc?: boolean;
    /** Show the chapter before table of contents. For example, copyright pages. */
    beforeToc?: boolean;
    /** Specify filename for the chapter */
    filename?: string;
}

export interface Options {
    /** Title of the book */
    title: string;
    /** Name of the Author/Authors of the book */
    author?: string | string[];
    /** Publisher name */
    publisher?: string;
    /** Book cover image. File path (absolute) or web url */
    cover?: string;
    /** Output path */
    output?: string;
    /** Epub version. If not specified, will fall back to 3. */
    version?: 2 | 3;
    /** A CSS string to replace default style */
    css?: string;
    /** Absolute paths to font files, so that they can be used in custom CSS */
    fonts?: string[];
    /** Language of the book in two letter code. If not specified, will fall back to `en` */
    lang?: string;
    /** Title of the table of contents. If not specified, will fallback to "Table Of Contents". */
    tocTitle?: string;
    /** Automatically append the chapter title at the beginning of each contents. */
    appendChapterTitles?: boolean;
    /** For advanced customizations: absolute path to an OPF template. */
    customOpfTemplatePath?: string;
    /** For advanced customizations: absolute path to a NCX toc template. */
    customNcxTemplatePath?: string;
    /** For advanced customizations: absolute path to a HTML toc template. */
    customHtmlTocTemplatePath?: string;
    /** Book Chapters content. */
    content: Chapter[];
    /**  Whether or not to log progress messages */
    verbose?: boolean;
}

export default class Epub {
    constructor(options: Options, output?: string);
    promise: Promise<void>;
}
