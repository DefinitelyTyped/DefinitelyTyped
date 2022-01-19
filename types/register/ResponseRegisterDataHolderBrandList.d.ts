/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

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
