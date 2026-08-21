/// <reference types="node"/>

declare var wol: wol.Wol;
export = wol;

declare namespace wol {
    export interface WakeOptions {
        /**
         * The ip address to which the packet is send  (default: 255.255.255.255)
         */
        address?: string | undefined;

        /**
         * Number of packets to send (default: 3)
         */
        num_packets?: number | undefined;

        /**
         * The interval between packets (default: 100ms)
         */
        interval?: number | undefined;

        /**
         * The port to send to (default: 9)
         */
        port?: number | undefined;
    }

    type ErrorCallback = (Error: any) => void;

    export interface Wol {
        /**
         * Send a sequence of Wake-on-LAN magic packets to the given MAC address.
         *
         * @param {string} macAddress the mac address of the target device
         */
        wake(macAddress: string): void;

        /**
         * Send a sequence of Wake-on-LAN magic packets to the given MAC address.
         *
         * @param {string} macAddress the mac address of the target device
         * @param {ErrorCallback} callback is called when all packets have been sent or an error occurs.
         */
        wake(macAddress: string, callback: ErrorCallback): void;

        /**
         * Send a sequence of Wake-on-LAN magic packets to the given MAC address.
         *
         * @param {string} macAddress the mac address of the target device
         * @param {WakeOptions} opts additional options to send the packet
         * @param {ErrorCallback} callback is called when all packets have been sent or an error occurs.
         */
        wake(macAddress: string, opts: WakeOptions, callback?: Function): void;

        /**
         * Creates a buffer with a magic packet for the given MAC address.
         *
         * @param {string} macAddress mac address of the target device
         * @return {Buffer} the magic packet
         */
        createMagicPacket(macAddress: string): Buffer;
    }
}
