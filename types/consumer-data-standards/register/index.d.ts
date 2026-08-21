/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface DataHolderBrandSummary {
    /**
     * Australian Business Number for the organisation.
     */
    abn?: string | null;
    /**
     * Australian Company Number for the organisation.
     */
    acn?: string | null;
    /**
     * Australian Registered Body Number. ARBNs are issued to registrable Australian bodies and foreign companies.
     */
    arbn?: string | null;
    /**
     * The name of Data Holder Brand.
     */
    brandName: string;
    /**
     * Unique id of the Data Holder Brand issued by the CDR Register.
     */
    dataHolderBrandId?: string | null;
    /**
     * The industries the Data Holder Brand belongs to.
     */
    industries: ("banking" | "energy" | "telco")[];
    /**
     * Interim id of the Data Holder Brand issued by the CDR Register. This is to be used to uniquely identify the record when dataHolderBrandId is not populated and is not to be reused.
     */
    interimId?: string | null;
    /**
     * The date/time that the Data Holder Brand data was last updated in the Register.
     */
    lastUpdated: string;
    /**
     * Brand logo URI.
     */
    logoUri: string;
    /**
     * Base URI for the Data Holder's Consumer Data Standard public endpoints.
     */
    publicBaseUri: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface DataHolderBrandSummaryV2 {
    /**
     * Australian Business Number for the organisation.
     */
    abn?: string | null;
    /**
     * Australian Company Number for the organisation.
     */
    acn?: string | null;
    /**
     * Australian Registered Body Number. ARBNs are issued to registrable Australian bodies and foreign companies.
     */
    arbn?: string | null;
    /**
     * The name of Data Holder Brand.
     */
    brandName: string;
    /**
     * Unique id of the Data Holder Brand issued by the CDR Register.
     */
    dataHolderBrandId?: string | null;
    /**
     * The industries the Data Holder Brand belongs to.
     */
    industries: ("banking" | "energy" | "non-bank-lending" | "telco")[];
    /**
     * Interim id of the Data Holder Brand issued by the CDR Register. This is to be used to uniquely identify the record when _dataHolderBrandId_ is not populated and is not to be reused.
     */
    interimId?: string | null;
    /**
     * The date/time that the Data Holder Brand data was last updated in the Register.
     */
    lastUpdated: string;
    /**
     * Brand logo URI.
     */
    logoUri: string;
    /**
     * Base URI for the Data Holder's Consumer Data Standard public endpoints.
     */
    publicBaseUri: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface DataHoldersStatusList {
    /**
     * Response data for the query.
     */
    data: DataHolderStatus[];
    links: Links;
    meta: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface DataHolderStatus {
    /**
     * Unique id of the Data Holder Legal Entity issued by the CDR Register.
     */
    legalEntityId: string;
    /**
     * Data Holder status in the CDR Register.
     */
    status: "ACTIVE" | "REMOVED";
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Metadata related to Data Recipient Brand.
 */
export interface DataRecipientBrandMetaData {
    /**
     * Data Recipient Brand name.
     */
    brandName: string;
    /**
     * Unique id of the Data Recipient brand issued by the CDR Register.
     */
    dataRecipientBrandId: string;
    /**
     * Data Recipient Brand logo URI.
     */
    logoUri: string;
    softwareProducts?: SoftwareProductMetaData[] | null;
    /**
     * Data Recipient Brand status in the CDR Register.
     */
    status: "ACTIVE" | "INACTIVE" | "REMOVED";
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface DataRecipientsStatusList {
    /**
     * Response data for the query.
     */
    data: DataRecipientStatus[];
    links: Links;
    meta: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface DataRecipientStatus {
    /**
     * Unique id of the Data Recipient Legal Entity issued by the CDR Register.
     */
    legalEntityId: string;
    /**
     * Data Recipient status in the CDR Register.
     */
    status: "ACTIVE" | "SUSPENDED" | "REVOKED" | "SURRENDERED";
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface ErrorV2 {
    /**
     * The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the _meta_ object. Otherwise, the value is the error code URN.
     */
    code: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     */
    detail: string;
    /**
     * Additional data for customised error codes.
     */
    meta?: {
        /**
         * The CDR error code URN which the application-specific error code extends. Mandatory if the error _code_ is an application-specific error rather than a standardised error code.
         */
        urn?: string | null;
    } | null;
    /**
     * A short, human-readable summary of the problem that **MUST NOT** change from occurrence to occurrence of the problem represented by the error code.
     */
    title: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export type IndustriesEnumV2 = "banking" | "energy" | "non-bank-lending" | "telco";
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export type IndustryEnumRecipients = "all";
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export type IndustryEnumV2 = "banking" | "energy" | "non-bank-lending" | "telco" | "all";
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Object representing a JSON Web Key.
 */
export interface JWK {
    /**
     * The _alg_ (algorithm) parameter identifies the algorithm intended for use with the key.
     */
    alg: string;
    /**
     * The _e_ RSA public exponent parameter.
     */
    e: string;
    /**
     * The _key_ops_ (key operations) parameter identifies the operation(s) for which the key is intended to be used.
     */
    key_ops: string[];
    /**
     * The _kid_ (key ID) parameter is partially used to match a specific key. Note the _kid_ parameter is not guaranteed to be unique and additional parameters should be used to progressively identify a key within a set.
     */
    kid: string;
    /**
     * The _kty_ (key type) parameter identifies the cryptographic algorithm family used with the key.
     */
    kty: string;
    /**
     * The _n_ RSA public modulus parameter.
     */
    n: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * The data that is common to all organisations, regardless of the type (e.g., company, trust, partnership, government).
 */
export interface LegalEntityDetail {
    /**
     * Australian Business Number for the organisation.
     */
    abn?: string | null;
    /**
     * Australian Company Number for the organisation.
     */
    acn?: string | null;
    /**
     * ANZSIC division of the organisation. **[[ANZSIC-2006]](#iref-ANZSIC-2006)**.
     */
    anzsicDivision?: string | null;
    /**
     * Australian Registered Body Number. ARBNs are issued to registrable Australian bodies and foreign companies.
     */
    arbn?: string | null;
    /**
     * Unique id of the organisation issued by the CDR Register.
     */
    legalEntityId: string;
    /**
     * Unique legal name of the organisation.
     */
    legalEntityName: string;
    /**
     * Legal Entity logo URI.
     */
    logoUri: string;
    /**
     * Legal organisation type.
     */
    organisationType?: ("SOLE_TRADER" | "COMPANY" | "PARTNERSHIP" | "TRUST" | "GOVERNMENT_ENTITY" | "OTHER") | null;
    /**
     * Country of registration (if the company is registered outside Australia).
     */
    registeredCountry?: string | null;
    /**
     * Date of registration (if the company is registered outside Australia).
     */
    registrationDate?: string | null;
    /**
     * Unique registration number (if the company is registered outside Australia).
     */
    registrationNumber?: string | null;
    status: "ACTIVE" | "REMOVED";
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface Links {
    /**
     * Fully qualified link to this API call.
     */
    self: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface LinksPaginated {
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page.
     */
    first?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page.
     */
    last?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page.
     */
    next?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page.
     */
    prev?: string | null;
    /**
     * Fully qualified link to this API call.
     */
    self: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface Meta {}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Additional data for customised error codes.
 */
export interface MetaError {
    /**
     * The CDR error code URN which the application-specific error code extends. Mandatory if the error _code_ is an application-specific error rather than a standardised error code.
     */
    urn?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface MetaPaginated {
    /**
     * The total number of pages in the full set.
     */
    totalPages: number;
    /**
     * The total number of records in the full set.
     */
    totalRecords: number;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Defines the mechanism used and associated endpoints for Data Holder to Data Recipient authentication.
 */
export interface RegisterDataHolderAuth {
    /**
     * JWKS endpoint used for authentication by the Data Holder with the Data Recipient.
     */
    jwksEndpoint: string;
    /**
     * The type of authentication and authorisation mechanism in use.
     */
    registerUType: "SIGNED-JWT";
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface RegisterDataHolderBrand {
    authDetails: RegisterDataHolderAuth[];
    /**
     * The name of Data Holder Brand.
     */
    brandName: string;
    /**
     * Unique id of the Data Holder Brand issued by the CDR Register.
     */
    dataHolderBrandId: string;
    endpointDetail: RegisterDataHolderBrandServiceEndpoint;
    /**
     * The industries the Data Holder Brand belongs to.
     */
    industries: ("banking" | "energy" | "telco")[];
    /**
     * The date/time that the Data Holder Brand data was last updated in the Register.
     */
    lastUpdated: string;
    legalEntity: LegalEntityDetail;
    /**
     * Brand logo URI.
     */
    logoUri: string;
    status: "ACTIVE" | "INACTIVE" | "REMOVED";
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Endpoints related to Data Holder Brand services.
 */
export interface RegisterDataHolderBrandServiceEndpoint {
    /**
     * Base URI for the Data Holder extension endpoints to the Consumer Data Standard (optional).
     */
    extensionBaseUri?: string | null;
    /**
     * Base URI for the Data Holder's Consumer Data Standard information security endpoints.
     */
    infosecBaseUri: string;
    /**
     * Base URI for the Data Holder's Consumer Data Standard public endpoints.
     */
    publicBaseUri: string;
    /**
     * Base URI for the Data Holder's Consumer Data Standard resource endpoints.
     */
    resourceBaseUri: string;
    /**
     * The major version of the high level standards. This is not the version of the endpoint or the payload being requested but the version of the overall standards being applied. This version number will be "`v`" followed by the major version of the standards as a positive integer (e.g., `v1`, `v12` or `v76`).
     */
    version: string;
    /**
     * Publicly available website or web resource URI.
     */
    websiteUri: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface RegisterDataHolderBrandV2 {
    authDetails: RegisterDataHolderAuth[];
    /**
     * The name of Data Holder Brand.
     */
    brandName: string;
    /**
     * Unique id of the Data Holder Brand issued by the CDR Register.
     */
    dataHolderBrandId: string;
    endpointDetail: RegisterDataHolderBrandServiceEndpoint;
    /**
     * The industries the Data Holder Brand belongs to.
     */
    industries: ("banking" | "energy" | "non-bank-lending" | "telco")[];
    /**
     * The date/time that the Data Holder Brand data was last updated in the Register.
     */
    lastUpdated: string;
    legalEntity: LegalEntityDetail;
    /**
     * Brand logo URI.
     */
    logoUri: string;
    status: "ACTIVE" | "INACTIVE" | "REMOVED";
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface RegisterDataRecipient {
    /**
     * Accreditation level of the Data Recipient in the CDR Register.
     */
    accreditationLevel: "UNRESTRICTED" | "SPONSORED";
    /**
     * CDR Register issued human readable unique number given to Data Recipients upon accreditation.
     */
    accreditationNumber: string;
    dataRecipientBrands?: DataRecipientBrandMetaData[] | null;
    /**
     * The date/time that the Legal Entity was last updated in the CDR Register.
     */
    lastUpdated: string;
    /**
     * Unique id of the Data Recipient Legal Entity issued by the CDR Register.
     */
    legalEntityId: string;
    /**
     * Legal name of the Data Recipient.
     */
    legalEntityName: string;
    /**
     * Legal Entity logo URI.
     */
    logoUri: string;
    /**
     * Data Recipient status in the CDR Register.
     */
    status: "ACTIVE" | "SUSPENDED" | "REVOKED" | "SURRENDERED";
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface ResponseDataHoldersBrandSummaryList {
    /**
     * Response data for the query.
     */
    data: DataHolderBrandSummaryV2[];
    links: Links;
    meta: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface ResponseErrorListV2 {
    /**
     * List of errors.
     */
    errors: ErrorV2[];
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface ResponseErrorListV2Errors {
    /**
     * The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the _meta_ object. Otherwise, the value is the error code URN.
     */
    code: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     */
    detail: string;
    meta?: MetaError;
    /**
     * A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.
     */
    title: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Response containing the JSON Web Key Set.
 */
export interface ResponseJWKS {
    /**
     * The value of the _keys_ parameter is an array of JWK values.
     */
    keys: JWK[];
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Response containing the Open ID Provider Configuration Metadata.
 */
export interface ResponseOpenIDProviderConfigMetadata {
    /**
     * JSON array containing a list of the Claim Names of the Claims that the CDR Register supplies values for.
     */
    claims_supported: string[];
    /**
     * JSON array containing a list of Proof Key for Code Exchange (PKCE) **[[RFC7636]](#nref-RFC7636)** code challenge methods supported by this authorization server. Given the CDR Register does not support PKCE, this field can be safely ignored.
     */
    code_challenge_methods_supported: string[];
    /**
     * JSON array containing a list of the OAuth 2.0 Grant Type values that the CDR Register supports.
     */
    grant_types_supported: string[];
    /**
     * JSON array containing a list of the JWS signing algorithms (alg values) supported by the CDR Register for the ID Token to encode the Claims in a JWT. Given the CDR Register does not issue ID tokens, this field can be safely ignored.
     */
    id_token_signing_alg_values_supported: string[];
    /**
     * URL using the https scheme with no query or fragment component that the CDR Register asserts as its Issuer Identifier.
     */
    issuer: string;
    /**
     * URL of the CDR Register's JSON Web Key Set **[[JWK]](#nref-JWK)** document. This contains the signing key(s) used to validate access tokens issued from the CDR Register. Note that this differs from the JWKS endpoint used to validate SSAs and CDR Register client authentication.
     */
    jwks_uri: string;
    /**
     * JSON array containing a list of the OAuth 2.0 _response_type_ values that the CDR Register supports.
     */
    response_types_supported: string[];
    /**
     * JSON array containing a list of the OAuth 2.0 **[[RFC6749]](#nref-RFC6749)** scope values that the CDR Register supports.
     */
    scopes_supported: string[];
    /**
     * JSON array containing a list of the Subject Identifier types that the CDR Register supports. Given the CDR Register does not issue ID tokens, this field can be safely ignored.
     */
    subject_types_supported: string[];
    /**
     * Boolean value indicating server support for mutual TLS client certificate bound access tokens.
     */
    tls_client_certificate_bound_access_tokens: boolean;
    /**
     * URL of the CDR Register's OAuth 2.0 Token Endpoint.
     */
    token_endpoint: string;
    /**
     * JSON array containing a list of Client Authentication methods supported by this Token Endpoint.
     */
    token_endpoint_auth_methods_supported: string[];
    /**
     * JSON array containing a list of the JWS signing algorithms (_alg_ values) supported by the token endpoint for the signature on the JWT **[[JWT]](#nref-JWT)** used to authenticate the client at the token endpoint for the `private_key_jwt` authentication method.
     */
    token_endpoint_auth_signing_alg_values_supported: string[];
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Response containing a list of CDR Register Data Holder Brand objects.
 */
export interface ResponseRegisterDataHolderBrandList {
    /**
     * Response data for the query.
     */
    data: RegisterDataHolderBrand[];
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Response containing a list of CDR Register Data Holder Brand objects.
 */
export interface ResponseRegisterDataHolderBrandListV2 {
    /**
     * Response data for the query.
     */
    data: RegisterDataHolderBrandV2[];
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Response containing a list of Data Recipients in the CDR Register.
 */
export interface ResponseRegisterDataRecipientList {
    /**
     * Response data for the query.
     */
    data: RegisterDataRecipient[];
    links: Links;
    meta: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Data Recipient Brand Software Products.
 */
export interface SoftwareProductMetaData {
    /**
     * Software product logo URI.
     */
    logoUri: string;
    /**
     * Description of the software product.
     */
    softwareProductDescription: string;
    /**
     * Unique id of the Data Recipient software product issued by the CDR Register.
     */
    softwareProductId: string;
    /**
     * Name of the software product.
     */
    softwareProductName: string;
    /**
     * Software Product status in the CDR Register.
     */
    status: "ACTIVE" | "INACTIVE" | "REMOVED";
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface SoftwareProductsStatusList {
    /**
     * Response data for the query.
     */
    data: SoftwareProductStatus[];
    links: Links;
    meta: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface SoftwareProductStatus {
    /**
     * Unique id of the software product issued by the CDR Register.
     */
    softwareProductId: string;
    /**
     * Software product status in the CDR Register.
     */
    status: "ACTIVE" | "INACTIVE" | "REMOVED";
}
