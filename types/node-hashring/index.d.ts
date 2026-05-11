export = HashRing;

/**
 * A consistent hashing ring with replicas for more even distribution (virtual nodes) and binary
 * searching for best performance.
 *
 * This hashring uses the [MurmurHash algorithm](http://en.wikipedia.org/wiki/MurmurHash) which
 * creates a 32-bit integer as opposed to using something like a 128-bit MD5. Which means, in
 * comparison to an MD5 based hashring, this offers a lot more performance.
 */
declare class HashRing {
    static readonly maxHashValue: 0xffffffff;

    /**
     * This will create a hashring for two primary nodes,
     * by default each node will be comprised of 80 virtual nodes.
     *
     * @param nodes List of node names.
     * @param virtualNodes Number of replicas for more even distribution (virtual nodes).
     *
     * @example
     * import HashRing = require('node-hashring');
     * const hashRing = new HashRing([
     *   'server-address-1',
     *   'server-address-2',
     * ]);
     */
    constructor(
        nodes: readonly string[],
        /** @default 80 */
        virtualNodes?: number,
    );
    readonly nodes: readonly string[];
    readonly nodeMap: { readonly [key: string]: number };
    readonly virtualNodes: number;
    readonly nodeSize: number;
    readonly vnodeToNodeMap: { readonly [key: string]: string };
    readonly ring: readonly string[];
    readonly assigned: { readonly [key: string]: number | undefined };

    /**
     * Return a 32-bit unsigned integer.
     */
    getHashValue(str: string): number;

    /**
     * Perform a binary search to find the ring index
     * that contains the hashed key value.
     */
    search(key: string): number;

    /**
     * Add a node to the ring.
     */
    addNode(nodeId: string): void;

    /**
     * Remove a node from the ring.
     */
    removeNode(nodeId: string): void;

    /**
     * Will generate a hash of the key and search for
     * the closet match greater than or equal to the key
     * to find the node index in the ring. Then it will
     * use the ring node address to lookup the actual
     * node in the virtual nodes map
     */
    findNode(key: string): string | undefined;
}
