// Type definitions for snmp-native 1.2
// Project: https://github.com/calmh/node-snmp-native
// Definitions by: Matthew Wilson <https://github.com/traverse1984>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/**
 * This is a native SNMP library for Node.js. The purpose is to provide enough
 * functionality to perform large scale monitoring of network equipment.
 *
 * It's optimized for polling tens of thousands of counters on hundreds or
 * thousands of hosts in a parallell manner. This is known to work (although
 * performance might be limited by less than optimal SNMP agent implementations
 * in random network gear).
 *
 * @example
 * import * as snmp from 'snmp-native';
 */
export const defaultOptions: SessionOptions;
export const DataTypes: DataTypes;
export const PduTypes: PduTypes;
export const Versions: Versions;
export const Errors: Errors;

/**
 * @internal
 * export const Versions: Version;
 */
/**
 * Create a Session. The Session constructor can take an options object.
 * The options passed to the Session will be the defaults for any
 * subsequent function calls on that session, but can be overridden as
 * needed. Useful parameters here are host, port and family.
 *
 * For optimum performance when polling many hosts, create a session
 * without specifying the host. Reuse this session for all hosts and
 * specify the host on each get, getAll, etc.
 *
 * @example
 * // Create a session with default settings.
 * const session = new snmp.Session();
 * @example
 * // Create a Session with explicit default host, port, and community.
 * const session = new snmp.Session({
 *     host: 'device.example.com',
 *     port: 161,
 *     community: 'special',
 * });
 * @example
 * // Create an IPv6 Session.
 * const session = new snmp.Session({
 *     host: '2001:db8::42',
 *     family: 'udp6',
 *     community: 'private',
 * });
 */
export class Session {
    options: SessionOptions;
    /**
     * @internal
     * socket: Socket;
     * @internal
     * reqs: {
     *     [key: number]: {
     *         callback: callback;
     *     }
     * };
     */
    constructor(options?: SessionOptions);
    /**
     * Perform a simple GetRequest.
     *
     * The callback is called with an error object or an array of varbinds.
     *
     * @param options.oid The OID to get
     *
     * @example
     * const oid = [ 1, 3, 6, 1, 4, 1, 42, 1, 0 ];
     *
     * session.get( { oid, }, (err, varbinds) => {
     *     if( err ){
     *         console.error( 'Failed' );
     *     } else {
     *         const varbind = varbinds[0];
     *         console.log( `${varbind.oid} = ${varbind.value}` );
     *     }
     * } );
     *
     * @example
     * // Specify host and community explicitly:
     * const host = 'example.host.com';
     * const community = 'private';
     *
     * session.get( { oid, host, community, }, (err, varbinds) => {
     *     const varbind = varbinds[0];
     *     console.log( `${varbind.oid} = ${varbind.value}` );
     * } );
     */
    get(
        options: {
            oid: OID;
        } & Options,
        callback: ResponseCallback
    ): void;
    /**
     * Perform a simple GetNextRequest.
     *
     * The callback is called with an error object or an array of varbinds.
     *
     * @param options.oid The OID to get
     *
     * @example
     * const oid = [ 1, 3, 6, 1, 4, 1, 42, 1, 0 ];
     *
     * session.getNext( { oid, }, (err, varbinds) => {
     *     if( err ){
     *         console.error( 'Failed' );
     *     } else {
     *         const varbind = varbinds[0];
     *         console.log( `${varbind.oid} = ${varbind.value}` );
     *     }
     * } );
     */
    getNext(
        options: {
            oid: OID;
        } & Options,
        callback: ResponseCallback
    ): void;
    /**
     * Perform repeated GetRequests to fetch all the required values.
     * Multiple OIDs will get packed into as few GetRequest packets as
     * possible to minimize roundtrip delays. Gets will be issued serially
     * (not in parallell) to avoid flooding hosts.
     *
     * The callback is called with an error object or an array of varbinds.
     * If abortOnError is false (default) any variables that couldn't be
     * fetched will simply be omitted from the results. If it is true,
     * the callback is called with an error object on any failure. If the
     * combinedTimeout is triggered, the callback is called with an error
     * and the partial results.
     *
     * @param options.oids An array of OIDs to get.
     * @param options.abortOnError Whether to stop or continue when an
     * error is encountered. Default: false.
     * @param options.combinedTimeout Timeout in milliseconds that the
     * getAll() may take. Default: no timeout.
     *
     * @example
     * const oids = [
     *     [ 1, 3, 6, 1, 4, 1, 42, 1, 0 ],
     *     [ 1, 3, 6, 1, 4, 1, 42, 2, 0 ],
     * ];
     *
     * session.getAll( { oids, }, (err, varbinds) => {
     *     if( err && !varbinds ){
     *         console.error( 'Failed' );
     *     } else {
     *         if( err ){
     *             console.log( 'Partial results' );
     *         }
     *         varbinds.forEach( varbind => {
     *             console.log( `${varbind.oid} = ${varbind.value}` );
     *         } );
     *     }
     * } );
     */
    getAll(
        options: {
            oids: OID[];
            abortOnError?: boolean;
            combinedTimeout?: number;
        } & Options,
        callback: ResponseCallback
    ): void;
    /**
     * Perform repeated GetNextRequests to fetch all values in the
     * specified tree.
     *
     * The callback is called with an error object or an array of
     * varbinds. If the combinedTimeout is triggered, the callback
     * is called with an error and the partial results.
     *
     * @param options.oid The OID to get.
     * @param options.combinedTimeout Timeout in milliseconds that the
     * getAll() may take. Default: no timeout.
     *
     * @example
     * const oid = [ 1, 3, 6, 1, 4, 1, 42, 1, 0 ];
     *
     * session.getSubtree( { oids, }, (err, varbinds) => {
     *     if( err && !varbinds ){
     *         console.error( 'Failed' );
     *     } else {
     *         if( err ){
     *             console.log( 'Partial results' );
     *         }
     *         varbinds.forEach( varbind => {
     *             console.log( `${varbind.oid} = ${varbind.value}` );
     *         } );
     *     }
     * } );
     */
    getSubtree(
        options: {
            oid: OID;
            combinedTimeout?: number;
        } & Options,
        callback: ResponseCallback
    ): void;
    /**
     * Perform a simple SetRequest.
     *
     * @param options.oid The OID to set.
     * @param options.value The value to set.
     * @param options.type The type of the value. Supported data types are:
     * * Integer (2);
     * * Gague (66);
     * * IpAddress (64);
     * * OctetString (4); and
     * * Null (5).
     *
     * @example
     * const oid = [ 1, 3, 6, 1, 4, 1, 42, 1, 0 ];
     * const type = snmp.DataTypes.Integer; // => 2
     *
     * session.set( { oid, type, value: 42, }, (err, varbinds) => {
     *     if( err ){
     *         console.error( 'Failed' );
     *     } else {
     *         const varbind = varbinds[0];
     *         console.log( 'Set completed' );
     *         console.log( `${varbind.oid} = ${varbind.value}` );
     *     }
     * } );
     */
    set(
        options: {
            oid: OID;
            type?: DataTypes[keyof DataTypes] | null,
            value?: any;
        } & Options,
        callback?: ResponseCallback
    ): void;
    /**
     * Cancels all outstanding requests and frees used OS resources.
     * Outstanding requests will call their callback with the
     * "Cancelled" error set.
     */
    close(): void;
}

/**
 * Create an ASN.1 BER encoding of a Packet structure. This is suitable
 * for transmission on a UDP socket.
 *
 * @param pkt Packet to encode
 */
export function encode(pkt: Packet): Buffer;

/**
 * Parse an SNMP packet into its component fields. We don't do a lot of
 * validation so a malformed packet will probably just make us blow up.
 *
 * @param buf Input buffer
 */
export function parse(buf: Buffer): Packet;

/**
 * Compare two OIDs and return -1, 0 or +1 depending on the relation
 * between them.
 *
 * @param oidA An OID
 * @param oidB An OID
 */
export function compareOids(oidA?: OID, oidB?: OID): -1 | 0 | 1;
/**
 * @internal
 * export type Version = {
 *     SNMPv1: number;
 *     SNMPv2c: number;
 * };
 */

export interface SessionOptions extends Options {
    /**
     * The UDP port used to bind the socket locally, or 0 to use a
     * random port.
     */
    bindPort?: number;
    /**
     * Address family to bind to. This is only used by the Session
     * constructor since that is when the bind is done.
     */
    family?: 'udp4' | 'udp6';
    /**
     * Function responsible for handling incoming messages and sending UDP
     * responses back. If nothing is given here, the default implementation
     * is used. This is useful if you want to implement custom logic in
     * your application.
     */
    msgReceived?(message: Buffer, rinfo: ResponseInfo): void;
    /**
     * @internal
     * version?: number;
     */
}

export interface Options {
    /**
     * The host to send the request to. Any resolvable name is allowed in
     * addition to IP addresses.
     */
    host?: string;
    /**
     * The UDP port number to send the request to.
     */
    port?: number;
    /**
     * The SNMP community name.
     */
    community?: string;
    /**
     * An array of timeout values. Values are times in milliseconds, the
     * length of the array is the total number of transmissions that will
     * occur. Defaults to four attempts with five seconds between each.
     *
     * Re-transmissions can be disabled by providing a single timeout
     * value.
     *
     *
     * @example
     * [ 5000 ] // Disable re-transmission
     *
     */
    timeouts?: number[];
}

/**
 * Object Identifier (OID) in array or string form. The string form will
 * be parsed into an array.
 *
 * @example [ 1, 3, 6, 1, 4, 1, 1, 2, 3, 4 ]
 * @example '.1.3.6.1.4.1.1.2.3.4'
 */
export type OID = string | number[];

/**
 * VarBind object
 */
export type ResponseCallback = (err: Error | null, varbinds: VarBind[]) => void;

export interface ResponseInfo {
    address: string;
    family: 'IPv4' | 'IPv6';
    port: number;
    size: number;
}

export interface VarBind {
    /**
     * The integer type code for the returned value.
     */
    type: DataTypes[keyof DataTypes];
    /**
     * The value, in decoded form. This will be an integer for integer,
     * gauge, counter and timetick types, a string for an octet string
     * value, an array for array or IP number types.
     */
    value: any;
    /**
     * The represented OID (in array form).
     */
    oid: number[];
    /**
     * For octet string values, this is a raw Buffer representing the string.
     */
    valueRaw: Buffer;
    /**
     * For octet string values, this is a hex string representation of the value.
     */
    valueHex?: string;
    /**
     * The timestamp (in milliseconds) when the response was received.
     */
    receiveStamp: number;
    /**
     * The timestamp (in milliseconds) when the request was transmitted.
     */
    sendStamp: number;
    /**
     * @internal
     * requestId: number;
     */
}

export interface PDU {
    type: number;
    reqid: number;
    error: number;
    errorIndex: number;
    varbinds: VarBind[];
}

export interface Packet {
    version: 0 | 1;
    community: string;
    pdu: PDU;
}

export interface DataTypes {
    readonly Integer: 0x02;
    readonly OctetString: 0x04;
    readonly Null: 0x05;
    readonly ObjectIdentifier: 0x06;
    readonly Sequence: 0x30;
    readonly IpAddress: 0x40;
    readonly Counter: 0x41;
    readonly Gauge: 0x42;
    readonly TimeTicks: 0x43;
    readonly Opaque: 0x44;
    readonly NsapAddress: 0x45;
    readonly Counter64: 0x46;
    readonly NoSuchObject: 0x80;
    readonly NoSuchInstance: 0x81;
    readonly EndOfMibView: 0x82;
    readonly PDUBase: 0xA0;
}

export interface PduTypes {
    readonly GetRequestPDU: 0x00;
    readonly GetNextRequestPDU: 0x01;
    readonly GetResponsePDU: 0x02;
    readonly SetRequestPDU: 0x03;
}

export interface Errors {
    readonly NoError: 0;
    readonly TooBig: 1;
    readonly NoSuchName: 2;
    readonly BadValue: 3;
    readonly ReadOnly: 4;
    readonly GenErr: 5;
    readonly NoAccess: 6;
    readonly WrongType: 7;
    readonly WrongLength: 8;
    readonly WrongEncoding: 9;
    readonly WrongValue: 10;
    readonly NoCreation: 11;
    readonly InconsistentValue: 12;
    readonly ResourceUnavailable: 13;
    readonly CommitFailed: 14;
    readonly UndoFailed: 15;
    readonly AuthorizationError: 16;
    readonly NotWritable: 17;
    readonly InconsistentName: 18;
}

export interface Versions {
    readonly SNMPv1: 0;
    readonly SNMPv2c: 1;
}
