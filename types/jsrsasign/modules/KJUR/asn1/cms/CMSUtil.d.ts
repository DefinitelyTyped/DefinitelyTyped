declare namespace jsrsasign.KJUR.asn1.cms {
    namespace CMSUtil {
        /**
         * generate SignedData object specified by JSON parameters
         * @param param JSON parameter to generate CMS SignedData
         * @return object just generated
         * @description
         * This method provides more easy way to genereate
         * CMS SignedData ASN.1 structure by JSON data.
         * @example
         * var sd = KJUR.asn1.cms.CMSUtil.newSignedData({
         *   content: {str: "jsrsasign"},
         *   certs: [certPEM],
         *   signerInfos: [{
         *     hashAlg: 'sha256',
         *     sAttr: {
         *       SigningTime: {}
         *       SigningCertificateV2: {array: [certPEM]},
         *     },
         *     signerCert: certPEM,
         *     sigAlg: 'SHA256withRSA',
         *     signerPrvKey: prvPEM
         *   }]
         * });
         */
        function SignedData(param?: {
            content: StringParam;
            certs: string[];
            signerInfos: Array<{
                hashAlg: string;
                sAttr: {
                    SigningTime: TypeParam | StringParam;
                    SigningCertificateV2:
                        | ArrayParam<string>
                        | { array: string[]; hashalg: string }
                        | SigningCertificateV2;
                    SignaturePolicyIdentifier: {
                        oid: string;
                        hash: { alg: string; hash: string } | cades.SignaturePolicyIdentifier;
                    };
                };
                signerCert: string;
                sigAlg: string;
                signerPrvKey: string;
            }>;
        }): SignedData;

        /**
         * verify SignedData specified by JSON parameters
         *
         * @param param JSON parameter to verify CMS SignedData
         * @return JSON data as the result of validation
         * @description
         * This method provides validation for CMS SignedData.
         * Following parameters can be applied:
         *
         * - cms - hexadecimal data of DER CMS SignedData (aka. PKCS#7 or p7s)
         *     to verify (OPTION)
         *
         * @example
         * KJUR.asn1.cms.CMSUtil.verifySignedData({ cms: "3082058a..." })
         * →
         * {
         *   isValid: true,
         *   parse: ... // parsed data
         *   signerInfos: [
         *     {
         *     }
         *   ]
         * }
         */
        function verifySignedData(param?: { cms: string }): {
            isValid: boolean;
            parse: {
                certsIdx: number;
                signerInfos: any[];
            };
            signerInfos: any[];
        };
    }
}
