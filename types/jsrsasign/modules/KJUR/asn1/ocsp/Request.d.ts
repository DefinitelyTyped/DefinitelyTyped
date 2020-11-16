declare namespace jsrsasign.KJUR.asn1.ocsp {
    /**
     * ASN.1 Request class for OCSP
     * @param params associative array of parameters
     * @description
     * Request ASN.1 class is defined in
     * [RFC 6960 4.1.1](https://tools.ietf.org/html/rfc6960#section-4.1.1).
     * singleRequestExtensions is not supported yet in this version such as nonce.
     * ```
     * Request ::= SEQUENCE {
     *   reqCert                  CertID,
     *   singleRequestExtensions  [0] EXPLICIT Extensions OPTIONAL }
     * ```
     * @example
     * // default constructor
     * o = new KJUR.asn1.ocsp.Request();
     * // constructor with certs (sha1 is used by default)
     * o = new KJUR.asn1.ocsp.Request({issuerCert: "-----BEGIN...", subjectCert: "-----BEGIN..."});
     * // constructor with certs and sha256
     * o = new KJUR.asn1.ocsp.Request({issuerCert: "-----BEGIN...", subjectCert: "-----BEGIN...", alg: "sha256"});
     * // constructor with values
     * o = new KJUR.asn1.ocsp.Request({namehash: "1a...", keyhash: "ad...", serial: "1234", alg: "sha256"});
     */
    class Request extends ASN1Object {
        constructor(
            params?:
                | CertificateRequest
                | {
                      alg: string;
                      keyhash: string;
                      namehash: string;
                      serial: string;
                  },
        );

        getEncodedHex(): string;
    }
}
