// Type definitions for react-native-zeroconf 0.9.0
// Project: https://github.com/balthazar/react-native-zeroconf
// Definitions by: Peter Matta <https://github.com/mattapet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'react-native-zeroconf' {
    /**
     * @example
     ```json
       {
         "host": "XeroxPrinter.local.",
         "addresses": [
           "192.168.1.23",
           "fe80::aebc:123:ffff:abcd"
         ],
         "name": "Xerox Printer",
         "fullName": "XeroxPrinter.local._http._tcp.",
         "port": 8080,
         "txt": {}
       }
      ```
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
        public scan(type?: string, protocol?: string, domain?: string): void;

        /**
         * Stop the scan.
         *
         * @description If any scan is running, stop it. Otherwise do nothing.
         */
        public stop(): void;

        /**
         * Returns resolved services.
         *
         * @description Will return all names of services that have been
         * resolved.
         */
        public getServices(): { [name: string]: Service };

        /**
         * Remove listeners.
         *
         * @description Allow you to clean the listeners, avoiding potential
         * memory leaks.
         *
         * @see https://github.com/balthazar/react-native-zeroconf/issues/33
         */
        public removeDeviceListeners(): void;

        /**
         * Add listeners
         *
         * @description If you cleaned the listeners and need to get them back
         * on.
         */
        public addDeviceListeners(): void;

        /**
         * Triggered on scan start.
         */
        public on(e: 'start', listener: () => any): this;

        /**
         * Triggered on scan stop
         */
        public on(e: 'stop', listener: () => any): this;

        /**
         * Triggered either when a service is found or removed.
         */
        public on(e: 'update', listener: () => any): this;

        /**
         * Broadcast a service name as soon as it is found.
         */
        public on(e: 'found', listener: (name: string) => any): this;

        /**
         * Triggered when a service is resolved.
         * @description Broadcast a service object once it is fully resolved.
         */
        public on(e: 'resolved', listener: (service: Service) => any): this;

        /**
         * Triggered when a service is removed.
         * @description Broadcast a service name removed from the network.
         */
        public on(e: 'remove', listener: (name: string) => any): this;

        /**
         * Triggered when an error occurs.
         */
        public on(e: 'error', listener: (err: Error) => any): this;
    }
}
