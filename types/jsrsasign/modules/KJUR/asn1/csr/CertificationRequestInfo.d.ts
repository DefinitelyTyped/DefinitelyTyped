declare namespace jsrsasign.KJUR.asn1.csr {
    interface CertificationRequestInfoParams {
        subject: { array?: Array<[{ type: string; value: string; ds: string }]>; str: string };
        sbjpubkey: string;
        extreq?: Array<{ extname: string; array?: any[] }>;
        sigalg?: string;
        sbjprvkey?: string;
        sighex?: string;
    }
    /**
     * ASN.1 CertificationRequestInfo structure class
     * @param params associative array of parameters (ex. {})
     * @description
     * This class provides CertificateRequestInfo ASN.1 structure
     * defined in
     * {@link https://tools.ietf.org/html/rfc2986#page-5" RFC 2986 4.1}.
     *
     * <pre>
     * CertificationRequestInfo ::= SEQUENCE {
     *   version       INTEGER { v1(0) } (v1,...),
     *   subject       Name,
     *   subjectPKInfo SubjectPublicKeyInfo{{ PKInfoAlgorithms }},
     *   attributes    [0] Attributes{{ CRIAttributes }} }
     * </pre>
     *
     *
     * CAUTION:
     * Argument "params" JSON value format have been changed without
     * backward compatibility since jsrsasign 9.0.0 asn1csr 2.0.0.
     *
     * @example
     * csri = new KJUR.asn1.csr.CertificationRequestInfo({
     *   subject: {str: '/C=US/CN=b'},
     *   sbjpubkey: <<PUBLIC KEY PEM>>,
     *   extreq: [
     *     {extname:"subjectAltName", array:[{dns:"example.com"}]}
     *   ]});
     * csri.getEncodedHex() &rarr; "30..."
     */
    class CertificationRequestInfo extends ASN1Object {
        constructor(params?: CertificationRequestInfoParams);

        setByParam(params?: CertificationRequestInfoParams): void;

        getEncodedHex(): string;
    }
}
