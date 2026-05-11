import { Plugin } from "postcss";

declare namespace Normalize {
    interface Options {
        /**
         * @default false
         */
        allowDuplicates?: boolean | undefined;

        /**
         * @default null
         */
        forceImport?: boolean | string | undefined;

        /**
         * @default null
         */
        browsers?: string | undefined;
    }

    type NormalizePlugin = Plugin<Options>;
}

declare const normalize: Normalize.NormalizePlugin;

export = normalize;
