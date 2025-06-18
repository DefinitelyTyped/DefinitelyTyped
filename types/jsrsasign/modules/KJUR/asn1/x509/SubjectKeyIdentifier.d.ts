declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * SubjectKeyIdentifier extension ASN.1 structure class
     * @param params associative array of parameters (ex. {kid: {hex: '89ab...'}, critical: true})
     * @since asn1x509 1.1.7 jsrsasign 8.0.14
     * @description
     * This class represents ASN.1 structure for
     * <a href="https://tools.ietf.org/html/rfc5280#section-4.2.1.2">
     * SubjectKeyIdentifier in RFC 5280</a>.
     * Constructor of this class may have following parameters:
     * <ul>
     * <li>kid - When key object (RSA, KJUR.crypto.ECDSA/DSA) or PEM string of subject public key or certificate is specified,
     *     key identifier will be automatically calculated by the method specified in RFC 5280. When a hexadecimal string is specifed, kid will be set explicitly by it.</li>
     * <li>critical - boolean to specify criticality of this extension
     * however conforming CA must mark this extension as non-critical in RFC 5280.</li>
     * </ul>
     * <pre>
     * d-ce-subjectKeyIdentifier OBJECT IDENTIFIER ::=  { id-ce 14 }
     * SubjectKeyIdentifier ::= KeyIdentifier
     * KeyIdentifier ::= OCTET STRING
     * </pre>
     *
     * @example
     * // set by hexadecimal string
     * e = new KJUR.asn1.x509.SubjectKeyIdentifier({kid: {hex: '89ab'}});
     * // set by PEM public key or certificate string
     * e = new KJUR.asn1.x509.SubjectKeyIdentifier({kid: "-----BEGIN CERTIFICATE..."});
     * // set by public key object
     * pubkey = KEYUTIL.getKey("-----BEGIN CERTIFICATE...");
     * e = new KJUR.asn1.x509.SubjectKeyIdentifier({kid: pubkey});
     */
    class SubjectKeyIdentifier extends Extension {
        constructor(params?: any);

        /**
         * set keyIdentifier value by DEROctetString parameter, key object or PEM file
         * @param param array of {@link KJUR.asn1.DERInteger} parameter
         * @since asn1x509 1.1.7 jsrsasign 8.0.14
         * @description
         * <ul>
         * <li>{str: "123"} - by raw string</li>
         * <li>{hex: "01af..."} - by hexadecimal value</li>
         * <li>RSAKey/DSA/ECDSA - by RSAKey, KJUR.crypto.{DSA/ECDSA} public key object.
         * key identifier value will be calculated by the method described in
         * <a href="https://tools.ietf.org/html/rfc5280#section-4.2.1.2">RFC 5280 4.2.1.2 (1)</a>.
         * </li>
         * <li>certificate PEM string - extract subjectPublicKeyInfo from specified PEM
         * certificate and
         * key identifier value will be calculated by the method described in
         * <a href="https://tools.ietf.org/html/rfc5280#section-4.2.1.2">RFC 5280 4.2.1.2 (1)</a>.
         * <li>PKCS#1/#8 public key PEM string - pem will be converted to a key object and
         * to PKCS#8 ASN.1 structure then calculate
         * a key identifier value will be calculated by the method described in
         * <a href="https://tools.ietf.org/html/rfc5280#section-4.2.1.2">RFC 5280 4.2.1.2 (1)</a>.
         * </ul>
         *
         * NOTE1: Automatic key identifier calculation is supported
         * since jsrsasign 8.0.16.
         *
         * @see KEYUTIL.getKeyID
         *
         * @example
         * o = new KJUR.asn1.x509.SubjectKeyIdentifier();
         * // set by hexadecimal string
         * o.setKIDByParam({hex: '1ad9...'});
         * // set by SubjectPublicKeyInfo of PEM certificate string
         * o.setKIDByParam("-----BEGIN CERTIFICATE...");
         * // set by PKCS#8 PEM public key string
         * o.setKIDByParam("-----BEGIN PUBLIC KEY...");
         * // set by public key object
         * pubkey = KEYUTIL.getKey("-----BEGIN CERTIFICATE...");
         * o.setKIDByParam(pubkey);
         */
        setKIDByParam(param: any): void;
    }
}
