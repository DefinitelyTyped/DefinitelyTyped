// Type definitions for hashring 3.2
// Project: https://github.com/3rd-Eden/node-hashring
// Definitions by: superzheng <https://github.com/medns>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

declare namespace HashRing {
  interface HashRingOptions {
    /**
     * The amount of virtual nodes per server,
     * defaults to 40 as this generates 160 points per server
     * as used by ketama hashing.
     */
    "vnode count": number;

    /**
     * The default port number which will removed from the server address
     * to provide ketama compatibility.
     */
    "default port": number;

    /**
     * Allows you to force a compatibility mode of the HashRing.
     * It default to ketama hash rings but if you are coming from
     * a python world you might want compatibility with the hash_ring module.
     *
     * There's a small diff between
     * `hash_ring` and `ketama` and that's the amount of replica's of a server.
     * `Ketama` uses 4 and `hash_ring` uses 3.
     *
     * Set this to `hash_ring` if you want to use 3.
     */
    "compatibility": "hash_ring" | "ketama";

    /**
     * The amount of replicas per server.
     * Defaults to 4.
     */
    "replicas": number;

    /**
     * We use a simple LRU cache
     * inside the module to speed up frequent key lookups,
     * you can customize the amount of keys that need to be cached.
     *
     * It defaults to 5000.
     */
    "max cache size": number;
  }
  interface ServerConfig {
    vnodes: number;
    weight: number;
  }
  type Servers = string |
    ReadonlyArray<string> |
    Record<string, Partial<ServerConfig>>;
}

declare class HashRing {
  constructor(
    servers: HashRing.Servers,
    algorithm?: string | ((key: string) => string | Buffer),
    options?: Partial<HashRing.HashRingOptions>,
  );

  /**
   * Generates the continuum of server a.k.a as the Hash Ring
   * based on their weights and virtual nodes assigned.
   */
  continuum(): this;

  /**
   * Find the correct node for which the key is closest to the point
   * after what the given key hashes to.
   * @param key Random key that needs to be searched in the hash ring
   * @returns The matching server address
   */
  get(key: string): string;

  /**
   * Returns a range of servers. Could be useful for replication.
   * @param key Random key that needs to be searched in the hash ring
   * @param size Amount items to be returned (maximum).
   *        Defaults to the amount of servers that are in the hashring.
   * @param unique Don't return duplicate servers. Defaults to true.
   */
  range(key: string, size?: number, unique?: boolean): string[];

  /**
   * Hotswap identical servers with each other.
   * This doesn't require the cache to be completely nuked and
   * the hash ring distribution to be re-calculated.
   * @param from The server that needs to be replaced
   * @param to The server that replaces the server
   */
  swap(from: string, to: string): this;

  /**
   * Add a new server to ring without having to re-initialize the hashring.
   * It accepts the same arguments as you can use in the constructor.
   * @param servers Servers that need to be added to the ring.
   */
  add(servers: HashRing.Servers): this;

  /**
   * Remove a server from the hash ring.
   * @param server Server that need to be removed from the ring.
   */
  remove(server: HashRing.Servers): this;

  /**
   * Checks if a given server exists in the hash ring.
   * @param server Server for whose existence we're checking.
   * @returns Indication if we have that server.
   */
  has(server: string): boolean;

  /**
   * Reset the HashRing and clean up it's references.
   */
  reset(): this;

  /**
   * Resets the HashRing and closes the ring.
   */
  end(): this;

  /**
   * Returns the points per server.
   * @param servers server Optional server to filter down.
   * @returns server -> Array(points).
   */
  points(servers: HashRing.Servers): Array<Record<string, number>>;
}

export = HashRing;
