/* tslint:disable: array-type max-line-length no-trailing-whitespace */
export interface DataHoldersStatusList {
    /**
     * Response data for the query
     */
    data: {
      /**
       * Unique id of the Data Holder Legal Entity issued by the CDR Register.
       */
      legalEntityId: string;
      /**
       * Data Holder status in the CDR Register
       */
      status: "ACTIVE" | "REMOVED";
      [k: string]: unknown;
    }[];
    links: {
      /**
       * Fully qualified link to this API call
       */
      self: string;
      [k: string]: unknown;
    };
    meta: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
export interface DataHolderStatus {
/**
 * Unique id of the Data Holder Legal Entity issued by the CDR Register.
 */
legalEntityId: string;
/**
 * Data Holder status in the CDR Register
 */
status: "ACTIVE" | "REMOVED";
[k: string]: unknown;
}
/**
 * Metadata related to Data Recipient Brand
 */
 export interface DataRecipientBrandMetaData {
    /**
     * Unique id of the Data Recipient brand issued by the CDR Register
     */
    dataRecipientBrandId: string;
    /**
     * Data Recipient Brand name
     */
    brandName: string;
    /**
     * Data Recipient Brand logo URI
     */
    logoUri: string;
    softwareProducts?: {
      /**
       * Unique id of the Data Recipient software product issued by the CDR Register
       */
      softwareProductId: string;
      /**
       * Name of the software product
       */
      softwareProductName: string;
      /**
       * Description of the software product
       */
      softwareProductDescription?: string;
      /**
       * Software product logo URI
       */
      logoUri: string;
      /**
       * Software Product status in the CDR Register
       */
      status: "ACTIVE" | "INACTIVE" | "REMOVED";
      [k: string]: unknown;
    }[];
    /**
     * Data Recipient Brand status in the CDR Register
     */
    status: "ACTIVE" | "INACTIVE" | "REMOVED";
    [k: string]: unknown;
  }
  export interface DataRecipientsStatusList {
    /**
     * Response data for the query
     */
    data: {
      /**
       * Unique id of the Data Recipient Legal Entity issued by the CDR Register
       */
      legalEntityId: string;
      /**
       * Data Recipient status in the CDR Register
       */
      status: "ACTIVE" | "SUSPENDED" | "REVOKED" | "SURRENDERED";
      [k: string]: unknown;
    }[];
    links: {
      /**
       * Fully qualified link to this API call
       */
      self: string;
      [k: string]: unknown;
    };
    meta: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  export interface DataRecipientStatus {
    /**
     * Unique id of the Data Recipient Legal Entity issued by the CDR Register
     */
    legalEntityId: string;
    /**
     * Data Recipient status in the CDR Register
     */
    status: "ACTIVE" | "SUSPENDED" | "REVOKED" | "SURRENDERED";
    [k: string]: unknown;
  }
  export interface Error {
    /**
     * Error code
     */
    code: string;
    /**
     * Error title
     */
    title: string;
    /**
     * Error detail
     */
    detail: string;
    /**
     * Optional additional data for specific error types
     */
    meta?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
/**
 * Object representing a JSON Web Key
 */
 export interface JWK {
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
  }
/**
 * The data that is common to all organisations, regardless of the type (e.g. company, trust, partnership, government)
 */
 export interface LegalEntityDetail {
    /**
     * Unique id of the organisation issued by the CDR Register
     */
    legalEntityId: string;
    /**
     * Unique legal name of the organisation
     */
    legalEntityName: string;
    /**
     * Legal Entity logo URI
     */
    logoUri: string;
    /**
     * Unique registration number (if the company is registered outside Australia)
     */
    registrationNumber?: string;
    /**
     * Date of registration (if the company is registered outside Australia)
     */
    registrationDate?: string;
    /**
     * Country of registeration (if the company is registered outside Australia)
     */
    registeredCountry?: string;
    /**
     * Australian Business Number for the organisation
     */
    abn?: string;
    /**
     * Australian Company Number for the organisation
     */
    acn?: string;
    /**
     * Australian Registered Body Number.  ARBNs are issued to registrable Australian bodies and foreign companies
     */
    arbn?: string;
    /**
     * ANZSIC division of the organisation. [ANZSIC (2006)](http://www.abs.gov.au/anzsic)
     */
    anzsicDivision?: string;
    /**
     * Legal organisation type
     */
    organisationType?: "SOLE_TRADER" | "COMPANY" | "PARTNERSHIP" | "TRUST" | "GOVERNMENT_ENTITY" | "OTHER";
    status: "ACTIVE" | "REMOVED";
    [k: string]: unknown;
  }
  export interface Links {
    /**
     * Fully qualified link to this API call
     */
    self: string;
    [k: string]: unknown;
  }

  export interface LinksPaginated {
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string;
    /**
     * Fully qualified link to this API call
     */
    self: string;
    [k: string]: unknown;
  }
  export interface Meta {
    [k: string]: unknown;
  }
/**
 * Additional data for customised error codes
 */
 export interface MetaError {
    /**
     * The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.
     */
    urn?: string;
    [k: string]: unknown;
  }
  export interface MetaPaginated {
    /**
     * The total number of pages in the full set
     */
    totalPages: number;
    /**
     * The total number of records in the full set
     */
    totalRecords: number;
    [k: string]: unknown;
  }
  
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

  export interface RegisterDataHolderBrand {
    /**
     * Unique id of the Data Holder Brand issued by the CDR Register
     */
    dataHolderBrandId: string;
    /**
     * The name of Data Holder Brand
     */
    brandName: string;
    /**
     * The industries the Data Holder Brand belongs to. Please note that the CDR Register entity model is constrained to one industry per brand which is planned to be relaxed in the future.
     */
    industries: ("banking" | "energy" | "telco")[];
    /**
     * Brand logo URI
     */
    logoUri: string;
    /**
     * The data that is common to all organisations, regardless of the type (e.g. company, trust, partnership, government)
     */
    legalEntity: {
      /**
       * Unique id of the organisation issued by the CDR Register
       */
      legalEntityId: string;
      /**
       * Unique legal name of the organisation
       */
      legalEntityName: string;
      /**
       * Legal Entity logo URI
       */
      logoUri: string;
      /**
       * Unique registration number (if the company is registered outside Australia)
       */
      registrationNumber?: string;
      /**
       * Date of registration (if the company is registered outside Australia)
       */
      registrationDate?: string;
      /**
       * Country of registeration (if the company is registered outside Australia)
       */
      registeredCountry?: string;
      /**
       * Australian Business Number for the organisation
       */
      abn?: string;
      /**
       * Australian Company Number for the organisation
       */
      acn?: string;
      /**
       * Australian Registered Body Number.  ARBNs are issued to registrable Australian bodies and foreign companies
       */
      arbn?: string;
      /**
       * ANZSIC division of the organisation. [ANZSIC (2006)](http://www.abs.gov.au/anzsic)
       */
      anzsicDivision?: string;
      /**
       * Legal organisation type
       */
      organisationType?: "SOLE_TRADER" | "COMPANY" | "PARTNERSHIP" | "TRUST" | "GOVERNMENT_ENTITY" | "OTHER";
      status: "ACTIVE" | "REMOVED";
      [k: string]: unknown;
    };
    status: "ACTIVE" | "INACTIVE" | "REMOVED";
    /**
     * Endpoints related to Data Holder Brand services
     */
    endpointDetail: {
      /**
       * The major version of the high level standards. This is not the version of the endpoint or the payload being requested but the version of the overall standards being applied. This version number will be "v" followed by the major version of the standards as a positive integer (e.g. v1, v12 or v76)
       */
      version: string;
      /**
       * Base URI for the Data Holder's Consumer Data Standard public endpoints
       */
      publicBaseUri: string;
      /**
       * Base URI for the Data Holder's Consumer Data Standard resource endpoints
       */
      resourceBaseUri: string;
      /**
       * Base URI for the Data Holder's Consumer Data Standard information security endpoints
       */
      infosecBaseUri: string;
      /**
       * Base URI for the Data Holder extension endpoints to the Consumer Data Standard (optional)
       */
      extensionBaseUri?: string;
      /**
       * Publicly available website or web resource URI
       */
      websiteUri: string;
      [k: string]: unknown;
    };
    authDetails: {
      /**
       * The type of authentication and authorisation mechanism in use
       */
      registerUType: "SIGNED-JWT";
      /**
       * JWKS endpoint for private_key_jwt client authentication with Data Recipient
       */
      jwksEndpoint: string;
      [k: string]: unknown;
    }[];
    /**
     * The date/time that the Data Holder Brand data was last updated in the Register
     */
    lastUpdated: string;
    [k: string]: unknown;
  }

/**
 * Endpoints related to Data Holder Brand services
 */
 export interface RegisterDataHolderBrandServiceEndpoint {
    /**
     * The major version of the high level standards. This is not the version of the endpoint or the payload being requested but the version of the overall standards being applied. This version number will be "v" followed by the major version of the standards as a positive integer (e.g. v1, v12 or v76)
     */
    version: string;
    /**
     * Base URI for the Data Holder's Consumer Data Standard public endpoints
     */
    publicBaseUri: string;
    /**
     * Base URI for the Data Holder's Consumer Data Standard resource endpoints
     */
    resourceBaseUri: string;
    /**
     * Base URI for the Data Holder's Consumer Data Standard information security endpoints
     */
    infosecBaseUri: string;
    /**
     * Base URI for the Data Holder extension endpoints to the Consumer Data Standard (optional)
     */
    extensionBaseUri?: string;
    /**
     * Publicly available website or web resource URI
     */
    websiteUri: string;
    [k: string]: unknown;
  }
  export interface RegisterDataRecipient {
    /**
     * Unique id of the Data Recipient Legal Entity issued by the CDR Register.
     */
    legalEntityId: string;
    /**
     * Legal name of the Data Recipient
     */
    legalEntityName: string;
    /**
     * CDR Register issued human readable unique number given to Data Recipients upon accreditation
     */
    accreditationNumber: string;
    /**
     * Accreditation level of the Data Recipient in the CDR Register
     */
    accreditationLevel: "UNRESTRICTED" | "SPONSORED";
    /**
     * Legal Entity logo URI
     */
    logoUri: string;
    dataRecipientBrands?: {
      /**
       * Unique id of the Data Recipient brand issued by the CDR Register
       */
      dataRecipientBrandId: string;
      /**
       * Data Recipient Brand name
       */
      brandName: string;
      /**
       * Data Recipient Brand logo URI
       */
      logoUri: string;
      softwareProducts?: {
        /**
         * Unique id of the Data Recipient software product issued by the CDR Register
         */
        softwareProductId: string;
        /**
         * Name of the software product
         */
        softwareProductName: string;
        /**
         * Description of the software product
         */
        softwareProductDescription?: string;
        /**
         * Software product logo URI
         */
        logoUri: string;
        /**
         * Software Product status in the CDR Register
         */
        status: "ACTIVE" | "INACTIVE" | "REMOVED";
        [k: string]: unknown;
      }[];
      /**
       * Data Recipient Brand status in the CDR Register
       */
      status: "ACTIVE" | "INACTIVE" | "REMOVED";
      [k: string]: unknown;
    }[];
    /**
     * Data Recipient status in the CDR Register
     */
    status: "ACTIVE" | "SUSPENDED" | "REVOKED" | "SURRENDERED";
    /**
     * The date/time that the Legal Entity was last updated in the CDR Register
     */
    lastUpdated: string;
    [k: string]: unknown;
  }
  export interface ResponseErrorList {
    errors: {
      /**
       * Error code
       */
      code: string;
      /**
       * Error title
       */
      title: string;
      /**
       * Error detail
       */
      detail: string;
      /**
       * Optional additional data for specific error types
       */
      meta?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  }
  export interface ResponseErrorListV2Errors {
    /**
     * The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.
     */
    code: string;
    /**
     * A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.
     */
    title: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     */
    detail: string;
    /**
     * Additional data for customised error codes
     */
    meta?: {
      /**
       * The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.
       */
      urn?: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  export interface ResponseErrorListV2 {
    errors: {
      /**
       * The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.
       */
      code: string;
      /**
       * A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.
       */
      title: string;
      /**
       * A human-readable explanation specific to this occurrence of the problem.
       */
      detail: string;
      /**
       * Additional data for customised error codes
       */
      meta?: {
        /**
         * The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.
         */
        urn?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  }

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
/**
 * Response containing a list of CDR Register Data Holder Brand objects
 */
 export interface ResponseRegisterDataHolderBrandList {
    /**
     * Response data for the query
     */
    data: {
      /**
       * Unique id of the Data Holder Brand issued by the CDR Register
       */
      dataHolderBrandId: string;
      /**
       * The name of Data Holder Brand
       */
      brandName: string;
      /**
       * The industries the Data Holder Brand belongs to. Please note that the CDR Register entity model is constrained to one industry per brand which is planned to be relaxed in the future.
       */
      industries: ("banking" | "energy" | "telco")[];
      /**
       * Brand logo URI
       */
      logoUri: string;
      /**
       * The data that is common to all organisations, regardless of the type (e.g. company, trust, partnership, government)
       */
      legalEntity: {
        /**
         * Unique id of the organisation issued by the CDR Register
         */
        legalEntityId: string;
        /**
         * Unique legal name of the organisation
         */
        legalEntityName: string;
        /**
         * Legal Entity logo URI
         */
        logoUri: string;
        /**
         * Unique registration number (if the company is registered outside Australia)
         */
        registrationNumber?: string;
        /**
         * Date of registration (if the company is registered outside Australia)
         */
        registrationDate?: string;
        /**
         * Country of registeration (if the company is registered outside Australia)
         */
        registeredCountry?: string;
        /**
         * Australian Business Number for the organisation
         */
        abn?: string;
        /**
         * Australian Company Number for the organisation
         */
        acn?: string;
        /**
         * Australian Registered Body Number.  ARBNs are issued to registrable Australian bodies and foreign companies
         */
        arbn?: string;
        /**
         * ANZSIC division of the organisation. [ANZSIC (2006)](http://www.abs.gov.au/anzsic)
         */
        anzsicDivision?: string;
        /**
         * Legal organisation type
         */
        organisationType?: "SOLE_TRADER" | "COMPANY" | "PARTNERSHIP" | "TRUST" | "GOVERNMENT_ENTITY" | "OTHER";
        status: "ACTIVE" | "REMOVED";
        [k: string]: unknown;
      };
      status: "ACTIVE" | "INACTIVE" | "REMOVED";
      /**
       * Endpoints related to Data Holder Brand services
       */
      endpointDetail: {
        /**
         * The major version of the high level standards. This is not the version of the endpoint or the payload being requested but the version of the overall standards being applied. This version number will be "v" followed by the major version of the standards as a positive integer (e.g. v1, v12 or v76)
         */
        version: string;
        /**
         * Base URI for the Data Holder's Consumer Data Standard public endpoints
         */
        publicBaseUri: string;
        /**
         * Base URI for the Data Holder's Consumer Data Standard resource endpoints
         */
        resourceBaseUri: string;
        /**
         * Base URI for the Data Holder's Consumer Data Standard information security endpoints
         */
        infosecBaseUri: string;
        /**
         * Base URI for the Data Holder extension endpoints to the Consumer Data Standard (optional)
         */
        extensionBaseUri?: string;
        /**
         * Publicly available website or web resource URI
         */
        websiteUri: string;
        [k: string]: unknown;
      };
      authDetails: {
        /**
         * The type of authentication and authorisation mechanism in use
         */
        registerUType: "SIGNED-JWT";
        /**
         * JWKS endpoint for private_key_jwt client authentication with Data Recipient
         */
        jwksEndpoint: string;
        [k: string]: unknown;
      }[];
      /**
       * The date/time that the Data Holder Brand data was last updated in the Register
       */
      lastUpdated: string;
      [k: string]: unknown;
    }[];
    links: {
      /**
       * URI to the first page of this set. Mandatory if this response is not the first page
       */
      first?: string;
      /**
       * URI to the last page of this set. Mandatory if this response is not the last page
       */
      last?: string;
      /**
       * URI to the next page of this set. Mandatory if this response is not the last page
       */
      next?: string;
      /**
       * URI to the previous page of this set. Mandatory if this response is not the first page
       */
      prev?: string;
      /**
       * Fully qualified link to this API call
       */
      self: string;
      [k: string]: unknown;
    };
    meta: {
      /**
       * The total number of pages in the full set
       */
      totalPages: number;
      /**
       * The total number of records in the full set
       */
      totalRecords: number;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
/**
 * Response containing a list of Data Recipients in the CDR Register
 */
export interface ResponseRegisterDataRecipientList {
    /**
     * Response data for the query
     */
    data: {
      /**
       * Unique id of the Data Recipient Legal Entity issued by the CDR Register.
       */
      legalEntityId: string;
      /**
       * Legal name of the Data Recipient
       */
      legalEntityName: string;
      /**
       * CDR Register issued human readable unique number given to Data Recipients upon accreditation
       */
      accreditationNumber: string;
      /**
       * Accreditation level of the Data Recipient in the CDR Register
       */
      accreditationLevel: "UNRESTRICTED" | "SPONSORED";
      /**
       * Legal Entity logo URI
       */
      logoUri: string;
      dataRecipientBrands?: {
        /**
         * Unique id of the Data Recipient brand issued by the CDR Register
         */
        dataRecipientBrandId: string;
        /**
         * Data Recipient Brand name
         */
        brandName: string;
        /**
         * Data Recipient Brand logo URI
         */
        logoUri: string;
        softwareProducts?: {
          /**
           * Unique id of the Data Recipient software product issued by the CDR Register
           */
          softwareProductId: string;
          /**
           * Name of the software product
           */
          softwareProductName: string;
          /**
           * Description of the software product
           */
          softwareProductDescription?: string;
          /**
           * Software product logo URI
           */
          logoUri: string;
          /**
           * Software Product status in the CDR Register
           */
          status: "ACTIVE" | "INACTIVE" | "REMOVED";
          [k: string]: unknown;
        }[];
        /**
         * Data Recipient Brand status in the CDR Register
         */
        status: "ACTIVE" | "INACTIVE" | "REMOVED";
        [k: string]: unknown;
      }[];
      /**
       * Data Recipient status in the CDR Register
       */
      status: "ACTIVE" | "SUSPENDED" | "REVOKED" | "SURRENDERED";
      /**
       * The date/time that the Legal Entity was last updated in the CDR Register
       */
      lastUpdated: string;
      [k: string]: unknown;
    }[];
    links: {
      /**
       * Fully qualified link to this API call
       */
      self: string;
      [k: string]: unknown;
    };
    meta: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
/**
 * Data Recipient Brand Software Products
 */
 export interface SoftwareProductMetaData {
    /**
     * Unique id of the Data Recipient software product issued by the CDR Register
     */
    softwareProductId: string;
    /**
     * Name of the software product
     */
    softwareProductName: string;
    /**
     * Description of the software product
     */
    softwareProductDescription?: string;
    /**
     * Software product logo URI
     */
    logoUri: string;
    /**
     * Software Product status in the CDR Register
     */
    status: "ACTIVE" | "INACTIVE" | "REMOVED";
    [k: string]: unknown;
  }

  export interface SoftwareProductsStatusList {
    /**
     * Response data for the query
     */
    data: {
      /**
       * Unique id of the software product issued by the CDR Register
       */
      softwareProductId: string;
      /**
       * Software product status in the CDR Register
       */
      status: "ACTIVE" | "INACTIVE" | "REMOVED";
      [k: string]: unknown;
    }[];
    links: {
      /**
       * Fully qualified link to this API call
       */
      self: string;
      [k: string]: unknown;
    };
    meta: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  export interface SoftwareProductStatus {
    /**
     * Unique id of the software product issued by the CDR Register
     */
    softwareProductId: string;
    /**
     * Software product status in the CDR Register
     */
    status: "ACTIVE" | "INACTIVE" | "REMOVED";
    [k: string]: unknown;
  }
