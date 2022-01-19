/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

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
