// Type definitions for express-actuator 1.3
// Project: https://www.npmjs.org/package/express-actuator
// Definitions by:  Eduardo Silva <https://github.com/etruta>
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
        basePath?: string;

        /**
         * @summary infoGitMode.
         */
        infoGitMode?: InfoGitMode;
    }
}

export = actuator;
