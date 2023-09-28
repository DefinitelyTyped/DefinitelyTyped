declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * AdobeTimeStamp X.509v3 extension ASN.1 encoder class<br/>
     * @since jsrsasign 10.0.1 asn1x509 2.1.4
     * @param params JSON object for AdobeTimeStamp extension parameter
     * @see KJUR.asn1.x509.Extensions
     * @see X509#getExtAdobeTimeStamp
     * @description
     * This class represents
     * AdobeTimeStamp X.509v3 extension value defined in
     * <a href="https://www.adobe.com/devnet-docs/acrobatetk/tools/DigSigDC/oids.html">
     * Adobe site</a> as JSON object.
     * <pre>
     * adbe- OBJECT IDENTIFIER ::=  { adbe(1.2.840.113583) acrobat(1) security(1) x509Ext(9) 1 }
     *  ::= SEQUENCE {
     *     version INTEGER  { v1(1) }, -- extension version
     *     location GeneralName (In v1 GeneralName can be only uniformResourceIdentifier)
     *     requiresAuth        boolean (default false), OPTIONAL }
     * </pre>
     * Constructor of this class may have following parameters:
     * <ul>
     * <li>{String}uri - RFC 3161 time stamp service URL</li>
     * <li>{Boolean}reqauth - authentication required or not</li>
     * </ul>
     * </pre>
     * <br/>
     * NOTE: This extesion doesn't seem to have official name. This may be called as "pdfTimeStamp".
     * @example
     * new KJUR.asn1.x509.AdobeTimesStamp({
     *   uri: "http://tsa.example.com/",
     *   reqauth: true
     * }
     */
    class AdobeTimeStamp extends Extension {
        constructor(params?: { uri?: string; reqauth?: boolean });
    }
}
