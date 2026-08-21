declare namespace jsrsasign.KJUR.crypto {
    /**
     * MessageDigest class which is very similar to java.security.MessageDigest class
     * @description
     * Currently this supports following algorithm and providers combination:
     * - md5 - cryptojs
     * - sha1 - cryptojs
     * - sha224 - cryptojs
     * - sha256 - cryptojs
     * - sha384 - cryptojs
     * - sha512 - cryptojs
     * - ripemd160 - cryptojs
     * - sha256 - sjcl (NEW from crypto.js 1.0.4)
     *
     * @example
     * // CryptoJS provider sample
     * var md = new KJUR.crypto.MessageDigest({alg: "sha1", prov: "cryptojs"});
     * md.updateString('aaa')
     * var mdHex = md.digest()
     *
     * // SJCL(Stanford JavaScript Crypto Library) provider sample
     * var md = new KJUR.crypto.MessageDigest({alg: "sha256", prov: "sjcl"}); // sjcl supports sha256 only
     * md.updateString('aaa')
     * var mdHex = md.digest()
     *
     * // HASHLENGTH property
     * KJUR.crypto.MessageDigest.HASHLENGTH['sha1'] → 20
     * KJUR.crypto.MessageDigest.HASHLENGTH['sha512'] → 64
     */
    class MessageDigest {
        /** static Array of resulted byte length of hash (ex. HASHLENGTH["sha1"] == 20) */
        static readonly HASHLENGTH: {
            md5: number;
            sha1: number;
            sha224: number;
            sha256: number;
            sha384: number;
            sha512: number;
            ripemd160: number;
        };

        constructor(params: { alg?: string | undefined; prov?: string | undefined });

        /**
         * set hash algorithm and provider
         * @param alg hash algorithm name
         * @param prov provider name
         * @description
         * This methods set an algorithm and a cryptographic provider.
         * Here is acceptable algorithm names ignoring cases and hyphens:
         * - MD5
         * - SHA1
         * - SHA224
         * - SHA256
         * - SHA384
         * - SHA512
         * - RIPEMD160
         * NOTE: Since jsrsasign 6.2.0 crypto 1.1.10, this method ignores
         * upper or lower cases. Also any hyphens (i.e. "-") will be ignored
         * so that "SHA1" or "SHA-1" will be acceptable.
         * @example
         * // for SHA1
         * md.setAlgAndProvider('sha1', 'cryptojs');
         * md.setAlgAndProvider('SHA1');
         * // for RIPEMD160
         * md.setAlgAndProvider('ripemd160', 'cryptojs');
         */
        setAlgAndProvider(alg: string, prov: string): void;

        /**
         * update digest by specified string
         * @param str string to update
         * @description
         * @example
         * md.updateString('New York');
         */
        updateString(str: string): void;

        /**
         * update digest by specified hexadecimal string
         * @param hex hexadecimal string to update
         * @description
         * @example
         * md.updateHex('0afe36');
         */
        updateHex(hex: string): void;

        /**
         * completes hash calculation and returns hash result
         * @description
         * @example
         * md.digest()
         */
        digest(): string;

        /**
         * performs final update on the digest using string, then completes the digest computation
         * @param str string to final update
         * @description
         * @example
         * md.digestString('aaa')
         */
        digestString(str: string): string;

        /**
         * performs final update on the digest using hexadecimal string, then completes the digest computation
         * @param hex hexadecimal string to final update
         * @description
         * @example
         * md.digestHex('0f2abd')
         */
        digestHex(hex: string): string;

        /**
         * get canonical hash algorithm name
         * @param alg hash algorithm name (ex. MD5, SHA-1, SHA1, SHA512 et.al.)
         * @return canonical hash algorithm name
         * @description
         * This static method normalizes from any hash algorithm name such as
         * "SHA-1", "SHA1", "MD5", "sha512" to lower case name without hyphens
         * such as "sha1".
         * @example
         * KJUR.crypto.MessageDigest.getCanonicalAlgName("SHA-1") → "sha1"
         * KJUR.crypto.MessageDigest.getCanonicalAlgName("MD5")   → "md5"
         */
        static getCanonicalAlgName(alg: string): string;

        /**
         * get resulted hash byte length for specified algorithm name
         * @param alg non-canonicalized hash algorithm name (ex. MD5, SHA-1, SHA1, SHA512 et.al.)
         * @return resulted hash byte length
         * @description
         * This static method returns resulted byte length for specified algorithm name such as "SHA-1".
         * @example
         * KJUR.crypto.MessageDigest.getHashLength("SHA-1") → 20
         * KJUR.crypto.MessageDigest.getHashLength("sha1") → 20
         */
        static getHashLength(alg: string): number;
    }
}
