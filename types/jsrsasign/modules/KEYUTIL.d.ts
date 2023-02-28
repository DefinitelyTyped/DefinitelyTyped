declare namespace jsrsasign {
    interface PKCS8Info {
        /** hexadecimal string of encrypted private key */
        ciphertext: string;
        /** encryption algorithm name (currently TripleDES only) */
        encryptionSchemeAlg: string;
        /** initial vector for encryption algorithm */
        encryptionSchemeIV: string;
        /** iteration count */
        pkbdf2Iter: string;
        /** hexadecimal string of PBKDF2 salt */
        pbkdf2Salt: string;
    }

    interface ECCPrivateKey {
        curve: string;
        d: string;
    }

    interface RSAPrivateKey {
        n: string;
        e: string;
        d: string;
        p: string;
        q: string;
        dp: string;
        dq: string;
        co: string;
    }

    interface PrivatePKCS8HexResult {
        /** hexadecimal string of OID of asymmetric key algorithm */
        algoid: string;
        /** hexadecimal string of OID of ECC curve name or null */
        algparam: string | null;
        /** string starting index of key in `pkcs8PrvHex` */
        keyidx: number;
    }

    interface PublicRawRSAKeyHexResult {
        /** hexadecimal string of public exponent */
        e: string;
        /** hexadecimal string of public key */
        n: string;
    }

    interface PublicPKCS8HexResult {
        /** hexadecimal string of OID of asymmetric key algorithm */
        algoid: string;
        /** hexadecimal string of OID of ECC curve name, parameter SEQUENCE of DSA or null */
        algparam:
            | string
            | {
                  p: string | null;
                  q: string | null;
                  g: string | null;
              }
            | null;
        /** hexadecimal string of public key */
        key: string;
    }

    interface CSRHexResult {
        /** hexadecimal string of subject public key in PKCS#8 */
        p8pubkeyhex: string;
    }

    type JwkObject =
        | {
              kty: 'RSA';
              n: string;
              e: string;
              d: string;
              p: string;
              q: string;
              dp: string;
              dq: string;
              qi: string;
              x5c?: string[];
              x5t?: string;
              'x5t#S256'?: string;
          }
        | {
              kty: 'RSA';
              n: string;
              e: string;
              kid?: string;
              x5c?: string[];
              x5t?: string;
              'x5t#S256'?: string;
          }
        | {
              kty: 'EC';
              crv: string;
              x: string;
              y: string;
              d: string;
              x5c?: string[];
              x5t?: string;
              'x5t#S256'?: string;
          }
        | {
              kty: 'EC';
              crv: string;
              x: string;
              y: string;
              kid?: string;
              x5c?: string[];
              x5t?: string;
              'x5t#S256'?: string;
          };

    interface HashOfKeyAndUnusedIV {
        keyhex: string;
        ivhex: string;
    }

    interface HashOfKeyInformation {
        cipher?: string;
        ivsalt?: string;
        type?: string;
        data?: string;
    }

    type EncryptionAlgorithm = 'DES-CBC' | 'DES-EDE3-CBC' | 'AES-128-CBC' | 'AES-192-CBC' | 'AES-256-CBC';

    /**
     * class for RSA/ECC/DSA key utility
     * @description
     *
     * `KEYUTIL` class is an update of former `PKCS5PKEY` class.
     * `KEYUTIL` class has following features:
     *
     * __key loading - `KEYUTIL.getKey`__
     *
     *
     * - supports RSAKey and KJUR.crypto.{ECDSA,DSA} key object
     * - supports private key and public key
     * - supports encrypted and plain private key
     * - supports PKCS#1, PKCS#5 and PKCS#8 key
     * - supports public key in X.509 certificate
     * - key represented by JSON object
     *
     * NOTE1: Encrypted PKCS#8 only supports PBKDF2/HmacSHA1/3DES
     * NOTE2: Encrypted PKCS#5 supports DES-CBC, DES-EDE3-CBC, AES-{128,192.256}-CBC
     *
     * __exporting key - `KEYUTIL.getPEM`__
     *
     * `KEYUTIL.getPEM` method supports following formats:
     *
     * - supports RSA/EC/DSA keys
     * - PKCS#1 plain RSA/EC/DSA private key
     * - PKCS#5 encrypted RSA/EC/DSA private key with DES-CBC, DES-EDE3-CBC, AES-{128,192.256}-CBC
     * - PKCS#8 plain RSA/EC/DSA private key
     * - PKCS#8 encrypted RSA/EC/DSA private key with PBKDF2_HmacSHA1_3DES
     *
     *
     * __keypair generation - `KEYUTIL.generateKeypair`__
     *
     * - generate key pair of `RSAKey` or `KJUR.crypto.ECDSA`.
     * - generate private key and convert it to PKCS#5 encrypted private key.
     *
     * NOTE: `KJUR.crypto.DSA` is not yet supported.
     *
     *
     * @example
     * // 1. loading PEM private key
     * var key = KEYUTIL.getKey(pemPKCS1PrivateKey);
     * var key = KEYUTIL.getKey(pemPKCS5EncryptedPrivateKey, "passcode");
     * var key = KEYUTIL.getKey(pemPKC85PlainPrivateKey);
     * var key = KEYUTIL.getKey(pemPKC85EncryptedPrivateKey, "passcode");
     * // 2. loading PEM public key
     * var key = KEYUTIL.getKey(pemPKCS8PublicKey);
     * var key = KEYUTIL.getKey(pemX509Certificate);
     * // 3. exporting private key
     * var pem = KEYUTIL.getPEM(privateKeyObj, "PKCS1PRV");
     * var pem = KEYUTIL.getPEM(privateKeyObj, "PKCS5PRV", "passcode"); // DES-EDE3-CBC by default
     * var pem = KEYUTIL.getPEM(privateKeyObj, "PKCS5PRV", "passcode", "DES-CBC");
     * var pem = KEYUTIL.getPEM(privateKeyObj, "PKCS8PRV");
     * var pem = KEYUTIL.getPEM(privateKeyObj, "PKCS8PRV", "passcode");
     * // 4. exporting public key
     * var pem = KEYUTIL.getPEM(publicKeyObj);
     */
    class KEYUTIL {
        static readonly version: string;

        constructor();

        /**
         * parse PEM formatted passcode protected PKCS#5 private key
         * @param sEncryptedPEM PEM formatted protected passcode protected PKCS#5 private key
         * @return hash of key information
         * @description
         * Resulted hash has following attributes.
         * <ul>
         * <li>cipher - symmetric key algorithm name (ex. 'DES-EBE3-CBC', 'AES-256-CBC')</li>
         * <li>ivsalt - IV used for decrypt. Its heading 8 bytes will be used for passcode salt.</li>
         * <li>type - asymmetric key algorithm name of private key described in PEM header.</li>
         * <li>data - base64 encoded encrypted private key.</li>
         * </ul>
         *
         */
        parsePKCS5PEM(sEncryptedPEM: string): HashOfKeyInformation;

        /**
         * the same function as OpenSSL EVP_BytsToKey to generate shared key and IV
         * name getKeyAndUnusedIvByPasscodeAndIvsalt
         * memberOf KEYUTIL
         *
         * @param algName name of symmetric key algorithm (ex. 'DES-EBE3-CBC')
         * @param passcode passcode to decrypt private key (ex. 'password')
         * @param hexadecimal string of IV. heading 8 bytes will be used for passcode salt
         * @return hash of key and unused IV (ex. {keyhex:2fe3..., ivhex:3fad..})
         */
        getKeyAndUnusedIvByPasscodeAndIvsalt(
            algName: string,
            passcode: string,
            hexadecimal: string,
        ): HashOfKeyAndUnusedIV;

        decryptKeyB64(privateKeyB64: string, sharedKeyAlgName: string, sharedKeyHex: string, ivsaltHex: string): string;

        /**
         * decrypt PEM formatted protected PKCS#5 private key with passcode
         * name getDecryptedKeyHex
         * memberOf KEYUTIL
         *
         * @param sEncryptedPEM PEM formatted protected passcode protected PKCS#5 private key
         * @param passcode passcode to decrypt private key (ex. 'password')
         * @return hexadecimal string of decrypted RSA priavte key
         */
        getDecryptedKeyHex(sEncryptedPEM: string, passcode: string): string;

        /**
         * get PEM formatted encrypted PKCS#5 private key from hexadecimal string of plain private key
         * @param pemHeadAlg algorithm name in the pem header (i.e. RSA,EC or DSA)
         * @param hPrvKey hexadecimal string of plain private key
         * @param passcode pass code to protect private key (ex. password)
         * @param sharedKeyAlgName algorithm name to protect private key (ex. AES-256-CBC)
         * @param ivsaltHex hexadecimal string of IV and salt
         * @return string of PEM formatted encrypted PKCS#5 private key
         * @description
         *
         * generate PEM formatted encrypted PKCS#5 private key by hexadecimal string encoded
         * ASN.1 object of plain RSA private key.
         * Following arguments can be omitted.
         *
         * - alg - AES-256-CBC will be used if omitted.
         * - ivsaltHex - automatically generate IV and salt which length depends on algorithm
         *
         * NOTE1: DES-CBC, DES-EDE3-CBC, AES-{128,192.256}-CBC algorithm are supported.
         * @example
         * var pem =
         *   KEYUTIL.getEncryptedPKCS5PEMFromPrvKeyHex(plainKeyHex, "password");
         * var pem2 =
         *   KEYUTIL.getEncryptedPKCS5PEMFromPrvKeyHex(plainKeyHex, "password", "AES-128-CBC");
         * var pem3 =
         *   KEYUTIL.getEncryptedPKCS5PEMFromPrvKeyHex(plainKeyHex, "password", "AES-128-CBC", "1f3d02...");
         */
        getEncryptedPKCS5PEMFromPrvKeyHex(
            pemHeadAlg: string,
            hPrvKey: string,
            passcode: string,
            sharedKeyAlgName: string,
            ivsaltHex: string,
        ): string;

        /**
         * generate PBKDF2 key hexstring with specified passcode and information
         * name parseHexOfEncryptedPKCS8
         * memberOf KEYUTIL
         *
         * @param passcode passcode to decrypto private key
         * @return info associative array of PKCS#8 parameters
         * @since pkcs5pkey 1.0.3
         * @description
         * The associative array which is returned by this method has following properties:
         * <ul>
         * <li>info.pbkdf2Salt - hexadecimal string of PBKDF2 salt</li>
         * <li>info.pkbdf2Iter - iteration count</li>
         * <li>info.ciphertext - hexadecimal string of encrypted private key</li>
         * <li>info.encryptionSchemeAlg - encryption algorithm name (currently TripleDES only)</li>
         * <li>info.encryptionSchemeIV - initial vector for encryption algorithm</li>
         * </ul>
         * Currently, this method only supports PKCS#5v2.0 with PBES2/PBDKF2 of HmacSHA1 and TripleDES.
         * <ul>
         * <li>keyDerivationFunc = pkcs5PBKDF2 with HmacSHA1</li>
         * <li>encryptionScheme = des-EDE3-CBC(i.e. TripleDES</li>
         * </ul>
         * @example
         * // to convert plain PKCS#5 private key to encrypted PKCS#8 private
         * // key with PBKDF2 with TripleDES
         * % openssl pkcs8 -in plain_p5.pem -topk8 -v2 -des3 -out encrypted_p8.pem
         */
        parseHexOfEncryptedPKCS8(passcode: string): PKCS8Info;

        /**
         * generate PBKDF2 key hexstring with specified passcode and information
         * name getPBKDF2KeyHexFromParam
         * memberOf KEYUTIL
         *
         * @param info result of {@link parseHexOfEncryptedPKCS8} which has preference of PKCS#8 file
         * @param passcode passcode to decrypto private key
         * @return hexadecimal string of PBKDF2 key
         * @since pkcs5pkey 1.0.3
         * @description
         * As for info, this uses following properties:
         * <ul>
         * <li>info.pbkdf2Salt - hexadecimal string of PBKDF2 salt</li>
         * <li>info.pkbdf2Iter - iteration count</li>
         * </ul>
         * Currently, this method only supports PKCS#5v2.0 with PBES2/PBDKF2 of HmacSHA1 and TripleDES.
         * <ul>
         * <li>keyDerivationFunc = pkcs5PBKDF2 with HmacSHA1</li>
         * <li>encryptionScheme = des-EDE3-CBC(i.e. TripleDES</li>
         * </ul>
         * @example
         * // to convert plain PKCS#5 private key to encrypted PKCS#8 private
         * // key with PBKDF2 with TripleDES
         * % openssl pkcs8 -in plain_p5.pem -topk8 -v2 -des3 -out encrypted_p8.pem
         */
        getPBKDF2KeyHexFromParam(info: PKCS8Info, passcode: string): string;

        /*
         * read PEM formatted encrypted PKCS#8 private key and returns hexadecimal string of plain PKCS#8 private key
         * name getPlainPKCS8HexFromEncryptedPKCS8PEM
         * memberOf KEYUTIL
         *
         * @param pkcs8PEM PEM formatted encrypted PKCS#8 private key
         * @param passcode passcode to decrypto private key
         * @return hexadecimal string of plain PKCS#8 private key
         * @since pkcs5pkey 1.0.3
         * @description
         * Currently, this method only supports PKCS#5v2.0 with PBES2/PBDKF2 of HmacSHA1 and TripleDES.
         * <ul>
         * <li>keyDerivationFunc = pkcs5PBKDF2 with HmacSHA1</li>
         * <li>encryptionScheme = des-EDE3-CBC(i.e. TripleDES</li>
         * </ul>
         * @example
         * // to convert plain PKCS#5 private key to encrypted PKCS#8 private
         * // key with PBKDF2 with TripleDES
         * % openssl pkcs8 -in plain_p5.pem -topk8 -v2 -des3 -out encrypted_p8.pem
         */
        _getPlainPKCS8HexFromEncryptedPKCS8PEM(pkcs8PEM: string, passcode: string): string;

        /**
         * get RSAKey/ECDSA private key object from encrypted PEM PKCS#8 private key
         * name getKeyFromEncryptedPKCS8PEM
         * memberOf KEYUTIL
         *
         * @param pkcs8PEM string of PEM formatted PKCS#8 private key
         * @param passcode passcode string to decrypt key
         * @return RSAKey or KJUR.crypto.ECDSA private key object
         * @since pkcs5pkey 1.0.5
         */
        getKeyFromEncryptedPKCS8PEM(pkcs8PEM: string, passcode: string): RSAKey | KJUR.crypto.ECDSA;

        /**
         * parse hexadecimal string of plain PKCS#8 private key
         * name parsePlainPrivatePKCS8Hex
         * memberOf KEYUTIL
         *
         * @param pkcs8PrvHex hexadecimal string of PKCS#8 plain private key
         * @return associative array of parsed key
         * @since pkcs5pkey 1.0.5
         * @description
         * Resulted associative array has following properties:
         * <ul>
         * <li>algoid - hexadecimal string of OID of asymmetric key algorithm</li>
         * <li>algparam - hexadecimal string of OID of ECC curve name or null</li>
         * <li>keyidx - string starting index of key in pkcs8PrvHex</li>
         * </ul>
         */
        parsePlainPrivatePKCS8Hex(pkcs8PrvHex: string): PrivatePKCS8HexResult;

        /**
         * get RSAKey/ECDSA private key object from PEM plain PEM PKCS#8 private key
         * name getKeyFromPlainPrivatePKCS8PEM
         * memberOf KEYUTIL
         *
         * @param pkcs8PEM string of plain PEM formatted PKCS#8 private key
         * @return RSAKey or KJUR.crypto.ECDSA private key object
         * @since pkcs5pkey 1.0.5
         */
        getKeyFromPlainPrivatePKCS8PEM(pkcs8PEM: string): RSAKey | KJUR.crypto.ECDSA;

        /**
         * get RSAKey/DSA/ECDSA private key object from HEX plain PEM PKCS#8 private key
         * name getKeyFromPlainPrivatePKCS8Hex
         * memberOf KEYUTIL
         *
         * @param prvKeyHex hexadecimal string of plain PKCS#8 private key
         * @return RSAKey or KJUR.crypto.{DSA,ECDSA} private key object
         * @since pkcs5pkey 1.0.5
         */
        getKeyFromPlainPrivatePKCS8Hex(prvKeyHex: string): RSAKey | KJUR.crypto.DSA | KJUR.crypto.ECDSA;

        /**
         * get RSAKey/DSA/ECDSA public key object from hexadecimal string of PKCS#8 public key
         * name _getKeyFromPublicPKCS8Hex
         * memberOf KEYUTIL
         *
         * @param pkcsPub8Hex hexadecimal string of PKCS#8 public key
         * @return RSAKey or KJUR.crypto.{ECDSA,DSA} private key object
         * @since pkcs5pkey 1.0.5
         */
        _getKeyFromPublicPKCS8Hex(h: string): RSAKey | KJUR.crypto.ECDSA | KJUR.crypto.DSA;

        /**
         * parse hexadecimal string of plain PKCS#8 private key
         * name parsePublicRawRSAKeyHex
         * memberOf KEYUTIL
         *
         * @param pubRawRSAHex hexadecimal string of ASN.1 encoded PKCS#8 public key
         * @return associative array of parsed key
         * @since pkcs5pkey 1.0.5
         * @description
         * Resulted associative array has following properties:
         * <ul>
         * <li>n - hexadecimal string of public key
         * <li>e - hexadecimal string of public exponent
         * </ul>
         */
        parsePublicRawRSAKeyHex(pubRawRSAHex: string): PublicRawRSAKeyHexResult;

        /**
         * parse hexadecimal string of PKCS#8 RSA/EC/DSA public key
         * name parsePublicPKCS8Hex
         * memberOf KEYUTIL
         *
         * @param pkcs8PubHex hexadecimal string of PKCS#8 public key
         * @return hash of key information
         * @description
         * Resulted hash has following attributes.
         * <ul>
         * <li>algoid - hexadecimal string of OID of asymmetric key algorithm</li>
         * <li>algparam - hexadecimal string of OID of ECC curve name, parameter SEQUENCE of DSA or null</li>
         * <li>key - hexadecimal string of public key</li>
         * </ul>
         */
        parsePublicPKCS8Hex(pkcs8PubHex: string): PublicPKCS8HexResult;

        /**
         * @param alg 'RSA' or 'EC'
         * @param keylenOrCurve key length for RSA or curve name for EC
         * @return associative array of keypair which has prvKeyObj and pubKeyObj parameters
         * @description
         * This method generates a key pair of public key algorithm.
         * The result will be an associative array which has following
         * parameters:
         *
         * - prvKeyObj - RSAKey or ECDSA object of private key
         * - pubKeyObj - RSAKey or ECDSA object of public key
         *
         * NOTE1: As for RSA algoirthm, public exponent has fixed
         * value '0x10001'.
         * NOTE2: As for EC algorithm, supported names of curve are
         * secp256r1, secp256k1 and secp384r1.
         * NOTE3: DSA is not supported yet.
         * @example
         * var rsaKeypair = KEYUTIL.generateKeypair("RSA", 1024);
         * var ecKeypair = KEYUTIL.generateKeypair("EC", "secp256r1");
         *
         */
        static generateKeypair(
            alg: 'RSA' | 'EC',
            keylenOrCurve: number | string,
        ): { prvKeyObj: RSAKey | KJUR.crypto.ECDSA; pubKeyObj: RSAKey | KJUR.crypto.ECDSA };

        /**
         * decrypt PEM formatted protected PKCS#5 private key with passcode
         * @param sEncryptedPEM PEM formatted protected passcode protected PKCS#5 private key
         * @param passcode passcode to decrypt private key (ex. 'password')
         * @return hexadecimal string of decrypted RSA priavte key
         */
        static getDecryptedKeyHex(sEncryptedPEM: string, passcode: string): string;

        /**
         * convert from certificate, public/private key object to RFC 7517 JSON Web Key(JWK)<br/>
         * name getJWK
         * memberOf KEYUTIL
         *
         *
         * @param keyinfo public/private key object, PEM key or PEM certificate
         * @param nokid set true if you don't need kid (OPTION, DEFAULT=undefined)
         * @param nox5c set true if you don't need x5c of certificate (OPTION, DEFAULT=undefined)
         * @param nox5t set true if you don't need x5t of certificate (OPTION, DEFAULT=undefined)
         * @param nox5t2 set true if you don't need x5c#S256 of certificate (OPTION, DEFAULT=undefined)
         * @return JWK object
         * @since keyutil 1.2.5 jsrsasign 10.5.1
         * @see RSAKey
         * @see KJUR.crypto.ECDSA
         * @see KJUR.crypto.DSA
         *
         * @description
         * This static method provides
         * <a href="https://datatracker.ietf.org/doc/html/rfc7517">
         * RFC 7517 JSON Web Key(JWK) JSON</a>
         * object from following argument types:
         * <ul>
         * <li>
         * <b>JWK private key</b>
         * <ul>
         * <li>RSAKey or KJUR.crypto.{ECDSA,DSA} private key object</li>
         * <li>PKCS#5 or PKCS#8 plain PEM private key</li>
         * </ul>
         * </li>
         * <li>
         * <b>JWK public key</b>
         * <ul>
         * <li>RSAKey or KJUR.crypto.{ECDSA,DSA} public key object</li>
         * <li>PKCS#5 or PKCS#8 PEM public key</li>
         * <li>X509 certificate object</li>
         * <li>PEM certificate</li>
         * </ul>
         * </li>
         * </ul>
         *
         * @example
         * kp1 = KEYUTIL.generateKeypair("EC", "P-256");
         * jwkPrv1 = KEYUTIL.getJWK(kp1.prvKeyObj);
         * jwkPub1 = KEYUTIL.getJWK(kp1.pubKeyObj);
         *
         * kp2 = KEYUTIL.generateKeypair("RSA", 2048);
         * jwkPrv2 = KEYUTIL.getJWK(kp2.prvKeyObj);
         * jwkPub2 = KEYUTIL.getJWK(kp2.pubKeyObj);
         *
         * // from PEM certificate
         * KEYUTIL.getJWK("-----BEGIN CERTIFICATE...") &rarr;
         * {
         *   kty: "EC", crv: "P-521", x: "...", y: "...",
         *   x5c: ["MI..."],
         *   x5t: "...",
         *   "x5t#S256": "...",
         *   kid: "..."
         * }
         *
         * // from X509 object
         * x509obj = new X509("-----BEGIN CERTIFICATE...");
         * KEYUTIL.getJWK(x509obj) &rarr;
         * {
         *   kty: "EC", crv: "P-521", x: "...", y: "...",
         *   ...
         * }
         *
         * // from PEM certificate without kid, x5t and x5t#S256 (i.e. only x5c)
         * KEYUTIL.getJWK("-----BEGIN CERTIFICATE...", true, false, true, true) &rarr;
         * {
         *   kty: "EC", crv: "P-521", x: "...", y: "...",
         *   x5c: ["MI..."]
         * }
         */
        static getJWK(
            keyinfo: RSAKey | KJUR.crypto.ECDSA | KJUR.crypto.DSA | string,
            nokid?: boolean,
            nox5c?: boolean,
            nox5t?: boolean,
            nox5t2?: boolean,
        ): JwkObject;

        /**
         * convert from RSAKey/KJUR.crypto.ECDSA public/private key object to RFC 7517 JSON Web Key(JWK)
         * @param keyObj RSAKey/KJUR.crypto.ECDSA public/private key object
         * @return JWK object
         * @description
         * This static method convert from RSAKey/KJUR.crypto.ECDSA public/private key object
         * to RFC 7517 JSON Web Key(JWK)
         * @example
         * kp1 = KEYUTIL.generateKeypair("EC", "P-256");
         * jwkPrv1 = KEYUTIL.getJWKFromKey(kp1.prvKeyObj);
         * jwkPub1 = KEYUTIL.getJWKFromKey(kp1.pubKeyObj);
         *
         * kp2 = KEYUTIL.generateKeypair("RSA", 2048);
         * jwkPrv2 = KEYUTIL.getJWKFromKey(kp2.prvKeyObj);
         * jwkPub2 = KEYUTIL.getJWKFromKey(kp2.pubKeyObj);
         *
         * // if you need RFC 7638 JWK thumprint as kid do like this:
         * jwkPub2.kid = KJUR.jws.JWS.getJWKthumbprint(jwkPub2);
         */
        static getJWKFromKey(keyObj: RSAKey | KJUR.crypto.ECDSA): KJUR.jws.JWS.JsonWebKey;

        /**
         * get private or public key object from any arguments
         * @param param parameter to get key object. see description in detail.
         * @param passcode (OPTION) parameter to get key object. see description in detail.
         * @param hextype (OPTION) parameter to get key object. see description in detail.
         * @return `RSAKey`, `KJUR.crypto.ECDSA` or `KJUR.crypto.ECDSA` object
         * @description
         * This method gets private or public key object(`RSAKey`, `KJUR.crypto.DSA` or `KJUR.crypto.ECDSA`)
         * for RSA, DSA and ECC.
         * Arguments for this methods depends on a key format you specify.
         * Following key representations are supported.
         *
         * - ECC private/public key object(as is): param=KJUR.crypto.ECDSA
         * - DSA private/public key object(as is): param=KJUR.crypto.DSA
         * - RSA private/public key object(as is): param=RSAKey
         * - ECC private key parameters: param={d: d, curve: curveName}
         * - RSA private key parameters: param={n: n, e: e, d: d, p: p, q: q, dp: dp, dq: dq, co: co}
         *   NOTE: Each value shall be hexadecimal string of key spec.
         * - DSA private key parameters: param={p: p, q: q, g: g, y: y, x: x}
         *   NOTE: Each value shall be hexadecimal string of key spec.
         * - ECC public key parameters: param={xy: xy, curve: curveName}
         *   NOTE: ECC public key 'xy' shall be concatination of "04", x-bytes-hex and y-bytes-hex.
         * - DSA public key parameters: param={p: p, q: q, g: g, y: y}
         *   NOTE: Each value shall be hexadecimal string of key spec.
         * - RSA public key parameters: param={n: n, e: e}
         * - X.509v1/v3 PEM certificate (RSA/DSA/ECC): param=pemString
         * - PKCS#8 hexadecimal RSA/ECC public key: param=pemString, null, "pkcs8pub"
         * - PKCS#8 PEM RSA/DSA/ECC public key: param=pemString
         * - PKCS#5 plain hexadecimal RSA private key: param=hexString, null, "pkcs5prv"
         * - PKCS#5 plain PEM DSA/RSA private key: param=pemString
         * - PKCS#8 plain PEM RSA/ECDSA private key: param=pemString
         * - PKCS#5 encrypted PEM RSA/DSA private key: param=pemString, passcode
         * - PKCS#8 encrypted PEM RSA/ECDSA private key: param=pemString, passcode
         *
         * Please note following limitation on encrypted keys:
         *
         * - Encrypted PKCS#8 only supports PBKDF2/HmacSHA1/3DES
         * - Encrypted PKCS#5 supports DES-CBC, DES-EDE3-CBC, AES-{128,192.256}-CBC
         * - JWT plain ECC private/public key
         * - JWT plain RSA public key
         * - JWT plain RSA private key with P/Q/DP/DQ/COEFF
         * - JWT plain RSA private key without P/Q/DP/DQ/COEFF (since jsrsasign 5.0.0)
         *
         * NOTE1: [RFC 7517 JSON Web Key(JWK)](https://tools.ietf.org/html/rfc7517) support for RSA/ECC private/public key from jsrsasign 4.8.1.
         * NOTE2: X509v1 support is added since jsrsasign 5.0.11.
         *
         * @example
         * // 1. loading private key from PEM string
         * keyObj = KEYUTIL.getKey("-----BEGIN RSA PRIVATE KEY...");
         * keyObj = KEYUTIL.getKey("-----BEGIN RSA PRIVATE KEY..., "passcode");
         * keyObj = KEYUTIL.getKey("-----BEGIN PRIVATE KEY...");
         * keyObj = KEYUTIL.getKey("-----BEGIN PRIVATE KEY...", "passcode");
         * // 2. loading public key from PEM string
         * keyObj = KEYUTIL.getKey("-----BEGIN PUBLIC KEY...");
         * keyObj = KEYUTIL.getKey("-----BEGIN X509 CERTIFICATE...");
         * // 3. loading hexadecimal PKCS#5/PKCS#8 key
         * keyObj = KEYUTIL.getKey("308205c1...", null, "pkcs8pub");
         * keyObj = KEYUTIL.getKey("3082048b...", null, "pkcs5prv");
         * // 4. loading JSON Web Key(JWK)
         * keyObj = KEYUTIL.getKey({kty: "RSA", n: "0vx7...", e: "AQAB"});
         * keyObj = KEYUTIL.getKey({kty: "EC", crv: "P-256",
         *                          x: "MKBC...", y: "4Etl6...", d: "870Mb..."});
         * // 5. bare hexadecimal key
         * keyObj = KEYUTIL.getKey({n: "75ab..", e: "010001"});
         */
        static getKey(
            param:
                | RSAKey
                | ECCPrivateKey
                | KJUR.crypto.ECDSA
                | KJUR.crypto.DSA
                | KJUR.jws.JWS.JsonWebKey
                | { n: string; e: string }
                | string,
            passcode?: string | null,
            hextype?: string,
        ): RSAKey | KJUR.crypto.DSA | KJUR.crypto.ECDSA;

        /**
         * the same function as OpenSSL EVP_BytsToKey to generate shared key and IV
         * @param algName name of symmetric key algorithm (ex. 'DES-EBE3-CBC')
         * @param passcode passcode to decrypt private key (ex. 'password')
         * @param hexadecimal string of IV. heading 8 bytes will be used for passcode salt
         * @return hash of key and unused IV (ex. {keyhex:2fe3..., ivhex:3fad..})
         */
        static getKeyAndUnusedIvByPasscodeAndIvsalt(
            algName: string,
            passcode: string,
            hexadecimal: string,
        ): HashOfKeyAndUnusedIV;

        /**
         * get RSAKey/DSA/ECDSA public key object from hexadecimal string of PKCS#10 CSR
         * @param csrHex hexadecimal string of PKCS#10 CSR
         * @return RSAKey/DSA/ECDSA public key object
         */
        static getKeyFromCSRHex(csrHex: string): RSAKey | KJUR.crypto.DSA | KJUR.crypto.ECDSA;

        /**
         * get RSAKey/DSA/ECDSA public key object from PEM formatted PKCS#10 CSR string
         * @param csrPEM PEM formatted PKCS#10 CSR string
         * @return RSAKey/DSA/ECDSA public key object
         */
        static getKeyFromCSRPEM(csrPEM: string): RSAKey | KJUR.crypto.DSA | KJUR.crypto.ECDSA;

        /**
         * get RSAKey/ECDSA private key object from encrypted PEM PKCS#8 private key
         * @param pkcs8PEM string of PEM formatted PKCS#8 private key
         * @param passcode passcode string to decrypt key
         * @return RSAKey or KJUR.crypto.ECDSA private key object
         */
        static getKeyFromEncryptedPKCS8PEM(pkcs8PEM: string, passcode: string): RSAKey | KJUR.crypto.ECDSA;

        /**
         * get RSAKey/DSA/ECDSA private key object from HEX plain PEM PKCS#8 private key
         * @param prvKeyHex hexadecimal string of plain PKCS#8 private key
         * @return RSAKey or KJUR.crypto.{DSA,ECDSA} private key object
         */
        static getKeyFromPlainPrivatePKCS8Hex(prvKeyHex: string): RSAKey | KJUR.crypto.DSA | KJUR.crypto.ECDSA;

        /**
         * get RSAKey/ECDSA private key object from PEM plain PEM PKCS#8 private key
         * @param pkcs8PEM string of plain PEM formatted PKCS#8 private key
         * @return RSAKey or KJUR.crypto.ECDSA private key object
         */
        static getKeyFromPlainPrivatePKCS8PEM(pkcs8PEM: string): RSAKey | KJUR.crypto.ECDSA;

        /**
         * get key ID by public key object for subject or authority key identifier
         * name getKeyID
         * memberOf KEYUTIL
         *
         *
         * @param obj RSAKey/KJUR.crypto.ECDSA,DSA public key object or public key PEM string
         * @return hexadecimal string of public key identifier
         * @since keyutil 1.2.2 jsrsasign 5.0.16
         * @description
         * This static method generates a key identifier from a public key
         * by the method described in
         * <a href="https://tools.ietf.org/html/rfc5280#section-4.2.1.2"
         * target="_blank">RFC 5280 4.2.1.2. Subject Key Identifier (1)</a>.
         * @example
         * pubkeyobj = KEYUTIL.getKey(...);
         * KEYTUTIL.getKey(pubkeyobj) &rarr; "a612..."
         */
        static getKeyID(obj: RSAKey | KJUR.crypto.ECDSA | KJUR.crypto.DSA | string): string;

        /**
         * generate PBKDF2 key hexstring with specified passcode and information
         * @param info result of `parseHexOfEncryptedPKCS8` which has preference of PKCS#8 file
         * @param passcode passcode to decrypto private key
         * @return hexadecimal string of PBKDF2 key
         * @description
         * As for info, this uses following properties:
         *
         * - info.pbkdf2Salt - hexadecimal string of PBKDF2 salt
         * - info.pkbdf2Iter - iteration count
         *
         * Currently, this method only supports PKCS#5v2.0 with PBES2/PBDKF2 of HmacSHA1 and TripleDES.
         *
         * - keyDerivationFunc = pkcs5PBKDF2 with HmacSHA1
         * - encryptionScheme = des-EDE3-CBC(i.e. TripleDES
         *
         * @example
         * // to convert plain PKCS#5 private key to encrypted PKCS#8 private
         * // key with PBKDF2 with TripleDES
         * % openssl pkcs8 -in plain_p5.pem -topk8 -v2 -des3 -out encrypted_p8.pem
         */
        static getPBKDF2KeyHexFromParam(info: PKCS8Info, passcode: string): string;

        /**
         * get PEM formatted private or public key file from a RSA/ECDSA/DSA key object
         * @param keyObjOrHex key object `RSAKey`, `KJUR.crypto.ECDSA` or `KJUR.crypto.DSA` to encode to
         * @param formatType (OPTION) output format type of "PKCS1PRV", "PKCS5PRV" or "PKCS8PRV" for private key
         * @param passwd (OPTION) password to protect private key
         * @param encAlg (OPTION) encryption algorithm for PKCS#5. currently supports DES-CBC, DES-EDE3-CBC and AES-{128,192,256}-CBC
         * @param hexType (OPTION) type of hex string (ex. pkcs5prv, pkcs8prv)
         * @param ivsaltHex hexadecimal string of IV and salt (default generated random IV)
         * @description
         *
         * __NOTE1:__ PKCS#5 encrypted private key protection algorithm supports DES-CBC, DES-EDE3-CBC and AES-{128,192,256}-CBC
         * __NOTE2:__ OpenSSL supports
         * __NOTE3:__ Parameter "ivsaltHex" supported since jsrsasign 8.0.0 keyutil 1.2.0.
         *
         * @example
         * KEYUTIL.getPEM(publicKey) => generates PEM PKCS#8 public key
         * KEYUTIL.getPEM(privateKey, "PKCS1PRV") => generates PEM PKCS#1 plain private key
         * KEYUTIL.getPEM(privateKey, "PKCS5PRV", "pass") => generates PEM PKCS#5 encrypted private key
         *                                                          with DES-EDE3-CBC (DEFAULT)
         * KEYUTIL.getPEM(privateKey, "PKCS5PRV", "pass", "DES-CBC") => generates PEM PKCS#5 encrypted
         *                                                                 private key with DES-CBC
         * KEYUTIL.getPEM(privateKey, "PKCS8PRV") => generates PEM PKCS#8 plain private key
         * KEYUTIL.getPEM(privateKey, "PKCS8PRV", "pass") => generates PEM PKCS#8 encrypted private key
         *                                                      with PBKDF2_HmacSHA1_3DES
         */
        static getPEM(
            keyObjOrHex: RSAKey | KJUR.crypto.DSA | KJUR.crypto.ECDSA,
            formatType?: PrivateKeyOutputFormatType,
            passwd?: string,
            encAlg?: EncryptionAlgorithm,
            hexType?: string,
            ivsaltHex?: string,
        ): string;

        /**
         * parse hexadecimal string of PKCS#10 CSR (certificate signing request)
         * @param csrHex hexadecimal string of PKCS#10 CSR
         * @return associative array of parsed CSR
         * @description
         * Resulted associative array has following properties:
         *
         * - p8pubkeyhex - hexadecimal string of subject public key in PKCS#8
         *
         */
        static parseCSRHex(csrHex: string): CSRHexResult;

        /**
         * generate PBKDF2 key hexstring with specified passcode and information
         * @param passcode passcode to decrypt private key
         * @return info associative array of PKCS#8 parameters
         * @description
         * The associative array which is returned by this method has following properties:
         *
         * - info.pbkdf2Salt - hexadecimal string of PBKDF2 salt
         * - info.pkbdf2Iter - iteration count
         * - info.ciphertext - hexadecimal string of encrypted private key
         * - info.encryptionSchemeAlg - encryption algorithm name (currently TripleDES only)
         * - info.encryptionSchemeIV - initial vector for encryption algorithm
         *
         * Currently, this method only supports PKCS#5v2.0 with PBES2/PBDKF2 of HmacSHA1 and TripleDES.
         *
         * - keyDerivationFunc = pkcs5PBKDF2 with HmacSHA1
         * - encryptionScheme = des-EDE3-CBC(i.e. TripleDES
         *
         * @example
         * // to convert plain PKCS#5 private key to encrypted PKCS#8 private
         * // key with PBKDF2 with TripleDES
         * % openssl pkcs8 -in plain_p5.pem -topk8 -v2 -des3 -out encrypted_p8.pem
         */
        static parseHexOfEncryptedPKCS8(passcode: string): PKCS8Info;

        /**
         * parse PEM formatted passcode protected PKCS#5 private key
         * @param sPKCS5PEM PEM formatted protected passcode protected PKCS#5 private key
         * @return hash of key information
         * @description
         * Resulted hash has following attributes.
         *
         * - cipher - symmetric key algorithm name (ex. 'DES-EBE3-CBC', 'AES-256-CBC')
         * - ivsalt - IV used for decrypt. Its heading 8 bytes will be used for passcode salt.
         * - type - asymmetric key algorithm name of private key described in PEM header.
         * - data - base64 encoded encrypted private key.
         */
        static parsePKCS5PEM(sPKCS5PEM: string): HashOfKeyInformation;

        /**
         * parse hexadecimal string of plain PKCS#8 private key
         * @param pkcs8PrvHex hexadecimal string of PKCS#8 plain private key
         * @return associative array of parsed key
         * @description
         * Resulted associative array has following properties:
         *
         * - algoid - hexadecimal string of OID of asymmetric key algorithm
         * - algparam - hexadecimal string of OID of ECC curve name or null
         * - keyidx - string starting index of key in pkcs8PrvHex
         *
         */
        static parsePlainPrivatePKCS8Hex(pkcs8PrvHex: string): PrivatePKCS8HexResult;

        /**
         * parse hexadecimal string of PKCS#8 RSA/EC/DSA public key
         * @param pkcs8PubHex hexadecimal string of PKCS#8 public key
         * @return hash of key information
         * @description
         * Resulted hash has following attributes.
         *
         * - algoid - hexadecimal string of OID of asymmetric key algorithm
         * - algparam - hexadecimal string of OID of ECC curve name, parameter SEQUENCE of DSA or null
         * - key - hexadecimal string of public key
         *
         */
        static parsePublicPKCS8Hex(pkcs8PubHex: string): PublicPKCS8HexResult;

        /**
         * parse hexadecimal string of plain PKCS#8 private key
         * @param pubRawRSAHex hexadecimal string of ASN.1 encoded PKCS#8 public key
         * @return associative array of parsed key
         * @description
         * Resulted associative array has following properties:
         *
         * - n - hexadecimal string of public key
         * - e - hexadecimal string of public exponent
         *
         */
        static parsePublicRawRSAKeyHex(pubRawRSAHex: string): PublicRawRSAKeyHexResult;
    }
}
