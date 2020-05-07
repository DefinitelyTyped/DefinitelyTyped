// Type definitions for karma-browserify 7.0
// Project: https://github.com/nikku/karma-browserify#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';
import watchify = require('watchify');
import browserify = require('browserify');

declare module 'karma' {
    interface ConfigOptions {
        /**
         * Config entry to configure how the bundle gets created
         * see {@link https://github.com/nikku/karma-browserify#usage}
         */
        browserify?: BrowserifyOptions;

        /**
         * You can configure the underlying watchify instance
         * see {@link https://github.com/nikku/karma-browserify#watchify-config}
         */
        watchify?: WatchifyOptions;
    }

    interface BrowserifyOptions extends browserify.Options {
        /**
         * You may perform additional configuration in a function passed as the configure option
         * and that receives the browserify instance as an argument.
         * See {@link https://github.com/nikku/karma-browserify#additional-bundle-configuration}
         */
        configure?: (bundle: browserify.BrowserifyObject) => void;
    }

    type WatchifyOptions = watchify.Options;
}
