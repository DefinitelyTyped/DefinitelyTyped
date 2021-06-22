// Type definitions for karma-html-detailed-reporter 2.1
// Project: https://github.com/a11smiles/karma-html-detailed-reporter
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * The reporter provides a dashboard detailing specification runs
         * see {@link https://github.com/a11smiles/karma-html-detailed-reporter#options}
         */
        htmlDetailed?: HtmlDetailedOptions;
    }

    /**
     * see {@link https://github.com/a11smiles/karma-html-detailed-reporter#options}
     */
    interface HtmlDetailedOptions {
        /**
         * Enables/disables the refresh to start automatically
         * @default true
         */
        autoReload?: boolean;
        /**
         * Sets the reports output base path
         * @default './_reports'
         */
        dir?: string;
        /**
         * Sets the refresh timeout (in milliseconds) for the page
         * @default 1000
         */
        refreshTimeout?: number;
        /**
         * Determines whether the results are split into a separate file for each browser
         * @default true
         */
        splitResults?: boolean;
        /**
         * Determines whether the detailed results of the successfull tests are default shown or hidden in the browser (you are able to toggle live in the browser)
         * @default true
         */
        showSuccess?: boolean;
        /**
         * Determines whether the detailed results of the failed tests are default shown or hidden in the browser (you are able to toggle live in the browser)
         * @default true
         */
        showFailed?: boolean;
        /**
         * Determines whether the detailed results of the skipped tests are default shown or hidden in the browser (you are able to toggle live in the browser)
         * @default true
         */
        showSkipped?: boolean;
        /**
         * Determines whether to use the hosted versions of Boostrap and jQuery. If testing within a CI build (e.g. TFS, Jenkins, TeamCity),
         * setting this to true would allow you to see the reports while the builders do not maintain node modules.
         * @default false
         */
        useHostedBootstrap?: boolean;
    }
}

declare const exp: {
    'preprocessor:htmlDetailed': ['factory', any];
    'reporter:htmlDetailed': ['type', any];
};

export = exp;
