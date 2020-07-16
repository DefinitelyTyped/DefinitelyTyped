declare namespace jsrsasign.KJUR.asn1.ocsp {
    interface CertificateRequest {
        alg?: string;
        issuerCert: string;
        subjectCert: string;
    }

    interface CertificateRequestList {
        reqList: CertificateRequest[];
    }

    /**
     * ASN.1 CertID class for OCSP
     * @param params associative array of parameters
     * @description
     * CertID ASN.1 class is defined in
     * [RFC 6960 4.1.1](https://tools.ietf.org/html/rfc6960#section-4.1.1).
     * ```
     * CertID ::= SEQUENCE {
     *   hashAlgorithm   AlgorithmIdentifier,
     *   issuerNameHash  OCTET STRING, -- Hash of issuer's DN
     *   issuerKeyHash   OCTET STRING, -- Hash of issuer's public key
     *   serialNumber    CertificateSerialNumber }
     * ```
     * @example
     * // default constructor
     * o = new KJUR.asn1.ocsp.CertID();
     * // constructor with certs (sha1 is used by default)
     * o = new KJUR.asn1.ocsp.CertID({issuerCert: "-----BEGIN...", subjectCert: "-----BEGIN..."});
     * // constructor with certs and sha256
     * o = new KJUR.asn1.ocsp.CertID({issuerCert: "-----BEGIN...", subjectCert: "-----BEGIN...", alg: "sha256"});
     * // constructor with values
     * o = new KJUR.asn1.ocsp.CertID({namehash: "1a...", keyhash: "ad...", serial: "1234", alg: "sha256"});
     */
    class CertID extends ASN1Object {
        constructor(
            params?:
                | CertificateRequest
                | {
                      namehash: string;
                      keyhash: string;
                      serial: string;
                      alg: string;
                  },
        );

        /**
         * set CertID ASN.1 object by values.
         * @param issuerNameHashHex hexadecimal string of hash value of issuer name
         * @param issuerKeyHashHex hexadecimal string of hash value of issuer public key
         * @param serialNumberHex hexadecimal string of certificate serial number to be verified
         * @param algName hash algorithm name used for above arguments (ex. "sha1") DEFAULT: sha1
         * @example
         * o = new KJUR.asn1.ocsp.CertID();
         * o.setByValue("1fac...", "fd3a...", "1234"); // sha1 is used by default
         * o.setByValue("1fac...", "fd3a...", "1234", "sha256");
         */
        setByValue(
            issuerNameHashHex: string,
            issuerKeyHashHex: string,
            serialNumberHex: string,
            algName?: string,
        ): void;

        /**
         * set CertID ASN.1 object by PEM certificates.
         * @param issuerCert string of PEM issuer certificate
         * @param subjectCert string of PEM subject certificate to be verified by OCSP
         * @param algName hash algorithm name used for above arguments (ex. "sha1") DEFAULT: sha1
         * @example
         * o = new KJUR.asn1.ocsp.CertID();
         * o.setByCert("-----BEGIN...", "-----BEGIN..."); // sha1 is used by default
         * o.setByCert("-----BEGIN...", "-----BEGIN...", "sha256");
         */
        setByCert(issuerCert: string, subjectCert: string, algName?: string): void;

        getEncodedHex(): string;
    }
}
