import type { EleventyConfig } from "11ty.ts";

declare namespace pluginTOC {
    interface Options {
        /**
         * which heading tags are used to generate the table of contents.
         *
         * @default ['h2', 'h3', 'h4']
         */
        tags?: string[] | undefined;

        /**
         * Tag of element wrapping toc lists; `''` removes wrapper element.
         *
         * @default 'nav'
         */
        wrapper?: string | undefined;

        /**
         * `class` on element wrapping toc lists.
         *
         * @default 'toc'
         */
        wrapperClass?: string | undefined;

        /**
         * `aria-label` on element wrapping toc lists.
         */
        wrapperLabel?: string | undefined;

        /**
         * lists are `ul` if true, `ol` if `false`.
         *
         * @default false
         */
        ul?: boolean | undefined;

        /**
         * use flat list if `true`; use nested lists if `false`.
         *
         * @default false
         */
        flat?: boolean | undefined;
    }
}

/**
 * This Eleventy plugin will generate a TOC from page content using an Eleventy filter.
 */
declare function pluginTOC(config: EleventyConfig, options: pluginTOC.Options): void;

export = pluginTOC;
