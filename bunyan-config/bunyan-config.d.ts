// Type definitions for bunyan-config 0.2.0
// Project: https://github.com/LSEducation/bunyan-config
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../bunyan/bunyan.d.ts"/>

declare module "bunyan-config" {
    import * as bunyan from "bunyan";

    namespace bunyanConfig { }

    /**
     * Constructor.
     * @param {Object} [jsonConfig] A JSON configuration.
     * @return {LoggerOptions} A logger options.
     */
    function bunyanConfig(jsonConfig?: Object): bunyan.LoggerOptions;
    export = bunyanConfig;
}
