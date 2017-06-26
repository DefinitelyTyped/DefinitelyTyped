// Type definitions for cote 0.14
// Project: https://github.com/dashersw/cote#readme
// Definitions by: makepost <https://github.com/makepost>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter2 } from "./node_modules/eventemitter2";
import * as SocketIO from "socket.io";
import { Stream } from "stream";
import { Server } from "http";

export class Requester extends EventEmitter2 {
    constructor(
        /**
         * Configuration which controls the data being advertised for auto-discovery.
         */
        advertisement: RequesterAdvertisement,

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
    send<T extends Action>(action: T): Promise<any>;
}

/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
export interface RequesterAdvertisement extends Advertisement {
    /**
     * Request types that a Requester can send.
     */
    requests?: string[];
}

export class Responder extends EventEmitter2 {
    constructor(
        /**
         * Configuration which controls the data being advertised for auto-discovery.
         */
        advertisement: ResponderAdvertisement,

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
    on<T extends Action>(
        type: string | string[],
        listener: (action: T) => Promise<any>
    ): this;
}

/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
export interface ResponderAdvertisement extends Advertisement {
    /**
     * Response types that a Responder can listen to.
     */
    respondsTo?: string[];
}

export class Publisher extends EventEmitter2 {
    constructor(
        /**
         * Configuration which controls the data being advertised for auto-discovery.
         */
        advertisement: PublisherAdvertisement,

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
    publish<T extends Action>(
        type: string,
        action: T
    ): void;
}

/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
export interface PublisherAdvertisement extends Advertisement {
    /**
     * Event types that a Publisher can publish.
     */
    broadcasts?: string[];
}

export class Subscriber extends EventEmitter2 {
    constructor(
        /**
         * Configuration which controls the data being advertised for auto-discovery.
         */
        advertisement: SubscriberAdvertisement,

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
    on<T extends Action>(
        type: string | string[],
        listener: (action: T) => void
    ): this;
}

/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
export interface SubscriberAdvertisement extends Advertisement {
    /**
     * Event types that a Subscriber can listen to.
     */
    subscribesTo?: string[];
}

export class Sockend extends EventEmitter2 {
    /**
     * Exposes APIs directly to front-end. Make sure to use namespaces.
     */
    constructor(
        io: SocketIO.Server,

        /**
         * Configuration which controls the data being advertised for auto-discovery.
         */
        advertisement: SockendAdvertisement,

        /**
         * Controls the network-layer configuration and environments for components.
         */
        discoveryOptions?: DiscoveryOptions
    );
}

/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
export interface SockendAdvertisement extends ResponderAdvertisement, PublisherAdvertisement { }

export class Monitor extends EventEmitter2 {
    constructor(
        /**
         * Configuration which controls the data being advertised for auto-discovery.
         */
        advertisement: MonitorAdvertisement,

        /**
         * Controls the network-layer configuration and environments for components.
         */
        discoveryOptions?: DiscoveryOptions,

        stream?: Stream
    )
}

/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
export interface MonitorAdvertisement extends Advertisement {
    /**
     * Port for Monitor to listen on.
     */
    port: number | string;
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
 * Action is nothing but object with `type`.
 */
export interface Action {
    type: string;
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
}

/**
 * Controls the network-layer configuration and environments for components.
 */
export interface DiscoveryOptions {
    multicast?: string;
    broadcast?: string;
}
