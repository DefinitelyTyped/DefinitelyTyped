// Type definitions for gatsby-transformer-remark 2.9
// Project: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark#readme
// Definitions by: Emily M Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface RemarkConfig {
    resolve: "gatsby-transformer-remark";
    options?: RemarkOptions;
}

/**
 * @see https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/#how-to-use
 * @see https://github.com/remarkjs/remark/tree/remark-parse%406.0.3/packages/remark-parse
 */
export interface RemarkOptions {
    /** CommonMark mode (default: true) */
    commonmark?: boolean;
    /** Footnotes mode (default: true) */
    footnotes?: boolean;
    /** Pedantic mode (default: true) */
    pedantic?: boolean;
    /** GitHub Flavored Markdown mode (default: true) */
    gfm?: boolean;
    /** Plugins configs */
    plugins?: any[];
    /**
     * Pass default options to the plugin generating tableOfContents
     * @see https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/#configuring-the-tableofcontents
     */
    tableOfContents?: {
        absolute?: boolean
        pathToSlugField?: string
        heading?: null | string;
        maxDepth?: number
    };
    /**
     * @see https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/#example-excerpts
     */
    excerpt_separator?: string;
}
