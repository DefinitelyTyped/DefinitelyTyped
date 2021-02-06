// Type definitions for postcss-normalize 9.0
// Project: https://github.com/csstools/postcss-normalize#readme
// Definitions by: Piotr Kuczynski <https://github.com/pkuczynski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'postcss';

declare namespace Normalize {
    interface Options {
        /**
         * @default false
         */
        allowDuplicates?: boolean;

        /**
         * @default null
         */
        forceImport?: boolean | string;

        /**
         * @default null
         */
        browsers?: string;
    }

    type NormalizePlugin = Plugin<Options>;
}

declare const normalize: Normalize.NormalizePlugin;

export = normalize;
