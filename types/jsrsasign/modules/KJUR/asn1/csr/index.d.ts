/// <reference path="./CertificationRequest.d.ts" />
/// <reference path="./CertificationRequestInfo.d.ts" />
/// <reference path="./CSRUtil.d.ts" />

declare namespace jsrsasign.KJUR.asn1 {
    /**
     * kjur's ASN.1 class for CSR/PKCS#10 name space
     *
     * This name space is a sub name space for `KJUR.asn1`.
     * This name space contains classes for
     * [RFC 2986](https://tools.ietf.org/html/rfc2986)
     * certificate signing request (CSR/PKCS#10) and its utilities
     * to be issued your certificate from certification authorities.
     *
     * __PROVIDING ASN.1 STRUCTURES__
     *
     * - `KJUR.asn1.csr.CertificationRequest`
     * - `KJUR.asn1.csr.CertificationRequestInfo`
     *
     * __PROVIDING UTILITY CLASSES__
     *
     * - `KJUR.asn1.csr.CSRUtil`
     *
     * `KJUR.asn1.csr.CSRUtil.newCSRPEM` method is very useful to
     * get your certificate signing request (CSR/PKCS#10) file.
     */
    namespace csr {
        //
    }
}
