import "karma";
import watchify = require("watchify");
import browserify = require("browserify");

declare module "karma" {
    interface ConfigOptions {
        /**
         * Config entry to configure how the bundle gets created
         * see {@link https://github.com/nikku/karma-browserify#usage}
         */
        browserify?: BrowserifyOptions | undefined;

        /**
         * You can configure the underlying watchify instance
         * see {@link https://github.com/nikku/karma-browserify#watchify-config}
         */
        watchify?: WatchifyOptions | undefined;
    }

    interface BrowserifyOptions extends browserify.Options {
        /**
         * You may perform additional configuration in a function passed as the configure option
         * and that receives the browserify instance as an argument.
         * See {@link https://github.com/nikku/karma-browserify#additional-bundle-configuration}
         */
        configure?: ((bundle: browserify.BrowserifyObject) => void) | undefined;
    }

    type WatchifyOptions = watchify.Options;
}
