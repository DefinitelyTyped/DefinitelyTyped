// Type definitions for gulp-angular-protractor 2.0
// Project: https://github.com/rochejul/gulp-angular-protractor
// Definitions by: Adam Kwiatek <https://github.com/akwiatek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import through = require('through');

declare function gulpProtractorAngular(options: gulpProtractorAngular.Options): through.ThroughStream;

declare namespace gulpProtractorAngular {
    // See https://github.com/rochejul/gulp-angular-protractor/blob/master/readme.md#api
    interface Options {
        /**
         * If true, the plugin will update the WebDriver, launch the WebDriver server before launching tests and stop it at the end automatically
         *
         * @default true
         */
        autoStartStopServer?: boolean;

        /**
         * The path to your protractor config
         */
        configFile: string;

        /**
         * Arguments get passed directly to the protractor call [Read the docs for more information](https://github.com/angular/protractor/blob/master/docs/getting-started.md#setup-and-config)
         *
         * @default []
         */
        args?: string[];

        /**
         * Enables Protractor's [debug mode](https://github.com/angular/protractor/blob/master/docs/debugging.md), which can be used to pause tests during execution and to view stack traces.
         *
         * @default false
         */
        debug?: boolean;

        /**
         * @default true
         */
        verbose?: boolean;

        /**
         * If you want to use another protractor version instead the default one
         */
        protractorModulePath?: string;

        webDriverUpdate?: WebDriverUpdate;

        // See https://github.com/rochejul/gulp-angular-protractor/blob/master/examples/example-05/Gulpfile.js
        webDriverStart?: WebDriverStart;
    }

    interface WebDriverUpdate {
        /**
         * @default false
         */
        skip?: boolean;

        /**
         * List of browsers to update the webdriver
         *
         * @default ['chrome']
         */
        browsers?: string[];

        /**
         * Additional arguments to pass for the update of the webdriver
         *
         * @default []
         */
        args?: string[];
    }

    interface WebDriverStart {
        /**
         * @default []
         */
        args?: string[];
    }
}

export = gulpProtractorAngular;
