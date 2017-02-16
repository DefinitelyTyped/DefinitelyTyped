// Type definitions for bunyan-blackhole v0.2.0
// Project: https://github.com/Floby/node-bunyan-blackhole
// Definitions by: Olivier Chevet <https://github.com/olivr70>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="bunyan"/>

declare module "bunyan-blackhole" {
    import * as Logger from "bunyan";

    /**
     * Constructor.
     * @param {string} [name] name of the blackhole Logger
     * @return {Logger} A bunyan logger .
     */
    function bunyanBlackHole(name:string): Logger;
    export = bunyanBlackHole;
}
