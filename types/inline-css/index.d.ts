import cheerio = require("cheerio");

export = InlineCss;

/**
 * Inline your CSS properties into the `style` attribute in an html file. Useful for emails.
 *
 * @example
 * import inlineCss = require('inline-css');
 *
 * const html = "<style>div{color:red;}</style><div/>";
 *
 * inlineCss(html, options)
 *     .then((html) => { console.log(html); });
 */
declare function InlineCss(html: string, options: InlineCss.Options): Promise<string>;

declare namespace InlineCss {
    interface Options extends CheerioParserOptions {
        /**
         * How to resolve hrefs.
         */
        url: string;

        /**
         * Extra css to apply to the file.
         *
         * @default ""
         */
        extraCss?: string | undefined;

        /**
         * Whether to inline styles in `<style></style>`.
         *
         * @default true
         */
        applyStyleTags?: boolean | undefined;

        /**
         * Whether to resolve `<link rel="stylesheet">` tags and inline the resulting styles.
         *
         * @default true
         */
        applyLinkTags?: boolean | undefined;

        /**
         * Whether to remove the original `<style></style>` tags after (possibly) inlining the css from them.
         *
         * @default true
         */
        removeStyleTags?: boolean | undefined;

        /**
         * Whether to remove the original `<link rel="stylesheet">` tags after (possibly) inlining the css from them.
         *
         * @default true
         */
        removeLinkTags?: boolean | undefined;

        /**
         * Preserves all media queries (and contained styles) within `<style></style>` tags as a refinement when
         * `removeStyleTags` is `true`. Other styles are removed.
         *
         * @default false
         */
        preserveMediaQueries?: boolean | undefined;

        /**
         * Whether to use any CSS pixel widths to create `width` attributes on elements.
         *
         * @default false
         */
        applyWidthAttributes?: boolean | undefined;

        /**
         * Whether to apply the `border`, `cellpadding` and `cellspacing` attributes to table elements.
         *
         * @default false
         */
        applyTableAttributes?: boolean | undefined;

        /**
         * Whether to remove the `class` and `id` attributes from the markup.
         *
         * @default false
         */
        removeHtmlSelectors?: boolean | undefined;

        /**
         * An object that specifies fenced code blocks that should be ignored during parsing and inlining.
         * For example, Handlebars (hbs) templates are `HBS: {start: '{{', end: '}}'}`. `codeBlocks` can fix
         * problems where otherwise inline-css might interpret code like `<=` as HTML, when it is meant to
         * be template language code.
         *
         * @default { EJS: { start: '<%', end: '%>' }, HBS: { start: '{{', end: '}}' } }
         */
        codeBlocks?: Record<string, CodeBlockSpec> | undefined;
    }

    interface CodeBlockSpec {
        start: string;
        end: string;
    }

    type CheerioParserOptions = Exclude<Parameters<typeof cheerio["load"]>[1], undefined>;
}
