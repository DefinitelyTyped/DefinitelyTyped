// Type definitions for karma-material-reporter 1.1
// Project: https://github.com/ameerthehacker/karma-material-reporter#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * Visualize karma test results in real time with material designed reporter
         * See {@link https://github.com/ameerthehacker/karma-material-reporter#availble-configurations}
         */
        materialReporter?: MaterialReporterOptions;
    }

    interface MaterialReporterOptions {
        /**
         * port in which the reporter startes a express server
         * @default 3000
         */
        serverPort?: number;
        /**
         * whether to open the reporter UI automatically in the default browser
         * @default true
         */
        autoOpen?: boolean;
        /**
         * expand all the expandable suite menus
         * @default true
         */
        expandSuites?: boolean;
    }
}
