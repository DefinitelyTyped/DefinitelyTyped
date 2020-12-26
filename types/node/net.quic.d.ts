declare module "net" {
    import { BlockList } from "net";
    import { EventEmitter } from "events";
    import { Duplex, Readable } from "stream";
    import { PathLike } from "fs";
    import { FileHandle } from "fs/promises";
    import { PeerCertificate, DetailedPeerCertificate } from "tls";

    type EndpointType = 'udp4' | 'upd6' | 'udp6-only';

    type CustomLookupFunction = (address: string | undefined, family: 4 | 6) => Promise<void>;

    interface Endpoint {
        /**
         * The local address to bind to. This may be an IPv4 or IPv6 address or a host name.
         * If a host name is given, it will be resolved to an IP address.
         */
        address?: string;
        /**
         * The local port to bind to.
         */
        port?: number;
        /**
         * @default 'udp4'
         */
        type?: EndpointType;
    }

    interface CreateQuicSocketOptions {
        /**
         * A default configuration for QUIC client sessions created using `quicsocket.connect()`.
         */
        client?: object;
        /**
         * When `true` the QuicSocket will not send stateless resets.
         *
         * @default false
         */
        disableStatelessReset?: boolean;
        /**
         * An object describing the local address to bind to.
         */
        endpoint?: Endpoint;
        /**
         * A custom DNS lookup function.
         *
         * @default undefined
         */
        lookup?: CustomLookupFunction;
        /**
         * The maximum number of total active inbound connections.
         */
        maxConnections?: number;
        /**
         * The maximum number of inbound connections allowed per remote host.
         *
         * @default 100
         */
        maxConnectionsPerHost?: number;
        /**
         * The maximum number of stateless resets that the `QuicSocket`
         * is permitted to send per remote host.
         *
         * @default 10
         */
        maxStatelessResetsPerHost?: number;
        /**
         * Whether to enable `'qlog'` for incoming sessions.
         * (For outgoing client sessions, set `client.qlog`.)
         *
         * @default false
         */
        qlog?: boolean;
        /**
         * The maximum number of seconds for retry token validation.
         *
         * @default 10 seconds
         */
        retryTokenTimeout?: number;
        /**
         * A default configuration for QUIC server sessions.
         */
        server?: object;
        /**
         * A 16-byte Buffer or Uint8Array providing the secret to use
         * when generating stateless reset tokens.
         * If not specified, a random secret will be generated for the QuicSocket.
         *
         * @default undefined
         */
        statelessResetSecret?: Uint8Array;
        /**
         * When `true`, the `QuicSocket` will use explicit address validation
         * using a QUIC `RETRY` frame when listening for new server sessions.
         *
         * @default false
         */
        validateAddress?: boolean;
    }

    /**
     * Create new `QuicSocket` instances associated with a local UDP address.
     *
     * To access it, the Node.js binary must be compiled using the `--experimental-quic` configuration flag.
     */
    const createQuicSocket: ((options?: CreateQuicSocketOptions) => QuicSocket) | undefined;

    interface QuicEndpointBindOptions {
        /**
         * Optionally allows the `bind()` to be canceled using an `AbortController`.
         */
        signal?: AbortSignal;
    }

    class QuicEndpoint {
        /**
         * Tells the kernel to join a multicast group at the given `multicastAddress`
         * and `multicastInterface` using the `IP_ADD_MEMBERSHIP` socket option.
         * If the `multicastInterface` argument is not specified, the operating system
         * will choose one interface and will add membership to it.
         *
         * To add membership to every available interface, call `addMembership()`
         * multiple times, once per interface.
         */
        addMembership(multicastAddress: string, multicastInterface: string): this;
        /**
         * An object containing the address information for a bound `QuicEndpoint`.
         *
         * If the `QuicEndpoint` is not bound, `quicendpoint.address` is an empty object.
         */
        readonly address: Address | NodeJS.EmptyObject<Address>;
        /**
         * The `quicendpoint.bind()` function returns `Promise` that will be resolved
         * with the address once the bind operation is successful.
         */
        bind(options?: QuicEndpointBindOptions): Promise<Address>;
        /**
         * Set to `true` if the `QuicEndpoint` is bound to the local UDP port.
         */
        readonly bound: boolean;
        /**
         * Closes and destroys the `QuicEndpoint`. Returns a `Promise` that is resolved
         * once the `QuicEndpoint` has been destroyed, or rejects if
         * the `QuicEndpoint` is destroyed with an error.
         */
        close(): Promise<void>;
        /**
         * Set to `true` if the `QuicEndpoint` is in the process of closing.
         */
        readonly closing: boolean; // TODO: https://github.com/nodejs/node/issues/35810
        /**
         * Closes and destroys the `QuicEndpoint` instance making it unusable.
         * @param error An Error object.
         */
        destroy(error?: Error): void;
        /**
         * Set to `true` if the `QuicEndpoint` has been destroyed.
         */
        readonly destroyed: boolean;
        /**
         * Instructs the kernel to leave a multicast group at `multicastAddress`
         * using the `IP_DROP_MEMBERSHIP` socket option. This method is automatically
         * called by the kernel when the socket is closed or the process terminates,
         * so most apps will never have reason to call this.
         *
         * If `multicastInterface` is not specified, the operating system will attempt
         * to drop membership on all valid interfaces.
         */
        dropMembership(multicastAddress: string, multicastInterface: string): this;
        /**
         * The system file descriptor the `QuicEndpoint` is bound to.
         *
         * This property is not set on Windows.
         */
        readonly fd?: number;
        /**
         * Set to `true` if the `QuicEndpoint` is in the process of binding to the local UDP port.
         */
        readonly pending: boolean;

        ref(): this;
        /**
         * Sets or clears the `SO_BROADCAST` socket option.
         *
         * When set to `true`, UDP packets may be sent to a local interface's broadcast address.
         */
        setBroadcast(on?: boolean): this;

        setMulticastInterface(multicastInterface: string): this;
        /**
         * Sets or clears the `IP_MULTICAST_LOOP` socket option.
         *
         * When set to `true`, multicast packets will also be received on the local interface.
         */
        setMulticastLoopback(on?: boolean): this;
        /**
         * Sets the `IP_MULTICAST_TTL` socket option. While TTL generally stands for "Time to Live",
         * in this context it specifies the number of IP hops that a packet is allowed to travel through,
         * specifically for multicast traffic. Each router or gateway that forwards a packet decrements the TTL.
         * If the TTL is decremented to `0` by a router, it will not be forwarded.
         *
         * The argument passed to `setMulticastTTL()` is a number of hops between `0` and `255`.
         * The default on most systems is `1` but can vary.
         */
        setMulticastTTL(ttl: number): this;
        /**
         * Sets the `IP_TTL` socket option. While TTL generally stands for "Time to Live",
         * in this context it specifies the number of IP hops that a packet is allowed
         * to travel through. Each router or gateway that forwards a packet decrements the TTL.
         * If the TTL is decremented to 0 by a router, it will not be forwarded.
         * Changing TTL values is typically done for network probes or when multicasting.
         *
         * The argument to `setTTL()` is a number of hops between `1` and `255`.
         * The default on most systems is `64` but can vary.
         */
        setTTL(ttl: number): this;

        unref(): this;
    }

    interface OpenStreamOptions {
        /**
         * Set to `true` to open a unidirectional stream, `false` to open a bidirectional stream.
         *
         * @default true
         *
         */
        halfOpen?: boolean;
        /**
         * Total number of bytes that the `QuicStream` may buffer internally before the `quicstream.write()` function starts returning `false`.
         *
         * @default 16384
         */
        highWaterMark?: number;
        /**
         * The default encoding that is used when no encoding is specified as an argument to `quicstream.write()`.
         *
         * @default 'utf8'
         */
        defaultEncoding?: string;
    }

    interface EmptyAddress {
        address: undefined;
        family: undefined;
        port: undefined;
    }

    interface Address {
        /**
         * The local IPv4 or IPv6 address to which the `QuicSession` is bound.
         */
        address: string;
        family: 'IPv4' | 'IPv6';
        /**
         * The local IP port.
         */
        port: number;
    }

    interface CipherInfo {
        /**
         * The cipher algorithm name.
         */
        name: string;
        /**
         * The TLS version (currently always `'TLSv1.3'`).
         */
        type: string;
    }

    type QuicSessionCloseCodeType = 0 | 1 | 2;

    interface QuicSessionCloseCode {
        /**
         * The error code reported when the `QuicSession` closed.
         */
        code: number;
        /**
         * The type of error code reported (0 indicates a QUIC protocol level error, 1 indicates a TLS error, 2 represents an application level error.)
         */
        family: QuicSessionCloseCodeType;
    }

    // TODO: TBD in node core
    interface Histogram {
    }

    interface QuicSession extends EventEmitter {
        /**
         * events
         */
        addListener(event: "close", listener: () => void): this;
        addListener(event: "error", listener: (err: Error) => void): this;
        addListener(event: "keylog", listener: (line: Buffer) => void): this;
        addListener(event: "pathValidation", listener: (result: string, local: object, remote: object) => void): this;
        addListener(
            event: "secure",
            listener: (
                servername: string,
                alpnProtocol: string,
                cipher: {
                    name: string,
                    version: string
                }
            ) => void
        ): this;
        addListener(event: "stream", listener: (stream: QuicStream) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit(event: "close"): boolean;
        emit(event: "error", err: Error): boolean;
        emit(event: "keylog", line: Buffer): boolean;
        emit(event: "pathValidation", result: string, local: object, remote: object): boolean;
        emit(
            event: "secure",
            servername: string,
            alpnProtocol: string,
            cipher: {
                name: string,
                version: string
            }
        ): boolean;
        emit(event: "stream", stream: QuicStream): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on(event: "close", listener: () => void): this;
        on(event: "error", listener: (err: Error) => void): this;
        on(event: "keylog", listener: (line: Buffer) => void): this;
        on(event: "pathValidation", listener: (result: string, local: object, remote: object) => void): this;
        on(event: "secure", listener: () => void): this;
        on(
            event: "secure",
            listener: (
                servername: string,
                alpnProtocol: string,
                cipher: {
                    name: string,
                    version: string
                }
            ) => void
        ): this;
        on(event: "stream", listener: (stream: QuicStream) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once(event: "close", listener: () => void): this;
        once(event: "error", listener: (err: Error) => void): this;
        once(event: "keylog", listener: (line: Buffer) => void): this;
        once(event: "pathValidation", listener: (result: string, local: object, remote: object) => void): this;
        once(event: "secure", listener: () => void): this;
        once(
            event: "secure",
            listener: (
                servername: string,
                alpnProtocol: string,
                cipher: {
                    name: string,
                    version: string
                }
            ) => void
        ): this;
        once(event: "stream", listener: (stream: QuicStream) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener(event: "close", listener: () => void): this;
        prependListener(event: "error", listener: (err: Error) => void): this;
        prependListener(event: "keylog", listener: (line: Buffer) => void): this;
        prependListener(event: "pathValidation", listener: (result: string, local: object, remote: object) => void): this;
        prependListener(event: "secure", listener: () => void): this;
        prependListener(
            event: "secure",
            listener: (
                servername: string,
                alpnProtocol: string,
                cipher: {
                    name: string,
                    version: string
                }
            ) => void
        ): this;
        prependListener(event: "stream", listener: (stream: QuicStream) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener(event: "close", listener: () => void): this;
        prependOnceListener(event: "error", listener: (err: Error) => void): this;
        prependOnceListener(event: "keylog", listener: (line: Buffer) => void): this;
        prependOnceListener(event: "pathValidation", listener: (result: string, local: object, remote: object) => void): this;
        prependOnceListener(event: "secure", listener: () => void): this;
        prependOnceListener(
            event: "secure",
            listener: (
                servername: string,
                alpnProtocol: string,
                cipher: {
                    name: string,
                    version: string
                }
            ) => void
        ): this;
        prependOnceListener(event: "stream", listener: (stream: QuicStream) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        /**
         * The number of retransmissions caused by delayed acknowledgments.
         */
        readonly ackDelayRetransmitCount: number;
        /**
         * An object containing the local address information for the `QuicSocket`
         * to which the `QuicSession` is currently associated.
         */
        readonly address: Address | NodeJS.EmptyObject<Address>;
        /**
         * The ALPN protocol identifier negotiated for this session.
         */
        readonly alpnProtocol: string;
        /**
         * True if the certificate provided by the peer during the TLS 1.3 handshake has been verified.
         */
        readonly authenticated: boolean;
        /**
         * If `quicsession.authenticated` is `false`, returns an `Error` object
         * representing the reason the peer certificate verification failed.
         */
        readonly authenticationError?: Error;
        /**
         * The total number of bidirectional streams created for this `QuicSession`.
         */
        readonly bidiStreamCount: number;
        /**
         * The total number of times the `QuicSession` has been blocked
         * from sending stream data due to flow control.
         *
         * Such blocks indicate that transmitted stream data is
         * not being consumed quickly enough by the connected peer.
         */
        readonly blockCount: number;
        /**
         * The total number of unacknowledged bytes this QUIC endpoint
         * has transmitted to the connected peer.
         */
        readonly bytesInFlight: number;
        /**
         * The total number of bytes received from the peer.
         */
        readonly bytesReceived: number;
        /**
         * The total number of bytes sent to the peer.
         */
        readonly bytesSent: number;
        /**
         * Information about the cipher algorithm selected for the session.
         */
        readonly cipher: CipherInfo | NodeJS.EmptyObject<CipherInfo>;
        /**
         * Begins a graceful close of the `QuicSession`. Existing `QuicStream`
         * instances will be permitted to close naturally. New `QuicStream`
         * instances will not be permitted. Once all `QuicStream` instances
         * have closed, the `QuicSession` instance will be destroyed.
         *
         * Returns a `Promise` that is resolved once the `QuicSession` instance is destroyed.
         */
        close(): Promise<void>;

        readonly closeCode: QuicSessionCloseCode;
        /**
         * Set to `true` if the `QuicSession` is in the process of a graceful shutdown.
         */
        readonly closing: boolean;
        /**
         * Destroys the `QuicSession` immediately causing the `close` event to be emitted.
         *
         * If error is not `undefined`, the error event will be emitted immediately before the `close` event.
         */
        destroy(error?: any): void;
        /**
         * Will be `true` if the `QuicSession` has been destroyed.
         */
        readonly destroyed: boolean;
        /**
         * The length of time the `QuicSession` was active.
         */
        readonly duration: number;
        /**
         * Returns an object representing the *local* certificate.
         * The returned object has some properties corresponding to the fields of the certificate.
         *
         * If there is no local certificate, or if the `QuicSession`
         * has been destroyed, an empty object will be returned.
         */
        getCertificate(): PeerCertificate | NodeJS.EmptyObject<PeerCertificate>;
        /**
         * Returns an object representing the peer's certificate.
         * If the peer does not provide a certificate, or if the `QuicSession`
         * has been destroyed, an empty object will be returned.
         */
        getPeerCertificate(detailed?: false): PeerCertificate | NodeJS.EmptyObject<PeerCertificate>;
        /**
         * Returns an object representing the peer's certificate.
         * If the peer does not provide a certificate, or if the `QuicSession`
         * has been destroyed, an empty object will be returned.
         */
        getPeerCertificate(detailed: true): DetailedPeerCertificate | NodeJS.EmptyObject<DetailedPeerCertificate>;

        readonly handshakeAckHistogram: Histogram;

        readonly handshakeContinuationHistogram: Histogram;
        /**
         * Set to `true` if the TLS handshake has completed.
         */
        readonly handshakeComplete: boolean;
        /**
         * Set to `true` when the TLS handshake completion has been confirmed.
         */
        readonly handshakeConfirmed: boolean;
        /**
         * The length of time taken to complete the TLS handshake.
         */
        readonly handshakeDuration: number;
        /**
         * Set to `true` if the `QuicSession` was closed due to an idle timeout.
         */
        readonly idleTimeout: boolean;
        /**
         * The number of key update operations that have occurred.
         */
        readonly keyUpdateCount: number;
        /**
         * The most recently recorded RTT for this `QuicSession`.
         */
        readonly latestRTT: number;
        /**
         * The number of lost-packet retransmissions that have been performed on this `QuicSession`.
         */
        readonly lossRetransmitCount: number;
        /**
         * The total number of bytes the `QuicSession` is *currently*
         * allowed to send to the connected peer.
         */
        readonly maxDataLeft: number;
        /**
         * The maximum number of in-flight bytes recorded for this `QuicSession`.
         */
        readonly maxInFlightBytes: number;

        /**
         * The highest cumulative number of bidirectional and unidirectional
         * streams that can currently be opened. The values are set
         * initially by configuration parameters when the `QuicSession`
         * is created, then updated over the lifespan of the `QuicSession`
         * as the connected peer allows new streams to be created.
         */
        readonly maxStreams: {
            /**
             * The maximum number of unidirectional streams.
             */
            uni: number;
            /**
             * The maximum number of bidirectional streams.
             */
            bidi: number;
        };
        /**
         * The minimum RTT recorded so far for this `QuicSession`.
         */
        readonly minRTT: number;

        openStream(options?: OpenStreamOptions): Promise<QuicStream>;
        /**
         * The `ping()` method will trigger the underlying QUIC connection
         * to serialize any frames currently pending in the outbound queue
         * if it is able to do so. This has the effect of keeping the connection
         * with the peer active and resets the idle and retransmission timers.
         *
         * The `ping()` method is a best-effort that ignores any errors that
         * may occur during the serialization and send operations.
         * There is no return value and there is no way to monitor
         * the status of the `ping()` operation.
         */
        ping(): void;
        /**
         * The total number of `QuicStreams` initiated by the connected peer.
         */
        readonly peerInitiatedStreamCount: number;
        /**
         * If `qlog` support is enabled for `QuicSession`, the `quicsession.qlog`
         * property provides a `stream.Readable` that may be used to access
         * the `qlog` event data according to the qlog standard.
         *
         * For client `QuicSessions`, the `quicsession.qlog` property will be `undefined`
         * until the 'qlog' event is emitted.
         */
        readonly qlog?: Readable;
        /**
         * An object containing the remote address information for the connected peer.
         */
        readonly remoteAddress: Address | NodeJS.EmptyObject<Address>;
        /**
         * The total number of `QuicStream` instances initiated by this `QuicSession`.
         */
        readonly selfInitiatedStreamCount: number;
        /**
         * The SNI servername requested for this session by the client.
         */
        readonly servername: string;
        /**
         * The modified RTT calculated for this `QuicSession`.
         */
        readonly smoothedRTT: number;
        /**
         * The `QuicSocket` the `QuicSession` is associated with.
         */
        readonly socket: QuicSocket;
        /**
         * True if the `QuicSession` was closed due to QUIC stateless reset.
         */
        readonly statelessReset: boolean;
        /**
         * The total number of unidirectional streams created on this `QuicSession`.
         */
        readonly uniStreamCount: number;
        /**
         * Initiates QuicSession key update.
         *
         * An error will be thrown if called before
         * `quicsession.handshakeConfirmed` is equal to `true`.
         *
         * @returns `true` if the key update operation is successfully initiated.
         */
        updateKey(): boolean;
        /**
         * On server `QuicSession` instances, set to `true` on completion
         * of the TLS handshake if early data is enabled.
         *
         * On client `QuicSession` instances, set to `true` on handshake completion
         * if early data is enabled *and* was accepted by the server.
         */
        readonly usingEarlyData: boolean;
    }

    interface QuicClientSession extends QuicSession {
        addListener(event: "sessionTicket", listener: (sessionTicket: Buffer, remoteTransportParams: Buffer) => void): this;
        addListener(event: "qlog", listener: (qlog: Readable) => void): this;
        addListener(event: "usePreferredAddress", listener: (address: object) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit(event: "sessionTicket", sessionTicket: Buffer, remoteTransportParams: Buffer): boolean;
        emit(event: "qlog", qlog: Readable): boolean;
        emit(event: "usePreferredAddress", address: object): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on(event: "sessionTicket", listener: (sessionTicket: Buffer, remoteTransportParams: Buffer) => void): this;
        on(event: "qlog", listener: (qlog: Readable) => void): this;
        on(event: "usePreferredAddress", listener: (address: object) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once(event: "sessionTicket", listener: (sessionTicket: Buffer, remoteTransportParams: Buffer) => void): this;
        once(event: "qlog", listener: (qlog: Readable) => void): this;
        once(event: "usePreferredAddress", listener: (address: object) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener(event: "sessionTicket", listener: (sessionTicket: Buffer, remoteTransportParams: Buffer) => void): this;
        prependListener(event: "qlog", listener: (qlog: Readable) => void): this;
        prependListener(event: "usePreferredAddress", listener: (address: object) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener(event: "sessionTicket", listener: (sessionTicket: Buffer, remoteTransportParams: Buffer) => void): this;
        prependOnceListener(event: "qlog", listener: (qlog: Readable) => void): this;
        prependOnceListener(event: "usePreferredAddress", listener: (address: object) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        /**
         * An object representing the type, name, and size of parameter of an ephemeral
         * key exchange in Perfect Forward Secrecy on a client connection. It is an
         * empty object when the key exchange is not ephemeral. The supported types are
         * `'DH'` and `'ECDH'`. The `name` property is available only when type is
         * `'ECDH'`.
         *
         * For example: `{ type: 'ECDH', name: 'prime256v1', size: 256 }`.
         *
         */
        readonly ephemeralKeyInfo: object;

        /**
         * Migrates the `QuicClientSession` to the given `QuicSocket` instance. If the new
         * `QuicSocket` has not yet been bound to a local UDP port, it will be bound prior
         * to attempting the migration.
         *
         * @param socket A `QuicSocket` instance to move this session to.
         * @param natRebinding When `true`, indicates that the local address is to
         * be changed without triggering address validation. This will be rare and will
         * typically be used only to test resiliency in NAT rebind scenarios.
         * **Default**: `false`.
         */
        setSocket(socket: QuicSocket, natRebinding?: boolean): Promise<void>;
    }

    interface QuicServerSession extends QuicSession {}

    interface NewQuicEndpointOptions extends Endpoint {
        /**
         * A custom DNS lookup function.
         *
         * @default undefined
         */
        lookup?: CustomLookupFunction;
    }

    interface QuicSocketCommonOptions {
        /**
         * An ALPN protocol identifier.
         */
        alpn?: string;
        /**
         * Optionally override the trusted CA
         * certificates. Default is to trust the well-known CAs curated by Mozilla.
         * Mozilla's CAs are completely replaced when CAs are explicitly specified
         * using this option. The value can be a string or `Buffer`, or an `Array` of
         * strings and/or `Buffer`s. Any string or `Buffer` can contain multiple PEM
         * CAs concatenated together. The peer's certificate must be chainable to a CA
         * trusted by the server for the connection to be authenticated. When using
         * certificates that are not chainable to a well-known CA, the certificate's CA
         * must be explicitly specified as a trusted or the connection will fail to
         * authenticate.
         * If the peer uses a certificate that doesn't match or chain to one of the
         * default CAs, use the `ca` option to provide a CA certificate that the peer's
         * certificate can match or chain to.
         * For self-signed certificates, the certificate is its own CA, and must be
         * provided.
         * For PEM encoded certificates, supported types are "TRUSTED CERTIFICATE",
         * "X509 CERTIFICATE", and "CERTIFICATE".
         */
        ca?: string | string[] | Buffer | Buffer[];
        /**
         * Cert chains in PEM format. One cert
         * chain should be provided per private key. Each cert chain should consist of
         * the PEM formatted certificate for a provided private `key`, followed by the
         * PEM formatted intermediate certificates (if any), in order, and not
         * including the root CA (the root CA must be pre-known to the peer, see `ca`).
         * When providing multiple cert chains, they do not have to be in the same
         * order as their private keys in `key`. If the intermediate certificates are
         * not provided, the peer will not be able to validate the certificate, and the
         * handshake will fail.
         */
        cert?: string | string[] | Buffer | Buffer[];
        /**
         * Cipher suite specification, replacing the default. For
         * more information, see [modifying the default cipher suite][]. Permitted
         * ciphers can be obtained via [`tls.getCiphers()`][]. Cipher names must be
         * uppercased in order for OpenSSL to accept them.
         */
        ciphers?: string;
        /**
         * Name of an OpenSSL engine which can provide the client certificate.
         */
        clientCertEngine?: string;
        /**
         * PEM formatted CRLs (Certificate Revocation Lists).
         */
        crl?: string | string[] | Buffer | Buffer[];
        /**
         * The default encoding that is used when no encoding is specified as an argument to `quicstream.write()`.
         * @default `'utf8'`
         */
        defaultEncoding?: string;
        /**
         * Diffie Hellman parameters, required for
         * [Perfect Forward Secrecy][]. Use `openssl dhparam` to create the parameters.
         * The key length must be greater than or equal to 1024 bits, otherwise an
         * error will be thrown. It is strongly recommended to use 2048 bits or larger
         * for stronger security. If omitted or invalid, the parameters are silently
         * discarded and DHE ciphers will not be available.
         */
        dhparam?: string | Buffer;
        /**
         * A string describing a named curve or a colon separated
         * list of curve NIDs or names, for example `P-521:P-384:P-256`, to use for
         * ECDH key agreement. Set to `auto` to select the
         * curve automatically. Use [`crypto.getCurves()`][] to obtain a list of
         * available curve names. On recent releases, `openssl ecparam -list_curves`
         * will also display the name and description of each available elliptic curve.
         * @default tls.DEFAULT_ECDH_CURVE.
         */
        ecdhCurve?: string;
        /**
         * Total number of bytes that the `QuicStream` may
         * buffer internally before the `quicstream.write()` function starts returning
         * `false`.
         *
         * @default 16384
         */
        highWaterMark?: number;
        /**
         * Attempt to use the server's cipher suite
         * preferences instead of the client's. When `true`, causes
         * `SSL_OP_CIPHER_SERVER_PREFERENCE` to be set in `secureOptions`, see
         * [OpenSSL Options][] for more information.
         */
        honorCipherOrder?: boolean;
        idleTimeout?: number;
        /**
         * Private keys in PEM format.
         * PEM allows the option of private keys being encrypted. Encrypted keys will
         * be decrypted with `options.passphrase`. Multiple keys using different
         * algorithms can be provided either as an array of unencrypted key strings or
         * buffers, or an array of objects in the form `{pem: <string|buffer>[,
         * passphrase: <string>]}`. The object form can only occur in an array.
         * `object.passphrase` is optional. Encrypted keys will be decrypted with
         * `object.passphrase` if provided, or `options.passphrase` if it is not.
         */
        key?: string | string[] | Buffer | Buffer[] | object[];
        /**
         * A custom DNS lookup function.
         * @default undefined
         */
        lookup?: Function;
        /**
         * Must be a value between `2` and `8` (inclusive).
         * @default 2
         */
        activeConnectionIdLimit?: number;
        /**
         * Must be either `'reno'` or `'cubic'`.
         * @default 'reno'
         */
        congestionAlgorithm?: string;
        maxAckDelay?: number;
        maxData?: number;
        maxUdpPayloadSize?: number;
        maxStreamDataBidiLocal?: number;
        maxStreamDataBidiRemote?: number;
        maxStreamDataUni?: number;
        maxStreamsBidi?: number;
        maxStreamsUni?: number;
        /**
         * function for handling OCSP responses.
         */
        ocspHandler?: Function;
        /**
         * Shared passphrase used for a single private key and/or a PFX.
         */
        passphrase?: string;
        /**
         * ternative to providing
         * `key` and `cert` individually. PFX is usually encrypted, if it is,
         * `passphrase` will be used to decrypt it. Multiple PFX can be provided either
         * as an array of unencrypted PFX buffers, or an array of objects in the form
         * `{buf: <string|buffer>[, passphrase: <string>]}`. The object form can only
         * occur in an array. `object.passphrase` is optional. Encrypted PFX will be
         * decrypted with `object.passphrase` if provided, or `options.passphrase` if
         * it is not.
         */
        pfx?: string | string[] | Buffer | Buffer[] | object[];
        /**
         * Optionally affect the OpenSSL protocol behavior,
         * which is not usually necessary. This should be used carefully if at all!
         * Value is a numeric bitmask of the `SSL_OP_*` options from
         * [OpenSSL Options][].
         */
        secureOptions?: number;
    }

    interface QuicSocketConnectOptions extends QuicSocketCommonOptions {
        /**
         * The domain name or IP address of the QUIC server endpoint.
         */
        address?: string;
        /**
         * HTTP/3 Specific Configuration Options
         */
        h3?: {
            qpackMaxTableCapacity?: number;
            qpackBlockedStreams?: number;
            maxHeaderListSize?: number;
            maxPushes?: number;
        };
        /**
         * The IP port of the remote QUIC server.
         */
        port?: number;
        /**
         * `'accept'` or `'reject'`. When `'accept'`,
         * indicates that the client will automatically use the preferred address
         * advertised by the server.
         */
        preferredAddressPolicy?: string;
        /**
         * The serialized remote
         * transport parameters from a previously established session. These would
         * have been provided as part of the `'sessionTicket'` event on a previous
         * `QuicClientSession` object.
         */
        remoteTransportParams?: Buffer | NodeJS.TypedArray | DataView;
        /**
         * Whether to enable qlog for this session.
         * @default false
         */
        qlog?: boolean;
        /**
         * The SNI servername.
         */
        servername?: string;
        /**
         * The serialized TLS Session
         * Ticket from a previously established session. These would have been
         * provided as part of the `'sessionTicket`' event on a previous
         * `QuicClientSession` object.
         */
        sessionTicket?: Buffer | NodeJS.TypedArray | DataView;
        /**
         * Identifies the type of UDP socket. The value must either
         * be `'udp4'`, indicating UDP over IPv4, or `'udp6'`, indicating UDP over
         * IPv6.
         * @default udp4
         */
        type?: string;
    }

    interface QuicSocketListenOptions extends QuicSocketCommonOptions {
        /**
         * An async function that may be used to
         * set a {tls.SecureContext} for the given server name at the start of the
         * TLS handshake. See [Handling client hello][] for details.
         */
        clientHelloHandler?: Function;
        /**
         * Set to `false` to disable 0RTT early data.
         * @default true
         */
        earlyData?: boolean;
        preferredAddress?: {
            address?: string;
            port?: number;
            type?: string;
        }
        /**
         * Request a certificate used to authenticate the client.
         */
        requestCert?: boolean;
        /**
         * If not `false` the server will reject any
         * connection which is not authorized with the list of supplied CAs. This
         * option only has an effect if `requestCert` is `true`.
         * @default true
         */
        rejectUnauthorized?: boolean;
        /**
         * Opaque identifier used by servers to ensure
         * session state is not shared between applications. Unused by clients.
         */
        sessionIdContext?: string;
    }

    interface DiagnosticPacketLossOptions {
        /**
         * A value in the range `0.0` to `1.0` that specifies the probability of received packet loss.
         */
        rx: number;
        /**
         * A value in the range `0.0` to `1.0` that specifies the probability of transmitted packet loss.
         */
        tx: number;
    }

    class QuicSocket extends EventEmitter {
        addListener(event: 'busy', listener: () => void): this;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'endpointClose', listener: (endpoint: QuicEndpoint, error: Error) => void): this;
        addListener(event: 'error', listener: () => void): this;
        addListener(event: 'listening', listener: () => void): this;
        addListener(event: 'ready', listener: () => void): this;
        addListener(event: 'session', listener: (session: QuicServerSession) => void): this;
        addListener(event: 'sessionError', listener: (error: Error, session: QuicSession) => void): this;

        emit(event: 'busy'): boolean;
        emit(event: 'close'): boolean;
        emit(event: 'endpointClose', endpoint: QuicEndpoint, error: Error): boolean;
        emit(event: 'error'): boolean;
        emit(event: 'listening'): boolean;
        emit(event: 'ready'): boolean;
        emit(event: 'session', session: QuicServerSession): boolean;
        emit(event: 'sessionError', error: Error, session: QuicSession): boolean;

        on(event: 'busy', listener: () => void): this;
        on(event: 'close', listener: () => void): this;
        on(event: 'endpointClose', listener: (endpoint: QuicEndpoint, error: Error) => void): this;
        on(event: 'error', listener: () => void): this;
        on(event: 'listening', listener: () => void): this;
        on(event: 'ready', listener: () => void): this;
        on(event: 'session', listener: (session: QuicServerSession) => void): this;
        on(event: 'sessionError', listener: (error: Error, session: QuicSession) => void): this;

        once(event: 'busy', listener: () => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'endpointClose', listener: (endpoint: QuicEndpoint, error: Error) => void): this;
        once(event: 'error', listener: () => void): this;
        once(event: 'listening', listener: () => void): this;
        once(event: 'ready', listener: () => void): this;
        once(event: 'session', listener: (session: QuicServerSession) => void): this;
        once(event: 'sessionError', listener: (error: Error, session: QuicSession) => void): this;

        prependListener(event: 'busy', listener: () => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'endpointClose', listener: (endpoint: QuicEndpoint, error: Error) => void): this;
        prependListener(event: 'error', listener: () => void): this;
        prependListener(event: 'listening', listener: () => void): this;
        prependListener(event: 'ready', listener: () => void): this;
        prependListener(event: 'session', listener: (session: QuicServerSession) => void): this;
        prependListener(event: 'sessionError', listener: (error: Error, session: QuicSession) => void): this;

        prependOnceListener(event: 'busy', listener: () => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'endpointClose', listener: (endpoint: QuicEndpoint, error: Error) => void): this;
        prependOnceListener(event: 'error', listener: () => void): this;
        prependOnceListener(event: 'listening', listener: () => void): this;
        prependOnceListener(event: 'ready', listener: () => void): this;
        prependOnceListener(event: 'session', listener: (session: QuicServerSession) => void): this;
        prependOnceListener(event: 'sessionError', listener: (error: Error, session: QuicSession) => void): this;

        /**
         * Creates and adds a new `QuicEndpoint` to the `QuicSocket` instance.
         * An error will be thrown if `quicsocket.addEndpoint()` is called
         * either after the `QuicSocket` has already started binding to
         * the local ports, or after the `QuicSocket` has been destroyed.
         */
        addEndpoint(options: NewQuicEndpointOptions): QuicEndpoint;
        /**
         * A `BlockList` instance used to define rules for remote IPv4 or IPv6 addresses that
         * this `QuicSocket` is not permitted to interact with.
         * The rules can be specified as either specific individual addresses,
         * ranges of addresses, or CIDR subnet ranges.
         *
         * When listening as a server, if a packet is received from a blocked address, the packet will be ignored.
         *
         * When connecting as a client, if the remote IP address is blocked, the connection attempt will be rejected.
         */
        blockList: BlockList;
        /**
         * Will be `true` if the `QuicSocket` has been successfully
         * bound to a local UDP port.
         *
         * Initially the value is `false`.
         */
        readonly bound: boolean;
        /**
         * The length of time this `QuicSocket` has been bound to a local port.
         */
        readonly boundDuration: number;
        /**
         * The number of bytes received by this `QuicSocket`.
         */
        readonly bytesReceived: number;
        /**
         * The number of bytes sent by this `QuicSocket`.
         */
        readonly bytesSent: number;
        /**
         * The number of client `QuicSession` instances that have been associated with this `QuicSocket`.
         */
        readonly clientSessions: number;
        /**
         * Gracefully closes the `QuicSocket`.
         * Existing `QuicSession` instances will be permitted to close naturally.
         * New `QuicClientSession` and `QuicServerSession` instances will not be allowed.
         *
         * The returns `Promise` will be resolved once the QuicSocket is destroyed.
         */
        close(): Promise<void>;

        connect(options?: QuicSocketConnectOptions): Promise<QuicClientSession>;
        /**
         * Destroys the `QuicSocket` then emits the `'close'` event when done.
         *
         * The `'error'` event will be emitted after `'close'` if the `error` is not `undefined`.
         */
        destroy(error?: any): void;
        /**
         * Will be `true` if the `QuicSocket` has been destroyed.
         */
        readonly destroyed: boolean;
        /**
         * The length of time this `QuicSocket` has been active,
         */
        readonly duration: number;
        /**
         * An array of `QuicEndpoint` instances associated with the `QuicSocket`.
         */
        readonly endpoints: QuicEndpoint[];
        /**
         * Listen for new peer-initiated sessions.
         *
         * Returns a `Promise` that is resolved once the `QuicSocket` is actively listening.
         */
        listen(options?: QuicSocketListenOptions): Promise<void>;
        /**
         * The length of time this `QuicSocket` has been listening for connections.
         */
        readonly listenDuration: number;
        /**
         * Set to `true` if the `QuicSocket` is listening for new connections.
         */
        readonly listening: boolean;
        /**
         * The number of packets received by this `QuicSocket` that have been ignored.
         */
        readonly packetsIgnored: number;
        /**
         * The number of packets successfully received by this `QuicSocket`.
         */
        readonly packetsReceived: number;
        /**
         * The number of packets sent by this `QuicSocket`.
         */
        readonly packetsSent: number;
        /**
         * Set to `true` if the socket is not yet bound to the local UDP port.
         */
        readonly pending: boolean;

        ref(): this;

        unref(): this;

        /**
         * When `true`, the `QuicSocket` will reject new connections.
         *
         * Setting `quicsocket.serverBusy` to `true` will tell the `QuicSocket` to reject
         * all new incoming connection requests using the `SERVER_BUSY` QUIC error code.
         * To begin receiving connections again, disable busy mode by setting `quicsocket.serverBusy = false`.
         */
        serverBusy: boolean;
        /**
         * The number of `QuicSession` instances rejected due to server busy status.
         */
        readonly serverBusyCount: number;
        /**
         * The number of server `QuicSession` instances that have been associated with this `QuicSocket`.
         */
        readonly serverSessions: number;
        /**
         * The `quicsocket.setDiagnosticPacketLoss()` method is a diagnostic only tool
         * that can be used to *simulate* packet loss conditions for this `QuicSocket`
         * by artificially dropping received or transmitted packets.
         *
         * This method is *not* to be used in production applications.
         */
        setDiagnosticPacketLoss(options: DiagnosticPacketLossOptions): void;
        /**
         * `true` if stateless reset processing is enabled; `false` if disabled.
         *
         * By default, a listening `QuicSocket` will generate stateless reset
         * tokens when appropriate. The `disableStatelessReset` option may be set
         * when the `QuicSocket` is created to disable generation of stateless resets.
         * The `quicsocket.statelessReset` property allows stateless reset to be turned on
         * and off dynamically through the lifetime of the `QuicSocket`.
         */
        statelessReset: boolean;
        /**
         * The number of stateless resets that have been sent.
         */
        readonly statelessResetCount: number;
    }

    interface QuicStreamPushStreamOptions {
        /**
         * Total number of bytes that the `QuicStream` may buffer internally
         * before the `quicstream.write()` function starts returning `false`.
         *
         * @default 16384
         */
        highWaterMark?: number;
        /**
         * The default encoding that is used when no encoding is specified
         * as an argument to `quicstream.write()`.
         *
         * @default 'utf8'
         */
        defaultEncoding?: string;
    }

    interface QuicStreamSendFDOptions {
        /**
         * The offset position at which to begin reading.
         *
         * @default -1
         */
        offset?: number;
        /**
         * The amount of data from the fd to send.
         *
         * @default -1
         */
        length?: number;
    }

    interface QuicStreamSendFileOptions extends QuicStreamSendFDOptions {
        /**
         * Callback function invoked in the case of an error before send.
         */
        onError?: () => void;
    }

    class QuicStream extends Duplex {
        addListener(event: "blocked", listener: () => void): this;
        addListener(event: "close", listener: () => void): this;
        addListener(event: "data", listener: (data: any) => void): this;
        addListener(event: "end", listener: () => void): this;
        addListener(event: "error", listener: (err: Error) => void): this;
        addListener(event: "informationalHeaders", listener: (headers: object) => void): this;
        addListener(event: "initialHeaders", listener: (headers: object) => void): this;
        addListener(event: "trailingHeaders", listener: (headers: object) => void): this;
        addListener(event: "readable", listener: () => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit(event: "blocked"): boolean;
        emit(event: "close"): boolean;
        emit(event: "data", data: any): boolean;
        emit(event: "end"): boolean;
        emit(event: "error", err: Error): boolean;
        emit(event: "informationalHeaders", headers: object): boolean;
        emit(event: "initialHeaders", headers: object): boolean;
        emit(event: "trailingHeaders", headers: object): boolean;
        emit(event: "readable"): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on(event: "blocked", listener: () => void): this;
        on(event: "close", listener: () => void): this;
        on(event: "data", listener: (data: any) => void): this;
        on(event: "end", listener: () => void): this;
        on(event: "error", listener: (err: Error) => void): this;
        on(event: "informationalHeaders", listener: (headers: object) => void): this;
        on(event: "initialHeaders", listener: (headers: object) => void): this;
        on(event: "trailingHeaders", listener: (headers: object) => void): this;
        on(event: "readable", listener: () => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once(event: "blocked", listener: () => void): this;
        once(event: "close", listener: () => void): this;
        once(event: "data", listener: (data: any) => void): this;
        once(event: "end", listener: () => void): this;
        once(event: "error", listener: (err: Error) => void): this;
        once(event: "informationalHeaders", listener: (headers: object) => void): this;
        once(event: "initialHeaders", listener: (headers: object) => void): this;
        once(event: "trailingHeaders", listener: (headers: object) => void): this;
        once(event: "readable", listener: () => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener(event: "blocked", listener: () => void): this;
        prependListener(event: "close", listener: () => void): this;
        prependListener(event: "data", listener: (data: any) => void): this;
        prependListener(event: "end", listener: () => void): this;
        prependListener(event: "error", listener: (err: Error) => void): this;
        prependListener(event: "informationalHeaders", listener: (headers: object) => void): this;
        prependListener(event: "initialHeaders", listener: (headers: object) => void): this;
        prependListener(event: "trailingHeaders", listener: (headers: object) => void): this;
        prependListener(event: "readable", listener: () => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener(event: "blocked", listener: () => void): this;
        prependOnceListener(event: "close", listener: () => void): this;
        prependOnceListener(event: "data", listener: (data: any) => void): this;
        prependOnceListener(event: "end", listener: () => void): this;
        prependOnceListener(event: "error", listener: (err: Error) => void): this;
        prependOnceListener(event: "informationalHeaders", listener: (headers: object) => void): this;
        prependOnceListener(event: "initialHeaders", listener: (headers: object) => void): this;
        prependOnceListener(event: "trailingHeaders", listener: (headers: object) => void): this;
        prependOnceListener(event: "readable", listener: () => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        /**
         * When `true`, the `QuicStream` is bidirectional.
         *
         * Both the readable and writable sides of the `QuicStream` `Duplex` are open.
         */
        readonly bidirectional: boolean;
        /**
         * The total number of bytes received for this `QuicStream`.
         */
        readonly bytesReceived: number;
        /**
         * The total number of bytes sent by this `QuicStream`.
         */
        readonly bytesSent: number;
        /**
         * Will be `true` if the `QuicStream` was initiated by a `QuicClientSession` instance.
         */
        readonly clientInitiated: boolean;
        /**
         * Closes the `QuicStream` by ending both sides of the `QuicStream` `Duplex`.
         *
         * Returns a `Promise` that is resolved once the `QuicStream` has been destroyed.
         */
        close(): Promise<void>;

        dataAckHistogram: Histogram;

        dataRateHistogram: Histogram;

        dataSizeHistogram: Histogram;
        /**
         * The length of time the `QuicStream` has been active.
         */
        readonly duration: number;
        /**
         * The total number of bytes successfully received by the `QuicStream`.
         */
        readonly finalSize: number;
        /**
         * The numeric identifier of the `QuicStream`.
         */
        readonly id: number;
        /**
         * The highest acknowledged data offset received for this `QuicStream`.
         */
        readonly maxAcknowledgedOffset: number;
        /**
         * The maximum extended data offset that has been reported to the connected peer.
         */
        readonly maxExtendedOffset: number;
        /**
         * The maximum received offset for this `QuicStream`.
         */
        readonly maxReceivedOffset: number;
        /**
         * If the selected QUIC application protocol supports push streams,
         * then the `pushStream()` method will initiate a new push promise
         * and create a new unidirectional `QuicStream` object used to fulfill that push.
         */
        pushStream(headers: object, options?: QuicStreamPushStreamOptions): QuicStream;
        /**
         * Will be `true` if the `QuicStream` was initiated by a `QuicServerSession` instance.
         */
        readonly serverInitiated: boolean;
        /**
         * The `QuicServerSession` or `QuicClientSession` to which the `QuicStream` belongs.
         */
        readonly session: QuicServerSession | QuicClientSession;
        /**
         * Instead of using a `QuicStream` as a writable stream, send data from a given file descriptor.
         */
        sendFD(fd: number | FileHandle, options?: QuicStreamSendFDOptions): void;
        /**
         * Instead of using a `QuicStream` as a writable stream, send data from a given file path.
         */
        sendFile(path: PathLike, options?: QuicStreamSendFileOptions): void;

        submitInformationalHeaders(headers: object): void;

        submitInitialHeaders(headers: object): void;

        submitTrailingHeaders(headers: object): void;
        /**
         * Will be true if the `QuicStream` is unidirectional. Whether the `QuicStream`
         * will be readable or writable depends on whether the `quicstream.session`
         * is a `QuicClientSession` or `QuicServerSession`, and whether
         * the `QuicStream` was initiated locally or remotely.
         */
        readonly unidirectional: boolean;
    }
}
