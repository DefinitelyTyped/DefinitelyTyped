declare module "tls" {
    import * as crypto from "crypto";
    import * as dns from "dns";
    import * as net from "net";
    import * as stream from "stream";

    const CLIENT_RENEG_LIMIT: number;
    const CLIENT_RENEG_WINDOW: number;

    interface Certificate {
        /**
         * Country code.
         */
        C: string;
        /**
         * Street.
         */
        ST: string;
        /**
         * Locality.
         */
        L: string;
        /**
         * Organization.
         */
        O: string;
        /**
         * Organizational unit.
         */
        OU: string;
        /**
         * Common name.
         */
        CN: string;
    }

    interface PeerCertificate {
        subject: Certificate;
        issuer: Certificate;
        subjectaltname: string;
        infoAccess: { [index: string]: string[] | undefined };
        modulus: string;
        exponent: string;
        valid_from: string;
        valid_to: string;
        fingerprint: string;
        ext_key_usage: string[];
        serialNumber: string;
        raw: Buffer;
    }

    interface DetailedPeerCertificate extends PeerCertificate {
        issuerCertificate: DetailedPeerCertificate;
    }

    interface CipherNameAndProtocol {
        /**
         * The cipher name.
         */
        name: string;
        /**
         * SSL/TLS protocol version.
         */
        version: string;
    }

    class TLSSocket extends net.Socket {
        /**
         * Construct a new tls.TLSSocket object from an existing TCP socket.
         */
        constructor(socket: net.Socket, options?: {
            /**
             * An optional TLS context object from tls.createSecureContext()
             */
            secureContext?: SecureContext,
            /**
             * If true the TLS socket will be instantiated in server-mode.
             * Defaults to false.
             */
            isServer?: boolean,
            /**
             * An optional net.Server instance.
             */
            server?: net.Server,
            /**
             * If true the server will request a certificate from clients that
             * connect and attempt to verify that certificate. Defaults to
             * false.
             */
            requestCert?: boolean,
            /**
             * If true the server will reject any connection which is not
             * authorized with the list of supplied CAs. This option only has an
             * effect if requestCert is true. Defaults to false.
             */
            rejectUnauthorized?: boolean,
            /**
             * An array of strings or a Buffer naming possible NPN protocols.
             * (Protocols should be ordered by their priority.)
             */
            NPNProtocols?: string[] | Buffer[] | Uint8Array[] | Buffer | Uint8Array,
            /**
             * An array of strings or a Buffer naming possible ALPN protocols.
             * (Protocols should be ordered by their priority.) When the server
             * receives both NPN and ALPN extensions from the client, ALPN takes
             * precedence over NPN and the server does not send an NPN extension
             * to the client.
             */
            ALPNProtocols?: string[] | Buffer[] | Uint8Array[] | Buffer | Uint8Array,
            /**
             * SNICallback(servername, cb) <Function> A function that will be
             * called if the client supports SNI TLS extension. Two arguments
             * will be passed when called: servername and cb. SNICallback should
             * invoke cb(null, ctx), where ctx is a SecureContext instance.
             * (tls.createSecureContext(...) can be used to get a proper
             * SecureContext.) If SNICallback wasn't provided the default callback
             * with high-level API will be used (see below).
             */
            SNICallback?: (servername: string, cb: (err: Error | null, ctx: SecureContext) => void) => void,
            /**
             * An optional Buffer instance containing a TLS session.
             */
            session?: Buffer,
            /**
             * If true, specifies that the OCSP status request extension will be
             * added to the client hello and an 'OCSPResponse' event will be
             * emitted on the socket before establishing a secure communication
             */
            requestOCSP?: boolean
        });

        /**
         * A boolean that is true if the peer certificate was signed by one of the specified CAs, otherwise false.
         */
        authorized: boolean;
        /**
         * The reason why the peer's certificate has not been verified.
         * This property becomes available only when tlsSocket.authorized === false.
         */
        authorizationError: Error;
        /**
         * Static boolean value, always true.
         * May be used to distinguish TLS sockets from regular ones.
         */
        encrypted: boolean;

        /**
         * String containing the selected ALPN protocol.
         * When ALPN has no selected protocol, tlsSocket.alpnProtocol equals false.
         */
        alpnProtocol?: string;

        /**
         * Returns an object representing the cipher name and the SSL/TLS protocol version of the current connection.
         * @returns Returns an object representing the cipher name
         * and the SSL/TLS protocol version of the current connection.
         */
        getCipher(): CipherNameAndProtocol;
        /**
         * Returns an object representing the peer's certificate.
         * The returned object has some properties corresponding to the field of the certificate.
         * If detailed argument is true the full chain with issuer property will be returned,
         * if false only the top certificate without issuer property.
         * If the peer does not provide a certificate, it returns null or an empty object.
         * @param detailed - If true; the full chain with issuer property will be returned.
         * @returns An object representing the peer's certificate.
         */
        getPeerCertificate(detailed: true): DetailedPeerCertificate;
        getPeerCertificate(detailed?: false): PeerCertificate;
        getPeerCertificate(detailed?: boolean): PeerCertificate | DetailedPeerCertificate;
        /**
         * Returns a string containing the negotiated SSL/TLS protocol version of the current connection.
         * The value `'unknown'` will be returned for connected sockets that have not completed the handshaking process.
         * The value `null` will be returned for server sockets or disconnected client sockets.
         * See https://www.openssl.org/docs/man1.0.2/ssl/SSL_get_version.html for more information.
         * @returns negotiated SSL/TLS protocol version of the current connection
         */
        getProtocol(): string | null;
        /**
         * Could be used to speed up handshake establishment when reconnecting to the server.
         * @returns ASN.1 encoded TLS session or undefined if none was negotiated.
         */
        getSession(): any;
        /**
         * NOTE: Works only with client TLS sockets.
         * Useful only for debugging, for session reuse provide session option to tls.connect().
         * @returns TLS session ticket or undefined if none was negotiated.
         */
        getTLSTicket(): any;
        /**
         * Initiate TLS renegotiation process.
         *
         * NOTE: Can be used to request peer's certificate after the secure connection has been established.
         * ANOTHER NOTE: When running as the server, socket will be destroyed with an error after handshakeTimeout timeout.
         * @param options - The options may contain the following fields: rejectUnauthorized,
         * requestCert (See tls.createServer() for details).
         * @param callback - callback(err) will be executed with null as err, once the renegotiation
         * is successfully completed.
         */
        renegotiate(options: { rejectUnauthorized?: boolean, requestCert?: boolean }, callback: (err: Error | null) => void): any;
        /**
         * Set maximum TLS fragment size (default and maximum value is: 16384, minimum is: 512).
         * Smaller fragment size decreases buffering latency on the client: large fragments are buffered by
         * the TLS layer until the entire fragment is received and its integrity is verified;
         * large fragments can span multiple roundtrips, and their processing can be delayed due to packet
         * loss or reordering. However, smaller fragments add extra TLS framing bytes and CPU overhead,
         * which may decrease overall server throughput.
         * @param size - TLS fragment size (default and maximum value is: 16384, minimum is: 512).
         * @returns Returns true on success, false otherwise.
         */
        setMaxSendFragment(size: number): boolean;

        /**
         * events.EventEmitter
         * 1. OCSPResponse
         * 2. secureConnect
         */
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: "OCSPResponse", listener: (response: Buffer) => void): this;
        addListener(event: "secureConnect", listener: () => void): this;

        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: "OCSPResponse", response: Buffer): boolean;
        emit(event: "secureConnect"): boolean;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: "OCSPResponse", listener: (response: Buffer) => void): this;
        on(event: "secureConnect", listener: () => void): this;

        once(event: string, listener: (...args: any[]) => void): this;
        once(event: "OCSPResponse", listener: (response: Buffer) => void): this;
        once(event: "secureConnect", listener: () => void): this;

        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: "OCSPResponse", listener: (response: Buffer) => void): this;
        prependListener(event: "secureConnect", listener: () => void): this;

        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "OCSPResponse", listener: (response: Buffer) => void): this;
        prependOnceListener(event: "secureConnect", listener: () => void): this;
    }

    interface TlsOptions extends SecureContextOptions {
        handshakeTimeout?: number;
        requestCert?: boolean;
        rejectUnauthorized?: boolean;
        NPNProtocols?: string[] | Buffer[] | Uint8Array[] | Buffer | Uint8Array;
        ALPNProtocols?: string[] | Buffer[] | Uint8Array[] | Buffer | Uint8Array;
        SNICallback?: (servername: string, cb: (err: Error | null, ctx: SecureContext) => void) => void;
        sessionTimeout?: number;
        ticketKeys?: Buffer;
    }

    interface ConnectionOptions extends SecureContextOptions {
        host?: string;
        port?: number;
        path?: string; // Creates unix socket connection to path. If this option is specified, `host` and `port` are ignored.
        socket?: net.Socket; // Establish secure connection on a given socket rather than creating a new socket
        rejectUnauthorized?: boolean; // Defaults to true
        NPNProtocols?: string[] | Buffer[] | Uint8Array[] | Buffer | Uint8Array;
        ALPNProtocols?: string[] | Buffer[] | Uint8Array[] | Buffer | Uint8Array;
        checkServerIdentity?: typeof checkServerIdentity;
        servername?: string; // SNI TLS Extension
        session?: Buffer;
        minDHSize?: number;
        secureContext?: SecureContext; // If not provided, the entire ConnectionOptions object will be passed to tls.createSecureContext()
        lookup?: net.LookupFunction;
        timeout?: number;
    }

    class Server extends net.Server {
        addContext(hostName: string, credentials: {
            key: string;
            cert: string;
            ca: string;
        }): void;

        /**
         * events.EventEmitter
         * 1. tlsClientError
         * 2. newSession
         * 3. OCSPRequest
         * 4. resumeSession
         * 5. secureConnection
         */
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        addListener(event: "newSession", listener: (sessionId: any, sessionData: any, callback: (err: Error, resp: Buffer) => void) => void): this;
        addListener(event: "OCSPRequest", listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void): this;
        addListener(event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
        addListener(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this;

        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: "tlsClientError", err: Error, tlsSocket: TLSSocket): boolean;
        emit(event: "newSession", sessionId: any, sessionData: any, callback: (err: Error, resp: Buffer) => void): boolean;
        emit(event: "OCSPRequest", certificate: Buffer, issuer: Buffer, callback: Function): boolean;
        emit(event: "resumeSession", sessionId: any, callback: (err: Error, sessionData: any) => void): boolean;
        emit(event: "secureConnection", tlsSocket: TLSSocket): boolean;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        on(event: "newSession", listener: (sessionId: any, sessionData: any, callback: (err: Error, resp: Buffer) => void) => void): this;
        on(event: "OCSPRequest", listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void): this;
        on(event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
        on(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this;

        once(event: string, listener: (...args: any[]) => void): this;
        once(event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        once(event: "newSession", listener: (sessionId: any, sessionData: any, callback: (err: Error, resp: Buffer) => void) => void): this;
        once(event: "OCSPRequest", listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void): this;
        once(event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
        once(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this;

        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        prependListener(event: "newSession", listener: (sessionId: any, sessionData: any, callback: (err: Error, resp: Buffer) => void) => void): this;
        prependListener(event: "OCSPRequest", listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void): this;
        prependListener(event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
        prependListener(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this;

        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        prependOnceListener(event: "newSession", listener: (sessionId: any, sessionData: any, callback: (err: Error, resp: Buffer) => void) => void): this;
        prependOnceListener(event: "OCSPRequest", listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void): this;
        prependOnceListener(event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
        prependOnceListener(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this;
    }

    interface SecurePair {
        encrypted: any;
        cleartext: any;
    }

    type SecureVersion = 'TLSv1.2' | 'TLSv1.1' | 'TLSv1';

    interface SecureContextOptions {
        pfx?: string | Buffer | Array<string | Buffer | Object>;
        key?: string | Buffer | Array<Buffer | Object>;
        passphrase?: string;
        cert?: string | Buffer | Array<string | Buffer>;
        ca?: string | Buffer | Array<string | Buffer>;
        ciphers?: string;
        honorCipherOrder?: boolean;
        ecdhCurve?: string;
        clientCertEngine?: string;
        crl?: string | Buffer | Array<string | Buffer>;
        dhparam?: string | Buffer;
        secureOptions?: number; // Value is a numeric bitmask of the `SSL_OP_*` options
        secureProtocol?: string; // SSL Method, e.g. SSLv23_method
        sessionIdContext?: string;
        /**
         * Optionally set the maximum TLS version to allow. One
         * of `TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. Cannot be specified along with the
         * `secureProtocol` option, use one or the other.  **Default:** `'TLSv1.2'`.
         */
        maxVersion?: SecureVersion;
        /**
         * Optionally set the minimum TLS version to allow. One
         * of `TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. Cannot be specified along with the
         * `secureProtocol` option, use one or the other.  It is not recommended to use
         * less than TLSv1.2, but it may be required for interoperability.
         * **Default:** `'TLSv1.2'`, unless changed using CLI options. Using
         * `--tls-v1.0` changes the default to `'TLSv1'`. Using `--tls-v1.1` changes
         * the default to `'TLSv1.1'`.
         */
        minVersion?: SecureVersion;
    }

    interface SecureContext {
        context: any;
    }

    /*
     * Verifies the certificate `cert` is issued to host `host`.
     * @host The hostname to verify the certificate against
     * @cert PeerCertificate representing the peer's certificate
     *
     * Returns Error object, populating it with the reason, host and cert on failure.  On success, returns undefined.
     */
    function checkServerIdentity(host: string, cert: PeerCertificate): Error | undefined;
    function createServer(options: TlsOptions, secureConnectionListener?: (socket: TLSSocket) => void): Server;
    function connect(options: ConnectionOptions, secureConnectListener?: () => void): TLSSocket;
    function connect(port: number, host?: string, options?: ConnectionOptions, secureConnectListener?: () => void): TLSSocket;
    function connect(port: number, options?: ConnectionOptions, secureConnectListener?: () => void): TLSSocket;
    function createSecurePair(credentials?: SecureContext, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean): SecurePair;
    function createSecureContext(details: SecureContextOptions): SecureContext;
    function getCiphers(): string[];

    const DEFAULT_ECDH_CURVE: string;
}
