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
