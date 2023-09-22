import { RemarkConfig } from "gatsby-transformer-remark";

const plugins: RemarkConfig[] = [
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            // CommonMark mode (default: true)
            commonmark: true,
            // Footnotes mode (default: true)
            footnotes: true,
            // Pedantic mode (default: true)
            pedantic: true,
            // GitHub Flavored Markdown mode (default: true)
            gfm: true,
            // Plugins configs
            plugins: [],
        },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            tableOfContents: {
                heading: null,
                maxDepth: 6,
            },
        },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            excerpt_separator: `<!-- endexcerpt -->`,
        },
    },
];
