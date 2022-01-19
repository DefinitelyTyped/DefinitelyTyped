/* These are the schema definitions stipulated by the Data Standards Body for the dcr api. */

export interface RegistrationError {
  /**
   * Predefined error code as described in [section 3.3 OIDC Dynamic Client Registration](https://openid.net/specs/openid-connect-registration-1_0.html)
   */
  error:
    | "invalid_redirect_uri"
    | "invalid_client_metadata"
    | "invalid_software_statement"
    | "unapproved_software_statement";
  /**
   * Additional text description of the error for debugging.
   */
  error_description?: string;
  [k: string]: unknown;
}
