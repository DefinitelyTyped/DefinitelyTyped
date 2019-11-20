declare namespace jsrsasign.KJUR.asn1.csr {
    interface PEMInfo {
        subject: {
            name: string;
            hex: string;
        };
        pubkey: {
            obj: RSAKey | crypto.DSA | crypto.ECDSA;
            hex: string;
        };
    }

    /**
     * Certification Request (CSR/PKCS#10) utilities class
     * @description
     * This class provides utility static methods for CSR/PKCS#10.
     * Here is a list of methods:
     *
     * - `KJUR.asn1.csr.CSRUtil.newCSRPEM`
     * - `KJUR.asn1.csr.CSRUtil.getInfo`
     */
    namespace CSRUtil {
        /**
         * generate a PEM format of CSR/PKCS#10 certificate signing request
         * @param param parameter to generate CSR
         * @description
         * This method can generate a CSR certificate signing
         * request by a simple JSON object which has following parameters:
         *
         * - subject - parameter to be passed to `KJUR.asn1.x509.X500Name`
         * - sbjpubkey - parameter to be passed to `KEYUTIL.getKey`
         * - sigalg - signature algorithm name (ex. SHA256withRSA)
         * - sbjprvkey - parameter to be passed to `KEYUTIL.getKey`
         *
         *
         * @example
         * // 1) by key object
         * pem = KJUR.asn1.csr.CSRUtil.newCSRPEM({
         *   subject: {str: '/C=US/O=Test/CN=example.com'},
         *   sbjpubkey: pubKeyObj,
         *   sigalg: "SHA256withRSA",
         *   sbjprvkey: prvKeyObj
         * });
         *
         * // 2) by private/public key PEM
         * pem = KJUR.asn1.csr.CSRUtil.newCSRPEM({
         *   subject: {str: '/C=US/O=Test/CN=example.com'},
         *   sbjpubkey: pubKeyPEM,
         *   sigalg: "SHA256withRSA",
         *   sbjprvkey: prvKeyPEM
         * });
         *
         * // 3) with generateKeypair
         * kp = KEYUTIL.generateKeypair("RSA", 2048);
         * pem = KJUR.asn1.csr.CSRUtil.newCSRPEM({
         *   subject: {str: '/C=US/O=Test/CN=example.com'},
         *   sbjpubkey: kp.pubKeyObj,
         *   sigalg: "SHA256withRSA",
         *   sbjprvkey: kp.prvKeyObj
         * });
         *
         * // 4) by private/public key PEM with extension
         * pem = KJUR.asn1.csr.CSRUtil.newCSRPEM({
         *   subject: {str: '/C=US/O=Test/CN=example.com'},
         *   ext: [
         *     {subjectAltName: {array: [{dns: 'example.net'}]}
         *   ],
         *   sbjpubkey: pubKeyPEM,
         *   sigalg: "SHA256withRSA",
         *   sbjprvkey: prvKeyPEM
         * });
         */
        function newCSRPEM(param?: {
            subject:
                | StringParam & { certissuer?: string; certsubject?: string }
                | x509.X500NameParam & { certissuer?: string; certsubject?: string }
                | { ldapstr: string } & { certissuer?: string; certsubject?: string };
            ext?: Array<{
                subjectAltName: ArrayParam<{ dns: string }>;
            }>;
            sbjpubkey: RSAKey | crypto.ECDSA | crypto.DSA | jws.JWS.JsonWebKey | { n: string; e: string } | string;
            sigalg: string;
            sbjprvkey: RSAKey | crypto.ECDSA | crypto.DSA | jws.JWS.JsonWebKey | { n: string; e: string } | string;
        }): string;

        /**
         * get field values from CSR/PKCS#10 PEM string
         * @param sPEM PEM string of CSR/PKCS#10
         * @returns JSON object with parsed parameters such as name or public key
         * @description
         * This method parses PEM CSR/PKCS#1 string and retrieves
         * subject name and public key. Following parameters are available in the
         * resulted JSON object.
         *
         * - subject.name - subject name string (ex. /C=US/O=Test)
         * - subject.hex - hexadecimal string of X.500 Name of subject
         * - pubkey.obj - subject public key object such as RSAKey, KJUR.crypto.{ECDSA,DSA}
         * - pubkey.hex - hexadecimal string of subject public key
         *
         *
         * @example
         * o = KJUR.asn1.csr.CSRUtil.getInfo("-----BEGIN CERTIFICATE REQUEST...");
         * console.log(o.subject.name) → "/C=US/O=Test"
         */
        function getInfo(sPEM: string): PEMInfo;
    }
}
