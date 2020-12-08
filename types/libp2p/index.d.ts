// Type definitions for libp2p 0.29
// Project: https://libp2p.io
// Definitions by: gbaranski <https://github.com/gbaranski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */

import { Options } from './options';

/**
 * @fires Libp2p#error Emitted when an error occurs
 * @fires Libp2p#peer:discovery Emitted when a peer is discovered
 */
declare class Libp2p {
    constructor(options: Options);
    /**
     * Like `new Libp2p(options)` except it will create a `PeerId`
     * instance if one is not provided in options.
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
     *
     * @param {object} options - Libp2p configuration options
     * @returns {Promise<Libp2p>}
     */
    static create(options: Options): Promise<Libp2p>;
}

export * from './options';
