/*
 Vortex Web

 This software and documentation are Copyright 2010 to 2015 PrismTech
 Limited and its licensees. All rights reserved. See file:

 docs/LICENSE.html

 for full copyright notice and license terms.
 */

declare namespace DDS {
    /**
     * Base class for all policies
     */
    interface Policy {
    }

    /**
     * History policy
     */
    export enum HistoryKind {
        KeepAll = 0,
        KeepLast = 1,
    }

    /**
     * History policy
     */
    export class History implements Policy {
        /**
         * KeepAll - KEEP_ALL qos policy
         */
        static KeepAll: any;
        /**
         * KeepLast - KEEP_LAST qos policy
         */
        static KeepLast: any;
    }

    /**
     * Reliability Policy
     * @example var qos = Reliability.Reliable
     */
    export enum ReliabilityKind {
        Reliable = 0,
        BestEffort = 1,
    }

    /**
     * History policy
     */
    export class Reliability implements Policy {
        /**
         * Reliable - 'Reliable' reliability policy
         */
        static Reliable: any;
        /**
         * BestEffort - 'BestEffort' reliability policy
         */
        static BestEffort: any;
    }

    /**
     * Create new partition policy
     *
     * @param policies - partition names
     * @example var qos = Partition('p1', 'p2')
     */
    export function Partition(...policies: string[]): Policy;

    /**
     * Create new content filter policy
     *
     * @param expr - filter expression
     * @example var filter = ContentFilter("x>10 AND y<50")
     */
    export function ContentFilter(expr: string): Policy;

    /**
     * Create new time filter policy
     *
     * @param period - time duration (unit ?)
     * @example var filter = TimeFilter(100)
     */
    export function TimeFilter(period: number): Policy;

    /**
     * Durability Policy
     */
    export enum DurabilityKind {
        Volatile = 0,
        TransientLocal = 1,
        Transient = 2,
        Persistent = 3,
    }

    /**
     * Durability Qos Policy
     */
    export class Durability implements Policy {
        /**
         * Volatile - Volatile durability policy
         */
        static Volatile: any;
        /**
         * TransientLocal - TransientLocal durability policy
         */
        static TransientLocal: any;
        /**
         * Transient - Transient durability policy
         */
        static Transient: any;
        /**
         * Persistent - Persistent durability policy
         */
        static Persistent: any;
    }

    interface EntityQos {
        /**
         * Creates any of the DDS entities quality of service, including DataReaderQos and DataWriterQos.
         *
         * @param policies - list of policies for the Qos entity
         */
        new(...policies: Policy[]): EntityQos;

        /**
         * Adds the given policy to this instance.
         * @param policy - the policy to add
         * @return A new copy of this instance with the combined policies
         */
        add(policy: Policy): EntityQos;
    }

    /**
     * Topic quality of service object
     */
    export var TopicQos: EntityQos;
    /**
     * DataReader quality of service object
     */
    export var DataReaderQos: EntityQos;

    /**
     * DataWriter quality of service object
     */
    export var DataWriterQos: EntityQos;

    export class Topic {
        /**
         * Creates a `Topic` in the domain `did`, named `tname`, having `qos` Qos,
         * for the type `ttype` whose registered name is `tregtype`
         * @param {number} did - DDS domain ID
         * @param {string} tname - topic name
         * @param {TopicQos} qos - topic Qos
         * @param {string} ttype - topic type. If not specified, a generic type is used.
         * @param {string} tregtype - topic registered type name. If not specified, 'ttype' is used.
         */
        constructor(did: number, tname: string, qos: EntityQos, ttype?: string, tregtype?: string);

        /**
         * Called when topic gets registered in the runtime
         */
        onregistered(): void;

        /**
         * Called when topic gets unregistered in the runtime
         */
        onunregistered(): void;
    }

    export class DataReader {
        /**
         * Creates a `DataReader` for a given topic and a specific in a specific DDS runtime.
         *
         * A `DataReader` allows to read data for a given topic with a specific QoS. A `DataReader`
         * * goes through different states, it is intially disconnected and changes to the connected state
         * when the underlying transport connection is successfully established with the server. At this point
         * a `DataReader` can be explicitely closed or disconnected. A disconnection can happen as the result
         * of a network failure or server failure. Disconnection and reconnections are managed by the runtime.
         *
         * @param runtime - DDS Runtime
         * @param topic - DDS Topic
         * @param qos - DataReader quality of service
         */
        constructor(runtime: Runtime, topic: Topic, qos: EntityQos);

        resetStats(): void;

        /**
         * Attaches the  listener `l` to this data reader and returns
         * the id associated to the listener.
         * @param l - listener code
         * @returns listener handle
         */
        addListener(l: (msg: any) => void): number;

        /**
         * removes a listener from this data reader.
         * @param idx - listener id
         */
        removeListener(idx: number): void;

        /**
         * closes the DataReader
         */
        close(): void;
    }

    export class DataWriter {
        /**
         * Creates a `DataWriter` for a given topic and a specific in a specific DDS runtime
         *
         * defines a DDS data writer. This type
         * is used to write data for a specific topic with a given QoS.
         * A `DataWriter` goes through different states, it is intially disconnected and changes to the connected
         * state when the underlying transport connection is successfully established with the server.
         * At this point a `DataWriter` can be explicitely closed or disconnected. A disconnection can happen
         * as the result of a network failure or server failure. Disconnection and reconnections are managed by the
         * runtime.
         *
         * @param runtime - DDS Runtime
         * @param topic - DDS Topic
         * @param qos - DataWriter quality of service
         */
        constructor(runtime: Runtime, topic: Topic, qos: EntityQos);

        /**
         * Writes one or more samples.
         * @param ds - data sample
         */
        write(...ds: any[]): void;

        /**
         * Closes the DataWriter
         */
        close(): void;
    }

    export class DataCache {
        /**
         * Constructs a `DataCache` with a given `depth`. If the `cache` parameter
         * is present, then the current cache is initialized with this parameter.
         *
         * Provides a way of storing and flexibly accessing the
         * data received through a `DataReader`. A `DataCache` is organized as
         * a map of queues. The depth of the queues is specified at construction
         * time.
         *
         * @param depth - cache size
         * @param cache - cache data structure
         */
        constructor(depth: number, cache: any);

        /**
         * Register a listener to be notified whenever data which matches a predicate is written into the cache.
         * If no predicate is provided then the listeners is always notified upon data inserion.
         *
         * @param l - listener function
         * @param p - predicate
         */
        addListener(l: (data: any) => void, p?: (data: any) => boolean): void;

        /**
         * Write the element `data` with key `k` into the cache.
         *
         * @param k - data key
         * @param data - data value
         * @returns the written data value
         */
        write(k: any, data: any): any;

        /**
         * Same as forEach but applied, for each key, only to the first `n` samples of the cache
         *
         * @param f - the function to be applied
         * @param n - samples set size
         */
        forEachN(f: (data: any) => any, n: number): any[];

        /**
         * Execute the function `f` for each element of the cache.
         *
         * @memberof! dds.DataCache#
         * @param f - the function to be applied
         * @returns results of the function execution
         */
        forEach(f: (data: any) => any): any[];

        /**
         * Returns a cache that is the result of applying `f` to each element of the cache.
         *
         * @param f - the function to be applied
         * @returns A cache holding the results of the function execution
         */
        map(f: (data: any) => any): DataCache;

        /**
         * Returns the list of elements in the cache that satisfy the predicate `f`.
         *
         * @param f - the predicate to be applied to filter the cache values
         * @returns An array holding the filtered values
         */
        filter(f: (data: any) => boolean): any[];

        /**
         * Returns the list of elements in the cache that doesn't satisfy the predicate `f`.
         *
         * @returns An array holding the filtered values
         * @see DataCache#filter
         */
        filterNot(f: (data: any) => boolean): any[];

        /**
         * Returns the values included in the cache as an array.
         *
         * @return All the cache values
         */
        read(): any[];

        /**
         * Returns the last value of the cache in an array.
         *
         * @return the last value of the cache
         */
        readLast(): any;

        /**
         * Returns all the values included in the cache as an array and empties the cache.
         *
         * @return All the cache values
         */
        takeAll(): any[];

        /**
         * Returns the `K`ith value of the cache as Monad, ie: `coffez.Some` if it exists, `coffez.None` if not.
         *
         * @return the 'k'th value
         */
        take(): any;

        /**
         * Takes elements from the cache up to when the predicate `f` is satisfied
         *
         * @param f - the predicate
         * @return taken cache values
         */
        takeWithFilter(f: (data: any) => boolean): any[];

        /**
         * Return `coffez.Some(v)` if there is an element in the cache corresponding to the
         * key `k` otherwise it returns `coffez.None`.
         *
         * @param k - key
         */
        get(k: any): any;

        /**
         * Return `coffez.Some(v)` if there is an element in the cache corresponding to the
         * key `k` otherwise executes `f` and returns its result.
         *
         * @param k - key
         * @param f - the function to apply
         */
        getOrElse(k: any, f: (data: any) => any): any;

        /**
         * folds the element of the cache using `z` as the `zero` element and
         * `f` as the binary operator.
         *
         * @param z - initial value
         * @param {function} f - reduce function
         */
        fold(z: any, f: (data: any) => any): void;

        /**
         * clears the data cache
         */
        clear(): void;
    }

    interface Runtime {
        /**
         * Constructs a DDS Runtime object
         *
         * maintains the connection with the server, re-establish the connection
         * if dropped and mediates the `DataReader` and `DataWriter` communication.
         */
        new(): Runtime;

        /**
         * Connect the runtime to the server. If the runtime is already connected an exception is thrown
         *
         * @param srv - Vortex Web server WebSocket URL
         * @param authToken - Authorization token
         */
        connect(server: string, authToken?: string): void;

        /**
         * Disconnects, withouth closing, a `Runtime`. Notice that upon re-connection all existing
         * subscriptions and publications will be re-restablished.
         */
        disconnect(): void;

        /**
         * Registers the provided Topic.
         *
         * @param t - Topic to be registered
         */
        registerTopic(t: Topic): void;

        /**
         * Function called when runtime is connected.
         *
         * @param e
         */
        onconnect(e: any): void;

        /**
         * Function called when runtime is disconnected.
         *
         * @param e
         */
        ondisconnect(e: any): void;

        /**
         * Closes the DDS runtime and as a consequence all the `DataReaders` and `DataWriters` that belong to this runtime.
         */
        close(): void;

        /**
         * Checks whether the Runtime is connected.
         * @return `true` if connected, `false` if not
         */
        isConnected(): boolean;

        /**
         * Checks whether the Runtime is closed.
         * @return `true` if connected, `false` if not
         */
        isClosed(): boolean;
    }

    export var runtime: {
        Runtime: Runtime;
    };

    export var VERSION: string;
}

/**
 * Defines the core Vortex-Web-Client javascript library. It includes the JavaScript API for DDS. This API allows
 * web applications to share data among them as well as with native DDS applications.
 */
declare var dds: typeof DDS;
