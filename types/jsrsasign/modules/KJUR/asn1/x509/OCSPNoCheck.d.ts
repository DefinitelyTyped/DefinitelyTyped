declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * OCSPNoCheck certificate ASN.1 structure class<br/>
     * @since jsrsasign 9.1.6 asn1x509 2.1.2
     * @param params JSON object for OCSPNoCheck extension
     * @see KJUR.asn1.x509.Extensions
     * @see X509#getExtOCSPNoCheck
     * @description
     * This class represents
     * OCSPNoCheck extension value defined in
     * <a href="https://tools.ietf.org/html/rfc6960#section-4.2.2.2.1">
     * RFC 6960 4.2.2.2.1</a> as JSON object.
     * <pre>
     * id-pkix-ocsp-nocheck OBJECT IDENTIFIER ::= { id-pkix-ocsp 5 }
     * </pre>
     * Constructor of this class may have following parameters:
     * <ul>
     * <li>{String}extname - name "ocspNoCheck". It is ignored in this class but
     * required to use with {@link KJUR.asn1.x509.Extensions} class. (OPTION)</li>
     * <li>{Boolean}critical - critical flag. Generally false and not specified
     * in this class.(OPTION)</li>
     * </ul>
     *
     * @example
     * new KJUR.asn1.x509.OCSPNonce({extname:'ocspNoCheck'})
     */
    class OCSPNoCheck extends Extension {
        constructor(params?: { extname?: string; critical?: boolean });
    }
}
