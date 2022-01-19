/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Response containing the Open ID Provider Configuration Metadata
 */
export interface ResponseOpenIDProviderConfigMetadata {
  /**
   * URL using the https scheme with no query or fragment component that the CDR Register asserts as its Issuer Identifier
   */
  issuer: string;
  /**
   * URL of the CDR Register's JSON Web Key Set [JWK] document. This contains the signing key(s) used to validate access tokens issued from the CDR Register. Note that this differs from the JWKS endpoint used to validate SSAs and CDR Register client authentication
   */
  jwks_uri: string;
  /**
   * URL of the CDR Register's OAuth 2.0 Token Endpoint
   */
  token_endpoint: string;
  /**
   * JSON array containing a list of the Claim Names of the Claims that the CDR Register supplies values for
   */
  claims_supported: string[];
  /**
   * JSON array containing a list of the JWS signing algorithms (alg values) supported by the CDR Register for the ID Token to encode the Claims in a JWT. Given the CDR Register does not issue ID tokens, this field can be safely ignored
   */
  id_token_signing_alg_values_supported: string[];
  /**
   * JSON array containing a list of the Subject Identifier types that the CDR Register supports. Given the CDR Register does not issue ID tokens, this field can be safely ignored
   */
  subject_types_supported: string[];
  /**
   * JSON array containing a list of Proof Key for Code Exchange (PKCE) [RFC7636] code challenge methods supported by this authorization server. Given the CDR Register does not support PKCE, this field can be safely ignored
   */
  code_challenge_methods_supported: string[];
  /**
   * JSON array containing a list of the OAuth 2.0 [RFC6749] scope values that the CDR Register supports
   */
  scopes_supported: string[];
  /**
   * JSON array containing a list of the OAuth 2.0 response_type values that the CDR Registrer supports
   */
  response_types_supported: string[];
  /**
   * JSON array containing a list of the OAuth 2.0 Grant Type values that the CDR Register supports
   */
  grant_types_supported: string[];
  /**
   * JSON array containing a list of Client Authentication methods supported by this Token Endpoint
   */
  token_endpoint_auth_methods_supported: string[];
  /**
   * Boolean value indicating server support for mutual TLS client certificate bound access tokens
   */
  tls_client_certificate_bound_access_tokens: boolean;
  /**
   * JSON array containing a list of the JWS signing algorithms (alg values) supported by the CDR Register for Request Objects.
   */
  request_object_signing_alg_values_supported: string[];
  [k: string]: unknown;
}
