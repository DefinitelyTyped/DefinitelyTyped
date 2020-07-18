// Type definitions for postcss-flexbugs-fixes 4.2
// Project: https://github.com/luisrudge/postcss-flexbugs-fixes#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'postcss';

declare namespace postcssFlexbugsFixes {
    type PostcssFlexbugsFixesPlugin = Plugin<Options>;

    interface Options {
        /**
         * @default true
         */
        bug4?: boolean;
        /**
         * @default true
         */
        bug6?: boolean;
        /**
         * @default true
         */
        bug81a?: boolean;
    }
}

/**
 * PostCSS plugin This project tries to fix all of {@link https://github.com/philipwalton/flexbugs|flexbug's} issues.
 */
declare const postcssFlexbugsFixes: postcssFlexbugsFixes.PostcssFlexbugsFixesPlugin;

export = postcssFlexbugsFixes;
