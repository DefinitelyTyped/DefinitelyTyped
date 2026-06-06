import { Socket } from "dgram";
import { ThroughStream } from "through";

type setup = string | {
    /**
     * graylog host
     *
     * @default "localhost"
     */
    host?: string | undefined;
    /**
     * graylog port
     *
     * @default 12201
     */
    port?: number | undefined;
    /**
     * size of chunked messages in bytes
     *
     * @default 1240
     */
    chunkSize?: number | undefined;
    /**
     * compression 'gzip' or 'deflate'
     *
     * @default "deflate"
     */
    compressType?: "gzip" | "deflate" | undefined;
    /**
     * whether to always compress or go by chunkSize
     *
     * @default false
     */
    alwaysCompress?: boolean | undefined;
    /**
     * don't send messages to GrayLog2
     *
     * @default false
     */
    mock?: boolean | undefined;
};

interface GelfMessage {
    /**
     * app version
     */
    version?: string | number | undefined;
    /**
     * app host
     */
    host?: string | number | undefined;
    /**
     * log short message
     */
    short_message?: string | number | undefined;
    /**
     * log full message
     */
    full_message?: string | number | undefined;
    /**
     * log timestamp
     */
    timestamp?: string | number | undefined;
    /**
     * GELF level
     *
     *  emerg: 0; panic: 0;
     *  alert: 1;
     *  crit: 2;
     *  error: 3; err: 3;
     *  warn: 4; warning: 4;
     *  notice: 5;
     *  info: 6;
     *  debug: 7.
     */
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | undefined;
    /**
     * any other personal property
     */
    [key: string]: string | number | undefined;
}

interface EventListener {
    /**
     * Set a listener to message event
     *
     * @param event listen message event
     * @param cb callback function that receives message
     */
    (event: "message", cb: (message: GelfMessage) => void): void;
    /**
     * Set a listener to error event
     *
     * @param event listen error event
     * @param cb callback function that receives error messsage
     */
    (event: "error", cbErr: (err: string) => void): void;
}

type Instance =
    & {
        /**
         * Send GELF message
         *
         * May some custom fields return started by '_', like graygelfMessage._facility
         * @returns {GelfMessage}
         */
        [
            key in
                | "emerg"
                | "panic"
                | "alert"
                | "crit"
                | "error"
                | "err"
                | "warn"
                | "warning"
                | "notice"
                | "info"
                | "debug"
        ]: (short_message: string | Error, ...args: string[]) => GelfMessage;
    }
    & {
        /**
         * Send GELF message and can accept custom fields
         *
         * @returns {GelfMessage} May some custom fields return started by '_', like graygelfMessage._facility
         */
        [
            key in
                | "emerg"
                | "panic"
                | "alert"
                | "crit"
                | "error"
                | "err"
                | "warn"
                | "warning"
                | "notice"
                | "info"
                | "debug"
        ]: {
            a: (short_message: string | Error, full_message?: string, customFields?: GelfMessage) => GelfMessage;
        };
    }
    & {
        /**
         * Send a complete custom GELF message.
         *
         * Version, host, and timestamp will be supplied if missing.
         * @returns May some custom fields return started by '_', like graygelfMessage._facility
         */
        raw: (fields: GelfMessage) => GelfMessage;
        /**
         * I don't really know
         */
        stream: (name: string) => ThroughStream;
        /**
         * send udp message
         */
        write: (msg: string | Uint8Array) => void;
        /**
         * Build a Gelf Message
         */
        _prepGelf: (
            level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7,
            short: string,
            long?: string,
            fields?: { [key: string]: string },
        ) => GelfMessage;
        /**
         * send a gelf message
         */
        _send: (gelfMessage: GelfMessage) => void;
        on: EventListener;
        once: EventListener;
        /**
         * Setup global custom fields to be passed with every message
         */
        fields: {
            /**
             * Suggested property - facility can be the app name.
             */
            facility?: string | undefined;
            /**
             * any other
             */
            [key: string]: string | undefined;
        };
        /**
         * Endpoint setted
         *
         * @default "localhost"
         */
        graylogHost: string;
        /**
         * Port setted
         *
         * @default "12201"
         */
        graylogPort: string;
        /**
         * Compress type
         *
         * @default "deflate"
         */
        compressType: "deflate" | "gzip";
        /**
         * Chunk size
         *
         * @default 1240
         */
        chunkSize: number;
        /**
         * Should always compress
         *
         * @default false
         */
        alwaysCompress: boolean;
        /**
         * udp socket (not setted if mock is true)
         */
        _udp?: Socket | undefined;
    };

/**
 * Create a graygelf instance
 *
 * @param setup
 */
declare function graygelf(setup?: setup): Instance;
declare class graygelf implements Instance {
    constructor(setup?: setup);

    emerg: ((short_message: string | Error, ...args: string[]) => GelfMessage) & {
        a: (short_message: string | Error, full_message?: string, customFields?: GelfMessage) => GelfMessage;
    };
    panic: ((short_message: string | Error, ...args: string[]) => GelfMessage) & {
        a: (short_message: string | Error, full_message?: string, customFields?: GelfMessage) => GelfMessage;
    };
    alert: ((short_message: string | Error, ...args: string[]) => GelfMessage) & {
        a: (short_message: string | Error, full_message?: string, customFields?: GelfMessage) => GelfMessage;
    };
    crit: ((short_message: string | Error, ...args: string[]) => GelfMessage) & {
        a: (short_message: string | Error, full_message?: string, customFields?: GelfMessage) => GelfMessage;
    };
    error: ((short_message: string | Error, ...args: string[]) => GelfMessage) & {
        a: (short_message: string | Error, full_message?: string, customFields?: GelfMessage) => GelfMessage;
    };
    err: ((short_message: string | Error, ...args: string[]) => GelfMessage) & {
        a: (short_message: string | Error, full_message?: string, customFields?: GelfMessage) => GelfMessage;
    };
    warn: ((short_message: string | Error, ...args: string[]) => GelfMessage) & {
        a: (short_message: string | Error, full_message?: string, customFields?: GelfMessage) => GelfMessage;
    };
    warning: ((short_message: string | Error, ...args: string[]) => GelfMessage) & {
        a: (short_message: string | Error, full_message?: string, customFields?: GelfMessage) => GelfMessage;
    };
    notice: ((short_message: string | Error, ...args: string[]) => GelfMessage) & {
        a: (short_message: string | Error, full_message?: string, customFields?: GelfMessage) => GelfMessage;
    };
    info: ((short_message: string | Error, ...args: string[]) => GelfMessage) & {
        a: (short_message: string | Error, full_message?: string, customFields?: GelfMessage) => GelfMessage;
    };
    debug: ((short_message: string | Error, ...args: string[]) => GelfMessage) & {
        a: (short_message: string | Error, full_message?: string, customFields?: GelfMessage) => GelfMessage;
    };
    raw: (fields: GelfMessage) => GelfMessage;
    stream: (name: string) => ThroughStream;
    write: (msg: string | Uint8Array) => void;
    _prepGelf: (
        level: 0 | 3 | 4 | 5 | 6 | 7 | 1 | 2,
        short: string,
        long?: string,
        fields?: { [key: string]: string },
    ) => GelfMessage;
    _send: (gelfMessage: GelfMessage) => void;
    on: EventListener;
    once: EventListener;
    fields: {
        [key: string]: string | undefined;
        /**
         * Suggested property - facility can be the app name.
         */
        facility?: string | undefined;
    };
    graylogHost: string;
    graylogPort: string;
    compressType: "deflate" | "gzip";
    chunkSize: number;
    alwaysCompress: boolean;
    _udp?: Socket | undefined;
    /**
     * Chunk size for wide network
     */
    static CHUNK_WAN: 1240;
    /**
     * Chunk size for local network
     */
    static CHUNK_LAN: 8154;
    /**
     * GELF log levels
     */
    static LOG_LEVELS: {
        emerg: 0;
        panic: 0;
        alert: 1;
        crit: 2;
        error: 3;
        err: 3;
        warn: 4;
        warning: 4;
        notice: 5;
        info: 6;
        debug: 7;
    };
}

export = graygelf;
