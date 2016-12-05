// Type definitions for statsd-client v0.1.0
// Project: https://github.com/msiebuhr/node-statsd-client
// Definitions by: Peter Kooijmans <https://github.com/peterkooijmans/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



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

declare class StatsdClient {
    constructor(options: TcpOptions | UdpOptions | HttpOptions);

    counter(metric: string, delta: number): void;
    increment(metric: string, delta?: number): void;
    decrement(metric: string, delta?: number): void;

    gauge(name: string, value: number): void;
    gaugeDelta(name: string, delta: number): void;

    set(name: string, value: number): void;

    timing(name: string, start: Date): void;
    timing(name: string, duration: number): void;

    close(): void;

    getChildClient(name: string): StatsdClient;
}

declare namespace StatsdClient {}
export = StatsdClient;
