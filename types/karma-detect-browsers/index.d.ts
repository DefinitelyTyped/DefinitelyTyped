// Type definitions for karma-detect-browsers 2.3
// Project: https://github.com/litixsoft/karma-detect-browsers
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * See https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
         */
        detectBrowsers?: KarmaDetectBrowsers;
    }

    interface KarmaDetectBrowsers {
        /** enable/disable, default is true */
        enabled?: boolean;
        /** enable/disable phantomjs support, default is true */
        usePhantomJS?: boolean;
        /** use headless mode, for browsers that support it, default is false */
        preferHeadless?: boolean;
        /**
         * post processing of browsers list
         * here you can edit the list of browsers used by karma
         */
        postDetection: (availableBrowsers: string[]) => string[];
    }
}
