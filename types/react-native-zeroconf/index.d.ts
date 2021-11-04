// Type definitions for react-native-zeroconf 0.12
// Project: https://github.com/Apercu/react-native-zeroconf#readme
// Definitions by: Peter Matta <https://github.com/mattapet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';

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
        [key: string]: any;
    };
}

export default class Zeroconf extends EventEmitter {
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

    /**
     * Publish a service.
     *
     * @description This adds a service for the current device to the
     * discoverable services on the network.
     *
     * @param type Should be both type of the service, for example 'http'.
     * @param protocol Should be protocol of the service, for example 'tcp'.
     * @param domain Should be the domain the service is sitting on, dot
     * suffixed, for example `'local.'`. Defaults to `'local'`.
     * @param name should be unique to the device, often the device name.
     * @param port should be an integer between 0 and 65535.
     * @param txt contains key-value pairs of additional TXT record data.
     */
    publishService(
        type: string,
        protocol: string,
        domain?: string,
        name?: string,
        port?: number,
        txt?: { [key: string]: any },
    ): void;

    /**
     * Unpublish a service.
     *
     * @description This removes a service from those discoverable on the
     * network.
     *
     * @param name should be the name used when publishing the service.
     */
    unpublishService(name: string): void;

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
