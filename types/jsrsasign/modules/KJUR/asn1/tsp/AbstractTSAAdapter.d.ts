declare namespace jsrsasign.KJUR.asn1.tsp {
    /**
     * abstract class for TimeStampToken generator
     * @param params associative array of parameters
     * @description
     */
    class AbstractTSAAdapter {
        constructor();
        getTSTHex(msgHex: string, hashAlg: string): void;
    }
}
