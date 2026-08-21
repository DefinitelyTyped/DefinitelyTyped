declare module "node:quic" {
    import { NonSharedBuffer } from "node:buffer";
    import { KeyObject } from "node:crypto";
    import { FileHandle } from "node:fs/promises";
    import { BlockList, SocketAddress } from "node:net";
    import { Writer } from "node:stream/iter";
    import { EphemeralKeyInfo, PeerCertificate } from "node:tls";
    /**
     * @since v23.8.0
     */
    type OnSessionCallback = (this: QuicEndpoint, session: QuicSession) => void;
    /**
     * @since v23.8.0
     */
    type OnStreamCallback = (this: QuicSession, stream: QuicStream) => void;
    /**
     * @since v23.8.0
     */
    type OnDatagramCallback = (this: QuicSession, datagram: NodeJS.NonSharedUint8Array, early: boolean) => void;
    /**
     * @since v23.8.0
     */
    type OnDatagramStatusCallback = (
        this: QuicSession,
        id: bigint,
        status: "acknowledged" | "lost" | "abandoned",
    ) => void;
    /**
     * @since v23.8.0
     */
    type OnPathValidationCallback = (
        this: QuicSession,
        result: "success" | "failure" | "aborted",
        newLocalAddress: SocketAddress,
        newRemoteAddress: SocketAddress,
        oldLocalAddress: SocketAddress | null,
        oldRemoteAddress: SocketAddress | null,
        preferredAddress: boolean,
    ) => void;
    /**
     * @since v23.8.0
     */
    type OnSessionTicketCallback = (this: QuicSession, ticket: object) => void;
    /**
     * @since v23.8.0
     */
    type OnVersionNegotiationCallback = (
        this: QuicSession,
        version: number,
        requestedVersions: number[],
        supportedVersions: number[],
    ) => void;
    /**
     * @since v23.8.0
     */
    type OnHandshakeCallback = (this: QuicSession, info: SessionHandshakeInfo) => void;
    /**
     * @since v26.2.0
     */
    type OnNewTokenCallback = (this: QuicSession, token: NonSharedBuffer, address: SocketAddress) => void;
    /**
     * @since v26.2.0
     */
    type OnOriginCallback = (this: QuicSession, origins: string[]) => void;
    /**
     * Called when TLS key material is available. Only fires when
     * `sessionOptions.keylog` is `true`. Multiple lines are emitted during the
     * TLS 1.3 handshake, each containing a secret label, the client random, and
     * the secret value.
     * @since v26.2.0
     */
    type OnKeylogCallback = (this: QuicSession, line: string) => void;
    /**
     * Called when qlog diagnostic data is available. Only fires when
     * `sessionOptions.qlog` is `true`. The `data` chunks should be
     * concatenated in order to produce the complete qlog output. When `fin` is
     * `true`, no more chunks will be emitted and the concatenated result is a
     * complete JSON-SEQ document.
     * @since v26.2.0
     */
    type OnQlogCallback = (this: QuicSession, data: string, fin: boolean) => void;
    /**
     * @since v23.8.0
     */
    type OnBlockedCallback = (this: QuicStream) => void;
    /**
     * @since v23.8.0
     */
    type OnStreamErrorCallback = (this: QuicStream, error: any) => void;
    /**
     * Called when initial request or response headers are received. For HTTP/3,
     * this delivers request pseudo-headers on the server and response headers
     * on the client.
     * @since v26.2.0
     */
    type OnHeadersCallback = (this: QuicStream, headers: NodeJS.Dict<string | string[]>) => void;
    /**
     * Called when trailing headers are received from the peer.
     * @since v26.2.0
     */
    type OnTrailersCallback = (this: QuicStream, trailers: NodeJS.Dict<string | string[]>) => void;
    /**
     * Called when informational (1xx) headers are received from the server
     * (e.g., 103 Early Hints).
     * @since v26.2.0
     */
    type OnInfoCallback = (this: QuicStream, headers: NodeJS.Dict<string | string[]>) => void;
    /**
     * @since v23.8.0
     */
    interface TransportParams {
        /**
         * The preferred IPv4 address to advertise (only used by servers).
         * @since v23.8.0
         */
        preferredAddressIpv4?: SocketAddress | undefined;
        /**
         * The preferred IPv6 address to advertise (only used by servers)
         * @since v23.8.0
         */
        preferredAddressIpv6?: SocketAddress | undefined;
        /**
         * @since v23.8.0
         */
        initialMaxStreamDataBidiLocal?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        initialMaxStreamDataBidiRemote?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        initialMaxStreamDataUni?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        initialMaxData?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        initialMaxStreamsBidi?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        initialMaxStreamsUni?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        maxIdleTimeout?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        activeConnectionIDLimit?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        ackDelayExponent?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        maxAckDelay?: bigint | number | undefined;
        /**
         * The maximum size in bytes of a DATAGRAM frame payload that this endpoint
         * is willing to receive. Set to `0` to disable datagram support. The peer
         * will not send datagrams larger than this value. The actual maximum size of
         * a datagram that can be _sent_ is determined by the peer's
         * `maxDatagramFrameSize`, not this endpoint's value.
         * @since v23.8.0
         */
        maxDatagramFrameSize?: bigint | number | undefined;
    }
    interface SNIEntry {
        /**
         * The TLS private keys. **Required.**
         */
        keys: KeyObject | readonly KeyObject[];
        /**
         * The TLS certificates. **Required.**
         */
        certs: ArrayBuffer | NodeJS.ArrayBufferView | ReadonlyArray<ArrayBuffer | NodeJS.ArrayBufferView>;
        /**
         * Verify the private key. Default: `false`.
         */
        verifyPrivateKey?: boolean | undefined;
        /**
         * The port to advertise in ORIGIN frames (RFC 9412) for this host name. **Default:** `443`. Only used for HTTP/3 sessions.
         */
        port?: number | undefined;
        /**
         * Whether to include this host name in ORIGIN frames. **Default:** `true`. Set to `false` to exclude a host name
         * from ORIGIN advertisements. Wildcard (`'*'`) entries are always excluded regardless of this setting.
         */
        authoritative?: boolean | undefined;
    }
    /**
     * @since v26.3.0
     */
    interface ApplicationOptions {
        /**
         * Maximum number of header name-value pairs accepted per header block.
         * Headers beyond this limit are silently dropped. **Default:** `128`
         */
        maxHeaderPairs?: bigint | number | undefined;
        /**
         * Maximum total byte length of all header names and values combined per header
         * block. Headers that would push the total over this limit are silently
         * dropped. **Default:** `8192`
         */
        maxHeaderLength?: bigint | number | undefined;
        /**
         * Maximum size of a compressed header field section (QPACK). `0` means
         * unlimited. **Default:** `0`
         */
        maxFieldSectionSize?: bigint | number | undefined;
        /**
         * QPACK dynamic table capacity in bytes. Set to `0` to disable the dynamic
         * table. **Default:** `4096`
         */
        qpackMaxDTableCapacity?: bigint | number | undefined;
        /**
         * QPACK encoder maximum dynamic table capacity. **Default:** `4096`
         */
        qpackEncoderMaxDTableCapacity?: bigint | number | undefined;
        /**
         * Maximum number of streams that can e blocked waiting for QPACK dynamic table
         * updates. **Default:** `100`
         */
        qpackBlockedStreams?: bigint | number | undefined;
        /**
         * Enable the extended CONNECT protocol (RFC 9220). **Default:** `false`
         */
        enableConnectProtocol?: boolean | undefined;
        /**
         * Enable HTTP/3 datagrams (RFC 9297). **Default:** `false`
         */
        enableDatagrams?: boolean | undefined;
    }
    /**
     * @since v23.8.0
     */
    interface SessionOptions {
        /**
         * An endpoint to use.
         * @since v23.8.0
         */
        endpoint?: EndpointOptions | QuicEndpoint | undefined;
        /**
         * The ALPN (Application-Layer Protocol Negotiation) identifier(s).
         *
         * For **client** sessions, this is a single string specifying the protocol
         * the client wants to use (e.g. `'h3'`).
         *
         * For **server** sessions, this is an array of protocol names in preference
         * order that the server supports (e.g. `['h3', 'h3-29']`). During the TLS
         * handshake, the server selects the first protocol from its list that the
         * client also supports.
         *
         * The negotiated ALPN determines which Application implementation is used
         * for the session. `'h3'` and `'h3-*'` variants select the HTTP/3
         * application; all other values select the default application.
         * @since v26.1.0
         */
        alpn?: string | readonly string[] | undefined;
        /**
         * Application-specific options.
         * @since v26.2.0
         */
        application?: ApplicationOptions | undefined;
        /**
         * The CA certificates to use for client sessions. For server sessions, CA
         * certificates are specified per-identity in the `sessionOptions.sni` map.
         * @since v23.8.0
         */
        ca?: ArrayBuffer | NodeJS.ArrayBufferView | ReadonlyArray<ArrayBuffer | NodeJS.ArrayBufferView> | undefined;
        /**
         * Specifies the congestion control algorithm that will be used.
         * Must be set to one of either `'reno'`, `'cubic'`, or `'bbr'`.
         *
         * This is an advanced option that users typically won't have need to specify.
         * @since v23.8.0
         */
        cc?: `${constants.cc}` | undefined;
        /**
         * The TLS certificates to use for client sessions. For server sessions,
         * certificates are specified per-identity in the `sessionOptions.sni` map.
         * @since v23.8.0
         */
        certs?: ArrayBuffer | NodeJS.ArrayBufferView | ReadonlyArray<ArrayBuffer | NodeJS.ArrayBufferView> | undefined;
        /**
         * The list of supported TLS 1.3 cipher algorithms.
         * @since v23.8.0
         */
        ciphers?: string | undefined;
        /**
         * The CRL to use for client sessions. For server sessions, CRLs are specified
         * per-identity in the `sessionOptions.sni` map.
         * @since v23.8.0
         */
        crl?: ArrayBuffer | NodeJS.ArrayBufferView | ReadonlyArray<ArrayBuffer | NodeJS.ArrayBufferView> | undefined;
        /**
         * When `true`, enables TLS 0-RTT early data for this session. Early data
         * allows the client to send application data before the TLS handshake
         * completes, reducing latency on reconnection when a valid session ticket
         * is available. Set to `false` to disable early data support.
         * @since v26.2.0
         */
        enableEarlyData?: boolean | undefined;
        /**
         * The list of supported TLS 1.3 cipher groups.
         * @since v23.8.0
         */
        groups?: string | undefined;
        /**
         * When `true`, enables TLS key logging for the session. Key material is
         * delivered to the `session.onkeylog` callback in [NSS Key Log Format](https://udn.realityripple.com/docs/Mozilla/Projects/NSS/Key_Log_Format).
         * Each callback invocation receives a single line of key material. The output
         * can be used with tools such as Wireshark to decrypt captured QUIC traffic.
         * @since v23.8.0
         */
        keylog?: boolean | undefined;
        /**
         * The TLS crypto keys to use for client sessions. For server sessions,
         * keys are specified per-identity in the `sessionOptions.sni` map.
         * @since v23.8.0
         */
        keys?: KeyObject | readonly KeyObject[] | undefined;
        /**
         * Specifies the maximum UDP packet payload size.
         * @since v23.8.0
         */
        maxPayloadSize?: bigint | number | undefined;
        /**
         * Specifies the maximum stream flow-control window size.
         * @since v23.8.0
         */
        maxStreamWindow?: bigint | number | undefined;
        /**
         * Specifies the maximum session flow-control window size.
         * @since v23.8.0
         */
        maxWindow?: bigint | number | undefined;
        /**
         * The minimum QUIC version number to allow. This is an advanced option that users
         * typically won't have need to specify.
         * @since v23.8.0
         */
        minVersion?: number | undefined;
        /**
         * When the remote peer advertises a preferred address, this option specifies whether
         * to use it or ignore it. The default is `'ignore'` because honoring a server's
         * preferred address causes the client to migrate its connection to a different IP
         * address, which can be exploited for data exfiltration attacks that are
         * indistinguishable from legitimate QUIC connection migration at the network level.
         * Set to `'use'` only when connecting to trusted servers that require preferred
         * address migration.
         * @since v23.8.0
         */
        preferredAddressPolicy?: "use" | "ignore" | "default" | undefined;
        /**
         * When `true`, enables [qlog](https://datatracker.ietf.org/doc/draft-ietf-quic-qlog-main-schema/) diagnostic output for the session. Qlog data
         * is delivered to the `session.onqlog` callback as chunks of [JSON-SEQ](https://www.rfc-editor.org/rfc/rfc7464)
         * formatted text. The output can be analyzed with qlog visualization tools
         * such as [qvis](https://qvis.quictools.info/).
         * @since v23.8.0
         */
        qlog?: boolean | undefined;
        /**
         * A session ticket to use for 0RTT session resumption.
         * @since v23.8.0
         */
        sessionTicket?: NodeJS.ArrayBufferView | undefined;
        /**
         * Controls which datagram to drop when the pending datagram queue
         * (sized by `session.maxPendingDatagrams`) is full. Must be one of
         * `'drop-oldest'` (discard the oldest queued datagram to make room) or
         * `'drop-newest'` (reject the incoming datagram). Dropped datagrams are
         * reported as lost via the `ondatagramstatus` callback.
         *
         * This option is immutable after session creation.
         * @since v26.2.0
         */
        datagramDropPolicy?: "drop-oldest" | "drop-newest" | undefined;
        /**
         * The maximum time in milliseconds that a peer-initiated stream can be idle
         * (no data received) before it is automatically destroyed. This protects
         * against slowloris-style attacks where a remote peer opens streams but never
         * sends data, holding server resources indefinitely. Only peer-initiated
         * streams are checked — locally-initiated streams are the application's
         * responsibility. Set to `0` to disable.
         *
         * The idle check runs as part of the normal send processing loop, so it adds
         * no additional timers or event loop overhead. The
         * `session.stats.streamsIdleTimedOut` counter tracks how many streams have been
         * destroyed by this mechanism.
         * @since v26.3.0
         */
        streamIdleTimeout?: bigint | number | undefined;
        /**
         * The maximum number of `SendPendingData` cycles a datagram can survive
         * without being sent before it is abandoned. When a datagram cannot be
         * sent due to congestion control or packet size constraints, it remains
         * in the queue and the attempt counter increments. Once the limit is
         * reached, the datagram is dropped and reported as `'abandoned'` via the
         * `ondatagramstatus` callback. Valid range: `1` to `255`.
         * @since v26.2.0
         */
        maxDatagramSendAttempts?: number | undefined;
        /**
         * A multiplier applied to the Probe Timeout (PTO) to compute the draining
         * period duration after receiving a `CONNECTION_CLOSE` frame from the peer.
         * RFC 9000 Section 10.2 requires the draining period to persist for at least
         * three times the current PTO. The valid range is `3` to `255`. Values below
         * `3` are clamped to `3`.
         * @since v26.2.0
         */
        drainingPeriodMultiplier?: number | undefined;
        /**
         * Specifies the keep-alive timeout in milliseconds. When set to a non-zero
         * value, PING frames will be sent automatically to keep the connection alive
         * before the idle timeout fires. The value should be less than the effective
         * idle timeout (`maxIdleTimeout` transport parameter) to be useful.
         * @since v23.8.0
         */
        handshakeTimeout?: bigint | number | undefined;
        /**
         * Controls how the client handles server certificate validation:
         *
         * * `'strict'` — OpenSSL aborts the TLS handshake immediately if the server's
         *   certificate fails validation. The `session.opened` promise rejects with a
         *   TLS error. The application cannot inspect the certificate or the error
         *   details. This is the most secure mode.
         *
         * * `'auto'` — The TLS handshake completes regardless of validation result.
         *   If validation fails, the `session.opened` promise is rejected with an error
         *   containing the validation reason, and the session is destroyed. The
         *   `onhandshake` callback (if set) fires before rejection, allowing diagnostic
         *   logging. This is the default and matches the behavior of `tls.connect()`
         *   with `rejectUnauthorized: true`.
         *
         * * `'manual'` — The TLS handshake completes regardless of validation result.
         *   The `session.opened` promise resolves with the handshake info, which includes
         *   `validationErrorReason` and `validationErrorCode` if validation failed. The
         *   application is responsible for checking these values and deciding whether to
         *   continue. Use this mode for custom validation logic, certificate pinning, or
         *   intentionally accepting self-signed certificates.
         * @since v26.3.0
         */
        verifyPeer?: "strict" | "auto" | "manual" | undefined;
        /**
         * The peer server name to target (SNI). Defaults to `'localhost'`.
         * @since v26.1.0
         */
        servername?: string | undefined;
        /**
         * An object mapping host names to TLS identity options for Server Name
         * Indication (SNI) support. This is required for server sessions and must
         * contain at least one entry. The special key `'*'` specifies the optional
         * default/fallback identity used when no other host name matches. If no
         * wildcard entry is provided, connections with unrecognized server names
         * will be rejected with a TLS `unrecognized_name` alert. Each entry may
         * contain:
         * @since v26.1.0
         */
        sni?: Record<string, SNIEntry> | undefined;
        /**
         * True to enable TLS tracing output.
         * @since v23.8.0
         */
        tlsTrace?: boolean | undefined;
        /**
         * An opaque address validation token previously received from the server
         * via the `session.onnewtoken` callback. Providing a valid token on
         * reconnection allows the client to skip the server's address validation,
         * reducing handshake latency.
         * @since v26.2.0
         */
        token?: NodeJS.ArrayBufferView | undefined;
        /**
         * The QUIC transport parameters to use for the session.
         * @since v23.8.0
         */
        transportParams?: TransportParams | undefined;
        /**
         * Specifies the maximum number of unacknowledged packets a session should allow.
         * @since v23.8.0
         */
        unacknowledgedPacketThreshold?: bigint | number | undefined;
        /**
         * If `true`, the peer certificate is verified against the list of supplied CAs.
         * An error is emitted if verification fails; the error can be inspected via
         * the `validationErrorReason` and `validationErrorCode` fields in the
         * handshake callback. If `false`, peer certificate verification errors are
         * ignored.
         */
        rejectUnauthorized?: boolean | undefined;
        /**
         * When `true` (the default), `connect()` will attempt to reuse an existing
         * endpoint rather than creating a new one for each session. This provides
         * connection pooling behavior — multiple sessions can share a single UDP
         * socket. The reuse logic will not return an endpoint that is listening on
         * the same address as the connect target (to prevent CID routing conflicts).
         *
         * Set to `false` to force creation of a new endpoint for the session. This
         * is useful when endpoint isolation is required (e.g., testing stateless
         * reset behavior where source port identity matters).
         * @since v26.2.0
         */
        reuseEndpoint?: boolean | undefined;
        /**
         * True to require verification of TLS client certificate.
         * @since v23.8.0
         */
        verifyClient?: boolean | undefined;
        /**
         * True to require private key verification for client sessions. For server
         * sessions, this option is specified per-identity in the
         * `sessionOptions.sni` map.
         * @since v23.8.0
         */
        verifyPrivateKey?: boolean | undefined;
        /**
         * The QUIC version number to use. This is an advanced option that users typically
         * won't have need to specify.
         * @since v23.8.0
         */
        version?: number | undefined;
        // Undocumented
        onerror?: QuicSession["onerror"] | undefined;
        onstream?: QuicSession["onstream"] | undefined;
        ondatagram?: QuicSession["ondatagram"] | undefined;
        ondatagramstatus?: QuicSession["ondatagramstatus"] | undefined;
        onpathvalidation?: QuicSession["onpathvalidation"] | undefined;
        onsessionticket?: QuicSession["onsessionticket"] | undefined;
        onversionnegotiation?: QuicSession["onversionnegotiation"] | undefined;
        onhandshake?: QuicSession["onhandshake"] | undefined;
        onnewtoken?: QuicSession["onnewtoken"] | undefined;
        onearlyrejected?: QuicSession["onearlyrejected"] | undefined;
        onorigin?: QuicSession["onorigin"] | undefined;
        ongoaway?: QuicSession["ongoaway"] | undefined;
        onkeylog?: QuicSession["onkeylog"] | undefined;
        onqlog?: QuicSession["onqlog"] | undefined;
        onheaders?: QuicStream["onheaders"] | undefined;
        ontrailers?: QuicStream["ontrailers"] | undefined;
        oninfo?: QuicStream["oninfo"] | undefined;
        onwanttrailers?: QuicStream["onwanttrailers"] | undefined;
    }
    /**
     * Initiate a new client-side session.
     *
     * ```js
     * import { connect } from 'node:quic';
     * import { Buffer } from 'node:buffer';
     *
     * const enc = new TextEncoder();
     * const alpn = 'foo';
     * const client = await connect('123.123.123.123:8888', { alpn });
     * await client.createUnidirectionalStream({
     *   body: enc.encode('hello world'),
     * });
     * ```
     *
     * By default, every call to `connect(...)` will create a new local
     * `QuicEndpoint` instance bound to a new random local IP port. To
     * specify the exact local address to use, or to multiplex multiple
     * QUIC sessions over a single local port, pass the `endpoint` option
     * with either a `QuicEndpoint` or `EndpointOptions` as the argument.
     *
     * ```js
     * import { QuicEndpoint, connect } from 'node:quic';
     *
     * const endpoint = new QuicEndpoint({
     *   address: '127.0.0.1:1234',
     * });
     *
     * const client = await connect('123.123.123.123:8888', { endpoint });
     * ```
     * @since v23.8.0
     */
    function connect(address: string | SocketAddress, options?: SessionOptions): Promise<QuicSession>;
    /**
     * Configures the endpoint to listen as a server. When a new session is initiated by
     * a remote peer, the given `onsession` callback will be invoked with the created
     * session.
     *
     * ```js
     * import { listen } from 'node:quic';
     *
     * const endpoint = await listen((session) => {
     *   // ... handle the session
     * });
     *
     * // Closing the endpoint allows any sessions open when close is called
     * // to complete naturally while preventing new sessions from being
     * // initiated. Once all existing sessions have finished, the endpoint
     * // will be destroyed. The call returns a promise that is resolved once
     * // the endpoint is destroyed.
     * await endpoint.close();
     * ```
     *
     * By default, every call to `listen(...)` will create a new local
     * `QuicEndpoint` instance bound to a new random local IP port. To
     * specify the exact local address to use, or to multiplex multiple
     * QUIC sessions over a single local port, pass the `endpoint` option
     * with either a `QuicEndpoint` or `EndpointOptions` as the argument.
     *
     * At most, any single `QuicEndpoint` can only be configured to listen as
     * a server once.
     * @since v23.8.0
     */
    function listen(onsession: OnSessionCallback, options?: SessionOptions): Promise<QuicEndpoint>;
    /**
     * The endpoint configuration options passed when constructing a new `QuicEndpoint` instance.
     * @since v23.8.0
     */
    interface EndpointOptions {
        /**
         * If not specified the endpoint will bind to IPv4 `localhost` on a random port.
         * @since v23.8.0
         */
        address?: SocketAddress | string | undefined;
        /**
         * An optional `net.BlockList` instance for filtering incoming packets by
         * source address. When configured, every received UDP packet is checked against
         * the block list before any QUIC processing occurs, minimizing resource
         * expenditure on blocked sources. The block list is evaluated live — rules
         * added to the `BlockList` object after the endpoint is created take effect
         * immediately.
         *
         * See `endpointOptions.blockListPolicy` for how matches are interpreted.
         * @since v26.3.0
         */
        blockList?: BlockList | undefined;
        /**
         * Controls how the `endpointOptions.blockList` is interpreted:
         *
         * * `'deny'` — Packets from addresses matching the block list are dropped.
         *   All other addresses are accepted. This is the typical blocklist mode.
         * * `'allow'` — Only packets from addresses matching the block list are
         *   accepted. All other addresses are dropped. This is an allowlist mode
         *   for restricting access to known clients.
         *
         * If no block list is configured, this option has no effect.
         * @since v26.3.0
         */
        blockListPolicy?: "deny" | "allow" | undefined;
        /**
         * The endpoint maintains an internal cache of validated socket addresses as a
         * performance optimization. This option sets the maximum number of addresses
         * that are cached. This is an advanced option that users typically won't have
         * need to specify.
         * @since v23.8.0
         */
        addressLRUSize?: bigint | number | undefined;
        /**
         * When `true`, the endpoint will not send stateless reset packets in response
         * to packets from unknown connections. Stateless resets allow a peer to detect
         * that a connection has been lost even when the server has no state for it.
         * Disabling them may be useful in testing or when stateless resets are handled
         * at a different layer.
         * @since v26.2.0
         */
        disableStatelessReset?: boolean | undefined;
        /**
         * The number of seconds an endpoint will remain alive after all sessions have
         * closed and it is no longer listening. A value of `0` (default) means the
         * endpoint is only destroyed when explicitly closed via `endpoint.close()` or
         * `endpoint.destroy()`. A positive value starts an idle timer when the endpoint
         * becomes idle; if no new sessions are created before the timer fires, the
         * endpoint is automatically destroyed. This is useful for connection pooling
         * where endpoints should linger briefly for reuse by future `connect()` calls.
         * @since v26.2.0
         */
        idleTimeout?: number | undefined;
        /**
         * When `true`, indicates that the endpoint should bind only to IPv6 addresses.
         * @since v23.8.0
         */
        ipv6Only?: boolean | undefined;
        /**
         * Specifies the maximum number of concurrent sessions allowed per remote IP
         * address (ignoring port). When the limit is reached, new connections from the
         * same IP are refused with `CONNECTION_REFUSED`. A value of `0` disables the
         * limit. The maximum value is `65535`.
         *
         * This limit can also be changed dynamically after construction via
         * `endpoint.maxConnectionsPerHost`.
         * @since v23.8.0
         */
        maxConnectionsPerHost?: number | undefined;
        /**
         * Specifies the maximum total number of concurrent sessions across all remote
         * addresses. When the limit is reached, new connections are refused with
         * `CONNECTION_REFUSED`. A value of `0` disables the limit. The maximum value is
         * `65535`.
         *
         * This limit can also be changed dynamically after construction via
         * `endpoint.maxConnectionsTotal`.
         * @since v23.8.0
         */
        maxConnectionsTotal?: number | undefined;
        /**
         * The maximum number of QUIC retry packets the endpoint will send per second.
         * This is a global rate limit (not per-host) that caps the total server-wide
         * retry response rate, preventing spoofed-source floods from consuming unbounded
         * resources.
         * @since v26.3.0
         */
        retryRate?: number | undefined;
        /**
         * The maximum burst of retry packets allowed before rate limiting takes effect.
         * @since v26.3.0
         */
        retryBurst?: number | undefined;
        /**
         * The maximum number of stateless reset packets the endpoint will send per second.
         * @since v26.3.0
         */
        statelessResetRate?: number | undefined;
        /**
         * The maximum burst of stateless reset packets allowed before rate limiting
         * takes effect.
         * @since v26.3.0
         */
        statelessResetBurst?: number | undefined;
        /**
         * The maximum number of version negotiation packets the endpoint will send per
         * second.
         * @since v26.3.0
         */
        versionNegotiationRate?: number | undefined;
        /**
         * The maximum number of immediate connection close packets the endpoint will
         * send per second.
         * @since v26.3.0
         */
        versionNegotiationBurst?: number | undefined;
        /**
         * The maximum number of immediate connection close packets the endpoint will
         * send per second.
         * @since v26.3.0
         */
        immediateCloseRate?: number | undefined;
        /**
         * The maximum burst of immediate connection close packets allowed before rate
         * limiting takes effect.
         * @since v26.3.0
         */
        immediateCloseBurst?: number | undefined;
        /**
         * The maximum number of new sessions that a single remote address can create per
         * second. This is a per-host rate limit tracked in the address validation LRU
         * cache. It prevents a validated remote address from churning through sessions
         * (rapidly opening and abandoning connections) faster than the server can handle.
         * For benchmarking where traffic comes from a single source, set this to a high
         * value.
         * @since v26.3.0
         */
        sessionCreationRate?: number | undefined;
        /**
         * The maximum burst of new session creations allowed from a single remote address
         * before rate limiting takes effect.
         * @since v26.3.0
         */
        sessionCreationBurst?: number | undefined;
        /**
         * Specifies the length of time a QUIC retry token is considered valid.
         * @since v23.8.0
         */
        retryTokenExpiration?: bigint | number | undefined;
        /**
         * Specifies the 16-byte secret used to generate QUIC retry tokens.
         * @since v23.8.0
         */
        resetTokenSecret?: NodeJS.ArrayBufferView | undefined;
        /**
         * Specifies the length of time a QUIC token is considered valid.
         * @since v23.8.0
         */
        tokenExpiration?: bigint | number | undefined;
        /**
         * Specifies the 16-byte secret used to generate QUIC tokens.
         * @since v23.8.0
         */
        tokenSecret?: NodeJS.ArrayBufferView | undefined;
        /**
         * @since v23.8.0
         */
        udpReceiveBufferSize?: number | undefined;
        /**
         * @since v23.8.0
         */
        udpSendBufferSize?: number | undefined;
        /**
         * @since v23.8.0
         */
        udpTTL?: number | undefined;
        /**
         * When `true`, requires that the endpoint validate peer addresses using retry packets
         * while establishing a new connection.
         * @since v23.8.0
         */
        validateAddress?: boolean | undefined;
    }
    interface SetSNIContextsOptions {
        replace?: boolean | undefined;
    }
    /**
     * A `QuicEndpoint` encapsulates the local UDP-port binding for QUIC. It can be
     * used as both a client and a server.
     * @since v23.8.0
     */
    class QuicEndpoint implements AsyncDisposable {
        constructor(options?: EndpointOptions);
        /**
         * The local UDP socket address to which the endpoint is bound, if any.
         *
         * If the endpoint is not currently bound then the value will be `undefined`. Read only.
         * @since v23.8.0
         */
        readonly address: SocketAddress | undefined;
        /**
         * When `endpoint.busy` is set to true, the endpoint will temporarily reject
         * new sessions from being created. Read/write.
         *
         * ```js
         * // Mark the endpoint busy. New sessions will be prevented.
         * endpoint.busy = true;
         *
         * // Mark the endpoint free. New session will be allowed.
         * endpoint.busy = false;
         * ```
         *
         * The `busy` property is useful when the endpoint is under heavy load and needs to
         * temporarily reject new sessions while it catches up.
         * @since v23.8.0
         */
        busy: boolean;
        /**
         * Gracefully close the endpoint. The endpoint will close and destroy itself when
         * all currently open sessions close. Once called, new sessions will be rejected.
         *
         * Returns a promise that is fulfilled when the endpoint is destroyed.
         * @since v23.8.0
         */
        close(): Promise<void>;
        /**
         * A promise that is fulfilled when the endpoint is destroyed. This will be the same promise that is
         * returned by the `endpoint.close()` function. Read only.
         * @since v23.8.0
         */
        readonly closed: Promise<void>;
        /**
         * True if `endpoint.close()` has been called and closing the endpoint has not yet completed.
         * Read only.
         * @since v23.8.0
         */
        readonly closing: boolean;
        /**
         * Forcefully closes the endpoint by forcing all open sessions to be immediately
         * closed.
         * @since v23.8.0
         */
        destroy(error?: any): void;
        /**
         * True if `endpoint.destroy()` has been called. Read only.
         * @since v23.8.0
         */
        readonly destroyed: boolean;
        /**
         * True if the endpoint is actively listening for incoming connections. Read only.
         * @since v26.2.0
         */
        readonly listening: boolean;
        /**
         * The maximum number of concurrent connections allowed per remote IP address.
         * `0` means unlimited (default). Can be set at construction time via the
         * `maxConnectionsPerHost` option and changed dynamically at any time.
         * The valid range is `0` to `65535`.
         * @since v26.2.0
         */
        maxConnectionsPerHost: number;
        /**
         * The maximum total number of concurrent connections across all remote
         * addresses. `0` means unlimited (default). Can be set at construction time via
         * the `maxConnectionsTotal` option and changed dynamically at any time.
         * The valid range is `0` to `65535`.
         * @since v26.2.0
         */
        maxConnectionsTotal: number;
        /**
         * Replaces or updates the SNI TLS contexts for this endpoint. This allows
         * changing the TLS identity (key/certificate) used for specific host names
         * without restarting the endpoint. Existing sessions are unaffected — only
         * new sessions will use the updated contexts.
         *
         * ```js
         * endpoint.setSNIContexts({
         *   'api.example.com': { keys: [newApiKey], certs: [newApiCert] },
         * });
         *
         * // Replace the entire SNI map
         * endpoint.setSNIContexts({
         *   'api.example.com': { keys: [newApiKey], certs: [newApiCert] },
         * }, { replace: true });
         * ```
         * @since v26.1.0
         * @param entries An object mapping host names to TLS identity options.
         * Each entry must include `keys` and `certs`.
         */
        setSNIContexts(entries: Record<string, SNIEntry>, options?: SetSNIContextsOptions): void;
        /**
         * The statistics collected for an active endpoint. Read only.
         * @since v23.8.0
         */
        readonly stats: QuicEndpoint.Stats;
        /**
         * Calls `endpoint.close()` and returns a promise that fulfills when the
         * endpoint has closed.
         * @since v23.8.0
         */
        [Symbol.asyncDispose](): Promise<void>;
    }
    namespace QuicEndpoint {
        /**
         * A view of the collected statistics for an endpoint.
         * @since v23.8.0
         */
        class Stats {
            private constructor();
            /**
             * A timestamp indicating the moment the endpoint was created. Read only.
             * @since v23.8.0
             */
            readonly createdAt: bigint;
            /**
             * A timestamp indicating the moment the endpoint was destroyed. Read only.
             * @since v23.8.0
             */
            readonly destroyedAt: bigint;
            /**
             * The total number of bytes received by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly bytesReceived: bigint;
            /**
             * The total number of bytes sent by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly bytesSent: bigint;
            /**
             * The total number of QUIC packets successfully received by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly packetsReceived: bigint;
            /**
             * The total number of QUIC packets successfully sent by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly packetsSent: bigint;
            /**
             * The total number of peer-initiated sessions received by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly serverSessions: bigint;
            /**
             * The total number of sessions initiated by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly clientSessions: bigint;
            /**
             * The total number of times an initial packet was rejected due to the
             * endpoint being marked busy. Read only.
             * @since v23.8.0
             */
            readonly serverBusyCount: bigint;
            /**
             * The total number of retry packets sent by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly retryCount: bigint;
            /**
             * The total number of retry packets dropped by the global rate
             * limiter. Read only. A non-zero value indicates the endpoint is under retry
             * flood pressure.
             * @since v26.3.0
             */
            readonly retryRateLimited: bigint;
            /**
             * The total number of version negotiation packets sent by this
             * endpoint. Read only.
             * @since v23.8.0
             */
            readonly versionNegotiationCount: bigint;
            /**
             * The total number of version negotiation packets dropped by
             * the global rate limiter. Read only.
             * @since v26.3.0
             */
            readonly versionNegotiationRateLimited: bigint;
            /**
             * The total number of stateless reset packets sent by this
             * endpoint. Read only.
             * @since v23.8.0
             */
            readonly statelessResetCount: bigint;
            /**
             * The total number of stateless reset packets dropped by the
             * global rate limiter. Read only.
             * @since v26.3.0
             */
            readonly statelessResetRateLimited: bigint;
            /**
             * The total number of immediate connection close packets sent
             * by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly immediateCloseCount: bigint;
            /**
             * The total number of immediate connection close packets
             * dropped by the global rate limiter. Read only.
             * @since v26.3.0
             */
            readonly immediateCloseRateLimited: bigint;
            /**
             * The total number of session creation attempts dropped by the
             * per-host rate limiter. Read only. A non-zero value indicates one or more
             * remote addresses are creating sessions faster than the configured rate allows.
             * @since v26.3.0
             */
            readonly sessionCreationRateLimited: bigint;
            /**
             * The total number of incoming packets dropped by the
             * block list filter. Read only.
             * @since v26.3.0
             */
            readonly packetsBlocked: bigint;
        }
    }
    interface CreateStreamOptions {
        /**
         * The outbound body source. See `stream.setBody()` for details on
         * supported types. When omitted, the stream starts half-closed (writable
         * side open, no body queued).
         */
        body?: StreamBody | undefined;
        /**
         * Initial request or response headers to send. Only
         * used when the session supports headers (e.g. HTTP/3). If `body` is not
         * specified and `headers` is provided, the stream is treated as
         * headers-only (terminal).
         */
        headers?: NodeJS.Dict<string | readonly string[]> | readonly string[] | undefined;
        /**
         * The priority level of the stream. One of `'high'`,
         * `'default'`, or `'low'`. **Default:** `'default'`.
         */
        priority?: "high" | "default" | "low" | undefined;
        /**
         * When `true`, data from this stream may be
         * interleaved with data from other streams of the same priority level.
         * When `false`, the stream should be completed before same-priority peers.
         * **Default:** `false`.
         */
        incremental?: boolean | undefined;
        /**
         * The maximum number of bytes that the writer
         * will buffer before `writeSync()` returns `false`. When the buffered
         * data exceeds this limit, the caller should wait for drain before
         * writing more. **Default:** `65536` (64 KB).
         */
        highWaterMark?: number | undefined;
        /**
         * Callback for received initial response headers.
         * Called with `(headers)`.
         */
        onheaders?: QuicStream["onheaders"] | undefined;
        /**
         * Callback for received trailing headers.
         * Called with `(trailers)`.
         */
        ontrailers?: QuicStream["ontrailers"] | undefined;
        /**
         * Callback for received informational (1xx) headers.
         * Called with `(headers)`.
         */
        oninfo?: QuicStream["oninfo"] | undefined;
        /**
         * Callback when trailers should be sent.
         */
        onwanttrailers?: QuicStream["onwanttrailers"] | undefined;
    }
    interface SessionDestroyOptions {
        /**
         * The error code to include in the `CONNECTION_CLOSE`
         * frame sent to the peer. **Default:** `0` (no error).
         */
        code?: bigint | number | undefined;
        /**
         * Either `'transport'` or `'application'`. Determines the
         * error code namespace used in the `CONNECTION_CLOSE` frame. When `'transport'`
         * (the default), the frame type is `0x1c` and the code is interpreted as a QUIC
         * transport error. When `'application'`, the frame type is `0x1d` and the code
         * is application-specific. **Default:** `'transport'`.
         */
        type?: "transport" | "application" | undefined;
        /**
         * An optional human-readable reason string included in
         * the `CONNECTION_CLOSE` frame. Per RFC 9000, this is for diagnostic purposes
         * only and should not be used for machine-readable error descriptions.
         */
        reason?: string | undefined;
    }
    interface SessionHandshakeInfo {
        /**
         * The local socket address.
         */
        local: SocketAddress;
        /**
         * The remote socket address.
         */
        remote: SocketAddress;
        /**
         * The SNI server name negotiated during the handshake.
         */
        servername: string;
        /**
         * The ALPN protocol negotiated during the handshake.
         */
        protocol: string;
        /**
         * The name of the negotiated TLS cipher suite.
         */
        cipher: string;
        /**
         * The TLS protocol version of the cipher suite
         * (e.g., `'TLSv1.3'`).
         */
        cipherVersion: string;
        /**
         * If certificate validation failed, the
         * reason string. Empty string if validation succeeded.
         */
        validationErrorReason: string;
        /**
         * If certificate validation failed, the
         * error code. `0` if validation succeeded.
         */
        validationErrorCode: number;
        /**
         * Whether 0-RTT early data was attempted.
         */
        earlyDataAttempted: boolean;
        /**
         * Whether 0-RTT early data was accepted by
         * the server.
         */
        earlyDataAccepted: boolean;
    }
    interface SessionPath {
        local: SocketAddress;
        remote: SocketAddress;
    }
    /**
     * A `QuicSession` represents the local side of a QUIC connection.
     * @since v23.8.0
     */
    class QuicSession implements AsyncDisposable {
        private constructor();
        /**
         * The current application-level options for this session. These include settings
         * that are specific to the negotiated application protocol (e.g. HTTP/3) and may
         * be negotiated separately from the transport parameters. Read only.
         * @since v26.3.0
         */
        readonly applicationOptions: { [K in keyof ApplicationOptions]-?: ApplicationOptions[K] & (bigint | boolean) };
        /**
         * Initiate a graceful close of the session. Existing streams will be allowed
         * to complete but no new streams will be opened. Once all streams have closed,
         * the session will be destroyed. The returned promise will be fulfilled once
         * the session has been destroyed. If a non-zero `code` is specified, the
         * promise will reject with an `ERR_QUIC_TRANSPORT_ERROR` or
         * `ERR_QUIC_APPLICATION_ERROR` depending on the `type`.
         * @since v23.8.0
         */
        close(options?: SessionDestroyOptions): Promise<void>;
        /**
         * A promise that is fulfilled once the TLS handshake completes successfully.
         * The resolved value contains information about the established session
         * including the negotiated protocol, cipher suite, certificate validation
         * status, and 0-RTT early data status.
         *
         * If the handshake fails or the session is destroyed before the handshake
         * completes, the promise will be rejected.
         * @since v26.2.0
         */
        readonly opened: Promise<SessionHandshakeInfo>;
        /**
         * A promise that is fulfilled once the session is destroyed.
         * @since v23.8.0
         */
        readonly closed: Promise<void>;
        /**
         * True if `session.close()` has been called and the session has not yet
         * been destroyed. Read only.
         * @since v26.2.0
         */
        readonly closing: boolean;
        /**
         * Immediately destroy the session. All streams will be destroyed and the
         * session will be closed. If `error` is provided and [`session.onerror`][] is
         * set, the `onerror` callback is invoked before destruction. The
         * `session.closed` promise will reject with the error. If `options` is
         * provided, the `CONNECTION_CLOSE` frame sent to the peer will include the
         * specified error code, type, and reason.
         * @since v23.8.0
         */
        destroy(error?: any, options?: SessionDestroyOptions): void;
        /**
         * True if `session.destroy()` has been called. Read only.
         * @since v23.8.0
         */
        readonly destroyed: boolean;
        /**
         * The endpoint that created this session. Returns `null` if the session
         * has been destroyed. Read only.
         * @since v23.8.0
         */
        readonly endpoint: QuicEndpoint | null;
        /**
         * An optional callback invoked when the session is destroyed with an error.
         * This includes errors caused by user callbacks that throw or reject (see
         * [Callback error handling](https://nodejs.org/docs/latest-v26.x/api/quic.html#callback-error-handling)). The callback receives a single argument: the
         * error that triggered the destruction. If the `onerror` callback itself throws
         * or returns a promise that rejects, the error is surfaced as an uncaught
         * exception. Read/write.
         *
         * Can also be set via the `onerror` option in `quic.connect()` or
         * `quic.listen()`.
         * @since v26.2.0
         */
        onerror: ((this: QuicSession, error: any) => void) | undefined;
        /**
         * The callback to invoke when a new stream is initiated by a remote peer. Read/write.
         * @since v23.8.0
         */
        onstream: OnStreamCallback | undefined;
        /**
         * The callback to invoke when the server rejects 0-RTT early data. When
         * this fires, all streams that were opened during the 0-RTT phase have
         * been destroyed. The application should re-open streams if needed.
         * Read/write.
         *
         * This callback only fires on the client side when the server rejects
         * the client's 0-RTT attempt. The connection falls back to 1-RTT and
         * continues normally.
         * @since v26.2.0
         */
        onearlyrejected: ((this: QuicSession) => void) | undefined;
        /**
         * The callback to invoke when a new datagram is received from a remote peer. Read/write.
         * @since v23.8.0
         */
        ondatagram: OnDatagramCallback | undefined;
        /**
         * The callback to invoke when the status of a datagram is updated. Read/write.
         * @since v23.8.0
         */
        ondatagramstatus: OnDatagramStatusCallback | undefined;
        /**
         * The callback to invoke when the path validation is updated. Read/write.
         * @since v23.8.0
         */
        onpathvalidation: OnPathValidationCallback | undefined;
        /**
         * The callback to invoke when a new session ticket is received. Read/write.
         * @since v23.8.0
         */
        onsessionticket: OnSessionTicketCallback | undefined;
        /**
         * The callback to invoke when a version negotiation is initiated. Read/write.
         * @since v23.8.0
         */
        onversionnegotiation: OnVersionNegotiationCallback | undefined;
        /**
         * The callback to invoke when the TLS handshake is completed. Read/write.
         * @since v23.8.0
         */
        onhandshake: OnHandshakeCallback | undefined;
        /**
         * The callback to invoke when a NEW\_TOKEN token is received from the server.
         * The token can be passed as the `token` option on a future connection to
         * the same server to skip address validation. Read/write.
         * @since v26.2.0
         */
        onnewtoken: OnNewTokenCallback | undefined;
        /**
         * The callback to invoke when an ORIGIN frame (RFC 9412) is received from
         * the server, indicating which origins the server is authoritative for.
         * Read/write.
         * @since v26.2.0
         */
        onorigin: OnOriginCallback | undefined;
        /**
         * The callback to invoke when the peer sends an HTTP/3 GOAWAY frame,
         * indicating it is initiating a graceful shutdown. The callback receives
         * `(lastStreamId)` where `lastStreamId` is a `{bigint}`:
         *
         * * When `lastStreamId` is `-1n`, the peer sent a shutdown notice (intent
         *   to close) without specifying a stream boundary. All existing streams
         *   may still be processed.
         * * When `lastStreamId` is `>= 0n`, it is the highest stream ID the peer
         *   may have processed. Streams with IDs above this value were NOT
         *   processed and can be safely retried on a new connection.
         *
         * After GOAWAY is received, `session.createBidirectionalStream()` will
         * throw `ERR_INVALID_STATE`. Existing streams continue until they
         * complete or the session closes.
         *
         * This callback is only relevant for HTTP/3 sessions. Read/write.
         * @since v26.2.0
         */
        ongoaway: ((this: QuicSession, lastStreamId: bigint) => void) | undefined;
        /**
         * The callback to invoke when TLS key material is available. Requires
         * `sessionOptions.keylog` to be `true`. Each invocation receives a single
         * line of [NSS Key Log Format](https://udn.realityripple.com/docs/Mozilla/Projects/NSS/Key_Log_Format) text (including a trailing newline). This is
         * useful for decrypting packet captures with tools like Wireshark. Read/write.
         *
         * Can also be set via the `onkeylog` option in `quic.connect()` or
         * `quic.listen()`.
         * @since v26.2.0
         */
        onkeylog: OnKeylogCallback | undefined;
        /**
         * The callback to invoke when qlog data is available. Requires
         * `sessionOptions.qlog` to be `true`. The callback receives a string
         * chunk of [JSON-SEQ](https://www.rfc-editor.org/rfc/rfc7464) formatted qlog data and a boolean `fin` flag. When
         * `fin` is `true`, the chunk is the final qlog output for this session and
         * the concatenated chunks form a complete qlog trace. Read/write.
         *
         * Qlog data arrives during the connection lifecycle. The first chunk contains
         * the qlog header with format metadata. Subsequent chunks contain trace
         * events. The final chunk (with `fin` set to `true`) is emitted during
         * session destruction and completes the JSON-SEQ output.
         *
         * Can also be set via the `onqlog` option in `quic.connect()` or
         * `quic.listen()`.
         * @since v26.2.0
         */
        onqlog: OnQlogCallback | undefined;
        /**
         * Open a new bidirectional stream. If the `body` option is not specified,
         * the outgoing stream will be half-closed. The `priority` and `incremental`
         * options are only used when the session supports priority (e.g. HTTP/3).
         * The `headers`, `onheaders`, `ontrailers`, `oninfo`, and `onwanttrailers`
         * options are only used when the session supports headers (e.g. HTTP/3).
         * @since v23.8.0
         */
        createBidirectionalStream(options?: CreateStreamOptions): Promise<QuicStream>;
        /**
         * Open a new unidirectional stream. If the `body` option is not specified,
         * the outgoing stream will be closed. The `priority` and `incremental`
         * options are only used when the session supports priority (e.g. HTTP/3).
         * @since v23.8.0
         */
        createUnidirectionalStream(options?: CreateStreamOptions): Promise<QuicStream>;
        /**
         * The local and remote socket addresses associated with the session. Read only.
         * @since v23.8.0
         */
        path: SessionPath | undefined;
        /**
         * Sends an unreliable datagram to the remote peer, returning a promise for
         * the datagram ID.
         *
         * If `datagram` is a string, it will be encoded using the specified `encoding`.
         *
         * If `datagram` is an `ArrayBufferView`, the bytes are copied into an
         * internal buffer; the caller's source buffer is unchanged and may be reused
         * or mutated immediately after the call returns. Callers that want to ensure
         * their source cannot be mutated after the call (for example, when handing
         * the buffer off to another async consumer) can call
         * `ArrayBuffer.prototype.transfer()` themselves before passing the buffer.
         *
         * If `datagram` is a `Promise`, it will be awaited before sending. If the
         * session closes while awaiting, `0n` is returned silently (datagrams are
         * inherently unreliable).
         *
         * If the datagram payload is zero-length (empty string after encoding, detached
         * buffer, or zero-length view), `0n` is returned and no datagram is sent.
         *
         * For HTTP/3 sessions, the peer must advertise `SETTINGS_H3_DATAGRAM=1`
         * (via `application: { enableDatagrams: true }`) for datagrams to be sent.
         * If the peer's setting is `0`, `sendDatagram()` returns `0n` (per RFC 9297
         * §3, an endpoint MUST NOT send HTTP Datagrams unless the peer indicated
         * support).
         *
         * Datagrams cannot be fragmented — each must fit within a single QUIC packet.
         * The maximum datagram size is determined by the peer's
         * `maxDatagramFrameSize` transport parameter (which the peer advertises during
         * the handshake). If the peer sets this to `0`, datagrams are not supported
         * and `0n` will be returned. If the datagram exceeds the peer's limit, it
         * will be silently dropped and `0n` returned. The local
         * `maxDatagramFrameSize` transport parameter (default: `1200` bytes) controls
         * what this endpoint advertises to the peer as its own maximum.
         * @since v23.8.0
         * @param encoding The encoding to use if `datagram` is a string.
         * **Default:** `'utf8'`.
         */
        sendDatagram(
            datagram: string | NodeJS.ArrayBufferView | Promise<string | NodeJS.ArrayBufferView>,
            encoding?: BufferEncoding,
        ): Promise<bigint>;
        /**
         * The local certificate as an object with properties such as `subject`,
         * `issuer`, `valid_from`, `valid_to`, `fingerprint`, etc. Returns `undefined`
         * if the session is destroyed or no certificate is available.
         * @since v26.2.0
         */
        readonly certificate: PeerCertificate | undefined;
        /**
         * The peer's certificate as an object with properties such as `subject`,
         * `issuer`, `valid_from`, `valid_to`, `fingerprint`, etc. Returns `undefined`
         * if the session is destroyed or the peer did not present a certificate.
         * @since v26.2.0
         */
        readonly peerCertificate: PeerCertificate | undefined;
        /**
         * The ephemeral key information for the session, with properties such as
         * `type`, `name`, and `size`. Only available on client sessions. Returns
         * `undefined` for server sessions or if the session is destroyed.
         * @since v26.2.0
         */
        readonly ephemeralKeyInfo: EphemeralKeyInfo | undefined;
        /**
         * The maximum datagram payload size in bytes that the peer will accept.
         * This is derived from the peer's `maxDatagramFrameSize` transport
         * parameter minus the DATAGRAM frame overhead (type byte and variable-length
         * integer encoding). Returns `0` if the peer does not support datagrams or
         * if the handshake has not yet completed. Datagrams larger than this value
         * will not be sent.
         * @since v26.2.0
         */
        readonly maxDatagramSize: number;
        /**
         * The maximum number of datagrams that can be queued for sending. Datagrams
         * are queued when `sendDatagram()` is called and sent opportunistically
         * alongside stream data by the packet serialization loop. When the queue
         * is full, the `sessionOptions.datagramDropPolicy` determines whether
         * the oldest or newest datagram is dropped. Dropped datagrams are reported
         * as lost via the `ondatagramstatus` callback.
         *
         * This property can be changed dynamically to adjust queue capacity
         * based on application activity or memory pressure. The valid range
         * is `0` to `65535`.
         * @since v26.2.0
         */
        maxPendingDatagrams: number;
        /**
         * Return the current statistics for the session. Read only.
         * @since v23.8.0
         */
        readonly stats: QuicSession.Stats;
        /**
         * Initiate a key update for the session.
         * @since v23.8.0
         */
        updateKey(): void;
        /**
         * Calls `session.close()` and returns a promise that fulfills when the
         * session has closed.
         * @since v23.8.0
         */
        [Symbol.asyncDispose](): Promise<void>;
    }
    namespace QuicSession {
        /**
         * @since v23.8.0
         */
        class Stats {
            private constructor();
            /**
             * @since v23.8.0
             */
            readonly createdAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly closingAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly handshakeCompletedAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly handshakeConfirmedAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly bytesReceived: bigint;
            /**
             * @since v23.8.0
             */
            readonly bytesSent: bigint;
            /**
             * @since v23.8.0
             */
            readonly bidiInStreamCount: bigint;
            /**
             * @since v23.8.0
             */
            readonly bidiOutStreamCount: bigint;
            /**
             * @since v23.8.0
             */
            readonly uniInStreamCount: bigint;
            /**
             * @since v23.8.0
             */
            readonly uniOutStreamCount: bigint;
            /**
             * @since v23.8.0
             */
            readonly maxBytesInFlight: bigint;
            /**
             * @since v23.8.0
             */
            readonly bytesInFlight: bigint;
            /**
             * @since v23.8.0
             */
            readonly blockCount: bigint;
            /**
             * @since v23.8.0
             */
            readonly cwnd: bigint;
            /**
             * @since v23.8.0
             */
            readonly latestRtt: bigint;
            /**
             * @since v23.8.0
             */
            readonly minRtt: bigint;
            /**
             * @since v23.8.0
             */
            readonly rttVar: bigint;
            /**
             * @since v23.8.0
             */
            readonly smoothedRtt: bigint;
            /**
             * @since v23.8.0
             */
            readonly ssthresh: bigint;
            /**
             * @since v23.8.0
             */
            readonly datagramsReceived: bigint;
            /**
             * @since v23.8.0
             */
            readonly datagramsSent: bigint;
            /**
             * @since v23.8.0
             */
            readonly datagramsAcknowledged: bigint;
            /**
             * @since v23.8.0
             */
            readonly datagramsLost: bigint;
            /**
             * The total number of peer-initiated streams destroyed by the
             * stream idle timeout. Read only.
             * @since v26.3.0
             */
            readonly streamsIdleTimedOut: bigint;
        }
    }
    interface QuicErrorOptions {
        /**
         * The numeric QUIC error code. Numbers
         * are coerced to `BigInt`. Must be a non-negative 62-bit unsigned
         * varint (`0n <= errorCode <= 2n ** 62n - 1n`).
         */
        errorCode?: bigint | number | undefined;
        /**
         * The Node.js-style error code string assigned to
         * `error.code`. Defaults to `'ERR_QUIC_STREAM_ABORTED'`.
         */
        code?: string | undefined;
        /**
         * Either `'application'` (default) or `'transport'`.
         * Indicates whether the code is defined by the negotiated
         * application protocol (e.g. RFC 9114 for HTTP/3) or by the QUIC
         * transport layer (RFC 9000). Stream resets always carry application
         * codes, so the default is `'application'`.
         */
        type?: "application" | "transport" | undefined;
    }
    /**
     * A `QuicError` is an `Error` subclass that carries an explicit numeric
     * QUIC error code. Use it to abort a QUIC stream or session with a
     * specific application-protocol-defined error code rather than letting
     * the implementation pick a generic fallback.
     *
     * The class is exported from `node:quic`:
     *
     * ```js
     * import { QuicError } from 'node:quic';
     * ```
     *
     * When a `QuicError` is supplied to APIs that emit a wire frame
     * (`writer.fail()`, `stream.destroy()`), the QUIC stack uses
     * `error.errorCode` as the wire code for the resulting frame.
     * When any other value is supplied (for example a plain `Error`), the
     * implementation falls back to the negotiated application protocol's
     * "internal error" code (`H3_INTERNAL_ERROR` (`0x102`) for HTTP/3, or
     * the QUIC transport-layer `INTERNAL_ERROR` (`0x1`) for raw QUIC).
     *
     * The Node.js error code (`error.code`) defaults to
     * `'ERR_QUIC_STREAM_ABORTED'`. Callers who need a more specific code
     * string can override it via `options.code` — the numeric QUIC code
     * is unaffected.
     *
     * The Node.js error code is fixed at `'ERR_QUIC_STREAM_ABORTED'` so that
     * catch blocks can distinguish a `QuicError` from other Node.js errors
     * without checking the prototype chain. The numeric QUIC code lives on
     * the separate `error.errorCode` property to avoid colliding with
     * the Node.js convention that `error.code` is a string.
     * @since v26.2.0
     * @experimental
     */
    class QuicError extends Error {
        /**
         * ```js
         * import { QuicError } from 'node:quic';
         *
         * const err = new QuicError('rejecting stream', { errorCode: 0x10cn });
         * console.log(err.code);       // 'ERR_QUIC_STREAM_ABORTED'
         * console.log(err.errorCode);  // 268n
         * console.log(err.type);       // 'application'
         *
         * const custom = new QuicError('custom failure', {
         *   errorCode: 0x10cn,
         *   code: 'ERR_MY_QUIC_FAILURE',
         * });
         * console.log(custom.code);    // 'ERR_MY_QUIC_FAILURE'
         * ```
         * @param message A human-readable description of the error.
         */
        constructor(message: string, options?: QuicErrorOptions);
        /**
         * The numeric QUIC error code carried by this error.
         * @since v26.2.0
         */
        readonly errorCode: bigint;
        /**
         * Either `'application'` or `'transport'`. Indicates the namespace of
         * `error.errorCode`.
         * @since v26.2.0
         */
        readonly type: "application" | "transport";
    }
    type StreamBody =
        | null
        | string
        | ArrayBufferLike
        | NodeJS.ArrayBufferView
        | Blob
        | FileHandle
        | Iterable<string | Uint8Array>
        | AsyncIterable<string | Uint8Array>
        | Promise<StreamBody>;
    interface StreamPriority {
        /**
         * One of `'high'`, `'default'`, or `'low'`.
         */
        level: "high" | "default" | "low";
        /**
         * Whether the stream data should be interleaved
         * with other streams of the same priority level.
         */
        incremental: boolean;
    }
    interface StreamDestroyOptions {
        /**
         * The application error code to include in the
         * `RESET_STREAM` and `STOP_SENDING` frames sent to the peer. Numbers are
         * coerced to `BigInt`. When omitted, the wire code is derived from `error`
         * (see below).
         */
        code?: bigint | number | undefined;
        /**
         * An optional human-readable reason string. Accepted for
         * symmetry with `session.close()` and `session.destroy()`, but
         * **not transmitted on the wire** — neither `RESET_STREAM` nor
         * `STOP_SENDING` carry a reason field. Provided for application logging
         * and for use by the `stream.onerror` callback.
         */
        reason?: string | undefined;
    }
    interface StreamSendHeadersOptions {
        /**
         * If `true`, the stream is closed for sending
         * after the headers (no body will follow). **Default:** `false`.
         */
        terminal?: boolean | undefined;
    }
    /**
     * @since v23.8.0
     */
    class QuicStream {
        private constructor();
        /**
         * A promise that is fulfilled when the stream is fully closed. It resolves
         * when the stream closes cleanly (including idle timeout). It rejects with
         * an `ERR_QUIC_APPLICATION_ERROR` or `ERR_QUIC_TRANSPORT_ERROR` when the
         * stream is closed due to a QUIC error (e.g., stream reset by the peer,
         * CONNECTION\_CLOSE with a non-zero error code).
         * @since v23.8.0
         */
        readonly closed: Promise<void>;
        /**
         * Immediately and abruptly destroys the stream. If `error` is provided and
         * `stream.onerror` is set, the `onerror` callback is invoked before
         * destruction. The `stream.closed` promise rejects with the error.
         *
         * When the stream is destroyed with an `error` (or with an explicit
         * `options.code`), the QUIC stack signals the abort to the peer:
         *
         * * If the writable side is still open, a `RESET_STREAM` frame is sent.
         * * If the readable side is still open (a bidirectional stream, or a
         *   remote-initiated unidirectional stream), a `STOP_SENDING` frame is sent.
         *
         * Both frames carry the same wire code, resolved with the following
         * precedence:
         *
         * 1. `options.code`, when explicitly provided.
         * 2. [`error.errorCode`][], when `error` is a [`QuicError`][].
         * 3. The negotiated application protocol's "internal error" code
         *    (`H3_INTERNAL_ERROR` (`0x102`) for HTTP/3, or the QUIC transport-layer
         *    `INTERNAL_ERROR` (`0x1`) for raw QUIC).
         *
         * A clean destroy — no `error` and no `options.code` — does not emit
         * `RESET_STREAM` or `STOP_SENDING`; the stream's existing close machinery
         * handles teardown.
         *
         * See [Aborting a stream](https://nodejs.org/docs/latest-v26.x/api/quic.html#aborting-a-stream) for an overview of the available stream-abort
         * APIs.
         * @since v23.8.0
         */
        destroy(error?: any, options?: StreamDestroyOptions): void;
        /**
         * True if `stream.destroy()` has been called.
         * @since v23.8.0
         */
        readonly destroyed: boolean;
        /**
         * True if any data on this stream was received as 0-RTT (early data)
         * before the TLS handshake completed. Early data is less secure and
         * could potentially be replayed by an attacker. Applications should
         * treat early data with appropriate caution.
         *
         * This property is only meaningful on the server side. On the client
         * side, it is always `false`.
         * @since v26.2.0
         */
        readonly early: boolean;
        /**
         * The directionality of the stream, or `null` if the stream has been destroyed
         * or is still pending. Read only.
         * @since v23.8.0
         */
        readonly direction: "bidi" | "uni" | null;
        /**
         * The maximum number of bytes that the writer will buffer before
         * `writeSync()` returns `false`. When the buffered data exceeds this limit,
         * the caller should wait for drain before writing more.
         *
         * The value can be changed dynamically at any time. This is particularly
         * useful for streams received via the `onstream` callback, where the
         * default (65536) may need to be adjusted based on application needs.
         * The valid range is `0` to `4294967295`.
         * @since v26.2.0
         */
        highWaterMark: number;
        /**
         * The stream ID, or `null` if the stream has been destroyed or is still
         * pending. Read only.
         * @since v23.8.0
         */
        readonly id: bigint | null;
        /**
         * An optional callback invoked when the stream is destroyed with an error.
         * This includes errors caused by user callbacks that throw or reject (see
         * [Callback error handling](https://nodejs.org/docs/latest-26.x/api/quic.html#callback-error-handling)). The callback receives a single argument: the
         * error that triggered the destruction. If the `onerror` callback itself throws
         * or returns a promise that rejects, the error is surfaced as an uncaught
         * exception. Read/write.
         * @since v26.2.0
         */
        onerror: ((this: QuicStream, error: any) => void) | undefined;
        /**
         * The callback to invoke when the stream is blocked. Read/write.
         * @since v23.8.0
         */
        onblocked: OnBlockedCallback | undefined;
        /**
         * The callback to invoke when the peer aborts a direction of the stream by
         * sending a `RESET_STREAM` frame (the peer abandons their writable side, so
         * no further data will arrive on our readable side) or a `STOP_SENDING`
         * frame (the peer asks us to stop writing on our writable side).
         *
         * The callback receives a Node.js error whose `errorCode` (`bigint`)
         * property carries the application error code from the wire frame.
         *
         * The stream is **not** automatically destroyed when this callback fires —
         * the application chooses how to react. Common patterns are: ignore (and
         * continue using the still-active direction on a bidirectional stream),
         * abort the other direction with `writer.fail()`, or tear down the
         * whole stream with `stream.destroy()`. Read/write.
         * @since v23.8.0
         */
        onreset: OnStreamErrorCallback | undefined;
        /**
         * The buffered initial headers received on this stream, or `undefined` if the
         * application does not support headers or no headers have been received yet.
         * For server-side streams, this contains the request headers (e.g., `:method`,
         * `:path`, `:scheme`). For client-side streams, this contains the response
         * headers (e.g., `:status`).
         *
         * Header names are lowercase strings. Multi-value headers are represented as
         * arrays. The object has `__proto__: null`.
         * @since v26.2.0
         */
        readonly headers: NodeJS.Dict<string | string[]> | undefined;
        /**
         * The callback to invoke when initial headers are received on the stream. The
         * callback receives `(headers)` where `headers` is an object (same format as
         * `stream.headers`). For HTTP/3, this delivers request pseudo-headers on the
         * server side and response headers on the client side. Throws
         * `ERR_INVALID_STATE` if set on a session that does not support headers.
         * Read/write.
         * @since v26.2.0
         */
        onheaders: ((this: QuicStream, headers: NodeJS.Dict<string | string[]>) => void) | undefined;
        /**
         * The callback to invoke when trailing headers are received from the peer.
         * The callback receives `(trailers)` where `trailers` is an object in the
         * same format as `stream.headers`. Throws `ERR_INVALID_STATE` if set on a
         * session that does not support headers. Read/write.
         * @since v26.2.0
         */
        ontrailers: ((this: QuicStream, trailers: NodeJS.Dict<string | string[]>) => void) | undefined;
        /**
         * The callback to invoke when informational (1xx) headers are received from
         * the server. The callback receives `(headers)` where `headers` is an object
         * in the same format as `stream.headers`. Informational headers are sent
         * before the final response (e.g., 103 Early Hints). Throws
         * `ERR_INVALID_STATE` if set on a session that does not support headers.
         * Read/write.
         * @since v26.2.0
         */
        oninfo: ((this: QuicStream, headers: NodeJS.Dict<string | string[]>) => void) | undefined;
        /**
         * The callback to invoke when the application is ready for trailing headers
         * to be sent. This is called synchronously — the user must call
         * `stream.sendTrailers()` within this callback. Throws
         * `ERR_INVALID_STATE` if set on a session that does not support headers.
         * Read/write.
         * @since v26.2.0
         */
        onwanttrailers: ((this: QuicStream) => void) | undefined;
        /**
         * Set trailing headers to be sent automatically when the application requests
         * them. This is an alternative to the `stream.onwanttrailers` callback
         * for cases where the trailers are known before the body completes. Throws
         * `ERR_INVALID_STATE` if set on a session that does not support headers.
         * Read/write.
         * @since v26.2.0
         */
        pendingTrailers: NodeJS.Dict<string | string[]> | undefined;
        /**
         * Sends initial or response headers on the stream. For client-side streams,
         * this sends request headers. For server-side streams, this sends response
         * headers. Throws `ERR_INVALID_STATE` if the session does not support headers.
         * @since v26.2.0
         * @param headers Header object with string keys and string or
         * string-array values. Pseudo-headers (`:method`, `:path`, etc.) must
         * appear before regular headers.
         */
        sendHeaders(headers: NodeJS.Dict<string | string[]>, options?: StreamSendHeadersOptions): boolean;
        /**
         * Sends informational (1xx) response headers. Server only. Throws
         * `ERR_INVALID_STATE` if the session does not support headers.
         * @since v26.2.0
         * @param headers Header object. Must include `:status` with a 1xx
         * value (e.g., `{ ':status': '103', 'link': '</style.css>; rel=preload' }`).
         */
        sendInformationalHeaders(headers: NodeJS.Dict<string | string[]>): boolean;
        /**
         * Sends trailing headers on the stream. Must be called synchronously during
         * the `stream.onwanttrailers` callback, or set ahead of time via
         * `stream.pendingTrailers`. Throws `ERR_INVALID_STATE` if the session
         * does not support headers.
         * @since v26.2.0
         * @param headers Trailing header object. Pseudo-headers must not be
         * included in trailers.
         */
        sendTrailers(headers: NodeJS.Dict<string | string[]>): boolean;
        /**
         * The current priority of the stream. Returns `null` if the session does not
         * support priority (e.g. non-HTTP/3) or if the stream has been destroyed.
         * Read only. Use `stream.setPriority()` to change the priority.
         *
         * On client-side HTTP/3 sessions, the value reflects what was set via
         * `stream.setPriority()`. On server-side HTTP/3 sessions, the value
         * reflects the peer's requested priority (e.g., from `PRIORITY_UPDATE` frames).
         * @since v26.2.0
         */
        readonly priority: StreamPriority | null;
        /**
         * Sets the priority of the stream. Throws `ERR_INVALID_STATE` if the session
         * does not support priority (e.g. non-HTTP/3). Has no effect if the stream
         * has been destroyed.
         * @since v26.2.0
         */
        setPriority(options?: NodeJS.PartialOptions<StreamPriority>): void;
        /**
         * The stream implements `Symbol.asyncIterator`, making it directly usable
         * in `for await...of` loops. Each iteration yields a batch of `Uint8Array`
         * chunks.
         *
         * Only one async iterator can be obtained per stream. A second call throws
         * `ERR_INVALID_STATE`. Non-readable streams (outbound-only unidirectional
         * or closed) return an immediately-finished iterator.
         *
         * ```js
         * for await (const chunks of stream) {
         *   for (const chunk of chunks) {
         *     // Process each Uint8Array chunk
         *   }
         * }
         * ```
         *
         * Compatible with stream/iter utilities:
         *
         * ```js
         * import Stream from 'node:stream/iter';
         * const body = await Stream.bytes(stream);
         * const text = await Stream.text(stream);
         * await Stream.pipeTo(stream, someWriter);
         * ```
         * @since v26.2.0
         */
        [Symbol.asyncIterator](): NodeJS.AsyncIterator<NodeJS.NonSharedUint8Array[]>;
        /**
         * Returns a Writer object for pushing data to the stream incrementally.
         * The Writer implements the stream/iter Writer interface with the
         * try-sync-fallback-to-async pattern.
         *
         * Only available when no `body` source was provided at creation time or via
         * `stream.setBody()`. Non-writable streams return an already-closed
         * Writer. Throws `ERR_INVALID_STATE` if the outbound is already configured.
         *
         * The Writer has the following methods:
         *
         * * `writeSync(chunk)` — Synchronous write. Returns `true` if accepted,
         *   `false` if flow-controlled. Data is NOT accepted on `false`.
         * * `write(chunk[, options])` — Async write with drain wait. `options.signal`
         *   is checked at entry but not observed during the write.
         * * `writevSync(chunks)` — Synchronous vectored write. All-or-nothing.
         * * `writev(chunks[, options])` — Async vectored write.
         * * `endSync()` — Synchronous close. Returns total bytes or `-1`.
         * * `end([options])` — Async close.
         * * `fail(reason)` — Errors the stream (sends `RESET_STREAM` to peer).
         *   When `reason` is a `QuicError`, its `error.errorCode` is used
         *   as the wire code on the resulting `RESET_STREAM` frame; otherwise
         *   the wire code falls back to the negotiated application protocol's
         *   "internal error" code (`H3_INTERNAL_ERROR` (`0x102`) for HTTP/3, or
         *   the QUIC transport-layer `INTERNAL_ERROR` (`0x1`) for raw QUIC).
         *   See `stream.destroy()` for a full-stream abort that also resets
         *   the readable side via `STOP_SENDING`.
         * * `desiredSize` — Available capacity in bytes, or `null` if closed/errored.
         *
         * The bytes from each `writeSync()` / `writevSync()` / `write()` / `writev()`
         * input chunk are copied into an internal buffer, so the caller's source
         * buffer is unchanged and may be reused or mutated immediately after the
         * call returns. Callers that want to ensure a source buffer cannot be
         * mutated after handing it off can call `ArrayBuffer.prototype.transfer()`
         * themselves before passing the buffer.
         * @since v26.2.0
         */
        readonly writer: Writer;
        /**
         * Sets the outbound body source for the stream. Can only be called once.
         * Mutually exclusive with `stream.writer`.
         *
         * The following body source types are supported:
         *
         * * `null` — The writable side is closed immediately (FIN sent with no data).
         * * `string` — UTF-8 encoded and sent as a single chunk.
         * * `ArrayBuffer`, `SharedArrayBuffer`, `ArrayBufferView` — Sent as a single
         *   chunk. The bytes are copied into an internal buffer, so the caller's
         *   source buffer is unchanged and may be reused or mutated immediately
         *   after the call returns. Callers wanting to ensure their source cannot
         *   be mutated after handing it off can call
         *   `ArrayBuffer.prototype.transfer()` themselves before passing the buffer.
         * * `Blob` — Sent from the Blob's underlying data queue.
         * * {FileHandle} — The file contents are read asynchronously via an
         *   fd-backed data source. The `FileHandle` must be opened for reading
         *   (e.g. via [`fs.promises.open(path, 'r')`][]). Once passed as a body, the
         *   `FileHandle` is locked and cannot be used as a body for another stream.
         *   The `FileHandle` is automatically closed when the stream finishes.
         * * `AsyncIterable`, `Iterable` — Each yielded chunk (string or
         *   `Uint8Array`) is written incrementally in streaming mode.
         * * `Promise` — Awaited; the resolved value is used as the body (subject
         *   to the same type rules).
         *
         * Throws `ERR_INVALID_STATE` if the outbound is already configured or if
         * the writer has been accessed.
         * @since v26.2.0
         */
        setBody(body: StreamBody): void;
        /**
         * The session that created this stream, or `null` if the stream has been
         * destroyed. Read only.
         * @since v23.8.0
         */
        readonly session: QuicSession | null;
        /**
         * The current statistics for the stream. Read only.
         * @since v23.8.0
         */
        readonly stats: QuicStream.Stats;
    }
    namespace QuicStream {
        /**
         * @since v23.8.0
         */
        class Stats {
            private constructor();
            /**
             * @since v23.8.0
             */
            readonly ackedAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly bytesReceived: bigint;
            /**
             * @since v23.8.0
             */
            readonly bytesSent: bigint;
            /**
             * @since v23.8.0
             */
            readonly createdAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly destroyedAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly finalSize: bigint;
            /**
             * @since v23.8.0
             */
            readonly isConnected: bigint;
            /**
             * @since v23.8.0
             */
            readonly maxOffset: bigint;
            /**
             * @since v23.8.0
             */
            readonly maxOffsetAcknowledged: bigint;
            /**
             * @since v23.8.0
             */
            readonly maxOffsetReceived: bigint;
            /**
             * @since v23.8.0
             */
            readonly openedAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly receivedAt: bigint;
        }
    }
    /**
     * An object containing commonly used constants for QUIC configuration.
     * @since v26.2.0
     */
    namespace constants {
        /**
         * Congestion control algorithm identifiers, for use with the
         * `sessionOptions.cc` option:
         *
         * * `quic.constants.cc.RENO` — Reno congestion control.
         * * `quic.constants.cc.CUBIC` — CUBIC congestion control.
         * * `quic.constants.cc.BBR` — BBR congestion control.
         */
        enum cc {
            RENO = "reno",
            CUBIC = "cubic",
            BBR = "bbr",
        }
        /**
         * The default TLS 1.3 cipher suite list used when `sessionOptions.ciphers`
         * is not specified.
         */
        const DEFAULT_CIPHERS: string;
        /**
         * The default TLS 1.3 key-exchange group list used when
         * `sessionOptions.groups` is not specified.
         */
        const DEFAULT_GROUPS: string;
    }
}
