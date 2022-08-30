declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * CRLNumber CRL extension ASN.1 structure class.
     * @param params
     * @description
     * This class represents ASN.1 structure for CRLNumber CRL extension defined in <a href="https://tools.ietf.org/html/rfc5280#section-5.2.3"> RFC 5280 5.2.3</a>.
     * <pre>
     * id-ce-cRLNumber OBJECT IDENTIFIER ::= { id-ce 20 }
     * CRLNumber ::= INTEGER (0..MAX)
     * </pre>
     * Constructor of this class may have following parameters:
     * - {String}extname - name "cRLNumber". It is ignored in this class but required to use with {@link KJUR.asn1.x509.Extensions} class. (OPTION)</li>
     * - {Object}num - CRLNumber value to specify {@link KJUR.asn1.DERInteger} parameter.
     * - {Boolean}critical - critical flag. Generally false and not specified in this class.(OPTION)
     *
     * @example
     * new KJUR.asn1.x509.CRLNumber({extname:'cRLNumber',
     *                               num:{'int':147}})
     */
    class CRLNumber extends ASN1Object {
        constructor(params?: { extname?: string; num: { [key: string]: number }; critical?: boolean });
    }
}
