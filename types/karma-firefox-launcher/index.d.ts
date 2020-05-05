// Type definitions for karma-firefox-launcher 1.3
// Project: https://github.com/karma-runner/karma-firefox-launcher#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2
import 'karma';

declare module 'karma' {
    interface CustomLauncher {
        /**
         * configure preferences for the Firefox instance that is loaded
         */
        prefs?: {
            [name: string]: any;
        };
        /**
         * extensions that you want loaded into the browser on startup
         */
        extensions?: string[];
    }
}
