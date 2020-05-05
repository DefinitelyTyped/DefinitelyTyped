// Type definitions for karma-jsdom-launcher 8.0
// Project: https://github.com/badeball/karma-jsdom-launcher#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';
import jsdom = require('jsdom');

declare module 'karma' {
    interface ConfigOptions {
        /**
         * Launcher for jsdom configuration
         */
        jsdomLauncher?: JsdomLauncherOptions;
    }

    interface JsdomLauncherOptions {
        /**
         * You can pass options directly to jsdom as shown below.
         * See jsdom's own documentation for all supported options.
         */
        jsdom: jsdom.ConstructorOptions;
    }
}
