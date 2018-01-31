// Type definitions for node-forge 0.7.2
// Project: https://github.com/digitalbazaar/forge
// Definitions by: Seth Westphal <https://github.com/westy92>
//                 Kay Schecker <https://github.com/flynetworks>
//                 Aakash Goenka <https://github.com/a-k-g>
//                 Rafal2228 <https://github.com/rafal2228>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "node-forge" {
    type Byte = string;
    type Bytes = string;
    type Hex = string;
    type Base64 = string;
    type Utf8 = string;
    type OID = string;

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
        type Key = any;

        interface KeyPair {
            publicKey: Key;
            privateKey: Key;
        }

        function privateKeyToPem(key: Key, maxline?: number): PEM;
        function publicKeyToPem(key: Key, maxline?: number): PEM;
        function publicKeyFromPem(pem: PEM): Key;
        function privateKeyFromPem(pem: PEM): Key;
        function certificateToPem(cert: Certificate, maxline?: number): PEM;

        interface oids {
            [key: string]: string;
        }
        var oids: oids;

        namespace rsa {

            interface GenerateKeyPairOptions {
                bits?: number;
                e?: number;
                workerScript?: string;
                workers?: number;
                workLoad?: number;
                prng?: any;
                algorithm?: string;
            }

            function generateKeyPair(bits?: number, e?: number, callback?: (err: Error, keypair: KeyPair) => void): KeyPair;
            function generateKeyPair(options?: GenerateKeyPairOptions, callback?: (err: Error, keypair: KeyPair) => void): KeyPair;
        }

        interface CertificateFieldOptions {
            name?: string;
            type?: string;
            shortName?: string;
        }

        interface CertificateField extends CertificateFieldOptions {
            valueConstructed?: boolean;
            valueTagClass?: asn1.Class;
            value?: any[];
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
            publicKey: any;
            md: any;
            /**
             * Sets the subject of this certificate.
             *
             * @param attrs the array of subject attributes to use.
             * @param uniqueId an optional a unique ID to use.
             */
            setSubject(attrs: CertificateField[], uniqueId?: string): void;
            /**
              * Sets the subject of this certificate.
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
            sign(key: pki.Key, md: md.MessageDigest): void;
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

        function certificateFromAsn1(obj: asn1.Asn1, computeHash?: boolean): Certificate;

        function decryptRsaPrivateKey(pem: PEM, passphrase?: string): Key;

        function createCertificate(): Certificate;
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
        function privateKeyToOpenSSH(privateKey: pki.Key, passphrase?: string): string;

        /**
         * @description Encodes (and optionally encrypts) a private RSA key as a Putty PPK file
         */
        function privateKeyToPutty(privateKey: pki.Key, passphrase?: string, comment?: string): string;

        /**
         * @description Encodes a public RSA key as an OpenSSH file
         */
        function publicKeyToOpenSSH(publicKey: pki.Key, comment?: string): string | pki.PEM;

        /**
         * @description Gets the SSH fingerprint for the given public key
         */
        function getPublicKeyFingerprint(publicKey: pki.Key, options?: FingerprintOptions): util.ByteStringBuffer | Hex | string;
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
            value: Asn1[];
        }

        function create(tagClass: Class, type: Type, constructed: boolean, value: string | Asn1[]): Asn1;
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
        function createBuffer(input: string, encode: string): ByteBuffer;

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
            key?: pki.Key;
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
    }

    namespace md {

        interface MessageDigest {
            update(msg: string, encoding?: string): MessageDigest;
            digest(): util.ByteStringBuffer;
        }

        namespace sha1 {
            function create(): MessageDigest;
        }

        namespace sha256 {
            function create(): MessageDigest;
        }

        namespace md5 {
            function create(): MessageDigest;
        }
    }

    namespace cipher {

        type Algorithm = "AES-ECB" | "AES-CBC" | "AES-CFB" | "AES-OFB" | "AES-CTR" | "AES-GCM" | "3DES-ECB" | "3DES-CBC" | "DES-ECB" | "DES-CBC";

        function createCipher(algorithm: Algorithm, payload: util.ByteBuffer): BlockCipher;
        function createDecipher(algorithm: Algorithm, payload: util.ByteBuffer): BlockCipher;

        interface StartOptions {
            iv?: string;
        }

        interface BlockCipher {
            start: (options?: StartOptions) => void;
            update: (payload: util.ByteBuffer) => void;
            finish: () => boolean;
            output: util.ByteStringBuffer;
        }
    }
}
