// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace dojox {

    namespace encoding {
        namespace compression {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/compression/splay.html
             *
             *
             * @param n
             */
            interface splay{(n: any): void}
            namespace splay {
                /**
                 *
                 * @param stream
                 */
                interface decode{(stream: any): number}
                /**
                 *
                 * @param value
                 * @param stream
                 */
                interface encode{(value: any, stream: any): any}
                /**
                 *
                 */
                interface reset{(): void}
                /**
                 *
                 * @param i
                 */
                interface splay{(i: any): void}
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/compression/lzw.html
             *
             *
             */
            interface lzw {
                /**
                 *
                 * @param n
                 */
                Decoder(n: any): void;
                /**
                 *
                 * @param n
                 */
                Encoder(n: any): void;
            }
        }

        namespace crypto {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/RSAKey.html
             *
             *
             * @param rngf
             */
            class RSAKey {
                constructor(rngf: any);
                /**
                 * Return the PKCS#1 RSA decryption of "ctext".
                 *
                 * @param ctext an even-length hex string
                 */
                decrypt(ctext: String): any;
                /**
                 *
                 * @param text
                 */
                encrypt(text: any): any;
                /**
                 * Generate a new random private key B bits long, using public expt E
                 *
                 * @param B
                 * @param E
                 */
                generate(B: any, E: any): void;
                /**
                 * Set the private key fields N, e, d and CRT params from hex strings
                 *
                 * @param N
                 * @param E
                 * @param D
                 */
                setPrivate(N: any, E: any, D: any): void;
                /**
                 * Set the private key fields N, e, d and CRT params from hex strings
                 *
                 * @param N
                 * @param E
                 * @param D
                 * @param P
                 * @param Q
                 * @param DP
                 * @param DQ
                 * @param C
                 */
                setPrivateEx(N: any, E: any, D: any, P: any, Q: any, DP: any, DQ: any, C: any): void;
                /**
                 * Set the public key fields N and e from hex strings
                 *
                 * @param N
                 * @param E
                 */
                setPublic(N: any, E: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/RSAKey-ext.html
             *
             *
             * @param rngf
             */
            class RSAKey_ext {
                constructor(rngf: any);
                /**
                 * Return the PKCS#1 RSA decryption of "ctext".
                 *
                 * @param ctext an even-length hex string
                 */
                decrypt(ctext: String): any;
                /**
                 *
                 * @param text
                 */
                encrypt(text: any): any;
                /**
                 * Generate a new random private key B bits long, using public expt E
                 *
                 * @param B
                 * @param E
                 */
                generate(B: any, E: any): void;
                /**
                 * Set the private key fields N, e, d and CRT params from hex strings
                 *
                 * @param N
                 * @param E
                 * @param D
                 */
                setPrivate(N: any, E: any, D: any): void;
                /**
                 * Set the private key fields N, e, d and CRT params from hex strings
                 *
                 * @param N
                 * @param E
                 * @param D
                 * @param P
                 * @param Q
                 * @param DP
                 * @param DQ
                 * @param C
                 */
                setPrivateEx(N: any, E: any, D: any, P: any, Q: any, DP: any, DQ: any, C: any): void;
                /**
                 * Set the public key fields N and e from hex strings
                 *
                 * @param N
                 * @param E
                 */
                setPublic(N: any, E: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/_base.html
             *
             *
             */
            interface _base {
                /**
                 *
                 */
                Blowfish: Object;
                /**
                 * Enumeration for various cipher modes.
                 *
                 */
                cipherModes: Object;
                /**
                 * Enumeration for input and output encodings.
                 *
                 */
                outputTypes: Object;
                /**
                 *
                 */
                SimpleAES: Object;
                /**
                 *
                 */
                RSAKey(): void;
            }
            module _base {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/_base.RSAKey.html
                 *
                 *
                 * @param rngf
                 */
                class RSAKey {
                    constructor(rngf: any);
                    /**
                     * Return the PKCS#1 RSA decryption of "ctext".
                     *
                     * @param ctext an even-length hex string
                     */
                    decrypt(ctext: String): any;
                    /**
                     *
                     * @param text
                     */
                    encrypt(text: any): any;
                    /**
                     * Generate a new random private key B bits long, using public expt E
                     *
                     * @param B
                     * @param E
                     */
                    generate(B: any, E: any): void;
                    /**
                     * Set the private key fields N, e, d and CRT params from hex strings
                     *
                     * @param N
                     * @param E
                     * @param D
                     */
                    setPrivate(N: any, E: any, D: any): void;
                    /**
                     * Set the private key fields N, e, d and CRT params from hex strings
                     *
                     * @param N
                     * @param E
                     * @param D
                     * @param P
                     * @param Q
                     * @param DP
                     * @param DQ
                     * @param C
                     */
                    setPrivateEx(N: any, E: any, D: any, P: any, Q: any, DP: any, DQ: any, C: any): void;
                    /**
                     * Set the public key fields N and e from hex strings
                     *
                     * @param N
                     * @param E
                     */
                    setPublic(N: any, E: any): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/_base.cipherModes.html
                 *
                 * Enumeration for various cipher modes.
                 *
                 */
                interface cipherModes {
                    /**
                     *
                     */
                    CBC: number;
                    /**
                     *
                     */
                    CFB: number;
                    /**
                     *
                     */
                    CTR: number;
                    /**
                     *
                     */
                    ECB: number;
                    /**
                     *
                     */
                    OFB: number;
                    /**
                     *
                     */
                    PCBC: number;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/_base.outputTypes.html
                 *
                 * Enumeration for input and output encodings.
                 *
                 */
                interface outputTypes {
                    /**
                     *
                     */
                    Base64: number;
                    /**
                     *
                     */
                    Hex: number;
                    /**
                     *
                     */
                    Raw: number;
                    /**
                     *
                     */
                    String: number;
                }
            }

        }

        namespace digests {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/SHA1.html
             *
             * Computes the SHA1 digest of the data, and returns the result according to output type.
             *
             * @param data
             * @param outputType       Optional
             */
            interface SHA1{(data: String, outputType?: Object): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/MD5.html
             *
             * computes the digest of data, and returns the result according to type outputType
             *
             * @param data
             * @param outputType       Optional
             */
            interface MD5{(data: String, outputType?: Object): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/SHA224.html
             *
             *
             * @param data
             * @param outputType       Optional
             */
            interface SHA224{(data: String, outputType?: number): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/SHA256.html
             *
             *
             * @param data
             * @param outputType       Optional
             */
            interface SHA256{(data: String, outputType?: number): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/SHA384.html
             *
             *
             * @param data
             * @param outputType       Optional
             */
            interface SHA384{(data: String, outputType?: number): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/SHA512.html
             *
             *
             * @param data
             * @param outputType       Optional
             */
            interface SHA512{(data: String, outputType?: number): void}
            module _sha_32 {
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/_base.html
             *
             *
             */
            interface _base {
                /**
                 * Enumeration for input and output encodings.
                 *
                 */
                outputTypes: Object;
                /**
                 * add a pair of words together with rollover
                 *
                 * @param a
                 * @param b
                 */
                addWords(a: String, b: String): number;
                /**
                 * computes the digest of data, and returns the result according to type outputType
                 *
                 * @param data
                 * @param outputType               OptionalAn object with the following properties:Base64HexStringRaw
                 */
                MD5(data: String, outputType: Object): void;
                /**
                 * Computes the SHA1 digest of the data, and returns the result according to output type.
                 *
                 * @param data
                 * @param outputType               OptionalAn object with the following properties:Base64HexStringRaw
                 */
                SHA1(data: String, outputType: Object): void;
                /**
                 *
                 * @param input
                 */
                stringToUtf8(input: any): void;
                /**
                 * convert a string to a word array
                 *
                 * @param s
                 */
                stringToWord(s: String): any[];
                /**
                 * convert an array of words to base64 encoding, should be more efficient
                 * than using dojox.encoding.base64
                 *
                 * @param wa
                 */
                wordToBase64(wa: String[]): void;
                /**
                 * convert an array of words to a hex tab
                 *
                 * @param wa
                 */
                wordToHex(wa: String[]): void;
                /**
                 * convert an array of words to a string
                 *
                 * @param wa
                 */
                wordToString(wa: String[]): void;
            }
            module _base {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/_base.outputTypes.html
                 *
                 * Enumeration for input and output encodings.
                 *
                 */
                interface outputTypes {
                    /**
                     *
                     */
                    Base64: number;
                    /**
                     *
                     */
                    Hex: number;
                    /**
                     *
                     */
                    Raw: number;
                    /**
                     *
                     */
                    String: number;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/_sha-64.html
             *
             *
             */
            interface _sha_64 {
                /**
                 *
                 */
                outputTypes: Object;
                /**
                 *
                 * @param msg
                 * @param length
                 * @param hash
                 * @param depth
                 */
                digest(msg: any, length: any, hash: any, depth: any): any[];
                /**
                 *
                 * @param s
                 */
                stringToUtf8(s: any): any;
                /**
                 *
                 * @param wa
                 */
                toBase64(wa: any): any;
                /**
                 *
                 * @param wa
                 */
                toHex(wa: any): any;
                /**
                 *
                 * @param s
                 */
                toWord(s: any): any;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/_base.html
         *
         *
         */
        interface _base {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/bits.html
         *
         *
         */
        interface bits {
            /**
             *
             * @param buffer
             * @param width
             */
            InputStream(buffer: any, width: any): void;
            /**
             *
             */
            OutputStream(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/ascii85.html
         *
         *
         */
        interface ascii85 {
            /**
             * decodes the input string back to array of numbers
             *
             * @param input the input string to decode
             */
            decode(input: String): void;
            /**
             * encodes input data in ascii85 string
             *
             * @param input an array of numbers (0-255) to encode
             */
            encode(input: any[]): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/base64.html
         *
         *
         */
        interface base64 {
            /**
             * Convert a base64-encoded string to an array of bytes
             *
             * @param str
             */
            decode(str: String): void;
            /**
             * Encode an array of bytes as a base64-encoded string
             *
             * @param ba
             */
            encode(ba: number[]): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/easy64.html
         *
         *
         */
        interface easy64 {
            /**
             * decodes the input string back to array of numbers
             *
             * @param input the input string to decode
             */
            decode(input: String): void;
            /**
             * encodes input data in easy64 string
             *
             * @param input an array of numbers (0-255) to encode
             */
            encode(input: any[]): void;
        }
    }




}

declare module "dojox/encoding/_base" {
    var exp: dojox.encoding._base
    export=exp;
}
declare module "dojox/encoding/ascii85" {
    var exp: dojox.encoding.ascii85
    export=exp;
}
declare module "dojox/encoding/base64" {
    var exp: dojox.encoding.base64
    export=exp;
}
declare module "dojox/encoding/bits" {
    var exp: dojox.encoding.bits
    export=exp;
}
declare module "dojox/encoding/easy64" {
    var exp: dojox.encoding.easy64
    export=exp;
}
declare module "dojox/encoding/compression/splay" {
    var exp: dojox.encoding.compression.splay
    export=exp;
}
declare module "dojox/encoding/compression/lzw" {
    var exp: dojox.encoding.compression.lzw
    export=exp;
}
declare module "dojox/encoding/crypto/_base" {
    var exp: dojox.encoding.crypto._base
    export=exp;
}
declare module "dojox/encoding/crypto/_base.RSAKey" {
    var exp: dojox.encoding.crypto._base.RSAKey
    export=exp;
}
declare module "dojox/encoding/crypto/_base.cipherModes" {
    var exp: dojox.encoding.crypto._base.cipherModes
    export=exp;
}
declare module "dojox/encoding/crypto/_base.outputTypes" {
    var exp: dojox.encoding.crypto._base.outputTypes
    export=exp;
}
declare module "dojox/encoding/crypto/RSAKey" {
    var exp: dojox.encoding.crypto.RSAKey
    export=exp;
}
declare module "dojox/encoding/crypto/RSAKey-ext" {
    var exp: dojox.encoding.crypto.RSAKey_ext
    export=exp;
}
declare module "dojox/encoding/digests/MD5" {
    var exp: dojox.encoding.digests.MD5
    export=exp;
}
declare module "dojox/encoding/digests/SHA1" {
    var exp: dojox.encoding.digests.SHA1
    export=exp;
}
declare module "dojox/encoding/digests/SHA224" {
    var exp: dojox.encoding.digests.SHA224
    export=exp;
}
declare module "dojox/encoding/digests/SHA512" {
    var exp: dojox.encoding.digests.SHA512
    export=exp;
}
declare module "dojox/encoding/digests/SHA256" {
    var exp: dojox.encoding.digests.SHA256
    export=exp;
}
declare module "dojox/encoding/digests/SHA384" {
    var exp: dojox.encoding.digests.SHA384
    export=exp;
}
declare module "dojox/encoding/digests/_base" {
    var exp: dojox.encoding.digests._base
    export=exp;
}
declare module "dojox/encoding/digests/_base.outputTypes" {
    var exp: dojox.encoding.digests._base.outputTypes
    export=exp;
}
declare module "dojox/encoding/digests/_sha-64" {
    var exp: dojox.encoding.digests._sha_64
    export=exp;
}
