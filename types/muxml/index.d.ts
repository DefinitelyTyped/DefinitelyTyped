/// <reference types="node" />

import * as sax from "sax";
import { Transform } from "stream";

declare namespace muxml {
    interface Options {
        /**
         * @default true
         */
        strict?: boolean | undefined;

        /**
         * Prettify the output. If true, output has newlines and indentation.
         *
         * @default true
         */
        pretty?: boolean | undefined;

        /**
         * When pretty is set to true, indent with either spaces or tabs.
         *
         * @default 'spaces'
         */
        indentStyle?: "spaces" | "tabs" | undefined;

        /**
         * When pretty is set to true and indentStyle is set to spaces, then indent with this number of spaces.
         *
         * @default 2
         */
        indentSpaces?: number | undefined;

        /**
         * When pretty is set to true and indentStyle is set to tabs, then indent with this number of tabs.
         *
         * @default 1
         */
        indentTabs?: number | undefined;

        /**
         * Filter XML with tags with name matching the filter.
         *
         * @default null
         */
        filter?: string | null | undefined;

        /**
         * Strip attributes from tags.
         *
         * @default false
         */
        stripAttributes?: boolean | undefined;

        /**
         * Strip CDATA tags.
         *
         * @default true
         */
        stripCdata?: boolean | undefined;

        /**
         * Strip XML comments.
         *
         * @default true
         */
        stripComments?: boolean | undefined;

        /**
         * Strip <!DOCTYPE declarations.
         *
         * @default true
         */
        stripDoctype?: boolean | undefined;

        /**
         * Strip processing instruction (like <?xml foo="blerg" ?>) tags.
         *
         * @default true
         */
        stripInstruction?: boolean | undefined;

        /**
         * @default {}
         */
        saxOptions?: sax.SAXOptions | undefined;

        /**
         * @default null
         */
        tagFilter?: string | null;
    }
}

declare function muxml(options?: muxml.Options): Transform;

export = muxml;
