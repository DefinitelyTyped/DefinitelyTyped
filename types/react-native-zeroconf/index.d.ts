/// <reference types="node" />

import { EventEmitter } from "events";

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

export const ImplType: {
    readonly NSD: "NSD";
    readonly DNSSD: "DNSSD";
};

export type ImplType = (typeof ImplType)[keyof typeof ImplType];

export default class Zeroconf extends EventEmitter {
    /**
     * Start the zeroconf scan.
     *
     * @description This will initialize the scan from the `Zeroconf`
     * instance. Will stop another scan if any is running.
     *
     * @param {string | undefined} [type="http"]
     * @param {string | undefined} [protocol="tcp"]
     * @param {string | undefined} [domain="local."]
     * @param {ImplType | undefined} [implType="NSD"]
     */
    scan(
        /** @default "http" */
        type?: string,
        /** @default "tcp" */
        protocol?: string,
        /** @default "local." */
        domain?: string,
        /** @default "NSD" */
        implType?: ImplType,
    ): void;

    /**
     * Stop the scan.
     *
     * @description If any scan is running, stop it. Otherwise do nothing.
     * @param {ImplType | undefined} implType
     */
    stop(
        /** @default "NSD" */
        implType?: ImplType,
    ): void;

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
     * @param {string} type Should be both type of the service, for example 'http'.
     * @param {string} protocol Should be protocol of the service, for example 'tcp'.
     * @param {string | undefined} [domain="local."] Should be the domain the service is sitting on, dot suffixed, for example `'local.'`.
     * @param {string | undefined} name should be unique to the device, often the device name.
     * @param {number | undefined} port should be an integer between 0 and 65535.
     * @param {{ [key: string]: any } | undefined} [txt={}] contains key-value pairs of additional TXT record data.
     * @param {ImplType | undefined} implType
     */
    publishService(
        type: string,
        protocol: string,
        /** @default "local." */
        domain?: string,
        name?: string,
        port?: number,
        /** @default {} */
        txt?: { [key: string]: any },
        /** @default "NSD" */
        implType?: ImplType,
    ): void;

    /**
     * Unpublish a service.
     *
     * @description This removes a service from those discoverable on the
     * network.
     *
     * @param {string} name should be the name used when publishing the service.
     * @param {ImplType | undefined} implType Default `NSD`
     */
    unpublishService(
        name: string,
        /** @default "NSD" */
        implType?: ImplType,
    ): void;

    on(e: "start" | "stop" | "update", listener: () => any): this;

    /**
     * @param name Name of the the service.
     */
    on(e: "found" | "remove", listener: (name: string) => any): this;

    /**
     * Triggered when a service is resolved.
     * @description Broadcast a service object once it is fully resolved.
     */
    on(e: "resolved", listener: (service: Service) => any): this;

    on(e: "published", listener: (service: Service) => unknown): this;

    on(e: "unpublished", listener: (service: Service) => unknown): this;

    /**
     * Triggered when an error occurs.
     */
    on(e: "error", listener: (err: Error) => any): this;
}
