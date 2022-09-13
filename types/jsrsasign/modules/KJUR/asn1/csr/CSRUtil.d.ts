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

    interface ParamResponse {
        subject: { array?: Array<[{ type: string; value: string; ds: string }]>; str: string };
        sbjpubkey: string;
        extreq?: Array<{ extname: string; array?: any[] }>;
        sigalg: string;
        sighex: string;
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
                | (StringParam & { certissuer?: string | undefined; certsubject?: string | undefined })
                | (x509.X500NameParam & { certissuer?: string | undefined; certsubject?: string | undefined })
                | ({ ldapstr: string } & { certissuer?: string | undefined; certsubject?: string | undefined });
            ext?:
                | Array<{
                      subjectAltName: ArrayParam<{ dns: string }>;
                  }>
                | undefined;
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

        /**
         * get field values from CSR/PKCS#10 PEM string
         * @param sPEM PEM string of CSR/PKCS#10
         * @returns JSON object with parsed parameters such as name or public key
         * @description
         * This method parses PEM CSR/PKCS#1 string and retrieves
         * fields such as subject name and public key.
         * Following parameters are available in the
         * resulted JSON object.
         *
         * - {X500Name}subject - subject name parameters
         * - {String}sbjpubkey - PEM string of subject public key
         * - {Array}extreq - array of extensionRequest parameters
         * - {String}sigalg - name of signature algorithm field
         * - {String}sighex - hexadecimal string of signature value
         *
         * Returned JSON object can be passed to
         * {@link KJUR.asn1.csr.CertificationRequest} class constructor.
         *
         * CAUTION:
         * Returned JSON value format have been changed without
         * backward compatibility since jsrsasign 9.0.0 asn1csr 2.0.0.
         *
         * @example
         * KJUR.asn1.csr.CSRUtil.getParam("-----BEGIN CERTIFICATE REQUEST...") &rarr;
         * {
         *   subject: { array:[[{type:"C",value:"JP",ds:"prn"}],...],
         *              str: "/C=JP/O=Test"},
         *   sbjpubkey: "-----BEGIN PUBLIC KEY...",
         *   extreq: [{extname:"subjectAltName",array:[{dns:"example.com"}]}]
         *   sigalg: "SHA256withRSA",
         *   sighex: "1ab3df.."
         * }
         */
        function getParam(sPEM: string): ParamResponse;
    }
}
