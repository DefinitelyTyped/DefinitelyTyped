// Type definitions for udp-discovery 2.0
// Project: https://github.com/stdarg/udp-discovery
// Definitions by: Scott Page <https://github.com/scottpage>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';

/**
 * Discovery constructor options
 */
export interface DiscoveryConstructorOptions {
    /**
     * The port to listen upon for service announcements. Default: 44201.
     */
    port?: number;

    /**
     * The address to bind to. Default: listens to all interfaces.
     */
    bindAddr?: string;

    /**
     * Either 'udp4' or 'udp6'. Default: 'udp4'.
     */
    dgramType?: string;
}

/**
 * Reason for available or unavailable event to be fired.
 */
export type ReasonType = 'new' | 'availabilityChange' | 'timedOut';

/**
 * Discovery events
 */
export interface DiscoveryEvents {
    /**
     * This event can happen when:
     *  - The first announcement for a service is received.
     *  - The availability changes, if the available status changes from false to true.
     * @param name name of the service.
     * @param data user-defined object describing the service.
     * @param reason why this event was sent: 'new', 'availabilityChange', 'timedOut'.
     */
    available: (name: string, data: any, reason: ReasonType) => void;

    /**
     * This event can happen when:
     *  - The first announcement for a service is received and the service is unavailable..
     *  - The availability changes, if the available status changes from true to false.
     *  - When 2x the announce interval time for the service elapsed without an announcement being seen. The service is considered unavailable and removed from the list of services.
     * @param name name of the service.
     * @param data user-defined object describing the service.
     * @param reason why this event was sent: 'new', 'availabilityChange', 'timedOut'.
     */
    unavailable: (name: string, data: any, reason: ReasonType) => void;

    /**
     * Not documented at the time this type definition was created.
     * Although, it does capture events that appear to come from a listener's sendEvent.
     * @param eventName The name of the event.
     * @param data The payload for the event.
     */
    MessageBus?: (eventName: string, data: any) => void;
}

/**
 * This module provides discovery services using UDP multicast. udp-discovery implements the zero-configuration UDP multicast discovery and works only between nodes on the same subnet as typically,
 * broadcast packets don't route.
 */
export class Discovery extends EventEmitter {
    /**
     * Invokes the constructor to create an instance of Discovery to receive discovery events. The config options object is optional, but if included, the following options are available:
     * @param options constructor options
     */
    constructor(options?: DiscoveryConstructorOptions);

    /**
     * Starts announcing the service at the specified interval. The parameter, serviceObject, is an object describing the service that udp-discoveryy announces.
     * @param name The name of the service being announced. It must be unique, or it will collide with another.
     * @param userData The duration between announcements in milliseconds.
     * @param interval Any data that can be serialized into JSON.
     * @param available Optional parameter to set availability of the service. If not specified, the default is 'true', meaning available.
     */
    announce(name: string, userData: any, interval?: number, available?: boolean): void;

    /**
     * Halts announcements.
     * @param name The name of the service.
     * @returns Returns true if successful, false otherwise.
     */
    pause(name: string): boolean;

    /**
     * Resumes the announcements at the time interval.
     * @param name The name of the service.
     * @param interval optional interval between announcements in ms.
     * @returns Returns true if successful, false otherwise.
     */
    resume(name: string, interval?: number): boolean;

    /**
     * Returns the service object, which can be modified. For example, if you need to alter the userData, you can. You cannot, however, alter the name (it's a constant property).
     * @param name name of the service.
     * @returns Returns Object serviceObject from announce.
     */
    getData(name: string): any;

    /**
     * Updates the existing service.
     * @param name The name of the service being announced. It must be unique, or it will collide with another.
     * @param userData The duration between announcements in milliseconds.
     * @param interval Any data that can be serialized into JSON.
     * @param available Optional parameter to set availability of the service. If not specified, the default is 'true', meaning available.
     */
    update(name: string, userData: any, interval?: number, available?: boolean): void;

    /**
     * Not documented at the time this type definition was created.
     * Network traffic inspection shows that it sends an event as UDP multicast, and a listener receives it.
     * @param eventName The name of the event.
     * @param data The payload for the event.
     */
    sendEvent(eventName: string, data: any): void;
}
