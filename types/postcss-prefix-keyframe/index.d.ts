// Type definitions for postcss-prefix-keyframe 0.0
// Project: https://github.com/VitaliyR/postcss-prefix-keyframe
// Definitions by: Nick Saunders <https://github.com/nsaunders>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
