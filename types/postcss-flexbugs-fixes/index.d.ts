import { PluginCreator } from "postcss";

declare namespace postcssFlexbugsFixes {
    type PostcssFlexbugsFixesPlugin = PluginCreator<Options>;

    interface Options {
        /**
         * @default true
         */
        bug4?: boolean | undefined;
        /**
         * @default true
         */
        bug6?: boolean | undefined;
        /**
         * @default true
         */
        bug81a?: boolean | undefined;
    }
}

/**
 * PostCSS plugin This project tries to fix all of {@link https://github.com/philipwalton/flexbugs|flexbug's} issues.
 */
declare const postcssFlexbugsFixes: postcssFlexbugsFixes.PostcssFlexbugsFixesPlugin;

export = postcssFlexbugsFixes;
