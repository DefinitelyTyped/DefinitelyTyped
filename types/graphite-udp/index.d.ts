export interface ClientOptions {
    /**
     * graphite server host or ip
     * Defaults to 127.0.0.1
     */
    host?: string | undefined;

    /**
     * graphite server udp port
     * Defaults to 2003
     */
    port?: number | undefined;

    /**
     * udp type (udp4 or udp6)
     * Defaults to udp4
     */
    type?: "udp4" | "udp6" | undefined;

    /**
     * split into smaller UDP packets
     * Defaults to 4096
     */
    maxPacketSize?: number | undefined;

    /**
     * Prefix for each metric name
     * Defaults to ''
     */
    prefix?: string | undefined;

    /**
     * Suffix for each metrtic name
     * Defaults to ''
     */
    suffix?: string | undefined;

    /**
     * Interval to group metrics by in milliseconds
     * Defaults to 5000 (5s)
     */
    interval?: number | undefined;

    /**
     * log messages to console
     * Defaults to false
     */
    verbose?: boolean | undefined;

    /**
     * called when metrics are sent
     * Defaults to null
     */
    callback?(error: Error, metrics: any): void;
}

export class Client {
    constructor(clientOptions?: ClientOptions);

    /**
     * During the interval time option, if 2 or more metrics with the same name are sent, metrics will be added (summed)
     */
    add(name: string, value: number): void;

    /**
     * During the interval time option, if 2 or more metrics with the same name are sent, the last one will be used
     */
    put(name: string, value: number): void;

    /**
     * Close the underlying UDP client socket
     *
     * @return void
     */
    close(): void;
}

export function createClient(clientOptions?: ClientOptions): Client;
