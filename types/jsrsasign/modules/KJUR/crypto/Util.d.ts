declare namespace jsrsasign.KJUR.crypto {
    /** static object for cryptographic function utilities */
    const Util: {
        /** PKCS#1 DigestInfo heading hexadecimal bytes for each hash algorithms */
        DIGESTINFOHEAD: {
            md2: string;
            md5: string;
            ripemd160: string;
            sha1: string;
            sha224: string;
            sha256: string;
            sha384: string;
            sha512: string;
        };

        /** associative array of default provider name for each hash and signature algorithms */
        DEFAULTPROVIDER: {
            hmacmd5: string;
            hmacripemd160: string;
            hmacsha1: string;
            hmacsha224: string;
            hmacsha256: string;
            hmacsha384: string;
            hmacsha512: string;
            md5: string;
            MD5withECDSA: string;
            MD5withRSA: string;
            MD5withRSAandMGF1: string;
            ripemd160: string;
            RIPEMD160withECDSA: string;
            RIPEMD160withRSA: string;
            RIPEMD160withRSAandMGF1: string;
            sha1: string;
            SHA1withDSA: string;
            SHA1withECDSA: string;
            SHA1withRSA: string;
            SHA1withRSAandMGF1: string;
            sha224: string;
            SHA224withDSA: string;
            SHA224withECDSA: string;
            SHA224withRSA: string;
            SHA224withRSAandMGF1: string;
            sha256: string;
            SHA256withDSA: string;
            SHA256withECDSA: string;
            SHA256withRSA: string;
            SHA256withRSAandMGF1: string;
            sha384: string;
            SHA384withECDSA: string;
            SHA384withRSA: string;
            SHA384withRSAandMGF1: string;
            sha512: string;
            SHA512withECDSA: string;
            SHA512withRSA: string;
            SHA512withRSAandMGF1: string;
        };

        CRYPTOJSMESSAGEDIGESTNAME: {
            md5: string;
            ripemd160: string;
            sha1: string;
            sha224: string;
            sha256: string;
            sha384: string;
            sha512: string;
        };

        /**
         * get hexadecimal DigestInfo
         * @param hHash hexadecimal hash value
         * @param alg hash algorithm name (ex. 'sha1')
         * @return hexadecimal string DigestInfo ASN.1 structure
         */
        getDigestInfoHex(hHash: string, alg: string): string;

        /**
         * get PKCS#1 padded hexadecimal DigestInfo
         * @param hHash hexadecimal hash value of message to be signed
         * @param alg hash algorithm name (ex. 'sha1')
         * @param keySize key bit length (ex. 1024)
         * @return hexadecimal string of PKCS#1 padded DigestInfo
         */
        getPaddedDigestInfoHex(hHash: string, alg: string, keySize: number): string;

        /**
         * get hexadecimal hash of string with specified algorithm
         * @param s input string to be hashed
         * @param alg hash algorithm name
         * @return hexadecimal string of hash value
         */
        hashString(s: string, alg: string): string;

        /**
         * get hexadecimal hash of hexadecimal string with specified algorithm
         * @param sHex input hexadecimal string to be hashed
         * @param alg hash algorithm name
         * @return hexadecimal string of hash value
         */
        hashHex(sHex: string, alg: string): string;

        /**
         * get hexadecimal SHA1 hash of string
         * @param s input string to be hashed
         * @return hexadecimal string of hash value
         */
        sha1(s: string): string;

        /**
         * get hexadecimal SHA256 hash of string
         * @param s input string to be hashed
         * @return hexadecimal string of hash value
         */
        sha256(s: string): string;

        sha256Hex(s: string): string;

        /**
         * get hexadecimal SHA512 hash of string
         * @param s input string to be hashed
         * @return hexadecimal string of hash value
         */
        sha512(s: string): string;

        /**
         * get hexadecimal MD5 hash of string
         * @param s input string to be hashed
         * @return hexadecimal string of hash value
         * @example
         * Util.md5('aaa') → 47bce5c74f589f4867dbd57e9ca9f808
         */
        md5(s: string): string;

        /**
         * get hexadecimal RIPEMD160 hash of string
         * @param s input string to be hashed
         * @return hexadecimal string of hash value
         * @example
         * KJUR.crypto.Util.ripemd160("aaa") → 08889bd7b151aa174c21f33f59147fa65381edea
         */
        ripemd160(s: string): string;

        /**
         * get hexadecimal string of random value from with specified byte length
         * @param n length of bytes of random
         * @return hexadecimal string of random
         * @example
         * KJUR.crypto.Util.getRandomHexOfNbytes(3) → "6314af", "000000" or "001fb4"
         * KJUR.crypto.Util.getRandomHexOfNbytes(128) → "8fbc..." in 1024bits
         */
        getRandomHexOfNbytes(n: number): string;

        /**
         * get BigInteger object of random value from with specified byte length
         * @param n length of bytes of random
         * @return BigInteger object of specified random value
         * @example
         * KJUR.crypto.Util.getRandomBigIntegerOfNbytes(3) → 6314af of BigInteger
         * KJUR.crypto.Util.getRandomBigIntegerOfNbytes(128) → 8fbc... of BigInteger
         */
        getRandomBigIntegerOfNbytes(n: number): BigInteger;

        /**
         * get hexadecimal string of random value from with specified bit length
         * @param n length of bits of random
         * @return hexadecimal string of random
         * @example
         * KJUR.crypto.Util.getRandomHexOfNbits(24) → "6314af", "000000" or "001fb4"
         * KJUR.crypto.Util.getRandomHexOfNbits(1024) → "8fbc..." in 1024bits
         */
        getRandomHexOfNbits(n: number): string;

        /**
         * get BigInteger object of random value from with specified bit length
         * @param n length of bits of random
         * @return BigInteger object of specified random value
         * @example
         * KJUR.crypto.Util.getRandomBigIntegerOfNbits(24) → 6314af of BigInteger
         * KJUR.crypto.Util.getRandomBigIntegerOfNbits(1024) → 8fbc... of BigInteger
         */
        getRandomBigIntegerOfNbits(n: number): BigInteger;

        /**
         * get BigInteger object of random value from zero to max value
         * @param biMax max value of BigInteger object for random value
         * @return BigInteger object of specified random value
         * @description
         * This static method generates a BigInteger object with random value
         * greater than or equal to zero and smaller than or equal to biMax
         * (i.e. 0 ≤ result ≤ biMax).
         * @example
         * biMax = new BigInteger("3fa411...", 16);
         * KJUR.crypto.Util.getRandomBigIntegerZeroToMax(biMax) → 8fbc... of BigInteger
         */
        getRandomBigIntegerZeroToMax(biMax: number): BigInteger;

        /**
         * get BigInteger object of random value from min value to max value
         * @param biMin min value of BigInteger object for random value
         * @param biMax max value of BigInteger object for random value
         * @return BigInteger object of specified random value
         * @description
         * This static method generates a BigInteger object with random value
         * greater than or equal to biMin and smaller than or equal to biMax
         * (i.e. biMin ≤ result ≤ biMax).
         * @example
         * biMin = new BigInteger("2fa411...", 16);
         * biMax = new BigInteger("3fa411...", 16);
         * KJUR.crypto.Util.getRandomBigIntegerMinToMax(biMin, biMax) → 32f1... of BigInteger
         */
        getRandomBigIntegerMinToMax(biMin: number, biMax: number): BigInteger;
    };
}
