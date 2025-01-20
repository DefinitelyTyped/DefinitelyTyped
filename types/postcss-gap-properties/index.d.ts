import { Plugin } from "postcss";

declare namespace GapProperties {
    interface Options {
        /**
         * @default true
         */
        preserve?: boolean | undefined;
    }

    type GapPropertiesPlugin = Plugin<Options>;
}

declare const gapProperties: GapProperties.GapPropertiesPlugin;

export = gapProperties;
