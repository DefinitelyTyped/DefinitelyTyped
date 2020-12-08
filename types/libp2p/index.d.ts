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
     *
     * @param {object} options - Libp2p configuration options
     * @returns {Promise<Libp2p>}
     */
    static create(options: Options): Promise<Libp2p>;
}

export * from './options';
