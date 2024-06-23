import "karma";

declare module "karma" {
    interface ConfigOptions {
        /**
         * Visualize karma test results in real time with material designed reporter
         * See {@link https://github.com/ameerthehacker/karma-material-reporter#availble-configurations}
         */
        materialReporter?: MaterialReporterOptions | undefined;
    }

    interface MaterialReporterOptions {
        /**
         * port in which the reporter startes a express server
         * @default 3000
         */
        serverPort?: number | undefined;
        /**
         * whether to open the reporter UI automatically in the default browser
         * @default true
         */
        autoOpen?: boolean | undefined;
        /**
         * expand all the expandable suite menus
         * @default true
         */
        expandSuites?: boolean | undefined;
    }
}
