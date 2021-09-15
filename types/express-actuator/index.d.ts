// Type definitions for express-actuator 1.8
// Project: https://www.npmjs.org/package/express-actuator
// Definitions by:  Eduardo Silva <https://github.com/etruta>, Raúl Cruz <https://github.com/rcruzper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require('express');

declare function actuator(options?: actuator.Options): express.RequestHandler;

declare namespace actuator {
    type InfoGitMode = "simple" | "full";

    /**
     * @summary Options for {@link Actuator} function.
     */
    interface Options {
        /**
         * @summary BasePath of Actuator.
         */
        basePath?: string | undefined;

        /**
         * @summary infoGitMode.
         */
        infoGitMode?: InfoGitMode | undefined;

        /**
         * @summary DateFormat for info git.time output.
         */
        infoDateFormat?: string | undefined;

        /**
         * @summary Extra Options to pass to info build output.
         */
        infoBuildOptions?: Record<string, any> | undefined;

        /**
         * @summary Custom endpoints
         */
        customEndpoints?: CustomEndpoint[] | undefined;
    }

    interface CustomEndpoint {
        /**
         * @summary Used as endpoint `/id` or `${basePath}/id`
         */
        id: string;

        /**
         * @summary Controller to be called when accessing this endpoint
         */
        controller: CustomControllerMethod;
    }

    interface CustomControllerMethod {
        (req?: any, res?: any): void;
    }
}

export = actuator;
