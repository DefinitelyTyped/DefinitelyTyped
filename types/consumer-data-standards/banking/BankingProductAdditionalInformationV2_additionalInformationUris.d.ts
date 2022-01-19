/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductAdditionalInformationV2AdditionalInformationUris {
  /**
   * Display text providing more information about the document URI
   */
  description?: string | null;
  /**
   * The URI describing the additional information
   */
  additionalInfoUri: string;
  [k: string]: unknown;
}
