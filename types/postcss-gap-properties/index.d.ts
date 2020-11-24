// Type definitions for postcss-gap-properties 2.0
// Project: https://github.com/jonathantneal/postcss-gap-properties#readme
// Definitions by: Piotr Kuczynski <https://github.com/pkuczynski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'postcss';

declare namespace GapProperties {
    interface Options {
        /**
         * @default true
         */
        preserve?: boolean;
    }

    type GapPropertiesPlugin = Plugin<Options>;
}

declare const gapProperties: GapProperties.GapPropertiesPlugin;

export = gapProperties;
