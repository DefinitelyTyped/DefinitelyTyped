// Type definitions for bunyan-config 0.2.0
// Project: https://github.com/LSEducation/bunyan-config
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="bunyan"/>

declare module "bunyan-config" {
    import * as bunyan from "bunyan";
    interface StreamConfiguration {
        name: string,
        params?: {
            host: string,
            port: number
        }
    }

    interface Stream {
        type?: string;
        level?: bunyan.LogLevel;
        path?: string;
        stream?: string | StreamConfiguration
        closeOnExit?: boolean;
        period?: string;
        count?: number;
    }

    /**
     * Configuration.
     * @interface
     */
    interface Configuration {
        name: string;
        streams?: Stream[];
        level?: string | number;
        stream?: NodeJS.WritableStream;
        serializers?: {};
        src?: boolean;
    }

    /**
     * Constructor.
     * @param {Configuration} [jsonConfig] A JSON configuration.
     * @return {LoggerOptions} A logger options.
     */
    function bunyanConfig(jsonConfig?: Configuration): bunyan.LoggerOptions;
    export = bunyanConfig;
}
