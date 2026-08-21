declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * ASN.1 CRLEntry structure class for CRL
     * @param params associative array of parameters (ex. {})
     * @example
     * var e = new KJUR.asn1.x509.CRLEntry({'time': {'str': '130514235959Z'}, 'sn': {'int': 234}});
     *
     * // revokedCertificates     SEQUENCE OF SEQUENCE  {
     * //     userCertificate         CertificateSerialNumber,
     * //     revocationDate          Time,
     * //     crlEntryExtensions      Extensions OPTIONAL
     * //                             -- if present, version MUST be v2 }
     */
    class CRLEntry extends ASN1Object {
        constructor(params?: { sn: IntegerParam; time: StringParam });

        /**
         * set DERInteger parameter for serial number of revoked certificate
         * @param intParam DERInteger parameter for certificate serial number
         * @example
         * entry.setCertSerial({'int': 3});
         */
        setCertSerial(intParam: IntegerParam): void;

        /**
         * set Time parameter for revocation date
         * @param timeParam Time parameter for revocation date
         * @example
         * entry.setRevocationDate({'str': '130508235959Z'});
         */
        setRevocationDate(timeParam: StringParam): void;

        getEncodedHex(): string;
    }
}
