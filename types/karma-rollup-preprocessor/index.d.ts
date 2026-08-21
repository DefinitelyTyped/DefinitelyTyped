import karma = require("karma");
import { RollupOptions } from "rollup";

declare module "karma" {
    interface ConfigOptions {
        /**
         * see {@link https://github.com/jlmakes/karma-rollup-preprocessor#configured-preprocessors}
         */
        rollupPreprocessor?: RollupPreprocessorOptions | undefined;
    }

    /**
     * Default global variable name is by default `__json__`,
     * but you can override it with your own name in karma configuration:
     */
    interface RollupPreprocessorOptions extends Exclude<RollupOptions, "input"> {}
}
