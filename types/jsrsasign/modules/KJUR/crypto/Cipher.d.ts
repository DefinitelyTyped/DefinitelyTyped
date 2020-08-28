declare namespace jsrsasign.KJUR.crypto {
    /**
     * Cipher class to encrypt and decrypt data
     * @param params parameters for constructor
     * @description
     * Here is supported canonicalized cipher algorithm names and its standard names:
     * - RSA - RSA/ECB/PKCS1Padding (default for RSAKey)
     * - RSAOAEP - RSA/ECB/OAEPWithSHA-1AndMGF1Padding
     * - RSAOAEP224 - RSA/ECB/OAEPWithSHA-224AndMGF1Padding(*)
     * - RSAOAEP256 - RSA/ECB/OAEPWithSHA-256AndMGF1Padding
     * - RSAOAEP384 - RSA/ECB/OAEPWithSHA-384AndMGF1Padding(*)
     * - RSAOAEP512 - RSA/ECB/OAEPWithSHA-512AndMGF1Padding(*)
     * NOTE: (*) is not supported in Java JCE.
     * Currently this class supports only RSA encryption and decryption.
     * However it is planning to implement also symmetric ciphers near in the future.
     * @example
     */
    namespace Cipher {
        /**
         * encrypt raw string by specified key and algorithm
         * @param s input string to encrypt
         * @param keyObj RSAKey object or hexadecimal string of symmetric cipher key
         * @param algName short/long algorithm name for encryption/decryption
         * @return hexadecimal encrypted string
         * @description
         * This static method encrypts raw string with specified key and algorithm.
         * @example
         * KJUR.crypto.Cipher.encrypt("aaa", pubRSAKeyObj) → "1abc2d..."
         * KJUR.crypto.Cipher.encrypt("aaa", pubRSAKeyObj, "RSAOAEP") → "23ab02..."
         */
        function encrypt(s: string, keyObj: RSAKey | string, algName: string): string;

        /**
         * decrypt encrypted hexadecimal string with specified key and algorithm
         * @param hex hexadecial string of encrypted message
         * @param keyObj RSAKey object or hexadecimal string of symmetric cipher key
         * @param algName short/long algorithm name for encryption/decryption
         * @return hexadecimal encrypted string
         * @description
         * This static method decrypts encrypted hexadecimal string with specified key and algorithm.
         * @example
         * KJUR.crypto.Cipher.decrypt("aaa", prvRSAKeyObj) → "1abc2d..."
         * KJUR.crypto.Cipher.decrypt("aaa", prvRSAKeyObj, "RSAOAEP) → "23ab02..."
         */
        function decrypt(hex: string, keyObj: RSAKey | string, algName: string): string;

        /**
         * get canonicalized encrypt/decrypt algorithm name by key and short/long algorithm name
         * @param keyObj RSAKey object or hexadecimal string of symmetric cipher key
         * @param algName short/long algorithm name for encryption/decryption
         * @return canonicalized algorithm name for encryption/decryption
         * @description
         * Here is supported canonicalized cipher algorithm names and its standard names:
         * - RSA - RSA/ECB/PKCS1Padding (default for RSAKey)
         * - RSAOAEP - RSA/ECB/OAEPWithSHA-1AndMGF1Padding
         * - RSAOAEP224 - RSA/ECB/OAEPWithSHA-224AndMGF1Padding(*)
         * - RSAOAEP256 - RSA/ECB/OAEPWithSHA-256AndMGF1Padding
         * - RSAOAEP384 - RSA/ECB/OAEPWithSHA-384AndMGF1Padding(*)
         * - RSAOAEP512 - RSA/ECB/OAEPWithSHA-512AndMGF1Padding(*)
         * NOTE: (*) is not supported in Java JCE.
         * @example
         * KJUR.crypto.Cipher.getAlgByKeyAndName(objRSAKey) → "RSA"
         * KJUR.crypto.Cipher.getAlgByKeyAndName(objRSAKey, "RSAOAEP") → "RSAOAEP"
         */
        function getAlgByKeyAndName(keyObj: RSAKey | string, algName: string): string;
    }
}
