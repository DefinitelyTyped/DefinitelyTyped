// Type definitions for libp2p 0.29
// Project: https://libp2p.io
// Definitions by: gbaranski <https://github.com/gbaranski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */

import { Options } from './options';

// FIXME replace those types
// https://github.com/libp2p/js-peer-id/blob/master/src/index.d.ts
type PeerId = any;
// https://github.com/multiformats/js-multiaddr/blob/master/src/index.d.ts
type MultiAddr = any;
// https://github.com/libp2p/js-libp2p-interfaces/tree/master/src/connection
type Connection = any;
// https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal
type AbortSignal = any;
// https://github.com/multiformats/js-cid/blob/master/src/index.d.ts
type CID = any;

/**
 * @fires Libp2p#error Emitted when an error occurs
 * @fires Libp2p#peer:discovery Emitted when a peer is discovered
 */
declare class Libp2p {
    constructor(options: Options);
    /**
     * Like `new Libp2p(options)` except it will create a `PeerId`
     * instance if one is not provided in options.
     */
    static create(options: Options): Promise<Libp2p>;

    /**
     * Load keychain keys from the datastore, importing the private key as 'self', if needed.
     * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#loadkeychain
     * @example
    const libp2p = await Libp2p.create({
        // ...
        keychain: {
          pass: '0123456789pass1234567890'
        }
    })
    // load keychain
    await libp2p.loadKeychain()
     */
    loadKeychain(): Promise<void>;

    /**
     * Starts the libp2p node.
     * Promise resolves when the node is ready
     * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#start
     * @example
    const libp2p = await Libp2p.create(options)
    // start libp2p
    await libp2p.start()
     */
    start(): Promise<void>;

    /**
     * Stops the libp2p node.
     * Promise resolves when the node is fully stopped
     * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#stop
     * @example
    const libp2p = await Libp2p.create(options)
    // ...
    // stop libp2p
    await libp2p.stop()
     */
    stop(): Promise<void>;

    // TODO fix
    /**
     * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#addresses
     */
    get addresses(): any;

    /**
     * A Getter that returns a Map of the current Connections libp2p has to other peers.
     * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#connections 
     * @see https://github.com/libp2p/js-peer-id
     * @see https://github.com/libp2p/js-libp2p-interfaces/tree/master/src/connection
     * @example 
    for (const [peerId, connections] of libp2p.connections) {
        for (const connection of connections) {
            console.log(peerId, connection.remoteAddr.toString())
            // Logs the PeerId string and the observed remote multiaddr of each Connection
        }
    }
     */
    get connections(): Map<string, Connection[]>;

    /**
     * If a Multiaddr or its string is provided, it must include the peer id. Moreover, if a PeerId is given, the peer will need to have known multiaddrs for it in the PeerStore.
     * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#dial
     * @example
    // ...
    const conn = await libp2p.dial(remotePeerId)

    // create a new stream within the connection
    const { stream, protocol } = await conn.newStream(['/echo/1.1.0', '/echo/1.0.0'])

    // protocol negotiated: 'echo/1.0.0' means that the other party only supports the older version

    // ...
    await conn.close()
     */
    dial(peer: PeerId | MultiAddr | string, options?: { signal: AbortSignal }): Promise<Connection>;

    /**
     * Dials to another peer in the network and selects a protocol to communicate with that peer. The stream between both parties is returned, together with the negotiated protocol.
     *
     * If a Multiaddr or its string is provided, it must include the peer id. Moreover, if a PeerId is given, the peer will need to have known multiaddrs for it in the PeerStore.
     * 
     * Promise resolves with a duplex stream and the protocol used
     * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#dialprotocol
     * @example
    // ...
    import pipe from 'it-pipe';

    const { stream, protocol } = await libp2p.dialProtocol(remotePeerId, protocols)

    // Use this new stream like any other duplex stream
    pipe([1, 2, 3], stream, consume)
     */
    dialProtocol(
        peer: PeerId | MultiAddr | string,
        protocols: string[],
        options?: { signal: AbortSignal },
    ): // FIXME replace stream type
    Promise<{ stream: any; protocol: string }>;

    /**
     * Attempts to gracefully close an open connection to the given peer. If the connection is not closed in the grace period, it will be forcefully closed.
     * @example await libp2p.hangUp(remotePeerId)
     */
    hangUp(peer: PeerId | MultiAddr | string): Promise<void>;

    /**
     * Sets up multistream-select routing of protocols to their application handlers. 
     * 
     * Whenever a stream is opened on one of the provided protocols, the handler will be called. handle must be called in order to register a handler and support for a given protocol. This also informs other peers of the protocols you support.
     * 
     * In the event of a new handler for the same protocol being added, the first one is discarded.
     * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#handle
     * @see https://github.com/multiformats/multistream-select
     * @example 
    // ...
    const handler = ({ connection, stream, protocol }) => {
        // use stream or connection according to the needs
    }

    libp2p.handle('/echo/1.0.0', handler)
     */
    handle(protocols: string[], handler: (params: { connection: any; stream: any; protocol: string }) => any): void;
    // FIXME any params

    /**
     * Unregisters all handlers with the given protocols
     * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#unhandle
     * @example
    libp2p.unhandle(['/echo/1.0.0'])
     */
    unhandle(protocols: string[]): void;

    /**
     *
     * Pings a given peer and get the operation's latency.
     *
     * Returns promise with latency in ms
     * 
     * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#ping
     * @example
    const latency = await libp2p.ping(otherPeerId)
     */
    ping(peer: PeerId | MultiAddr | string): Promise<number>;

    /**
     * Gets the multiaddrs the libp2p node announces to the network. This computes the advertising multiaddrs of the peer by joining the multiaddrs that libp2p transports are listening on with the announce multiaddrs provided in the libp2p config. Configured no announce multiaddrs will be filtered out of the advertised addresses.
     * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#multiaddrs
     * @example
    const listenMa = libp2p.multiaddrs
    // [ <Multiaddr 047f00000106f9ba - /ip4/127.0.0.1/tcp/63930> ]
     */
    mutliaddrs: MultiAddr[];
    addressManager: {
        /**
         * Get the multiaddrs that were provided for listening on libp2p transports.
         * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#addressmanagergetlistenaddrs
         * @example
         * 
        // ...
        const listenMa = libp2p.addressManager.getListenAddrs()
        // [ <Multiaddr 047f00000106f9ba - /ip4/127.0.0.1/tcp/63930> ]
         */
        getListenAddrs(): MultiAddr[];

        /**
         * Get the multiaddrs that were provided to announce to the network.
         * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#addressmanagergetannounceaddrs
        @example
        const announceMa = libp2p.addressManager.getAnnounceAddrs()
        // [ <Multiaddr 047f00000106f9ba - /dns4/peer.io/...> ]
         */
        getAnnounceAddrs(): MultiAddr[];

        /**
         * Get the multiaddrs that were provided to not announce to the network.
         * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#addressmanagergetnoannounceaddrs
         * @example
        // ...
        const noAnnounceMa = libp2p.addressManager.getNoAnnounceAddrs()
        // [ <Multiaddr 047f00000106f9ba - /ip4/127.0.0.1/tcp/63930> ]
         */
        getNoAnnounceAddrs(): MultiAddr[];

        /**
         * Get the multiaddrs that libp2p transports are using to listen on.
         * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#addressmanagergetnoannounceaddrs
         * @example
        // ...
        const listenMa = libp2p.transportManager.getAddrs()
        // [ <Multiaddr 047f00000106f9ba - /ip4/127.0.0.1/tcp/63930> ]
         */
        getAddrs(): MultiAddr[];
    };

    contentRouting: {
        /**
         * Iterates over all content routers in series to find providers of the given key.
         * Once a content router succeeds, iteration will stop.
         *
         * @param {CID} key - The CID key of the content to find
         * @param {number} [options.timeout] - How long the query should run
         * @param {number} [options.maxNumProviders] - maximum number of providers to find
         * @returns {AsyncIterable<{ id: PeerId, multiaddrs: Multiaddr[] }>}
         * 
         * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#contentroutingfindproviders
         * @see https://github.com/multiformats/js-cid
         * @example
        // Iterate over the providers found for the given cid
        for await (const provider of libp2p.contentRouting.findProviders(cid)) {
            console.log(provider.id, provider.multiaddrs)
        }
         */
        findProviders(
            cid: CID,
            options?: { timeout: number; maxNumProviders: number },
        ): Iterable<{ id: PeerId; multiaddrs: MultiAddr[] }>;
        // TODO: fix the return value, not sure if that's good

        /**
         * Iterates over all content routers in parallel to notify it is
         * a provider of the given key.
         *
         * @param {CID} key - The CID key of the content to find
         * 
         * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#contentroutingprovide
         * @example
        // ...
        await libp2p.contentRouting.provide(cid)
         */
        provide(cid: CID): Promise<void>;

        /**
         * Writes a value to a key in the DHT.
         *
         * @param {Uint8Array} key
         * @param {Uint8Array} value
         * @param {number} [options.minPeers] - minimum number of peers required to successfully put (default: closestPeers.length)
         * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#contentroutingput
         * @example
        // ...
        const key = '/key'
        const value = uint8ArrayFromString('oh hello there')

        await libp2p.contentRouting.put(key, value)
         */
        put(key: string, value: Uint8Array, options?: { minPeers: number }): Promise<void>;

        /**
         * Queries the DHT for a value stored for a given key.
         * Times out after 1 minute by default.
         *
         * @param {number} [options.timeout] - maximum time(ms) the query should run 
         * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#contentroutingget
         * @example
        const key = '/key'
        const value = await libp2p.contentRouting.get(key)
         */
        get(key: string, options?: { timeout: number }): Promise<Uint8Array>;
        // TODO: Not sure about return value, docs and source code says completely different things

        /**
        * Queries the DHT for the n values stored for the given key (without sorting).
        *  
        * @param key - key to get from the dht
        * @param nvals - number of values aimed
        * @param {number} [options.timeout] - optional timeout (default: 60000)
        * @see https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#contentroutinggetmany
        * @example
        const key = '/key'
        const records = await libp2p.contentRouting.getMany(key, 2)
         */
        getMany(
            key: string,
            nvals: number,
            options?: { timeout: number },
        ): Promise<{ from: PeerId; val: Uint8Array }[]>;
    };
}

export * from './options';
