// Type definitions for karma-coverage 1.1
// Project: https://github.com/karma-runner/karma-coverage
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 Yaroslav Admin <https://github.com/devoto13>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';
import * as istanbul from 'istanbul';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * See https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
         */
        coverageReporter?: KarmaCoverageReporter & { reporters?: KarmaCoverageReporter[] };
    }

    interface KarmaCoverageReporter {
        type?: string;
        dir?: string;
        subdir?: string | ((browser: string) => string);
        check?: any;
        watermarks?: any;
        includeAllSources?: boolean;
        sourceStore?: istanbul.Store;
        instrumenter?: any;
        [moreSettings: string]: any;
    }
}
