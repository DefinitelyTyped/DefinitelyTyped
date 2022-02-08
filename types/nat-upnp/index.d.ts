// Type definitions for nat-upnp 1.1
// Project: https://github.com/indutny/node-nat-upnp
// Definitions by: SimplyLinn <https://github.com/SimplyLinn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
import { EventEmitter } from 'events';

/**
 * Standard options that many options use.
 */
export interface StandardOpts {
    public?:
        | number
        | null
        | {
              port?: number | undefined;
              host?: string | undefined;
          }
        | undefined;
    private?:
        | number
        | null
        | {
              port?: number | undefined;
              host?: string | undefined;
          }
        | undefined;
    protocol?: string | undefined;
}

/**
 * Raw SSDP/UPNP repsonse
 * Entire SSDP/UPNP schema is beyond the scope of these typings.
 * Please look up the protol documentation if you wanna do
 * lower level communication.
 */
export type RawResponse = Partial<
    Record<
        string,
        {
            '@': { 'xmlns:u': string };
            [key: string]: unknown;
        }
    >
>;

/**
 * Callback with a generic as result type
 */
export type CB<T> = (err: Error | null, res?: T) => void;

export interface RawService {
    serviceType: string;
    serviceId: string;
    controlURL?: string | undefined;
    eventSubURL?: string | undefined;
    SCPDURL?: string | undefined;
}

export interface RawDevice {
    deviceType: string;
    presentationURL: string;
    friendlyName: string;
    manufacturer: string;
    manufacturerURL: string;
    modelDescription: string;
    modelName: string;
    modelNumber: string;
    modelURL: string;
    serialNumber: string;
    UDN: string;
    UPC: string;
    serviceList?: { service: RawService | RawService[] } | undefined;
    deviceList?: { device: RawDevice | RawDevice[] } | undefined;
}

export interface Device {
    /**
     * Get the available services on the network device
     * @param types List of service types to look for
     * @param callback
     */
    getService(
        types: string[],
        callback: CB<{
            service: string;
            SCPDURL: string;
            controlURL: string;
        }>,
    ): void;
    /**
     * Parse out available services
     * and devices from a root device
     * @param info
     * @returns the available devices and services in array form
     */
    parseDescription(info: { device?: RawDevice | undefined }): {
        services: RawService[];
        devices: RawDevice[];
    };
    /**
     * Perform a SSDP/UPNP request
     * @param action the action to perform
     * @param args key-value pair arguments of said action
     * @param callback Callback to be run when completed, or on error
     */
    run(action: string, args: Array<[string, string | number]>, callback: CB<RawResponse>): void;
}

// Note for the SSDP class/interface
// The implementation leads me to believe that
// createSockets()
// createSocket(interface)
// parseResponse(response, addr)
// are all private methods.
// and have thusly not been typed in the interface

export interface Ssdp extends EventEmitter {
    /**
     * Search for a SSDP compatible server on the network
     * @param device Search Type (ST) header, specifying which device to search for
     * @param promise An existing EventEmitter to emit event on
     * @returns The event emitter provided in Promise, or a newly instantiated one.
     */
    search(device: string, promise?: EventEmitter): EventEmitter;
    /**
     * Close all sockets
     */
    close(): void;
}

//
// Types for client.
//
export interface NewPortMappingOpts extends StandardOpts {
    description?: string | undefined;
    ttl?: number | undefined;
}
export type DeletePortMappingOpts = StandardOpts;
export interface GetMappingOpts {
    local?: boolean | undefined;
    description?: RegExp | string | undefined;
}
export interface Mapping {
    public: { host: string; port: number };
    private: { host: string; port: number };
    protocol: string;
    enabled: boolean;
    description: string;
    ttl: number;
    local: boolean;
}

/**
 * Main client interface.
 */
export interface Client {
    /**
     * Create a new port mapping
     * @param options Options for the new port mapping
     * @param [callback] Callback to be run when completed, or on error
     */
    portMapping(options: NewPortMappingOpts, callback?: CB<RawResponse>): void;
    /**
     * Remove a port mapping
     * @param options Specify which port mapping to remove
     * @param [callback] Callback to be run when completed, or on error
     */
    portUnmapping(options: DeletePortMappingOpts, callback?: CB<RawResponse>): void;
    /**
     * Get a list of existing mappings
     * @param callback Callback to be run when completed, or on error
     */
    getMappings(callback: CB<Mapping[]>): void;
    /**
     * Get a list of existing mappings
     * @param options Filter mappings based on these options
     * @param callback Callback to be run when completed, or on error
     */
    getMappings(options: GetMappingOpts, callback: CB<Mapping[]>): void;
    /**
     * Fetch the external IP from the gateway
     * @param callback Callback to be run when completed, or on error
     */
    externalIp(callback: CB<string>): void;
    /**
     * Get the gateway device for communication
     * @param callback
     */
    findGateway(callback: CB<Device>): void;
    /**
     * Close the underlaying sockets and resources
     */
    close(): void;
}

/**
 * Create a NAT-UPNP client
 */
export function createClient(): Client;

/**
 * The other creator functions are exported as
 * an object with the create function as a property.
 */
export const device: {
    /**
     * Create a gateway device object with the specified url
     * @param url
     */
    create(url: string): Device;
};
export const ssdp: {
    /**
     * Create a Simple Service Discovery Protocol client
     */
    create(): Ssdp;
};

/**
 * Exported utility function.
 */
export const utils: {
    getNamespace(
        data: {
            '@'?: Record<string, string> | undefined;
        },
        uri: string,
    ): string;
};
