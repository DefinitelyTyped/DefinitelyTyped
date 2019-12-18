declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * AlgorithmIdentifier ASN.1 structure class
     * @param params associative array of parameters (ex. {'name': 'SHA1withRSA'})
     * @description
     * The 'params' argument is an associative array and has following parameters:
     *
     * - name: algorithm name (MANDATORY, ex. sha1, SHA256withRSA)
     * - asn1params: explicitly specify ASN.1 object for algorithm. (OPTION)
     * - paramempty: set algorithm parameter to NULL by force.
     * If paramempty is false, algorithm parameter will be set automatically.
     * If paramempty is false and algorithm name is "*withDSA" or "withECDSA" parameter field of
     * AlgorithmIdentifier will be ommitted otherwise
     * it will be NULL by default.
     * (OPTION, DEFAULT = false)
     *
     * @example
     * algId = new KJUR.asn1.x509.AlgorithmIdentifier({name: "sha1"});
     * // set parameter to NULL authomatically if algorithm name is "*withRSA".
     * algId = new KJUR.asn1.x509.AlgorithmIdentifier({name: "SHA256withRSA"});
     * // set parameter to NULL authomatically if algorithm name is "rsaEncryption".
     * algId = new KJUR.asn1.x509.AlgorithmIdentifier({name: "rsaEncryption"});
     * // SHA256withRSA and set parameter empty by force
     * algId = new KJUR.asn1.x509.AlgorithmIdentifier({name: "SHA256withRSA", paramempty: true});
     */
    class AlgorithmIdentifier extends ASN1Object {
      constructor(params?: {
        name: string;
        asn1params?: ASN1Object;
        paramempty?: boolean;
      });
      getEncodedHex(): string;
    }
}
