import { EventEmitter } from "events";

export type GraylogDeflate = "optimal" | "always" | "never";

export type GraylogLogMethod =
    | "log"
    | "emergency"
    | "alert"
    | "critical"
    | "error"
    | "warning"
    | "warn"
    | "notice"
    | "info"
    | "debug";

export interface GraylogConfig {
    /**
     * The name of a host.
     * The default value is "os.hostname()"
     */
    hostname?: string | undefined;

    /**
     * The facility - log's field type in Graylog.
     * The default value is "Node.js"
     */
    facility?: string | undefined;

    /**
     * The strategy for a message compression:
     *  "always"  -  every message will be compressed with zlib.deflate
     *  "never"   -  no compression
     *  "optimal" -  messages bigger than GraylogConfig.bufferSize will be compressed
     *
     *  The default value is "optimal"
     */
    deflate?: GraylogDeflate | undefined;

    /**
     * The max UDP packet size. Should never exceed the MTU of your system.
     * The default value is 1400
     */
    bufferSize?: number | undefined;

    /**
     * The list of graylog servers
     */
    servers: ReadonlyArray<Readonly<{ host: string; port: number }>>;
}

export class graylog extends EventEmitter {
    constructor(config: Readonly<GraylogConfig>);

    log(message: string | Error | Record<string, any>): void;
    log(message: string, fullMessage: string, additionalFields?: Record<string, any>, timestamp?: number): void;
    log(message: string | Error, additionalFields?: Record<string, any>, _?: undefined, timestamp?: number): void;
    log(
        message: string | Error | Record<string, any>,
        _: undefined,
        additionalFields: Record<string, any> | undefined,
        timestamp?: number,
    ): void;

    emergency: graylog["log"];
    alert: graylog["log"];
    critical: graylog["log"];
    error: graylog["log"];
    warning: graylog["log"];
    warn: graylog["log"];
    notice: graylog["log"];
    info: graylog["log"];
    debug: graylog["log"];

    close(callback?: (err: Error | undefined) => void): void;
}

export namespace graylog {
    const graylog: graylog;
}
