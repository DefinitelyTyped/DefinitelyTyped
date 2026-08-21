export interface RemarkConfig {
    resolve: "gatsby-transformer-remark";
    options?: RemarkOptions | undefined;
}

/**
 * @see https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/#how-to-use
 * @see https://github.com/remarkjs/remark/tree/remark-parse%406.0.3/packages/remark-parse
 */
export interface RemarkOptions {
    /** CommonMark mode (default: true) */
    commonmark?: boolean | undefined;
    /** Footnotes mode (default: true) */
    footnotes?: boolean | undefined;
    /** Pedantic mode (default: true) */
    pedantic?: boolean | undefined;
    /** GitHub Flavored Markdown mode (default: true) */
    gfm?: boolean | undefined;
    /** Plugins configs */
    plugins?: any[] | undefined;
    /**
     * Pass default options to the plugin generating tableOfContents
     * @see https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/#configuring-the-tableofcontents
     */
    tableOfContents?: {
        absolute?: boolean | undefined;
        pathToSlugField?: string | undefined;
        heading?: null | string | undefined;
        maxDepth?: number | undefined;
    } | undefined;
    /**
     * @see https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/#example-excerpts
     */
    excerpt_separator?: string | undefined;
}
