/* These are the schema definitions stipulated by the Data Standards Body for the dcr api. */

export type ClientRegistration = {
  /**
   * Contains the identifier for the ADR Software Product (SoftwareProductId) as defined in the CDR Register
   */
  iss: string;
  /**
   * The time at which the request was issued by the Data Recipient  expressed as seconds since 1970-01-01T00:00:00Z as measured in UTC
   */
  iat: number;
  /**
   * The time at which the request expires expressed as seconds since 1970-01-01T00:00:00Z as measured in UTC
   */
  exp: number;
  /**
   * Unique identifier for the JWT, used to prevent replay of the token
   */
  jti: string;
  /**
   * 'Contains the Data Holder issuer value as described in the OIDC Discovery Document
   */
  aud: string;
  [k: string]: unknown;
} & {
  /**
   * Kind of the application. The only supported application type will be `web`
   */
  application_type?: "web" | null;
  /**
   * Human-readable string name of the software product description to be presented to the end user during authorization
   */
  client_description: string;
  /**
   * Data Holder issued client identifier string
   */
  client_id: string;
  /**
   * Time at which the client identifier was issued expressed as seconds since 1970-01-01T00:00:00Z as measured in UTC
   */
  client_id_issued_at?: number | null;
  /**
   * Human-readable string name of the software product to be presented to the end-user during authorization
   */
  client_name: string;
  /**
   * URL string of a web page providing information about the client
   */
  client_uri: string;
  /**
   * Array of OAuth 2.0 grant type strings that the client can use at the token endpoint
   */
  grant_types: ("client_credentials" | "authorization_code" | "refresh_token")[];
  /**
   * JWE `alg` algorithm with which an id_token is to be encrypted
   */
  id_token_encrypted_response_alg: string;
  /**
   * JWE `enc` algorithm with which an id_token is to be encrypted
   */
  id_token_encrypted_response_enc: string;
  /**
   * Algorithm with which an id_token is to be signed
   */
  id_token_signed_response_alg?: ("PS256" | "ES256") | null;
  /**
   * URL string referencing the client JSON Web Key (JWK) Set **[[RFC7517]](#nref-RFC7517)** document, which contains the client public keys
   */
  jwks_uri: string;
  /**
   * A unique identifier string assigned by the CDR Register that identifies the Accredited Data Recipient Legal Entity
   */
  legal_entity_id?: string | null;
  /**
   * Human-readable string name of the Accredited Data Recipient Legal Entity
   */
  legal_entity_name?: string | null;
  /**
   * URL string that references a logo for the client. If present, the server SHOULD display this image to the end-user during approval
   */
  logo_uri: string;
  /**
   * A unique identifier string assigned by the CDR Register that identifies the Accredited Data Recipient Brand
   */
  org_id: string;
  /**
   * Human-readable string name of the Accredited Data Recipient to be presented to the end user during authorization
   */
  org_name: string;
  /**
   * URL string that points to a human-readable policy document for the Software Product
   */
  policy_uri?: string | null;
  /**
   * Base URI for the Consumer Data Standard Data Recipient endpoints. This should be the base to provide reference to all other Data Recipient Endpoints
   */
  recipient_base_uri?: string | null;
  /**
   * Array of redirection URI strings for use in redirect-based flows. If used, redirect_uris MUST match or be a subset of the redirect_uris as defined in the SSA
   */
  redirect_uris: string[];
  /**
   * Algorithm which the ADR expects to sign the request object if a request object will be part of the authorization request sent to the Data Holder
   */
  request_object_signing_alg: "PS256" | "ES256";
  /**
   * Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint.
   */
  response_types: "code id_token"[];
  /**
   * URI string that references the location of the Software Product consent revocation endpoint
   */
  revocation_uri?: string | null;
  /**
   * String containing a space-separated list of scope values that the client can use when requesting access tokens.
   */
  scope: string;
  /**
   * URL string referencing the client sector identifier URI, used as an optional input to the Pairwise Identifier
   */
  sector_identifier_uri?: string | null;
  /**
   * String representing a unique identifier assigned by the Register and used by registration endpoints to identify the software product to be dynamically registered. </br></br>The "software_id" will remain the same for the lifetime of the product, across multiple updates and versions
   */
  software_id: string;
  /**
   * String containing a role of the software in the CDR Regime. Initially the only value used with be `data-recipient-software-product`
   */
  software_roles?: string | null;
  /**
   * The Software Statement Assertion, as defined in CDR standards
   */
  software_statement: string;
  /**
   * The requested authentication method for the token endpoint
   */
  token_endpoint_auth_method: "private_key_jwt";
  /**
   * The algorithm used for signing the JWT
   */
  token_endpoint_auth_signing_alg: "PS256" | "ES256";
  /**
   * URL string that points to a human-readable terms of service document for the Software Product
   */
  tos_uri?: string | null;
  [k: string]: unknown;
};
/* These are the schema definitions stipulated by the Data Standards Body for the dcr api. */

/**
 * The registration request JWT to be used to register with a Data Holder.
 */
export type ClientRegistrationRequest = string;
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
  error_description?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the dcr api. */

export interface RegistrationProperties {
  /**
   * Kind of the application. The only supported application type will be `web`
   */
  application_type?: "web" | null;
  /**
   * Human-readable string name of the software product description to be presented to the end user during authorization
   */
  client_description: string;
  /**
   * Data Holder issued client identifier string
   */
  client_id: string;
  /**
   * Time at which the client identifier was issued expressed as seconds since 1970-01-01T00:00:00Z as measured in UTC
   */
  client_id_issued_at?: number | null;
  /**
   * Human-readable string name of the software product to be presented to the end-user during authorization
   */
  client_name: string;
  /**
   * URL string of a web page providing information about the client
   */
  client_uri: string;
  /**
   * Array of OAuth 2.0 grant type strings that the client can use at the token endpoint
   */
  grant_types: ("client_credentials" | "authorization_code" | "refresh_token")[];
  /**
   * JWE `alg` algorithm with which an id_token is to be encrypted
   */
  id_token_encrypted_response_alg: string;
  /**
   * JWE `enc` algorithm with which an id_token is to be encrypted
   */
  id_token_encrypted_response_enc: string;
  /**
   * Algorithm with which an id_token is to be signed
   */
  id_token_signed_response_alg?: ("PS256" | "ES256") | null;
  /**
   * URL string referencing the client JSON Web Key (JWK) Set **[[RFC7517]](#nref-RFC7517)** document, which contains the client public keys
   */
  jwks_uri: string;
  /**
   * A unique identifier string assigned by the CDR Register that identifies the Accredited Data Recipient Legal Entity
   */
  legal_entity_id?: string | null;
  /**
   * Human-readable string name of the Accredited Data Recipient Legal Entity
   */
  legal_entity_name?: string | null;
  /**
   * URL string that references a logo for the client. If present, the server SHOULD display this image to the end-user during approval
   */
  logo_uri: string;
  /**
   * A unique identifier string assigned by the CDR Register that identifies the Accredited Data Recipient Brand
   */
  org_id: string;
  /**
   * Human-readable string name of the Accredited Data Recipient to be presented to the end user during authorization
   */
  org_name: string;
  /**
   * URL string that points to a human-readable policy document for the Software Product
   */
  policy_uri?: string | null;
  /**
   * Base URI for the Consumer Data Standard Data Recipient endpoints. This should be the base to provide reference to all other Data Recipient Endpoints
   */
  recipient_base_uri?: string | null;
  /**
   * Array of redirection URI strings for use in redirect-based flows. If used, redirect_uris MUST match or be a subset of the redirect_uris as defined in the SSA
   */
  redirect_uris: string[];
  /**
   * Algorithm which the ADR expects to sign the request object if a request object will be part of the authorization request sent to the Data Holder
   */
  request_object_signing_alg: "PS256" | "ES256";
  /**
   * Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint.
   */
  response_types: "code id_token"[];
  /**
   * URI string that references the location of the Software Product consent revocation endpoint
   */
  revocation_uri?: string | null;
  /**
   * String containing a space-separated list of scope values that the client can use when requesting access tokens.
   */
  scope: string;
  /**
   * URL string referencing the client sector identifier URI, used as an optional input to the Pairwise Identifier
   */
  sector_identifier_uri?: string | null;
  /**
   * String representing a unique identifier assigned by the Register and used by registration endpoints to identify the software product to be dynamically registered. </br></br>The "software_id" will remain the same for the lifetime of the product, across multiple updates and versions
   */
  software_id: string;
  /**
   * String containing a role of the software in the CDR Regime. Initially the only value used with be `data-recipient-software-product`
   */
  software_roles?: string | null;
  /**
   * The Software Statement Assertion, as defined in CDR standards
   */
  software_statement: string;
  /**
   * The requested authentication method for the token endpoint
   */
  token_endpoint_auth_method: "private_key_jwt";
  /**
   * The algorithm used for signing the JWT
   */
  token_endpoint_auth_signing_alg: "PS256" | "ES256";
  /**
   * URL string that points to a human-readable terms of service document for the Software Product
   */
  tos_uri?: string | null;
  [k: string]: unknown;
}
