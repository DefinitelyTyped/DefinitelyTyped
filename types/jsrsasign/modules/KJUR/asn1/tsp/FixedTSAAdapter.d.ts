declare namespace jsrsasign.KJUR.asn1.tsp {
    /**
     * class for fixed TimeStampToken generator
     * @param params associative array of parameters
     * @description
     * This class generates fixed TimeStampToken except messageImprint
     * for testing purpose.
     * General TSA generates TimeStampToken which varies following
     * fields:
     *
     * - genTime
     * - serialNumber
     * - nonce
     *
     * Those values are provided by initial parameters.
     */
    class FixedTSAAdapter {
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
