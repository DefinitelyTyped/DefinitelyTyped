declare namespace jsrsasign.KJUR.asn1.tsp {
    /**
     * class for simple TimeStampToken generator
     * @param params associative array of parameters
     * @description
     */
    class SimpleTSAAdapter {
        constructor(initParams?: {
            certs: string[];
            hashAlg: string;
            sigAlg: string;
            signerCert: string;
            signerPrvKey: string;
        });
        getTSTHex(msgHex: string, hashAlg: string): string;
    }
}
