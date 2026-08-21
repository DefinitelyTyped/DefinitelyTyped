declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * ASN.1 TBSCertificate structure class<br/>
     * @param params JSON object of TBSCertificate parameters
     *
     * @description
     * <br/>
     * NOTE: TBSCertificate class is updated without backward
     * compatibility from jsrsasign 9.0.0 asn1x509 2.0.0.
     * Most of methods are removed and parameters can be set
     * by JSON object.
     *
     * @example
     * new TBSCertificate({
     *  version: 3, // this can be omitted, the default is 3.
     *  serial: {hex: "1234..."}, // DERInteger parameter
     *  sigalg: "SHA256withRSA",
     *  issuer: {array:[[{type:'O',value:'Test',ds:'prn'}]]}, // X500Name parameter
     *  notbefore: "151231235959Z", // string, passed to Time
     *  notafter: "251231235959Z", // string, passed to Time
     *  subject: {array:[[{type:'O',value:'Test',ds:'prn'}]]}, // X500Name parameter
     *  sbjpubkey: "-----BEGIN...", // KEYUTIL.getKey pubkey parameter
     *  // As for extension parameters, please see extension class
     *  // All extension parameters need to have "extname" parameter additionaly.
     *  ext:[{
     *   extname:"keyUsage",critical:true,
     *   names:["digitalSignature","keyEncipherment"]
     *  },{
     *   extname:"cRLDistributionPoints",
     *   array:[{dpname:{full:[{uri:"http://example.com/a1.crl"}]}}]
     *  }, ...]
     * })
     *
     * var tbsc = new TBSCertificate();
     * tbsc.setByParam({version:3,serial:{hex:'1234...'},...});
     */
    class TBSCertificate extends ASN1Object {
        constructor(params?: CertificateTBSParams);

        /**
         * get array of ASN.1 object for extensions<br/>
         * @param params JSON object of TBSCertificate parameters
         * @example
         * tbsc = new KJUR.asn1.x509.TBSCertificate();
         * tbsc.setByParam({version:3, serial:{hex:'1234...'},...});
         */
        setByParam(params: CertificateTBSParams): void;

        getEncodedHex(): string;
    }
}
