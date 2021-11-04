declare namespace jsrsasign.KJUR.asn1.cades {
    /**
     * class for RFC 5126 CAdES SignaturePolicyIdentifier attribute
     * @param params associative array of parameters
     * @description
     * ```
     * SignaturePolicyIdentifier ::= CHOICE {
     *    signaturePolicyId       SignaturePolicyId,
     *    signaturePolicyImplied  SignaturePolicyImplied } -- not used
     *
     * SignaturePolicyImplied ::= NULL
     * SignaturePolicyId ::= SEQUENCE {
     *    sigPolicyId           SigPolicyId,
     *    sigPolicyHash         SigPolicyHash,
     *    sigPolicyQualifiers   SEQUENCE SIZE (1..MAX) OF
     *                             SigPolicyQualifierInfo OPTIONAL }
     * SigPolicyId ::= OBJECT IDENTIFIER
     * SigPolicyHash ::= OtherHashAlgAndValue
     * ```
     * @example
     * var o = new KJUR.asn1.cades.SignaturePolicyIdentifier({
     *   oid: '1.2.3.4.5',
     *   hash: {alg: 'sha1', hash: 'a1a2a3a4...'}
     * });
     */
    class SignaturePolicyIdentifier extends cms.Attribute {
        constructor(params?: { oid: string; hash: { alg: string; hash: string } });
    }
}
