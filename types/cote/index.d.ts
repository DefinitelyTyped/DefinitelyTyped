// Type definitions for cote 0.14
// Project: https://github.com/dashersw/cote#readme
// Definitions by: makepost <https://github.com/makepost>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as SocketIO from "socket.io";
import { Stream } from "stream";
import { Server } from "http";

export class Requester {
    constructor(
        /**
         * Configuration which controls the data being advertised for auto-discovery.
         */
        advertisement: Advertisement,

        /**
         * Controls the network-layer configuration and environments for components.
         */
        discoveryOptions?: DiscoveryOptions
    );

    /**
     * Queues a request until a Responder is available, and once so, delivers
     * the request. Requests are dispatched to Responders in a round-robin way.
     *
     * @param action Request.
     */
    send<T>(action: Action<T>): Promise<any>;
}

export class Responder {
    constructor(
        /**
         * Configuration which controls the data being advertised for auto-discovery.
         */
        advertisement: Advertisement,

        /**
         * Controls the network-layer configuration and environments for components.
         */
        discoveryOptions?: DiscoveryOptions
    );

    /**
     * Responds to certain requests from a Requester.
     *
     * @param type Type. May be wildcarded or namespaced like in EventEmitter2.
     * @param listener Callback. Should return a result.
     */
    on<T>(
        type: string,
        listener: (action: Action<T>) => Promise<any>
    ): void;
}

export class Publisher {
    constructor(
        /**
         * Configuration which controls the data being advertised for auto-discovery.
         */
        advertisement: Advertisement,

        /**
         * Controls the network-layer configuration and environments for components.
         */
        discoveryOptions?: DiscoveryOptions
    );

    /**
     * Publishes an event to all Subscribers. Does not wait for results. If
     * there are no Subscribers listening, the event is lost.
     *
     * @param type EventEmitter-compatible type.
     * @param action Request.
     */
    publish<T>(
        type: string,
        action: Action<T>
    ): void;
}

export class Subscriber {
    constructor(
        /**
         * Configuration which controls the data being advertised for auto-discovery.
         */
        advertisement: Advertisement,

        /**
         * Controls the network-layer configuration and environments for components.
         */
        discoveryOptions?: DiscoveryOptions
    );

    /**
     * Subscribes to events emitted from a Publisher.
     *
     * @param type Type. May be wildcarded or namespaced like in EventEmitter2.
     * @param listener Callback. Returns nothing.
     */
    on<T>(
        type: string,
        listener: (action: Action<T>) => void
    ): void;
}

export class Sockend {
    /**
     * Exposes APIs directly to front-end. Make sure to use namespaces.
     */
    constructor(
        io: SocketIO.Server,

        /**
         * Configuration which controls the data being advertised for auto-discovery.
         */
        advertisement: Advertisement,

        /**
         * Controls the network-layer configuration and environments for components.
         */
        discoveryOptions?: DiscoveryOptions
    );
}

export class Monitor {
    constructor(
        /**
         * Configuration which controls the data being advertised for auto-discovery.
         */
        advertisement: Advertisement,

        /**
         * Controls the network-layer configuration and environments for components.
         */
        discoveryOptions?: DiscoveryOptions,

        stream?: Stream
    )
}

/**
 * Displays the cote ecosystem running in your environment in a nice graph.
 *
 * @param port Open in browser to see network graph in action.
 */
export function MonitoringTool(port: number): {
    monitor: Monitor,
    server: Server
};

/**
 * Flux standard action.
 * @see https://github.com/acdlite/flux-standard-action
 */
export interface Action<T> {
    type: string;
    payload: T;
    error?: boolean;
    meta?: {};
}

/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
export interface Advertisement {
    name: string;

    /**
     * Maps to a socket.io namespace. Shields a service from the rest of the
     * system. Components with different namespaces won't recognize each other
     * and try to communicate.
     */
    namespace?: string;

    /**
     * Tunes the performance by grouping certain components. Two components
     * with exact same `environment`s with different `key`s wouldn't be able
     * to communicate. Think of it as `${environment}_${key}`.
     */
    key?: string;

    /**
     * Request types that a Requester can send.
     */
    requests?: string[];

    /**
     * Response types that a Responder can listen to.
     */
    respondsTo?: string[];

    /**
     * Event types that a Publisher can publish.
     */
    broadcasts?: string[];

    /**
     * Event types that a Subscriber can listen to.
     */
    subscribesTo?: string[];
}

/**
 * Controls the network-layer configuration and environments for components.
 */
export interface DiscoveryOptions {
    multicast?: string;
    broadcast?: string;
}
