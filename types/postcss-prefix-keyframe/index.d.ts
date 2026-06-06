import { PluginCreator } from "postcss";

declare namespace prefixKeyframe {
    interface Options {
        /**
         * The string to prepend to each `@keyframes` animation rule name
         * @default ""
         */
        prefix?: string;
    }
}

declare var prefixKeyframe: PluginCreator<prefixKeyframe.Options>;

export = prefixKeyframe;
