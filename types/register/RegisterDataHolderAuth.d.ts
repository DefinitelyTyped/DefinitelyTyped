/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Provides details of authorisation endpoints for Data Holders
 */
export interface RegisterDataHolderAuth {
  /**
   * The type of authentication and authorisation mechanism in use
   */
  registerUType: "SIGNED-JWT";
  /**
   * JWKS endpoint for private_key_jwt client authentication with Data Recipient
   */
  jwksEndpoint: string;
  [k: string]: unknown;
}
