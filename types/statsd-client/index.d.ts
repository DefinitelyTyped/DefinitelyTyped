// Type definitions for statsd-client v0.4.0
// Project: https://github.com/msiebuhr/node-statsd-client
// Definitions by: Peter Kooijmans <https://github.com/peterkooijmans>
//                 Christopher Eck <https://github.com/chrisleck>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as express from "express";

interface Tags {
    [key: string]: string | number;
}

interface CommonOptions {
    /**
     * Prefix all stats with this value (default "").
     */
    prefix?: string;

    /**
     * Print what is being sent to stderr (default false).
     */
    debug?: boolean;

    /**
     * Object of string key/value pairs which will be appended on 
     * to all StatsD payloads (excluding raw payloads)
     * (default {})
     */
    tags?: Tags;

    /**
     * User specifically wants to use tcp (default false)
     */
    tcp?: boolean;

    /**
     * Dual-use timer. Will flush metrics every interval. For UDP, 
     * it auto-closes the socket after this long without activity 
     * (default 1000 ms; 0 disables this). For TCP, it auto-closes 
     * the socket after socketTimeoutsToClose number of timeouts 
     * have elapsed without activity.
     */
    socketTimeout?: number;
}

interface TcpOptions extends CommonOptions {
    /**
     * Where to send the stats (default localhost).
     */
    host?: string;

    /**
     * Port to contact the statsd-daemon on (default 8125).
     */
    port?: number;

    /**
     * Number of timeouts in which the socket auto-closes if it 
     * has been inactive. (default 10; 1 to auto-close after a 
     * single timeout).
     */
    socketTimeoutsToClose: number;
}

interface UdpOptions extends CommonOptions {
    /**
     * Where to send the stats (default localhost).
     */
    host?: string;

    /**
     * Port to contact the statsd-daemon on (default 8125).
     */
    port?: number;
}

interface HttpOptions extends CommonOptions {
    /**
     * Where to send the stats (default localhost).
     */
    host?: string;

    /**
     * Additional headers to send (default {}).
     */
    headers?: { [index: string]: string };

    /**
     * What HTTP method to use (default "PUT").
     */
    method?: string;
}

interface ExpressMiddlewareOptions {
    /**
     * Metric name to use for reporting if a matching route is not
     * found (default "unknown_express_route").
     */
    notFoundRouteName?: string;

    /**
     * Optional callback called after reporting metrics for an
     * express route.
     */
    onResponseEnd?: (client: StatsdClient, startTime: Date, req: express.Request, res: express.Response) => void;

    /**
     * Enables inclusion of per-URL response code and timing
     * metrics (default false).
     */
    timeByUrl?: boolean;
}

declare class StatsdClient {
    constructor(options: TcpOptions | UdpOptions | HttpOptions);

    counter(metric: string, delta: number, tags?: Tags): this;
    increment(metric: string, delta?: number, tags?: Tags): this;
    decrement(metric: string, delta?: number, tags?: Tags): this;

    gauge(name: string, value: number, tags?: Tags): this;
    gaugeDelta(name: string, delta: number, tags?: Tags): this;

    set(name: string, value: number, tags?: Tags): this;

    timing(name: string, startOrDuration: Date | number, tags?: Tags): this;    

    histogram(name: string, value: number, tags?: Tags): this;

    raw(rawData: string): this;

    close(): this;

    getChildClient(name: string): StatsdClient;

    formatTags(tags?: Tags): string;

    helpers: {
        getExpressMiddleware(prefix?: string, options?: ExpressMiddlewareOptions): express.RequestHandler;
    };
}

declare namespace StatsdClient {}
export = StatsdClient;
