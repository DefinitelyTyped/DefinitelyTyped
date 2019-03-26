// Type definitions for cote 0.19
// Project: https://github.com/dashersw/cote#readme
// Definitions by: makepost <https://github.com/makepost>
//                 Labat Robin <https://github.com/roblabat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter2 } from "eventemitter2";
import * as SocketIO from "socket.io";
import { Stream } from "stream";
import { Server } from "http";

export abstract class Component extends EventEmitter2 {
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
     * Closes socket and stops discovery.
     */
    close(): void;
}

export class Requester extends Component {
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
     * @param event Request.
     */
    send<T extends Event>(event: T): Promise<any>;

    /**
     * Queues a request until a Responder is available, and once so, delivers
     * the request. Requests are dispatched to Responders in a round-robin way.
     *
     * @param event Request.
     * @param callback Function to execute after getting a result.
     */
    send<T extends Event>(event: T, callback: (error: any, result: any) => void): void;
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

export class Responder extends Component {
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
     * Listens to internal `cote:added` and `cote:removed` events.
     *
     * @param listener Callback.
     */
    on(
        type: 'cote:added' | 'cote:removed',
        listener: (event: Status) => void
    ): this;

    /**
     * Responds to certain requests from a Requester.
     *
     * @param type Type. May be wildcarded or namespaced like in EventEmitter2.
     * @param listener Callback. Should return a result.
     */
    on<T extends Event>(
        type: string | string[],
        listener: (
            ((event: T, callback: (error: any, result: any) => void) => void) |
            ((event: T) => Promise<any>)
        )
    ): this;
}

/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
export interface ResponderAdvertisement extends Advertisement {
    /**
     * Request types that a Responder can listen to.
     */
    respondsTo?: string[];

    /**
     * Advertisement attribute that lets you target a subgroup of responders using the __subset property of a request.
     */
    subset?: string;
}

export class Publisher extends Component {
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
     * @param event Request.
     */
    publish<T extends Event>(
        type: string,
        event: T
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

export class Subscriber extends Component {
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
    on<T extends Event>(
        type: string | string[],
        listener: (event: T) => void
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

export class Sockend extends Component {
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

export class Monitor extends Component {
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
     * Port for Monitor to listen on. By default will start searching from 8000.
     */
    port?: number | string;
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
 * Takes average response times of each connected socket and balances requests
 * among them accordingly.
 */
export class TimeBalancedRequester extends Requester {
    /**
     * How long to wait for response before neglecting its calculation time,
     * in milliseconds.
     */
    CALCULATION_TIMEOUT: number;

    /**
     * How many requests to make before exploring a random server for response
     * time improvement.
     */
    MAX_REQUESTS: number;

    /**
     * How often to check whether a response arrived. Readonly because used in
     * constructor right after being set.
     */
    readonly SAMPLE_INTERVAL: number;
}

/**
 * Keeps track of open, pending requests for each known Responder. Each new
 * request goes to the Responder with the minimum open requests.
 */
export class PendingBalancedRequester extends Requester { }

/**
 * Event is nothing but object with `type`.
 */
export interface Event {
    type: string;
}

/**
 * Internal `cote:added` and `cote:removed` events.
 */
export interface Status extends Event {
    advertisement: StatusAdvertisement;
}

/**
 * Advertisement in internal `cote:added` and `cote:removed` events.
 */
export interface StatusAdvertisement extends
    RequesterAdvertisement,
    ResponderAdvertisement,
    PublisherAdvertisement,
    SubscriberAdvertisement { }

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
    /**
     * Multicast address if using multicast.
     */
    multicast?: string;

    /**
     * Broadcast address if using broadcast.
     */
    broadcast?: string;

    /**
     * Address to bind to.
     */
    address?: string;

    /**
     * How often to broadcast a hello packet in milliseconds.
     */
    helloInterval?: number;

    /**
     * How often to to check for missing nodes in milliseconds.
     */
    checkInterval?: number;

    /**
     * Consider a node dead if not seen in this many milliseconds.
     */
    nodeTimeout?: number;

    /**
     * Consider a master node dead if not seen in this many milliseconds.
     */
    masterTimeout?: number;

    /**
     * Skips key equality checks when logging.
     */
    monitor?: boolean;

    /**
     * If false, disables `helloLogsEnabled` and `statusLogsEnabled` no matter
     * what value they have, and also own hello log.
     */
    log?: boolean;

    /**
     * Notifies when another service goes online.
     */
    helloLogsEnabled?: boolean;

    /**
     * Notifies when another service goes online or offline. If false, disables
     * `helloLogsEnabled` as well.
     */
    statusLogsEnabled?: boolean;

    /**
     * Ignores messages from other services within the same process.
     */
    ignoreProcess?: boolean;

    /**
     * Prevents Monitor from drawing.
     */
    disableScreen?: boolean;

    /**
     * Milliseconds between emissions of own status for monitoring.
     */
    statusInterval?: number;
}
