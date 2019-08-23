declare namespace jsrsasign.KJUR.asn1.x509 {
    interface UriParam {
        uri: string;
    }

    interface ExtensionParam {
        accessMethod: ObjectIdentifierParam;
        accessLocation: UriParam;
    }

    /**
     * AuthorityInfoAccess ASN.1 structure class
     * @param params associative array of parameters
     * @description
     * ```
     * id-pe OBJECT IDENTIFIER  ::=  { id-pkix 1 }
     * id-pe-authorityInfoAccess OBJECT IDENTIFIER ::= { id-pe 1 }
     * AuthorityInfoAccessSyntax  ::=
     *         SEQUENCE SIZE (1..MAX) OF AccessDescription
     * AccessDescription  ::=  SEQUENCE {
     *         accessMethod          OBJECT IDENTIFIER,
     *         accessLocation        GeneralName  }
     * id-ad OBJECT IDENTIFIER ::= { id-pkix 48 }
     * id-ad-caIssuers OBJECT IDENTIFIER ::= { id-ad 2 }
     * id-ad-ocsp OBJECT IDENTIFIER ::= { id-ad 1 }
     * ```
     * @example
     * e1 = new KJUR.asn1.x509.AuthorityInfoAccess({
     *   array: [{
     *     accessMethod:{'oid': '1.3.6.1.5.5.7.48.1'},
     *     accessLocation:{'uri': 'http://ocsp.cacert.org'}
     *   }]
     * });
     */
    class AuthorityInfoAccess extends Extension {
        constructor(params?: ArrayParam<ExtensionParam>);

        setAccessDescriptionArray(accessDescriptionArray: ExtensionParam[]): void;
        getExtnValueHex(): string;
    }
}
