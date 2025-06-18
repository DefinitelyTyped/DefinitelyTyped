declare namespace jsrsasign.KJUR.asn1.ocsp {
    /**
     * ASN.1 OCSPRequest class for OCSP
     * @param params associative array of parameters
     * @description
     * OCSPRequest ASN.1 class is defined in
     * [RFC 6960 4.1.1](https://tools.ietf.org/html/rfc6960#section-4.1.1).
     * A signed request is not supported yet in this version.
     * ```
     * OCSPRequest ::= SEQUENCE {
     *   tbsRequest             TBSRequest,
     *   optionalSignature  [0] EXPLICIT Signature OPTIONAL }
     * ```
     * @example
     * // default constructor
     * o = new KJUR.asn1.ocsp.OCSPRequest();
     * // constructor with requestList parameter
     * o = new KJUR.asn1.ocsp.OCSPRequest({reqList:[
     *   {issuerCert: "-----BEGIN...", subjectCert: "-----BEGIN...", alg:},
     *   {issuerCert: "-----BEGIN...", subjectCert: "-----BEGIN...", alg: "sha256"}
     * ]});
     */
    class OCSPRequest extends ASN1Object {
        constructor(params?: CertificateRequestList);
        getEncodedHex(): string;
    }
}
