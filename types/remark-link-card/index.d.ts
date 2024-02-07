declare namespace rlc {
    interface Options {
        /**
         * Cache image for `next/image` (`bool`, default:`false`)
         *
         * Automatically save open graph images and favicon images to `process.cwd()/public/remark-link-card/`.
         *
         * Automatically insert the path to images starting with `/remark-link-card/` in the src attribute of img tags.
         */
        cache?: boolean;

        /**
         * Display only hostname of target URL (`bool`, default: `false`)
         */
        shortenUrl?: boolean;
    }
}

declare function rlc(options?: rlc.Options): (tree: import("mdast").Root) => Promise<import("mdast").Root>;

/**
 * Convert text links to link cards.
 *
 * @example
 * remark().use(rlc[, options])
 */
export = rlc;
