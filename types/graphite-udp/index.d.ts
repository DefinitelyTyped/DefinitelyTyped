// Type definitions for graphite-udp 1.2
// Project: https://github.com/fermads/graphite-udp
// Definitions by: Eric Byers <https://github.com/EricByers/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ClientOptions {
	/**
	 * graphite server host or ip
	 * Defaults to 127.0.0.1
	 */
	host?: string;

	/**
	 * graphite server udp port
	 * Defaults to 2003
	 */
	port?: number;

	/**
	 * udp type (udp4 or udp6)
	 * Defaults to udp4
	 */
	type?: 'udp4' | 'udp6';

	/**
	 * split into smaller UDP packets
	 * Defaults to 4096
	 */
	maxPacketSize?: number;

	/**
	 * Prefix for each metric name
	 * Defaults to ''
	 */
	prefix?: string;

	/**
	 * Suffix for each metrtic name
	 * Defaults to ''
	 */
	suffix?: string;

	/**
	 * Interval to group metrics by in milliseconds
	 * Defaults to 5000 (5s)
	 */
	interval?: number;

	/**
	 * log messages to console
	 * Defaults to false
	 */
	verbose?: boolean;

	/**
	 * called when metrics are sent
	 * Defaults to null
	 *
	 * @param {error} Error
	 * @param {metrics}
	 * @return void
	 */
	callback?(error: Error, metrics: any): void;
}

export class Client {
	constructor(clientOptions?: ClientOptions);

	/**
	 * During the interval time option, if 2 or more metrics with the same name are sent, metrics will be added (summed)
	 *
	 * @param {name}
	 * @param {value} number
	 * @return void
	 */
	add(name: string, value: number): void;

	/**
	 * During the interval time option, if 2 or more metrics with the same name are sent, the last one will be used
	 *
	 * @param {name} metric name (my.test.metric)
	 * @param {value} number
	 * @return void
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
