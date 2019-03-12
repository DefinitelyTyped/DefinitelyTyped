// Type definitions for node-forge 0.8.1
// Project: https://github.com/digitalbazaar/forge
// Definitions by: Seth Westphal    <https://github.com/westy92>
//                 Kay Schecker     <https://github.com/flynetworks>
//                 Aakash Goenka    <https://github.com/a-k-g>
//                 Rafal2228        <https://github.com/rafal2228>
//                 Beeno Tung       <https://github.com/beenotung>
//                 Joe Flateau      <https://github.com/joeflateau>
//                 Nikita Koryabkin <https://github.com/Apologiz>
//                 timhwang21       <https://github.com/timhwang21>
//                 supaiku0         <https://github.com/supaiku0>
//                 Anders Kaseorg   <https://github.com/andersk>
//                 Sascha Zarhuber  <https://github.com/saschazar21>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="node" />

declare module "node-forge" {
    type Byte = number;
    type Bytes = string;
    type Hex = string;
    type Base64 = string;
    type Utf8 = string;
    type OID = string;
    type Encoding = "raw" | "utf8";

    namespace jsbn {
        class BigInteger {
            data: number[];
            t: number;
            s: number;
            toString(): string;
        }
    }

    namespace pem {

        interface EncodeOptions {
            maxline?: number;
        }

        interface ObjectPEM {
            type: string;
            body: Bytes;
            procType?: any;
            contentDomain?: any;
            dekInfo?: any;
            headers?: any[];
        }

        function encode(msg: ObjectPEM, options?: EncodeOptions): string;
        function decode(str: string): ObjectPEM[];
    }

    namespace pki {
        type PEM = string;
        type PublicKey = rsa.PublicKey | ed25519.Key;
        type PrivateKey = rsa.PrivateKey | ed25519.Key;
        type EncryptionOptions = {
            algorithm?: 'aes128' | 'aes192' | 'aes256' | '3des';
            count?: number;
            saltSize?: number;
            prfAlgorithm?: 'sha1' | 'sha224' | 'sha256' | 'sha384' | 'sha512';
            legacy?: boolean;
        };

        interface KeyPair {
            publicKey: PublicKey;
            privateKey: PrivateKey;
        }

        interface oids {
            [key: string]: string;
        }
        var oids: oids;

        namespace ed25519 {
            type Key = ArrayBuffer;
        }

        namespace rsa {
            type EncryptionScheme = 'RSAES-PKCS1-V1_5' | 'RSA-OAEP' | 'RAW' | 'NONE' | null;
            type SignatureScheme = 'RSASSA-PKCS1-V1_5' | pss.PSS | 'NONE' | null;

            interface PublicKey {
                n: jsbn.BigInteger;
                e: jsbn.BigInteger;
                encrypt(data: Bytes, scheme?: EncryptionScheme, schemeOptions?: any): Bytes;
                verify(digest: Bytes, signature: Bytes, scheme?: SignatureScheme): boolean;
            }

            interface PrivateKey {
                n: jsbn.BigInteger;
                e: jsbn.BigInteger;
                d: jsbn.BigInteger;
                p: jsbn.BigInteger;
                q: jsbn.BigInteger;
                dP: jsbn.BigInteger;
                dQ: jsbn.BigInteger;
                qInv: jsbn.BigInteger;
                decrypt(data: Bytes, scheme?: EncryptionScheme, schemeOptions?: any): Bytes;
                sign(md: md.MessageDigest, scheme?: SignatureScheme): Bytes;
            }

            interface KeyPair {
                publicKey: PublicKey;
                privateKey: PrivateKey;
            }

            interface GenerateKeyPairOptions {
                bits?: number;
                e?: number;
                workerScript?: string;
                workers?: number;
                workLoad?: number;
                prng?: any;
                algorithm?: string;
            }

            function setPublicKey(n: any, e: any): any;

            function generateKeyPair(bits?: number, e?: number, callback?: (err: Error, keypair: KeyPair) => void): KeyPair;
            function generateKeyPair(options?: GenerateKeyPairOptions, callback?: (err: Error, keypair: KeyPair) => void): KeyPair;
        }

        namespace ed25519 {

            type NativeBuffer = Buffer | Uint8Array;

            namespace constants {
                const PUBLIC_KEY_BYTE_LENGTH = 32;
                const PRIVATE_KEY_BYTE_LENGTH = 64;
                const SEED_BYTE_LENGTH = 32;
                const SIGN_BYTE_LENGTH = 64;
                const HASH_BYTE_LENGTH = 64;
            }

            function generateKeyPair(options?: { seed?: Buffer | Uint8Array | string }): {
                publicKey: NativeBuffer;
                privateKey: NativeBuffer;
            };

            function publicKeyFromPrivateKey(options: { privateKey: NativeBuffer }): NativeBuffer;

            function sign(options: {
                message: string,
                encoding: string,
                privateKey: NativeBuffer
            }): NativeBuffer;

            function verify(options: {
                message: string,
                encoding: string,
                signature: Buffer | Uint8Array | util.ByteBuffer | string,
                publicKey: NativeBuffer
            }): boolean;
        }

        interface CertificateFieldOptions {
            name?: string;
            type?: string;
            shortName?: string;
        }

        interface CertificateField extends CertificateFieldOptions {
            valueConstructed?: boolean;
            valueTagClass?: asn1.Class;
            value?: any[] | string;
            extensions?: any[];
        }


        interface Certificate {
            version: number;
            serialNumber: string;
            signature: any;
            siginfo: any;
            validity: {
                notBefore: Date;
                notAfter: Date;
            };
            issuer: {
                getField(sn: string | CertificateFieldOptions): any;
                addField(attr: CertificateField): void;
                attributes: any[];
                hash: any;
            };
            subject: {
                getField(sn: string | CertificateFieldOptions): any;
                addField(attr: CertificateField): void;
                attributes: any[];
                hash: any;
            };
            extensions: any[];
            privateKey: PrivateKey;
            publicKey: PublicKey;
            md: any;
            /**
             * Sets the subject of this certificate.
             *
             * @param attrs the array of subject attributes to use.
             * @param uniqueId an optional a unique ID to use.
             */
            setSubject(attrs: CertificateField[], uniqueId?: string): void;
            /**
              * Sets the issuer of this certificate.
              *
              * @param attrs the array of subject attributes to use.
              * @param uniqueId an optional a unique ID to use.
              */
            setIssuer(attrs: CertificateField[], uniqueId?: string): void;
            /**
              * Sets the extensions of this certificate.
              *
              * @param exts the array of extensions to use.
              */
            setExtensions(exts: any[]): void;
            /**
             * Gets an extension by its name or id.
             *
             * @param options the name to use or an object with:
             *          name the name to use.
             *          id the id to use.
             *
             * @return the extension or null if not found.
             */
            getExtension(options: string | {name: string;} | {id: number;}): {} | undefined;

            /**
             * Signs this certificate using the given private key.
             *
             * @param key the private key to sign with.
             * @param md the message digest object to use (defaults to forge.md.sha1).
             */
            sign(key: pki.PrivateKey, md?: md.MessageDigest): void;
            /**
             * Attempts verify the signature on the passed certificate using this
             * certificate's public key.
             *
             * @param child the certificate to verify.
             *
             * @return true if verified, false if not.
             */
            verify(child: Certificate): boolean;

        }

        interface CAStore {
            addCertificate(cert: Certificate | string): void;
            hasCertificate(cert: Certificate | string): boolean;
            removeCertificate(cert: Certificate | string): Certificate | null;
            listAllCertificates(): pki.Certificate[];
            getIssuer(subject: Certificate): Certificate | null;
            getBySubject(subject: string): Certificate | null;
        }

        function certificateFromAsn1(obj: asn1.Asn1, computeHash?: boolean): Certificate;

        function decryptRsaPrivateKey(pem: PEM, passphrase?: string): PrivateKey;

        function createCertificate(): Certificate;

        function certificationRequestToPem(cert: Certificate, maxline?: number): PEM;

        function certificationRequestFromPem(pem: PEM, computeHash?: boolean, strict?: boolean): Certificate;

        function createCertificationRequest(): Certificate;

        function certificateToPem(cert: Certificate, maxline?: number): PEM;

        function certificateFromPem(pem: PEM, computeHash?: boolean, strict?: boolean): Certificate;

        function createCaStore(certs?: ReadonlyArray<Certificate | pki.PEM>): CAStore;

        function verifyCertificateChain(caStore: CAStore, chain: Certificate[], customVerifyCallback?: (verified: boolean | string, depth: number, chain: Certificate[]) => boolean): boolean;

        function pemToDer(pem: PEM): util.ByteStringBuffer;

        function privateKeyToPem(key: PrivateKey, maxline?: number): PEM;

        function privateKeyInfoToPem(key: asn1.Asn1, maxline?: number): PEM;

        function publicKeyToPem(key: PublicKey, maxline?: number): PEM;

        function publicKeyFromPem(pem: PEM): PublicKey;

        function privateKeyFromPem(pem: PEM): PrivateKey;

        function decryptPrivateKeyInfo(obj: asn1.Asn1, password: string): asn1.Asn1;

        function encryptPrivateKeyInfo(obj: asn1.Asn1, password: string, options?: EncryptionOptions): asn1.Asn1;

        function encryptedPrivateKeyFromPem(pem: PEM): asn1.Asn1;

        function encryptedPrivateKeyToPem(obj: asn1.Asn1): PEM;

        function decryptRsaPrivateKey(pem: PEM, password: string): PrivateKey;

        function encryptRsaPrivateKey(privateKey: PrivateKey, password: string, options?: EncryptionOptions): PEM;

        function privateKeyFromAsn1(privateKey: asn1.Asn1): PrivateKey;

        function privateKeyToAsn1(privateKey: PrivateKey): asn1.Asn1;

        function publicKeyFromAsn1(publicKey: asn1.Asn1): PublicKey;

        function publicKeyToAsn1(publicKey: PublicKey): asn1.Asn1;

        function publicKeyToRSAPublicKey(publicKey: PublicKey): any;

        function setRsaPublicKey(n: jsbn.BigInteger, e: jsbn.BigInteger): PublicKey;

        function wrapRsaPrivateKey(privateKey: asn1.Asn1): asn1.Asn1;
    }

    namespace random {
        function getBytes(count: number, callback?: (bytes: Bytes) => any): Bytes;
        function getBytesSync(count: number): Bytes;
        type CB = (_: any, seed: string) => void;
        interface Random {
            seedFileSync: (needed: number) => string;
            seedFile: (needed: number, cb: CB) => void;
        }
        function createInstance(): Random;
    }

    namespace ssh {
        interface FingerprintOptions {
            /**
             * @description the delimiter to use between bytes for `hex` encoded output
             */
            delimiter?: string;
            /**
             * @description if not specified, the function will return `ByteStringBuffer`
             */
            encoding?: 'hex' | 'binary';
            /**
             * @description if not specified defaults to `md.md5`
             */
            md?: md.MessageDigest;
        }

        /**
         * @description Encodes a private RSA key as an OpenSSH file
         */
        function privateKeyToOpenSSH(privateKey: pki.PrivateKey, passphrase?: string): string;

        /**
         * @description Encodes (and optionally encrypts) a private RSA key as a Putty PPK file
         */
        function privateKeyToPutty(privateKey: pki.PrivateKey, passphrase?: string, comment?: string): string;

        /**
         * @description Encodes a public RSA key as an OpenSSH file
         */
        function publicKeyToOpenSSH(publicKey: pki.PublicKey, comment?: string): string | pki.PEM;

        /**
         * @description Gets the SSH fingerprint for the given public key
         */
        function getPublicKeyFingerprint(publicKey: pki.PublicKey, options?: FingerprintOptions): util.ByteStringBuffer | Hex | string;
    }

    namespace asn1 {
        enum Class {
            UNIVERSAL = 0x00,
            APPLICATION = 0x40,
            CONTEXT_SPECIFIC = 0x80,
            PRIVATE = 0xC0,
        }

        enum Type {
            NONE = 0,
            BOOLEAN = 1,
            INTEGER = 2,
            BITSTRING = 3,
            OCTETSTRING = 4,
            NULL = 5,
            OID = 6,
            ODESC = 7,
            EXTERNAL = 8,
            REAL = 9,
            ENUMERATED = 10,
            EMBEDDED = 11,
            UTF8 = 12,
            ROID = 13,
            SEQUENCE = 16,
            SET = 17,
            PRINTABLESTRING = 19,
            IA5STRING = 22,
            UTCTIME = 23,
            GENERALIZEDTIME = 24,
            BMPSTRING = 30,
        }

        interface Asn1 {
            tagClass: Class;
            type: Type;
            constructed: boolean;
            composed: boolean;
            value: Bytes | Asn1[];
        }

        function create(tagClass: Class, type: Type, constructed: boolean, value: Bytes | Asn1[]): Asn1;
        function fromDer(bytes: Bytes | util.ByteBuffer, strict?: boolean): Asn1;
        function toDer(obj: Asn1): util.ByteBuffer;
        function oidToDer(oid: OID): util.ByteStringBuffer;
        function derToOid(der: util.ByteStringBuffer): OID;
    }

    namespace util {
        function isArray(x: any): boolean;
        function isArrayBuffer(x: any): boolean;
        function isArrayBufferView(x: any): boolean;

        interface ArrayBufferView {
            buffer: ArrayBuffer;
            byteLength: number;
        }

        type ByteBuffer = ByteStringBuffer;
        class ByteStringBuffer {
            constructor(bytes?: Bytes | ArrayBuffer | ArrayBufferView | ByteStringBuffer);
            data: string;
            read: number;
            length(): number;
            isEmpty(): boolean;
            putByte(byte: Byte): ByteStringBuffer;
            fillWithByte(byte: Byte, n: number): ByteStringBuffer;
            putBytes(bytes: Bytes): ByteStringBuffer;
            putString(str: string): ByteStringBuffer;
            putInt16(int: number): ByteStringBuffer;
            putInt24(int: number): ByteStringBuffer;
            putInt32(int: number): ByteStringBuffer;
            putInt16Le(int: number): ByteStringBuffer;
            putInt24Le(int: number): ByteStringBuffer;
            putInt32Le(int: number): ByteStringBuffer;
            putInt(int: number, numOfBits: number): ByteStringBuffer;
            putSignedInt(int: number, numOfBits: number): ByteStringBuffer;
            putBuffer(buffer: ByteStringBuffer): ByteStringBuffer;
            getByte(): number;
            getInt16(): number;
            getInt24(): number;
            getInt32(): number;
            getInt16Le(): number;
            getInt24Le(): number;
            getInt32Le(): number;
            getInt(numOfBits: number): number;
            getSignedInt(numOfBits: number): number;
            getBytes(count?: number): Bytes;
            bytes(count?: number): Bytes;
            at(index: number): Byte;
            setAt(index: number, byte: number): ByteStringBuffer;
            last(): Byte;
            copy(): ByteStringBuffer;
            compact(): ByteStringBuffer;
            clear(): ByteStringBuffer;
            truncate(): ByteStringBuffer;
            toHex(): Hex;
            toString(): string;
        }

        function fillString(char: string, count: number): string;
        function xorBytes(bytes1: string, bytes2: string, count: number): string;
        function hexToBytes(hex: Hex): Bytes;
        function bytesToHex(bytes: Bytes): Hex;
        function int32ToBytes(int: number): Bytes;
        function encode64(bytes: Bytes, maxline?: number): Base64;
        function decode64(encoded: Base64): Bytes;
        function encodeUtf8(str: string): Utf8;
        function decodeUtf8(encoded: Utf8): string;

        function createBuffer(): ByteBuffer;
        function createBuffer(input: Bytes | ArrayBuffer | ArrayBufferView | ByteStringBuffer, encoding?: Encoding): ByteBuffer;

        namespace binary {
            namespace raw {
                function encode(x: Uint8Array): Bytes;
                function decode(str: Bytes, output?: Uint8Array, offset?: number): Uint8Array;
            }
            namespace hex {
                function encode(bytes: Bytes | ArrayBuffer | ArrayBufferView | ByteStringBuffer): Hex;
                function decode(hex: Hex, output?: Uint8Array, offset?: number): Uint8Array;
            }
            namespace base64 {
                function encode(input: Uint8Array, maxline?: number): Base64;
                function decode(input: Base64, output?: Uint8Array, offset?: number): Uint8Array;
            }
        }

        namespace text {
            namespace utf8 {
                function encode(str: string, output?: Uint8Array, offset?: number): Uint8Array;
                function decode(bytes: Uint8Array): Utf8;
            }
            namespace utf16 {
                function encode(str: string, output?: Uint8Array, offset?: number): Uint8Array;
                function decode(bytes: Uint8Array): string;
            }
        }
    }

    namespace pkcs12 {

        interface BagsFilter {
            localKeyId?: string;
            localKeyIdHex?: string;
            friendlyName?: string;
            bagType?: string;
        }

        interface Bag {
            type: string;
            attributes: any;
            key?: pki.PrivateKey;
            cert?: pki.Certificate;
            asn1: asn1.Asn1
        }

        interface Pkcs12Pfx {
            version: string;
            safeContents: [{
                encrypted: boolean;
                safeBags: Bag[];
            }];
            getBags: (filter: BagsFilter) => {
                [key: string]: Bag[] | undefined;
                localKeyId?: Bag[];
                friendlyName?: Bag[];
            };
            getBagsByFriendlyName: (fiendlyName: string, bagType: string) => Bag[]
            getBagsByLocalKeyId: (localKeyId: string, bagType: string) => Bag[]
        }

        function pkcs12FromAsn1(obj: any, strict?: boolean, password?: string): Pkcs12Pfx;
        function pkcs12FromAsn1(obj: any, password?: string): Pkcs12Pfx;

        function toPkcs12Asn1(
            key: pki.PrivateKey,
            cert: pki.Certificate | pki.Certificate[],
            password: string | null,
            options?: {
                algorithm?: 'aes128' | 'aes192' | 'aes256' | '3des',
                count?: number,
                saltSize?: number,
                useMac?: boolean,
                localKeyId?: Hex,
                friendlyName?: string,
                generateLocalKeyId?: boolean,
            },
        ): asn1.Asn1;

        function generateKey(
            password: string | null | undefined,
            salt: util.ByteBuffer,
            id: Byte,
            iter: number,
            n: number,
            md?: md.MessageDigest,
        ): util.ByteBuffer;
    }

    namespace pkcs7 {
        interface PkcsSignedData {
            content?: string | util.ByteBuffer;
            contentInfo?: { value: any[] };

            addCertificate(certificate: pki.Certificate): void;
            addSigner(options: {
                key: string;
                certificate: pki.Certificate;
                digestAlgorithm: string;
                authenticatedAttributes: { type: string; value?: string }[];
            }): void;
            sign(options?:{
                detached?: boolean
            }): void;
            toAsn1(): asn1.Asn1;
        }

        function createSignedData(): PkcsSignedData;
    }

    namespace pkcs5 {
        function pbkdf2(password: string, salt: string, iterations: number, keySize: number): string;
    }

    namespace md {

        interface MessageDigest {
            update(msg: string, encoding?: Encoding): MessageDigest;
            digest(): util.ByteStringBuffer;
        }

        namespace sha1 {
            function create(): MessageDigest;
        }

        namespace sha256 {
            function create(): MessageDigest;
        }

        namespace sha384 {
            function create(): MessageDigest;
        }

        namespace sha512 {
            function create(): MessageDigest;
        }

        namespace md5 {
            function create(): MessageDigest;
        }

        namespace hmac {
        }
    }

    namespace hmac {

      type Algorithm = "sha1" | "md5" | "sha256";

      interface HMAC {
          digest(): util.ByteBuffer;
          getMact(): util.ByteBuffer;
          start(md: Algorithm, key: string | util.ByteBuffer | null): void;
          update(bytes: string | util.ByteBuffer | Buffer): void;
      }

      function create(): HMAC;
    }

    namespace cipher {

        type Algorithm = "AES-ECB" | "AES-CBC" | "AES-CFB" | "AES-OFB" | "AES-CTR" | "AES-GCM" | "3DES-ECB" | "3DES-CBC" | "DES-ECB" | "DES-CBC";

        function createCipher(algorithm: Algorithm, payload: util.ByteBuffer | Bytes): BlockCipher;
        function createDecipher(algorithm: Algorithm, payload: util.ByteBuffer | Bytes): BlockCipher;

        interface StartOptions {
            iv?: Bytes;
            tag?: util.ByteStringBuffer;
            tagLength?: number;
            additionalData?: string;
        }

        interface BlockCipher {
            start: (options?: StartOptions) => void;
            update: (payload: util.ByteBuffer) => void;
            finish: () => boolean;
            output: util.ByteStringBuffer;
            mode: Mode;
        }

        interface Mode {
            tag: util.ByteStringBuffer;
        }
    }

    namespace pss {
        type PSS = any;

        function create(any: any): PSS;
    }

    namespace mgf {
        namespace mgf1 {
            function create(any: any): any;
        }
    }

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
            verify(
                conn: Connection,
                verified: Verified,
                depth: number,
                certs: pki.Certificate[]
            ): Verified;
            getCertificate:
                | ((
                      conn: Connection,
                      hint: CertificateRequest | string[]
                  ) => pki.PEM | ReadonlyArray<pki.PEM>)
                | null;
            getPrivateKey:
                | ((conn: Connection, certificate: pki.Certificate) => pki.PEM)
                | null;
            getSignature:
                | ((
                      conn: Connection,
                      bytes: Bytes,
                      callback: (conn: Connection, bytes: Bytes) => void
                  ) => void)
                | null;
            input: util.ByteBuffer;
            tlsData: util.ByteBuffer;
            data: util.ByteBuffer;
            tlsDataReady(conn: Connection): void;
            dataReady(conn: Connection): void;
            heartbeatReceived:
                | ((conn: Connection, payload: util.ByteBuffer) => void)
                | undefined;
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
            prepareHeartbeatRequest(
                payload: Bytes | util.ByteBuffer,
                payloadLength?: number
            ): boolean;
            close(clearFail?: boolean): Connection;
        }

        interface Record {
            type: ContentType;
            version: ProtocolVersion;
            length: number;
            fragment: util.ByteBuffer;
            ready?: boolean;
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

        function createSessionCache(
            cache?: SessionCache | { [key: string]: Session },
            capacity?: number
        ): SessionCache;

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

        type Verified = true | { message?: string; alert?: Alert.Description };

        function createConnection(options: {
            server?: boolean;
            sessionId?: Bytes | null;
            caStore?: pki.CAStore | ReadonlyArray<pki.Certificate>;
            sessionCache?: SessionCache | { [key: string]: Session };
            cipherSuites?: CipherSuite[];
            connected(conn: Connection): void;
            virtualHost?: string;
            verifyClient?: boolean;
            verify?(
                conn: Connection,
                verified: Verified,
                depth: number,
                certs: pki.Certificate[]
            ): Verified;
            getCertificate?(
                conn: Connection,
                hint: CertificateRequest | string[]
            ): pki.PEM | ReadonlyArray<pki.PEM>;
            getPrivateKey?(conn: Connection, certificate: pki.Certificate): pki.PEM;
            getSignature?(
                conn: Connection,
                bytes: Bytes,
                callback: (conn: Connection, bytes: Bytes) => void
            ): void;
            tlsDataReady(conn: Connection): void;
            dataReady(conn: Connection): void;
            heartbeatReceived?(conn: Connection, payload: util.ByteBuffer): void;
            closed(conn: Connection): void;
            error(conn: Connection, error: TLSError): void;
            deflate?(inBytes: Bytes): Bytes;
            inflate?(inBytes: Bytes): Bytes;
        }): Connection;

        function prf_tls1(
            secret: string,
            label: string,
            seed: string,
            length: number
        ): util.ByteBuffer;

        function hmac_sha1(
            key: string | ReadonlyArray<Byte> | util.ByteBuffer,
            seqNum: [number, number],
            record: Record
        ): Bytes;
    }
}
