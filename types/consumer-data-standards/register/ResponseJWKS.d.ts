/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Response containing the JSON Web Key Set
 */
export interface ResponseJWKS {
  /**
   * The value of the "keys" parameter is an array of JWK values
   */
  keys: {
    /**
     * The "alg" (algorithm) parameter identifies the algorithm intended for use with the key
     */
    alg: string;
    /**
     * The "e" RSA public exponent parameter
     */
    e: string;
    /**
     * The "key_ops" (key operations) parameter identifies the operation(s) for which the key is intended to be used
     */
    key_ops: string[];
    /**
     * The "kid" (key ID) parameter is partially used to match a specific key. Note the "kid" parameter is not guaranteed unique and additional parameters should be used to progressively to identify a key within a set
     */
    kid: string;
    /**
     * The "kty" (key type) parameter identifies the cryptographic algorithm family used with the key
     */
    kty: string;
    /**
     * The "n" RSA public modulus parameter
     */
    n: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
