// Type definitions for karma-coverage v0.5.3
// Project: https://github.com/karma-runner/karma-coverage
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as karma from 'karma';
import * as istanbul from 'istanbul';

declare namespace karmaCoverage {
    interface Karma extends karma.Karma { }

    interface Config extends karma.Config {
        set: (config: ConfigOptions) => void;
    }

    interface ConfigOptions extends karma.ConfigOptions {
        /**
         * See https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
         */
        coverageReporter?: (Reporter | Reporter[]);
    }

    interface Reporter {
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

declare var karmaCoverage: karmaCoverage.Karma;

export = karmaCoverage;
