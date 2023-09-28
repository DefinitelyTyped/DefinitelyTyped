// Type definitions for postcss-prefixer 2.1
// Project: https://github.com/marceloucker/postcss-prefixer
// Definitions by: Nick Saunders <https://github.com/nsaunders>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { PluginCreator } from "postcss";

declare namespace prefixer {
    interface Options {
        /**
         * The string to prepend to each class name or ID
         * @default ""
         */
        prefix?: string;

        /**
         * The list of class names and/or IDs to leave unchanged
         * @default []
         */
        ignore?: ReadonlyArray<RegExp | string>;
    }
}

declare var prefixer: PluginCreator<prefixer.Options>;

export = prefixer;
