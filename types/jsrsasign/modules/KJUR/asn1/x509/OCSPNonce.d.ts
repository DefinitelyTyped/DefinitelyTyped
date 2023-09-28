declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * Nonce OCSP extension ASN.1 structure class<br/>
     * @since jsrsasign 9.1.6 asn1x509 2.1.2
     * @param params JSON object for Nonce extension
     * @see KJUR.asn1.ocsp.ResponseData
     * @see KJUR.asn1.x509.Extensions
     * @see X509#getExtOCSPNonce
     * @description
     * This class represents
     * Nonce OCSP extension value defined in
     * <a href="https://tools.ietf.org/html/rfc6960#section-4.4.1">
     * RFC 6960 4.4.1</a> as JSON object.
     * <pre>
     * id-pkix-ocsp           OBJECT IDENTIFIER ::= { id-ad-ocsp }
     * id-pkix-ocsp-nonce     OBJECT IDENTIFIER ::= { id-pkix-ocsp 2 }
     * Nonce ::= OCTET STRING
     * </pre>
     * Constructor of this class may have following parameters:
     * <ul>
     * <li>{String}extname - name "ocspNonce". It is ignored in this class but
     * required to use with {@link KJUR.asn1.x509.Extensions} class. (OPTION)</li>
     * <li>{String}hex - hexadecimal string of nonce value</li>
     * <li>{Number}int - integer of nonce value. "hex" or "int" needs to be
     * specified.</li>
     * <li>{Boolean}critical - critical flag. Generally false and not specified
     * in this class.(OPTION)</li>
     * </ul>
     *
     * @example
     * new KJUR.asn1.x509.OCSPNonce({extname:'ocspNonce',
     *                               hex: '12ab...'})
     */
    class OCSPNonce extends Extension {
        constructor(params?: { extname?: string; hex?: string; int?: number; critical?: boolean });
    }
}
