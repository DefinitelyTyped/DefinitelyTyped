declare namespace jsrsasign.KJUR.asn1.ocsp {
    /**
     * Utility class for OCSP
     * @description
     * This class provides utility static methods for OCSP.
     * - `KJUR.asn1.ocsp.OCSPUtil.getRequestHex` - generates hexadecimal string of OCSP request
     *
     */
    namespace OCSPUtil {
        interface ResponseInfo {
            responseStatus: number;
            certStatus: string;
            thisUpdate: string;
            nextUpdate: string;
        }

        /**
         * generates hexadecimal string of OCSP request
         * @param issuerCert string of PEM issuer certificate
         * @param subjectCert string of PEM subject certificate to be verified by OCSP
         * @param algName hash algorithm name used for above arguments (ex. "sha1") DEFAULT: sha1
         * @return hexadecimal string of generated OCSP request
         * @description
         * This static method generates hexadecimal string of OCSP request.
         * @example
         * // generate OCSP request using sha1 algorithnm by default.
         * hReq = KJUR.asn1.ocsp.OCSPUtil.getRequestHex("-----BEGIN...", "-----BEGIN...");
         */
        function getRequestHex(issuerCert: string, subjectCert: string, alg: string): string;

        /**
         * parse OCSPResponse
         * @param h hexadecimal string of DER OCSPResponse
         * @return JSON object of parsed OCSPResponse
         * @description
         * This static method parse a hexadecimal string of DER OCSPResponse and
         * returns JSON object of its parsed result.
         * Its result has following properties:
         *
         * - responseStatus - integer of responseStatus
         * - certStatus - string of certStatus (ex. good, revoked or unknown)
         * - thisUpdate - string of thisUpdate in Zulu(ex. 20151231235959Z)
         * - nextUpdate - string of nextUpdate in Zulu(ex. 20151231235959Z)
         *
         * @example
         * info = KJUR.asn1.ocsp.OCSPUtil.getOCSPResponseInfo("3082...");
         */
        function getOCSPResponseInfo(h: string): ResponseInfo;
    }
}
