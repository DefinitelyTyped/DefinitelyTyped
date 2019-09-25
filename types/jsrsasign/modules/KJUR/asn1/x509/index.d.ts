/// <reference path="./AlgorithmIdentifier.d.ts" />
/// <reference path="./AttributeTypeAndValue.d.ts" />
/// <reference path="./AuthorityInfoAccess.d.ts" />
/// <reference path="./AuthorityKeyIdentifier.d.ts" />
/// <reference path="./BasicConstraints.d.ts" />
/// <reference path="./Certificate.d.ts" />
/// <reference path="./CRLDistributionPoints.d.ts" />
/// <reference path="./CRL.d.ts" />
/// <reference path="./CRLEntry.d.ts" />
/// <reference path="./DistributionPoint.d.ts" />
/// <reference path="./DistributionPointName.d.ts" />
/// <reference path="./Extension.d.ts" />
/// <reference path="./ExtKeyUsage.d.ts" />
/// <reference path="./GeneralName.d.ts" />
/// <reference path="./GeneralNames.d.ts" />
/// <reference path="./IssuerAltName.d.ts" />
/// <reference path="./KeyUsage.d.ts" />
/// <reference path="./OID.d.ts" />
/// <reference path="./RDN.d.ts" />
/// <reference path="./SubjectAltName.d.ts" />
/// <reference path="./SubjectPublicKeyInfo.d.ts" />
/// <reference path="./TBSCertificate.d.ts" />
/// <reference path="./TBSCertList.d.ts" />
/// <reference path="./Time.d.ts" />
/// <reference path="./X500Name.d.ts" />
/// <reference path="./X509Util.d.ts" />

declare namespace jsrsasign.KJUR.asn1 {
    /**
     * kjur's ASN.1 class for X.509 certificate library name space
     *
     * __FEATURES__
     *
     * - easily issue any kind of certificate
     * - APIs are very similar to BouncyCastle library ASN.1 classes. So easy to learn.
     *
     * __PROVIDED CLASSES__
     *
     * - `KJUR.asn1.x509.Certificate`
     * - `KJUR.asn1.x509.TBSCertificate`
     * - `KJUR.asn1.x509.Extension`
     * - `KJUR.asn1.x509.X500Name`
     * - `KJUR.asn1.x509.RDN`
     * - `KJUR.asn1.x509.AttributeTypeAndValue`
     * - `KJUR.asn1.x509.SubjectPublicKeyInfo`
     * - `KJUR.asn1.x509.AlgorithmIdentifier`
     * - `KJUR.asn1.x509.GeneralName`
     * - `KJUR.asn1.x509.GeneralNames`
     * - `KJUR.asn1.x509.DistributionPointName`
     * - `KJUR.asn1.x509.DistributionPoint`
     * - `KJUR.asn1.x509.CRL`
     * - `KJUR.asn1.x509.TBSCertList`
     * - `KJUR.asn1.x509.CRLEntry`
     * - `KJUR.asn1.x509.OID`
     *
     * __SUPPORTED EXTENSIONS__
     *
     * - `KJUR.asn1.x509.BasicConstraints`
     * - `KJUR.asn1.x509.KeyUsage`
     * - `KJUR.asn1.x509.CRLDistributionPoints`
     * - `KJUR.asn1.x509.ExtKeyUsage`
     * - `KJUR.asn1.x509.AuthorityKeyIdentifier`
     * - `KJUR.asn1.x509.AuthorityInfoAccess`
     * - `KJUR.asn1.x509.SubjectAltName`
     * - `KJUR.asn1.x509.IssuerAltName`
     *
     * NOTE: `SubjectAltName` and `IssuerAltName` extensions were supported since
     * jsrsasign 6.2.3 asn1x509 1.0.19.
     */
    namespace x509 {
        //
    }
}
