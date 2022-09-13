declare namespace jsrsasign.KJUR.asn1.csr {
    interface CertificationRequestParams {
        subject: { str: string };
        sbjpubkey: string;
        extreq?: Array<{ extname: string; array?: any[] }>;
        sigalg: string;
        sbjprvkey?: string;
        sighex?: string;
    }
    /**
     * ASN.1 CertificationRequest structure class
     * @param params associative array of parameters
     *
     * @description
     * This class provides CertificateRequestInfo ASN.1 structure
     * defined in * {@link https://tools.ietf.org/html/rfc2986#page-5 RFC 2986 4.2}.
     *
     * <pre>
     * CertificationRequest ::= SEQUENCE {
     *   certificationRequestInfo CertificationRequestInfo,
     *   signatureAlgorithm       AlgorithmIdentifier{{ SignatureAlgorithms }},
     *   signature                BIT STRING }
     * CertificationRequestInfo ::= SEQUENCE {
     *   version       INTEGER { v1(0) } (v1,...),
     *   subject       Name,
     *   subjectPKInfo SubjectPublicKeyInfo{{ PKInfoAlgorithms }},
     *   attributes    [0] Attributes{{ CRIAttributes }} }
     * </pre>
     *
     *
     * Argument "params" JSON object can have following keys:
     *
     * - {Array}subject - parameter to be passed to {@link KJUR.asn1.x509.X500Name}
     * - {Object}sbjpubkey - PEM string or key object to be passed to {@link KEYUTIL.getKey}
     * - {Array}extreq - array of certificate extension parameters
     * - {String}sigalg - signature algorithm name (ex. SHA256withRSA)
     * - {Object}sbjprvkey - PEM string or key object to be passed to {@link KEYUTIL.getKey}
     * (OPTION)
     * - {String}sighex - hexadecimal string of signature value. When this is not defined and
     * sbjprvkey is specified, sighex will be set automatically
     * during getEncodedHex() is called. (OPTION)
     *
     *
     * CAUTION:
     * Argument "params" JSON value format have been changed without
     * backward compatibility since jsrsasign 9.0.0 asn1csr 2.0.0.
     *
     * @example
     * // sign by private key
     * csr = new KJUR.asn1.csr.CertificationRequest({
     *   subject: {str:"/C=US/O=Test"},
     *   sbjpubkey: "-----BEGIN PUBLIC KEY...",
     *   extreq: [{extname:"subjectAltName",array:[{dns:"example.com"}]}]
     *   sigalg: "SHA256withRSA",
     *   sbjprvkey: "-----BEGIN PRIVATE KEY..."
     * });
     * pem = csr.getPEM(); // signed with sbjprvkey automatically
     *
     * // or specifying signature value
     * csr = new KJUR.asn1.csr.CertificationRequest({
     *   subject: {str:"/C=US/O=Test"},
     *   sbjpubkey: "-----BEGIN PUBLIC KEY...",
     *   extreq: [{extname:"subjectAltName",array:[{dns:"example.com"}]}]
     *   sigalg: "SHA256withRSA",
     *   sighex: "1234abcd..."
     * });
     * pem = csr.getPEM();
     */
    class CertificationRequest extends ASN1Object {
        constructor(params?: CertificationRequestParams);

        setByParam(params?: CertificationRequestParams): void;
        /**
         * sign CertificationRequest and set signature value internally<br/>
         * @description
         * This method self-signs CertificateRequestInfo with a subject's
         * private key and set signature value internally.
         *
         * @example
         * csr = new KJUR.asn1.csr.CertificationRequest({
         *   subject: "/C=JP/O=Test",
         *   sbjpubkey: ...
         * });
         * csr.sign();
         */
        sign(): void;

        /**
         * get PEM formatted certificate signing request (CSR/PKCS#10)<br/>
         * @return PEM formatted string of CSR/PKCS#10
         * @description
         * This method is to a get CSR PEM string
         *
         * @example
         * csr = new KJUR.asn1.csr.CertificationRequest({
         *   subject: "/C=JP/O=Test",
         *   sbjpubkey: ...
         * });
         * csr.getPEM() &rarr; "-----BEGIN CERTIFICATE REQUEST..."
         */
        getPEM(): string;
    }
}
