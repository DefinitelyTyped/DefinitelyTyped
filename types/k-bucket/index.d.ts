// Type definitions for k-bucket 5.0
// Project: https://github.com/tristanls/k-bucket#readme
// Definitions by: tomonari-t <https://github.com/tomonari-t>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { EventEmitter } from 'events';

declare class KBucket<T extends Contact = Contact> extends EventEmitter {
    /**
     * Default arbiter function for contacts with the same id. Uses
     * contact.vectorClock to select which contact to update the k-bucket with.
     * Contact with larger vectorClock field will be selected. If vectorClock is
     * the same, candidate will be selected.
     *
     * @param incumbent Contact currently stored in the k-bucket.
     * @param candidate Contact being added to the k-bucket.
     * @return Contact to updated the k-bucket with.
     */
    static arbiter: (incumbent: Contact, candidate: Contact) => Contact;

    /**
     * Default distance function. Finds the XOR
     * distance between firstId and secondId.
     *
     * @param firstId  Uint8Array containing first id.
     * @param secondId Uint8Array containing second id.
     * @return Integer The XOR distance between firstId and secondId.
     */
    static distance: Distance;

    /**
     * `options`:
     *   `distance`: _Function_
     *     `function (firstId, secondId) { return distance }` An optional
     *     `distance` function that gets two `id` Uint8Arrays
     *     and return distance (as number) between them.
     *   `arbiter`: _Function_ _(Default: vectorClock arbiter)_
     *     `function (incumbent, candidate) { return contact; }` An optional
     *     `arbiter` function that givent two `contact` objects with the same `id`
     *     returns the desired object to be used for updating the k-bucket. For
     *     more details, see [arbiter function](#arbiter-function).
     *   `localNodeId`: _Uint8Array_ An optional Uint8Array representing the local node id.
     *     If not provided, a local node id will be created via `randomBytes(20)`.
     *     `metadata`: _Object_ _(Default: {})_ Optional satellite data to include
     *     with the k-bucket. `metadata` property is guaranteed not be altered by,
     *     it is provided as an explicit container for users of k-bucket to store
     *     implementation-specific data.
     *   `numberOfNodesPerKBucket`: _Integer_ _(Default: 20)_ The number of nodes
     *     that a k-bucket can contain before being full or split.
     *     `numberOfNodesToPing`: _Integer_ _(Default: 3)_ The number of nodes to
     *     ping when a bucket that should not be split becomes full. KBucket will
     *     emit a `ping` event that contains `numberOfNodesToPing` nodes that have
     *     not been contacted the longest.
     *
     * @param options optional
     */
    constructor(options?: {
        localNodeId?: Uint8Array;
        numberOfNodesPerKBucket?: number;
        numberOfNodesToPing?: number;
        distance?: Distance;
        arbiter?: Arbiter<T>;
        metadata?: any;
    });
    arbiter: Arbiter<T>;
    distance: Distance;
    localNodeId: Uint8Array;
    numberOfNodesPerKBucket: number;
    numberOfNodesToPing: number;
    root: Node<T>;
    metadata: any;

    /**
     * Adds a contact to the k-bucket.
     *
     * @param contact the contact object to add
     */
    add(contact: T): KBucket<T>;

    /**
     * Get the n closest contacts to the provided node id. "Closest" here means:
     * closest according to the XOR metric of the contact node id.
     *
     * @param id Contact node id
     * @param n Integer (Default: Infinity) The maximum number of closest contacts to return
     * @return Array Maximum of n closest contacts to the node id
     */
    closest(id: Uint8Array, n?: number): T[];

    /**
     * Counts the total number of contacts in the tree.
     *
     * @return The number of contacts held in the tree
     */
    count(): number;

    /**
     * Get a contact by its exact ID.
     * If this is a leaf, loop through the bucket contents and return the correct
     * contact if we have it or null if not. If this is an inner node, determine
     * which branch of the tree to traverse and repeat.
     *
     * @param id The ID of the contact to fetch.
     * @return The contact if available, otherwise null
     */
    get(id: Uint8Array): T | null;

    /**
     * Removes contact with the provided id.
     *
     * @param id The ID of the contact to remove.
     * @return The k-bucket itself.
     */
    remove(id: Uint8Array): KBucket<T>;

    /**
     * Returns all the contacts contained in the tree as an array.
     * If this is a leaf, return a copy of the bucket. `slice` is used so that we
     * don't accidentally leak an internal reference out that might be
     * accidentally misused. If this is not a leaf, return the union of the low
     * and high branches (themselves also as arrays).
     *
     * @return All of the contacts in the tree, as an array
     */
    toArray(): T[];

    on(type: 'added' | 'removed', listener: (peer: T) => void): this;
    on(type: 'ping', listener: (peers: T[], peer: T) => void): this;
    on(type: 'updated', listener: (incumbent: T, selection: T) => void): this;
}

interface Contact {
    id: Uint8Array;
    vectorClock: number;
}

interface Node<T extends Contact> {
    contacts: T[];
    dontSplit: boolean;
    left: T;
    right: T;
}

interface Distance {
    (firstId: Uint8Array, secondId: Uint8Array): number;
}

interface Arbiter<T extends Contact = Contact> {
    (incumbent: T, candidate: T): T;
}

export = KBucket;
