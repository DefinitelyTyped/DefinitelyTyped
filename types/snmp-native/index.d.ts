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
 * import snmp from 'snmp-native';
 */
export default SNMPNative;

declare namespace SNMPNative {
    const defaultOptions: SessionOptions;
    const DataTypes: DataType;
    const PduTypes: PduType;
    const Errors: SNMPError;
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
    class Session {
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
            callback: callback
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
            callback: callback
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
            callback: callback
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
            callback: callback
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
                type?: number | null;
                value?: any;
            } & Options,
            callback?: callback
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
    function encode(pkt: Packet): Buffer;
    /**
     * Parse an SNMP packet into its component fields. We don't do a lot of
     * validation so a malformed packet will probably just make us blow up.
     *
     * @param buf Input buffer
     */
    function parse(buf: Buffer): Packet;
    /**
     * Compare two OIDs and return -1, 0 or +1 depending on the relation
     * between them.
     *
     * @param oidA An OID
     * @param oidB An OID
     */
    function compareOids(oidA?: OID, oidB?: OID): -1 | 0 | 1;
    /**
     * @internal
     * export type Version = {
     *     SNMPv1: number;
     *     SNMPv2c: number;
     * };
     */
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
export type callback = (err: Error | null, varbinds: VarBind[]) => void;

export interface response {
    address: string;
    family: 'IPv4' | 'IPv6';
    port: number;
    size: number;
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
    msgReceived?(message: Buffer, rinfo: response): void;
    /**
     * @internal
     * version?: number;
     */
}

export interface VarBind {
    /**
     * The integer type code for the returned value.
     */
    type: number;
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

export interface DataType {
    Integer: number;
    OctetString: number;
    Null: number;
    ObjectIdentifier: number;
    Sequence: number;
    IpAddress: number;
    Counter: number;
    Gauge: number;
    TimeTicks: number;
    Opaque: number;
    NsapAddress: number;
    Counter64: number;
    NoSuchObject: number;
    NoSuchInstance: number;
    EndOfMibView: number;
    PDUBase: number;
}

export interface PduType {
    GetRequestPDU: number;
    GetNextRequestPDU: number;
    GetResponsePDU: number;
    SetRequestPDU: number;
}

export interface SNMPError {
    NoError: number;
    TooBig: number;
    NoSuchName: number;
    BadValue: number;
    ReadOnly: number;
    GenErr: number;
    NoAccess: number;
    WrongType: number;
    WrongLength: number;
    WrongEncoding: number;
    WrongValue: number;
    NoCreation: number;
    InconsistentValue: number;
    ResourceUnavailable: number;
    CommitFailed: number;
    UndoFailed: number;
    AuthorizationError: number;
    NotWritable: number;
    InconsistentName: number;
}
