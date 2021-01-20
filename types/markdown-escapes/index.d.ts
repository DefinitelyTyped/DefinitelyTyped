// Type definitions for markdown-escapes 1.0
// Project: https://github.com/wooorm/markdown-escapes#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * List of escapable characters in markdown.
 */
declare namespace escapes {
    interface Options {
        /** @default false */
        commonmark?: boolean;
        /** @default false */
        gfm?: boolean;
    }

    interface MarkdownEscapes {
        /**
         * Get escapes.
         * Supports `options.commonmark` and `options.gfm`,
         * which when true returns the extra escape characters supported by those flavors.
         */
        (options?: Options): string[];
        /**
         * List of escapable characters in CommonMark (which includes all gfms).
         */
        readonly commonmark: string[];
        /**
         * List of default escapable characters.
         */
        readonly default: string[];
        /**
         * List of escapable characters in GFM (which includes all defaults).
         */
        readonly gfm: string[];
    }
}

declare const escapes: escapes.MarkdownEscapes;

export = escapes;
