declare namespace jsrsasign.KJUR.asn1.ocsp {
    /**
     * ASN.1 TBSRequest class for OCSP
     * @param params associative array of parameters
     * @description
     * TBSRequest ASN.1 class is defined in
     * [RFC 6960 4.1.1](https://tools.ietf.org/html/rfc6960#section-4.1.1).
     * ```
     * TBSRequest ::= SEQUENCE {
     *   version            [0] EXPLICIT Version DEFAULT v1,
     *   requestorName      [1] EXPLICIT GeneralName OPTIONAL,
     *   requestList            SEQUENCE OF Request,
     *   requestExtensions  [2] EXPLICIT Extensions OPTIONAL }
     * ```
     * @example
     * // default constructor
     * o = new KJUR.asn1.ocsp.TBSRequest();
     * // constructor with requestList parameter
     * o = new KJUR.asn1.ocsp.TBSRequest({reqList:[
     *   {issuerCert: "-----BEGIN...", subjectCert: "-----BEGIN...", alg:},
     *   {issuerCert: "-----BEGIN...", subjectCert: "-----BEGIN...", alg: "sha256"}
     * ]});
     */
    class TBSRequest extends ASN1Object {
        constructor(params?: CertificateRequestList);

        /**
         * set TBSRequest ASN.1 object by array of parameters.
         * @param aParams array of parameters for Request class
         * @example
         * o = new KJUR.asn1.ocsp.TBSRequest();
         * o.setRequestListByParam([
         *   {issuerCert: "-----BEGIN...", subjectCert: "-----BEGIN...", alg:},
         *   {issuerCert: "-----BEGIN...", subjectCert: "-----BEGIN...", alg: "sha256"}
         * ]);
         */
        setRequestListByParam(aParams: CertificateRequest[]): void;

        getEncodedHex(): string;
    }
}
