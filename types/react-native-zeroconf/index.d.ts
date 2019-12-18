// Type definitions for react-native-zeroconf 0.9
// Project: https://github.com/Apercu/react-native-zeroconf#readme
// Definitions by: Peter Matta <https://github.com/mattapet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * @example
 * ```json
 *  {
 *    "host": "XeroxPrinter.local.",
 *    "addresses": [
 *      "192.168.1.23",
 *      "fe80::aebc:123:ffff:abcd"
 *    ],
 *    "name": "Xerox Printer",
 *    "fullName": "XeroxPrinter.local._http._tcp.",
 *    "port": 8080,
 *    "txt": {}
 *  }
 * ```
 */
export interface Service {
    name: string;
    fullName: string;
    addresses: string[];
    host: string;
    port: number;
    txt: {
        [key: string]: any
    };
}

export default class Zeroconf extends NodeJS.EventEmitter {
    /**
     * Start the zeroconf scan.
     *
     * @description This will initialize the scan from the `Zeroconf`
     * instance. Will stop another scan if any is running.
     *
     * @param type Default `http`
     * @param protocol Default `tcp`
     * @param domain Default `local`
     */
    scan(type?: string, protocol?: string, domain?: string): void;

    /**
     * Stop the scan.
     *
     * @description If any scan is running, stop it. Otherwise do nothing.
     */
    stop(): void;

    /**
     * Returns resolved services.
     *
     * @description Will return all names of services that have been
     * resolved.
     */
    getServices(): { [name: string]: Service };

    /**
     * Remove listeners.
     *
     * @description Allow you to clean the listeners, avoiding potential
     * memory leaks.
     *
     * @see https://github.com/balthazar/react-native-zeroconf/issues/33
     */
    removeDeviceListeners(): void;

    /**
     * Add listeners
     *
     * @description If you cleaned the listeners and need to get them back
     * on.
     */
    addDeviceListeners(): void;

    on(e: 'start' | 'stop' | 'update', listener: () => any): this;

    /**
     * @param name Name of the the service.
     */
    on(e: 'found' | 'remove', listener: (name: string) => any): this;

    /**
     * Triggered when a service is resolved.
     * @description Broadcast a service object once it is fully resolved.
     */
    on(e: 'resolved', listener: (service: Service) => any): this;

    /**
     * Triggered when an error occurs.
     */
    on(e: 'error', listener: (err: Error) => any): this;
}
