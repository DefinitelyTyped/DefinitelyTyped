/// <reference types="node" />
import { EventEmitter } from "events";
import { IncomingHttpHeaders, IncomingMessage, OutgoingHttpHeaders, Server as HttpServer, ServerResponse } from "http";
import { Server as HttpsServer } from "https";

export = requestStats;

/**
 * Attach request-stats to a HTTP server.
 * If no callback is provided, you can later attach a listener on the "complete" event.
 *
 * @param server Initialize request-stats with an instance a HTTP server.
 * @param statsCallback A callback which will be called for each completed HTTP request with a stats object.
 */
declare function requestStats(
    server: HttpServer | HttpsServer,
    statsCallback?: requestStats.StatsCallback,
): requestStats.StatsEmitter;

/**
 * Attach request-stats to a single HTTP request.
 * If no callback is provided, you can later attach a listener on the "complete" event.
 *
 * @param req An instance of a HTTP request.
 * @param res An instance of a HTTP response.
 * @param statsCallback A callback which will be called with a stats object when the HTTP request completes.
 */
declare function requestStats(
    req: IncomingMessage,
    res: ServerResponse,
    statsCallback?: requestStats.StatsCallback,
): requestStats.StatsEmitter;

declare namespace requestStats {
    type StatsCallback = (stats: Stats) => void;

    interface Stats {
        /**
         * `true` if the connection was closed correctly and `false` otherwise
         */
        ok: boolean;

        /**
         * The milliseconds it took to serve the request
         */
        time: number;

        req: {
            /**
             * Number of bytes sent by the client
             */
            bytes: number;
            /**
             * The headers sent by the client
             */
            headers: IncomingHttpHeaders;
            /**
             * The HTTP method used by the client
             */
            method: string;
            /**
             * The path part of the request URL
             */
            path: string;
            /**
             * The remote ip
             */
            ip: string;
            /**
             * The original `http.IncomingMessage` object
             */
            raw: IncomingMessage;
        };
        res: {
            /**
             * Number of bytes sent back to the client
             */
            bytes: number;
            /**
             * The headers sent back to the client
             */
            headers: OutgoingHttpHeaders;
            /**
             * The HTTP status code returned to the client
             */
            status: number;
            /**
             * The original `http.ServerResponse` object
             */
            raw: ServerResponse;
        };
    }

    interface Request {
        /**
         * Returns a progress object if called while a HTTP request is in progress.
         * If called multiple times, the returned progress object will contain the delta of the previous
         * call to `.progress()`.
         */
        progress(): Progress;
    }

    interface Progress {
        /**
         * `false` if the request is still in progress
         */
        completed: boolean;
        /**
         * The total time the reuqest have been in progress
         */
        time: number;
        /**
         * The time since previous call to `.progress()`
         */
        timeDelta: number;
        req: {
            /**
             * Total bytes received
             */
            bytes: number;
            /**
             * Bytes received since previous call to `.progress()`
             */
            bytesDelta: number;
            /**
             * Bytes per second calculated since previous call to `.progress()`
             */
            speed: number;
            /**
             * If the request contains a Content-Size header
             */
            bytesLeft: number;
            /**
             * If the request contains a Content-Size header
             */
            timeLeft: number;
        };
        res: {
            /**
             * Total bytes send back to the client
             */
            bytes: number;
            /**
             * Bytes sent back to the client since previous call to `.progress()`
             */
            bytesDelta: number;
            /**
             * Bytes per second calculated since previous call to `.progress()`
             */
            speed: number;
        };
    }

    interface StatsEmitter extends EventEmitter {
        addListener(event: "complete", listener: StatsCallback): this;
        addListener(event: "request", listener: (req: Request) => void): this;
        on(event: "complete", listener: StatsCallback): this;
        on(event: "request", listener: (req: Request) => void): this;
        once(event: "complete", listener: StatsCallback): this;
        once(event: "request", listener: (req: Request) => void): this;
        removeListener(event: "complete", listener: StatsCallback): this;
        removeListener(event: "request", listener: (req: Request) => void): this;
        off(event: "complete", listener: StatsCallback): this;
        off(event: "request", listener: (req: Request) => void): this;
        removeAllListeners(event?: "complete" | "request"): this;
        listeners(event: "complete"): StatsCallback[];
        listeners(event: "request"): Array<(req: Request) => void>;
        rawListeners(event: "complete"): StatsCallback[];
        rawListeners(event: "request"): Array<(req: Request) => void>;
        emit(event: "complete", stats: Stats): boolean;
        emit(event: "request", req: Request): boolean;
        listenerCount(type: "complete" | "request"): number;
        prependListener(event: "complete", listener: StatsCallback): this;
        prependListener(event: "request", listener: (req: Request) => void): this;
        prependOnceListener(event: "complete", listener: StatsCallback): this;
        prependOnceListener(event: "request", listener: (req: Request) => void): this;
        eventNames(): Array<"complete" | "request">;
    }
}
