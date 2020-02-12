// Type definitions for multiaddr 7.2
// Project: https://github.com/multiformats/js-multiaddr
// Definitions by: Carson Farmer <https://github.com/carsonfarmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

declare namespace Multiaddr {
  type Code = number;
  type Size = number;

  interface Protocol {
    code: Code;
    size: Size;
    name: string;
    resolvable: boolean;
    path: boolean;
  }

  interface Protocols {
    (proto: string | number): Protocol;
    readonly lengthPrefixedVarSize: number;
    readonly V: number;
    readonly table: Array<[number, number, string]>;
    readonly names: { [index: string]: Protocol };
    readonly codes: { [index: number]: Protocol };
    object(code: Code, size: Size, name: string, resolvable: boolean): Protocol;
  }

  interface Options {
    family: string;
    host: string;
    transport: string;
    port: string;
  }

  interface NodeAddress {
    family: string;
    address: string;
    port: string;
  }
}

interface Multiaddr {
  /**
   * The raw bytes representing this multiaddress
   */
  readonly buffer: Buffer;

  /**
   * Returns Multiaddr as a String
   *
   * @example
   * Multiaddr('/ip4/127.0.0.1/tcp/4001').toString()
   * // '/ip4/127.0.0.1/tcp/4001'
   */
  toString(): string;

  /**
   * Returns Multiaddr as a JSON encoded object
   *
   * @example
   * JSON.stringify(Multiaddr('/ip4/127.0.0.1/tcp/4001'))
   * // '/ip4/127.0.0.1/tcp/4001'
   */
  toJSON(): string;

  /**
   * Returns Multiaddr as a convenient options object to be used with net.createConnection
   *
   * @example
   * Multiaddr('/ip4/127.0.0.1/tcp/4001').toOptions()
   * // { family: 'ipv4', host: '127.0.0.1', transport: 'tcp', port: 4001 }
   */
  toOptions(): Multiaddr.Options;

  /**
   * Returns Multiaddr as a human-readable string
   *
   * @example
   * Multiaddr('/ip4/127.0.0.1/tcp/4001').inspect()
   * // '<Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>'
   */
  inspect(): string;

  /**
   * Returns the protocols the Multiaddr is defined with, as an array of objects, in
   * left-to-right order. Each object contains the protocol code, protocol name,
   * and the size of its address space in bits.
   * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
   *
   * @example
   * Multiaddr('/ip4/127.0.0.1/tcp/4001').protos()
   * // [ { code: 4, size: 32, name: 'ip4' },
   * //   { code: 6, size: 16, name: 'tcp' } ]
   */
  protos(): Multiaddr.Protocol[];

  /**
   * Returns the codes of the protocols in left-to-right order.
   * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
   *
   * @example
   * Multiaddr('/ip4/127.0.0.1/tcp/4001').protoCodes()
   * // [ 4, 6 ]
   */
  protoCodes(): Multiaddr.Code[];

  /**
   * Returns the names of the protocols in left-to-right order.
   * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
   *
   * @example
   * Multiaddr('/ip4/127.0.0.1/tcp/4001').protoNames()
   * // [ 'ip4', 'tcp' ]
   */
  protoNames(): string[];

  /**
   * Returns a tuple of parts
   *
   * @example
   * Multiaddr("/ip4/127.0.0.1/tcp/4001").tuples()
   * // [ [ 4, <Buffer 7f 00 00 01> ], [ 6, <Buffer 0f a1> ] ]
   */
  tuples(): Array<[Multiaddr.Code, Buffer]>;

  /**
   * Returns a tuple of string/number parts
   *
   * @example
   * Multiaddr("/ip4/127.0.0.1/tcp/4001").stringTuples()
   * // [ [ 4, '127.0.0.1' ], [ 6, 4001 ] ]
   */
  stringTuples(): Array<[Multiaddr.Code, string | number | undefined]>;

  /**
   * Encapsulates a Multiaddr in another Multiaddr
   *
   * @param addr - Multiaddr to add into this Multiaddr
   * @example
   * const mh1 = Multiaddr('/ip4/8.8.8.8/tcp/1080')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
   *
   * const mh2 = Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   *
   * const mh3 = mh1.encapsulate(mh2)
   * // <Multiaddr 0408080808060438047f000001060fa1 - /ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001>
   *
   * mh3.toString()
   * // '/ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001'
   */
  encapsulate(addr: string | Buffer | Multiaddr): Multiaddr;

  /**
   * Decapsulates a Multiaddr from another Multiaddr
   *
   * @param addr - Multiaddr to remove from this Multiaddr
   * @example
   * const mh1 = Multiaddr('/ip4/8.8.8.8/tcp/1080')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
   *
   * const mh2 = Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   *
   * const mh3 = mh1.encapsulate(mh2)
   * // <Multiaddr 0408080808060438047f000001060fa1 - /ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001>
   *
   * mh3.decapsulate(mh2).toString()
   * // '/ip4/8.8.8.8/tcp/1080'
   */
  decapsulate(addr: string | Buffer | Multiaddr): Multiaddr;

  /**
   * A more reliable version of `decapsulate` if you are targeting a
   * specific code, such as 421 (the `p2p` protocol code). The last index of the code
   * will be removed from the `Multiaddr`, and a new instance will be returned.
   * If the code is not present, the original `Multiaddr` is returned.
   *
   * @param code The code of the protocol to decapsulate from this Multiaddr
   * @example
   * const addr = Multiaddr('/ip4/0.0.0.0/tcp/8080/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC')
   * // <Multiaddr 0400... - /ip4/0.0.0.0/tcp/8080/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC>
   *
   * addr.decapsulateCode(421).toString()
   * // '/ip4/0.0.0.0/tcp/8080'
   *
   * Multiaddr('/ip4/127.0.0.1/tcp/8080').decapsulateCode(421).toString()
   * // '/ip4/127.0.0.1/tcp/8080'
   */
  decapsulateCode(code: Multiaddr.Code): Multiaddr;
  /**
   * Extract the peerId if the multiaddr contains one
   *
   * @example
   * const mh1 = Multiaddr('/ip4/8.8.8.8/tcp/1080/ipfs/QmValidBase58string')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080/ipfs/QmValidBase58string>
   *
   * // should return QmValidBase58string or null if the id is missing or invalid
   * const peerId = mh1.getPeerId()
   */
  getPeerId(): string | null;

  /**
   * Extract the path if the multiaddr contains one
   *
   * @example
   * const mh1 = Multiaddr('/ip4/8.8.8.8/tcp/1080/unix/tmp/p2p.sock')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080/unix/tmp/p2p.sock>
   *
   * // should return utf8 string or null if the id is missing or invalid
   * const path = mh1.getPath()
   */
  getPath(): string | null;

  /**
   * Checks if two Multiaddrs are the same
   *
   * @example
   * const mh1 = Multiaddr('/ip4/8.8.8.8/tcp/1080')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
   *
   * const mh2 = Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   *
   * mh1.equals(mh1)
   * // true
   *
   * mh1.equals(mh2)
   * // false
   */
  equals(other: Multiaddr): boolean;

  /**
   * Gets a Multiaddrs node-friendly address object. Note that protocol information
   * is left out: in Node (and most network systems) the protocol is unknowable
   * given only the address.
   *
   * Has to be a ThinWaist Address, otherwise throws error
   *
   * @example
   * Multiaddr('/ip4/127.0.0.1/tcp/4001').nodeAddress()
   * // {family: 'IPv4', address: '127.0.0.1', port: '4001'}
   */
  nodeAddress(): Multiaddr.NodeAddress;

  /**
   * Returns if a Multiaddr is a Thin Waist address or not.
   *
   * Thin Waist is if a Multiaddr adheres to the standard combination of:
   *
   * `{IPv4, IPv6}/{TCP, UDP}`
   *
   * @example
   * const mh1 = Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   * const mh2 = Multiaddr('/ip4/192.168.2.1/tcp/5001')
   * // <Multiaddr 04c0a80201061389 - /ip4/192.168.2.1/tcp/5001>
   * const mh3 = mh1.encapsulate(mh2)
   * // <Multiaddr 047f000001060fa104c0a80201061389 - /ip4/127.0.0.1/tcp/4001/ip4/192.168.2.1/tcp/5001>
   * mh1.isThinWaistAddress()
   * // true
   * mh2.isThinWaistAddress()
   * // true
   * mh3.isThinWaistAddress()
   * // false
   */
  isThinWaistAddress(addr?: Multiaddr): boolean;
}

interface MultiaddrConstructor {
    /**
     * Creates a [multiaddr](https://github.com/multiformats/multiaddr) from
     * a Buffer, String or another Multiaddr instance
     * public key.
     * @param addr - If String or Buffer, needs to adhere
     * to the address format of a [multiaddr](https://github.com/multiformats/multiaddr#string-format)
     * @example
     * Multiaddr('/ip4/127.0.0.1/tcp/4001')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     */
    new(addr?: string | Buffer | Multiaddr | null): Multiaddr;
    /**
     * Creates a [multiaddr](https://github.com/multiformats/multiaddr) from
     * a Buffer, String or another Multiaddr instance
     * public key.
     * @param addr - If String or Buffer, needs to adhere
     * to the address format of a [multiaddr](https://github.com/multiformats/multiaddr#string-format)
     * @example
     * Multiaddr('/ip4/127.0.0.1/tcp/4001')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     */
    (addr?: string | Buffer | Multiaddr | null): Multiaddr;

    /**
     * Object containing table, names and codes of all supported protocols.
     * To get the protocol values from a Multiaddr, you can use
     * [`.protos()`](#multiaddrprotos),
     * [`.protoCodes()`](#multiaddrprotocodes) or
     * [`.protoNames()`](#multiaddrprotonames)
     *
     */
    protocols: Multiaddr.Protocols;

    fromStupidString(str: string): never;

    /**
     * Creates a Multiaddr from a node-friendly address object
     *
     * @example
     * Multiaddr.fromNodeAddress({address: '127.0.0.1', port: '4001'}, 'tcp')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     */
    fromNodeAddress(addr: Multiaddr.NodeAddress, transport: string): Multiaddr;

    /**
     * Returns if something is a Multiaddr
     */
    isMultiaddr(addr: any): boolean;

    /**
     * Returns if something is a Multiaddr that is a name
     */
    isName(name: any): boolean;

    /**
     * Returns an array of multiaddrs, by resolving the multiaddr that is a name
     */
    resolve(value: any, cb: (error: Error) => void): Promise<void>;
}

declare const Multiaddr: MultiaddrConstructor;
export = Multiaddr;
