import * as express from "express";

declare namespace StatsdClient {
    interface Tags {
        [key: string]: string | number;
    }

    interface CommonOptions {
        /**
         * Prefix all stats with this value (default "").
         */
        prefix?: string | undefined;

        /**
         * Print what is being sent to stderr (default false).
         */
        debug?: boolean | undefined;

        /**
         * Object of string key/value pairs which will be appended on
         * to all StatsD payloads (excluding raw payloads)
         * (default {})
         */
        tags?: Tags | undefined;

        /**
         * User specifically wants to use tcp (default false)
         */
        tcp?: boolean | undefined;

        /**
         * Dual-use timer. Will flush metrics every interval. For UDP,
         * it auto-closes the socket after this long without activity
         * (default 1000 ms; 0 disables this). For TCP, it auto-closes
         * the socket after socketTimeoutsToClose number of timeouts
         * have elapsed without activity.
         */
        socketTimeout?: number | undefined;
    }

    interface TcpOptions extends CommonOptions {
        /**
         * Where to send the stats (default localhost).
         */
        host?: string | undefined;

        /**
         * Port to contact the statsd-daemon on (default 8125).
         */
        port?: number | undefined;

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
        host?: string | undefined;

        /**
         * Port to contact the statsd-daemon on (default 8125).
         */
        port?: number | undefined;
    }

    interface HttpOptions extends CommonOptions {
        /**
         * Where to send the stats (default localhost).
         */
        host?: string | undefined;

        /**
         * Additional headers to send (default {}).
         */
        headers?: { [index: string]: string } | undefined;

        /**
         * What HTTP method to use (default "PUT").
         */
        method?: string | undefined;
    }

    interface ExpressMiddlewareOptions {
        /**
         * Metric name to use for reporting if a matching route is not
         * found (default "unknown_express_route").
         */
        notFoundRouteName?: string | undefined;

        /**
         * Optional callback called after reporting metrics for an
         * express route.
         */
        onResponseEnd?:
            | ((client: StatsdClient, startTime: Date, req: express.Request, res: express.Response) => void)
            | undefined;

        /**
         * Enables inclusion of per-URL response code and timing
         * metrics (default false).
         */
        timeByUrl?: boolean | undefined;
    }

    interface WrappedCallbackOptions {
        /**
         * Object of string key/value pairs which will be appended on
         * to all StatsD payloads (excluding raw payloads)
         * (default {})
         */
        tags?: Tags | undefined;
    }
}

declare class StatsdClient {
    constructor(options: StatsdClient.TcpOptions | StatsdClient.UdpOptions | StatsdClient.HttpOptions);

    counter(metric: string, delta: number, tags?: StatsdClient.Tags): this;
    increment(metric: string, delta?: number, tags?: StatsdClient.Tags): this;
    decrement(metric: string, delta?: number, tags?: StatsdClient.Tags): this;

    gauge(name: string, value: number, tags?: StatsdClient.Tags): this;
    gaugeDelta(name: string, delta: number, tags?: StatsdClient.Tags): this;

    set(name: string, value: number, tags?: StatsdClient.Tags): this;

    timing(name: string, startOrDuration: Date | number, tags?: StatsdClient.Tags): this;

    histogram(name: string, value: number, tags?: StatsdClient.Tags): this;

    distribution(name: string, value: number, tags?: StatsdClient.Tags): this;

    raw(rawData: string): this;

    close(): this;

    getChildClient(name: string): StatsdClient;

    formatTags(tags?: StatsdClient.Tags): string;

    helpers: {
        getExpressMiddleware(prefix?: string, options?: StatsdClient.ExpressMiddlewareOptions): express.RequestHandler;
        wrapCallback(
            prefix: string,
            callback: (...args: any[]) => any,
            options?: StatsdClient.WrappedCallbackOptions,
        ): (...args: any[]) => any;
    };
}

export = StatsdClient;
