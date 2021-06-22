/// <reference path="./ASN1Object.d.ts" />
/// <reference path="./ASN1Util.d.ts" />
/// <reference path="./ASNObjects.d.ts" />
/// <reference path="./cades/index.d.ts" />
/// <reference path="./cms/index.d.ts" />
/// <reference path="./csr/index.d.ts" />
/// <reference path="./ocsp/index.d.ts" />
/// <reference path="./tsp/index.d.ts" />
/// <reference path="./x509/index.d.ts" />

declare namespace jsrsasign.KJUR {
    /**
     * kjur's ASN.1 class library name space
     *
     * This is ITU-T X.690 ASN.1 DER encoder class library and
     * class structure and methods is very similar to
     * `org.bouncycastle.asn1` package of
     * well known BouncyCastle Cryptography Library.
     *
     * __PROVIDING ASN.1 PRIMITIVES__
     *
     * Here are ASN.1 DER primitive classes.
     *
     * - 0x01 `KJUR.asn1.DERBoolean`
     * - 0x02 `KJUR.asn1.DERInteger`
     * - 0x03 `KJUR.asn1.DERBitString`
     * - 0x04 `KJUR.asn1.DEROctetString`
     * - 0x05 `KJUR.asn1.DERNull`
     * - 0x06 `KJUR.asn1.DERObjectIdentifier`
     * - 0x0a `KJUR.asn1.DEREnumerated`
     * - 0x0c `KJUR.asn1.DERUTF8String`
     * - 0x12 `KJUR.asn1.DERNumericString`
     * - 0x13 `KJUR.asn1.DERPrintableString`
     * - 0x14 `KJUR.asn1.DERTeletexString`
     * - 0x16 `KJUR.asn1.DERIA5String`
     * - 0x17 `KJUR.asn1.DERUTCTime`
     * - 0x18 `KJUR.asn1.DERGeneralizedTime`
     * - 0x30 `KJUR.asn1.DERSequence`
     * - 0x31 `KJUR.asn1.DERSet`
     *
     * __OTHER ASN.1 CLASSES__
     *
     * - `KJUR.asn1.ASN1Object`
     * - `KJUR.asn1.DERAbstractString`
     * - `KJUR.asn1.DERAbstractTime`
     * - `KJUR.asn1.DERAbstractStructured`
     * - `KJUR.asn1.DERTaggedObject`
     *
     * __SUB NAME SPACES__
     *
     * - `KJUR.asn1.cades` - CAdES long term signature format
     * - `KJUR.asn1.cms` - Cryptographic Message Syntax
     * - `KJUR.asn1.csr` - Certificate Signing Request (CSR/PKCS#10)
     * - `KJUR.asn1.tsp` - RFC 3161 Timestamping Protocol Format
     * - `KJUR.asn1.x509` - RFC 5280 X.509 certificate and CRL
     */
    namespace asn1 {
        //
    }
}
