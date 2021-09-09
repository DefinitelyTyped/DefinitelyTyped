// Type definitions for pino-datadog 2.0
// Project: https://github.com/ovhemert/pino-datadog
// Definitions by: czystyl <https://github.com/czystyl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface Options {
    /**
     * The API key that can be found in your DataDog account (Integration > APIs).
     */
    apiKey: string;
    /**
     * The number of log messages to send as a single batch (defaults to 1).
     */
    size?: number;
    /**
     * Set a default source to all the logs sent to datadog
     */
    ddsource?: string;
    /**
     * Set a default list of tags for all the logs sent to datadog
     */
    ddtags?: string;
    /**
     * Set a default service to all the logs sent to datadog
     */
    service?: string;
    /**
     * Set a default hostname to all the logs sent to datadog
     */
    hostname?: string;
    /**
     * Keep the msg attribute in the log record. Used to allow a Datadog facet on the message.
     */
    keepMsg?: boolean;
}

/**
 * The createWriteStream function creates a writestream that pino-multi-stream can use to send logs to. *This function is async because of compatibility reasons
 */
export function createWriteStream(options: Options): Promise<NodeJS.WritableStream>;

/**
 * The createWriteStreamSync function creates a writestream that pino-multi-stream can use to send logs to.
 */
export function createWriteStreamSync(options: Options): NodeJS.WritableStream;
