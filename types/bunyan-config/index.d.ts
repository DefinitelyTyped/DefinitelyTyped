/// <reference types="bunyan"/>

declare module "bunyan-config" {
    import * as bunyan from "bunyan";
    interface StreamConfiguration {
        name: string;
        params?: {
            host: string;
            port: number;
        } | undefined;
    }

    interface Stream {
        type?: string | undefined;
        level?: bunyan.LogLevel | undefined;
        path?: string | undefined;
        stream?: string | StreamConfiguration | undefined;
        closeOnExit?: boolean | undefined;
        period?: string | undefined;
        count?: number | undefined;
    }

    /**
     * Configuration.
     * @interface
     */
    interface Configuration {
        name: string;
        streams?: Stream[] | undefined;
        level?: string | number | undefined;
        stream?: NodeJS.WritableStream | undefined;
        serializers?: {} | undefined;
        src?: boolean | undefined;
    }

    /**
     * Constructor.
     * @param {Configuration} [jsonConfig] A JSON configuration.
     * @return {LoggerOptions} A logger options.
     */
    function bunyanConfig(jsonConfig?: Configuration): bunyan.LoggerOptions;
    export = bunyanConfig;
}
