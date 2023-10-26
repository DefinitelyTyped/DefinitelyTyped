declare module "node-forge" {
    namespace tls {
        interface ProtocolVersion {
            major: Byte;
            minor: Byte;
        }

        const Versions: ProtocolVersion[];
        const SupportedVersions: ProtocolVersion[];
        const Version: ProtocolVersion;

        const MaxFragment: number;

        enum ConnectionEnd {
            server = 0,
            client = 1,
        }

        enum PRFAlgorithm {
            tls_prf_sha256 = 0,
        }

        enum BulkCipherAlgorithm {
            rc4 = 0,
            des3 = 1,
            aes = 2,
        }

        enum CipherType {
            stream = 0,
            block = 1,
            aead = 2,
        }

        enum MACAlgorithm {
            hmac_md5 = 0,
            hmac_sha1 = 1,
            hmac_sha256 = 2,
            hmac_sha384 = 3,
            hmac_sha512 = 4,
        }

        enum CompressionMethod {
            none = 0,
            deflate = 1,
        }

        enum ContentType {
            change_cipher_spec = 20,
            alert = 21,
            handshake = 22,
            application_data = 23,
            heartbeat = 24,
        }

        enum HandshakeType {
            hello_request = 0,
            client_hello = 1,
            server_hello = 2,
            certificate = 11,
            server_key_exchange = 12,
            certificate_request = 13,
            server_hello_done = 14,
            certificate_verify = 15,
            client_key_exchange = 16,
            finished = 20,
        }

        namespace Alert {
            enum Level {
                warning = 1,
                fatal = 2,
            }

            enum Description {
                close_notify = 0,
                unexpected_message = 10,
                bad_record_mac = 20,
                decryption_failed = 21,
                record_overflow = 22,
                decompression_failure = 30,
                handshake_failure = 40,
                bad_certificate = 42,
                unsupported_certificate = 43,
                certificate_revoked = 44,
                certificate_expired = 45,
                certificate_unknown = 46,
                illegal_parameter = 47,
                unknown_ca = 48,
                access_denied = 49,
                decode_error = 50,
                decrypt_error = 51,
                export_restriction = 60,
                protocol_version = 70,
                insufficient_security = 71,
                internal_error = 80,
                user_canceled = 90,
                no_renegotiation = 100,
            }
        }

        enum HeartbeatMessageType {
            heartbeat_request = 1,
            heartbeat_response = 2,
        }

        interface CipherSuite {
            id: [Byte, Byte];
            name: string;
        }

        const CipherSuites: { [name: string]: CipherSuite };

        interface CertificateRequest {
            certificate_types: util.ByteBuffer;
            certificate_authorities: util.ByteBuffer;
        }

        type ConnectionState = any;

        interface Connection {
            version: ProtocolVersion;
            entity: ConnectionEnd;
            sessionId: Bytes | null;
            caStore: pki.CAStore;
            sessionCache: SessionCache | null;
            cipherSuites: CipherSuite[];
            connected(conn: Connection): void;
            virtualHost: string | null;
            verifyClient: boolean;
            verify(conn: Connection, verified: Verified, depth: number, certs: pki.Certificate[]): Verified;
            getCertificate:
                | ((conn: Connection, hint: CertificateRequest | string[]) => pki.PEM | ReadonlyArray<pki.PEM>)
                | null;
            getPrivateKey: ((conn: Connection, certificate: pki.Certificate) => pki.PEM) | null;
            getSignature:
                | ((conn: Connection, bytes: Bytes, callback: (conn: Connection, bytes: Bytes) => void) => void)
                | null;
            input: util.ByteBuffer;
            tlsData: util.ByteBuffer;
            data: util.ByteBuffer;
            tlsDataReady(conn: Connection): void;
            dataReady(conn: Connection): void;
            heartbeatReceived: ((conn: Connection, payload: util.ByteBuffer) => void) | undefined;
            closed(conn: Connection): void;
            error(conn: Connection, error: TLSError): void;
            deflate: ((inBytes: Bytes) => Bytes) | null;
            inflate: ((inBytes: Bytes) => Bytes) | null;
            reset(clearFail?: boolean): void;
            record: Record | null;
            session: Session | null;
            peerCertificate: pki.Certificate | null;
            state: { pending: ConnectionState | null; current: ConnectionState };
            expect: number;
            fragmented: Record | null;
            records: Record[];
            open: boolean;
            handshakes: number;
            handshaking: boolean;
            isConnected: boolean;
            fail: boolean;
            handshake(sessionId?: Bytes | null): void;
            process(data: Bytes): number;
            prepare(data: Bytes): boolean;
            prepareHeartbeatRequest(payload: Bytes | util.ByteBuffer, payloadLength?: number): boolean;
            close(clearFail?: boolean): Connection;
        }

        interface Record {
            type: ContentType;
            version: ProtocolVersion;
            length: number;
            fragment: util.ByteBuffer;
            ready?: boolean | undefined;
        }

        interface Session {
            version: ProtocolVersion | null;
            extensions: { [_: string]: object };
            cipherSuite: CipherSuite | null;
            compressionMethod: CompressionMethod | null;
            serverCertificate: pki.Certificate | null;
            clientCertificate: pki.Certificate | null;
            md5: md.MessageDigest;
            sha1: md.MessageDigest;
        }

        interface SessionCache {
            cache: { [key: string]: Session };
            capacity: number;
            order: [Hex];
            getSession(sessionId: Bytes): Session;
            setSession(sessionId: Bytes, session: Session): void;
        }

        function createSessionCache(cache?: SessionCache | { [key: string]: Session }, capacity?: number): SessionCache;

        interface Alert {
            level: Alert.Level;
            description: Alert.Description;
        }

        interface TLSError extends Error {
            message: string;
            send: boolean;
            origin: "server" | "client";
            alert: Alert;
        }

        type Verified = true | { message?: string | undefined; alert?: Alert.Description | undefined };

        function createConnection(options: {
            server?: boolean | undefined;
            sessionId?: Bytes | null | undefined;
            caStore?: pki.CAStore | ReadonlyArray<pki.Certificate> | undefined;
            sessionCache?: SessionCache | { [key: string]: Session } | undefined;
            cipherSuites?: CipherSuite[] | undefined;
            connected(conn: Connection): void;
            virtualHost?: string | undefined;
            verifyClient?: boolean | undefined;
            verify?(conn: Connection, verified: Verified, depth: number, certs: pki.Certificate[]): Verified;
            getCertificate?(conn: Connection, hint: CertificateRequest | string[]): pki.PEM | ReadonlyArray<pki.PEM>;
            getPrivateKey?(conn: Connection, certificate: pki.Certificate): pki.PEM;
            getSignature?(conn: Connection, bytes: Bytes, callback: (conn: Connection, bytes: Bytes) => void): void;
            tlsDataReady(conn: Connection): void;
            dataReady(conn: Connection): void;
            heartbeatReceived?(conn: Connection, payload: util.ByteBuffer): void;
            closed(conn: Connection): void;
            error(conn: Connection, error: TLSError): void;
            deflate?(inBytes: Bytes): Bytes;
            inflate?(inBytes: Bytes): Bytes;
        }): Connection;

        function prf_tls1(secret: string, label: string, seed: string, length: number): util.ByteBuffer;

        function hmac_sha1(
            key: string | ReadonlyArray<Byte> | util.ByteBuffer,
            seqNum: [number, number],
            record: Record,
        ): Bytes;
    }
}
