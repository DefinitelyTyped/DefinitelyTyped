import "karma";

declare module "karma" {
    interface ConfigOptions {
        /**
         * See https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
         */
        detectBrowsers?: KarmaDetectBrowsers | undefined;
    }

    interface KarmaDetectBrowsers {
        /** enable/disable, default is true */
        enabled?: boolean | undefined;
        /** enable/disable phantomjs support, default is true */
        usePhantomJS?: boolean | undefined;
        /** use headless mode, for browsers that support it, default is false */
        preferHeadless?: boolean | undefined;
        /**
         * post processing of browsers list
         * here you can edit the list of browsers used by karma
         */
        postDetection: (availableBrowsers: string[]) => string[];
    }
}
