/// <reference path="./CAdESUtil.d.ts" />
/// <reference path="./CompleteCertificateRefs.d.ts" />
/// <reference path="./OtherCertID.d.ts" />
/// <reference path="./OtherHashAlgAndValue.d.ts" />
/// <reference path="./OtherHash.d.ts" />
/// <reference path="./SignaturePolicyIdentifier.d.ts" />
/// <reference path="./SignatureTimeStamp.d.ts" />

declare namespace jsrsasign.KJUR.asn1 {
    /**
     * kjur's ASN.1 class for RFC 5126 CAdES long term signature
     *
     * This name space provides [RFC 5126 CAdES (CMS Advanced Electronic Signature)](https://tools.ietf.org/html/rfc5126) generator.
     *
     * __SUPPORTED FORMATS__
     *
     * Following CAdES formats is supported by this library.
     *
     * - CAdES-BES - CAdES Basic Electronic Signature
     * - CAdES-EPES - CAdES Explicit Policy-based Electronic Signature
     * - CAdES-T - Electronic Signature with Time
     *
     * __PROVIDED ATTRIBUTE CLASSES__
     *
     * - `KJUR.asn1.cades.SignaturePolicyIdentifier` - for CAdES-EPES
     * - `KJUR.asn1.cades.SignatureTimeStamp` - for CAdES-T
     * - `KJUR.asn1.cades.CompleteCertificateRefs` - for CAdES-C(for future use)
     *
     * NOTE: Currntly CAdES-C is not supported since parser can't
     * handle unsigned attribute.
     *
     * __OTHER CLASSES__
     *
     * - `KJUR.asn1.cades.OtherHashAlgAndValue`
     * - `KJUR.asn1.cades.OtherHash`
     * - `KJUR.asn1.cades.OtherCertID`
     * - `KJUR.asn1.cades.CAdESUtil` - utilities for CAdES
     *
     * __GENERATE CAdES-BES__
     *
     * To generate CAdES-BES, `KJUR.asn.cades` namespace
     * classes are not required and already `KJUR.asn.cms` namespace
     * provides attributes for CAdES-BES.
     * Create `KJUR.asn1.cms.SignedData` with following
     * mandatory attribute in CAdES-BES:
     *
     * - `KJUR.asn1.cms.ContentType`
     * - `KJUR.asn1.cms.MessageDigest`
     * - `KJUR.asn1.cms.SigningCertificate`
     * - `KJUR.asn1.cms.SigningCertificateV2`
     *
     * CMSUtil.newSignedData method is very useful to generate CAdES-BES.
     *
     * ```
     * sd = KJUR.asn1.cms.CMSUtil.newSignedData({
     *   content: {str: "aaa"},
     *   certs: [certPEM],
     *   signerInfos: [{
     *     hashAlg: 'sha256',
     *     sAttr: {SigningCertificateV2: {array: [certPEM]}},
     *     signerCert: certPEM,
     *     sigAlg: 'SHA256withRSA',
     *     signerPrvKey: pkcs8PrvKeyPEM
     *   }]
     * });
     * signedDataHex = sd.getContentInfoEncodedHex();
     * ```
     *
     * NOTE: ContentType and MessageDigest signed attributes
     * are automatically added by default.
     *
     * __GENERATE CAdES-BES with multiple signers__
     *
     * If you need signature by multiple signers, you can
     * specify one or more items in 'signerInfos' property as below.
     *
     * ```
     * sd = KJUR.asn1.cms.CMSUtil.newSignedData({
     *   content: {str: "aaa"},
     *   certs: [certPEM1, certPEM2],
     *   signerInfos: [{
     *     hashAlg: 'sha256',
     *     sAttr: {SigningCertificateV2: {array: [certPEM1]}},
     *     signerCert: certPEM1,
     *     sigAlg: 'SHA256withRSA',
     *     signerPrvKey: pkcs8PrvKeyPEM1
     *   },{
     *     hashAlg: 'sha1',
     *     sAttr: {SigningCertificateV2: {array: [certPEM2]}},
     *     signerCert: certPEM2,
     *     sigAlg: 'SHA1withRSA',
     *     signerPrvKey: pkcs8PrvKeyPEM2
     *   }]
     * });
     * signedDataHex = sd.getContentInfoEncodedHex();
     * ```
     *
     * __GENERATE CAdES-EPES__
     *
     * When you need a CAdES-EPES signature,
     * you just need to add 'SignaturePolicyIdentifier'
     * attribute as below.
     *
     * ```
     * sd = KJUR.asn1.cms.CMSUtil.newSignedData({
     *   content: {str: "aaa"},
     *   certs: [certPEM],
     *   signerInfos: [{
     *     hashAlg: 'sha256',
     *     sAttr: {
     *       SigningCertificateV2: {array: [certPEM]},
     *       SignaturePolicyIdentifier: {
     *         oid: '1.2.3.4.5',
     *         hash: {alg: 'sha1', hash: 'b1b2b3b4b...'}
     *       },
     *     },
     *     signerCert: certPEM,
     *     sigAlg: 'SHA256withRSA',
     *     signerPrvKey: pkcs8PrvKeyPEM
     *   }]
     * });
     * signedDataHex = sd.getContentInfoEncodedHex();
     * ```
     *
     * __GENERATE CAdES-T__
     *
     * After a signed CAdES-BES or CAdES-EPES signature have been generated,
     * you can generate CAdES-T by adding SigningTimeStamp unsigned attribute.
     *
     * ```
     * beshex = "30..."; // hex of CAdES-BES or EPES data
     * info = KJUR.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned(beshex);
     * ```
     *
     * // You can refer a hexadecimal string of signature value
     * // in the first signerInfo in the CAdES-BES/EPES with a variable:
     * // 'info.si[0].sigval'. You need to get RFC 3161 TimeStampToken
     * // from a trusted time stamp authority. Otherwise you can also
     * // get it by 'KJUR.asn1.tsp' module. We suppose that we could
     * // get proper time stamp.
     *
     * ```
     * tsthex0 = "30..."; // hex of TimeStampToken for signerInfo[0] sigval
     * si0 = info.obj.signerInfoList[0];
     * si0.addUnsigned(new KJUR.asn1.cades.SignatureTimeStamp({tst: tsthex0});
     * esthex = info.obj.getContentInfoEncodedHex(); // CAdES-T
     * ```
     */
    namespace cades {
        //
    }
}
