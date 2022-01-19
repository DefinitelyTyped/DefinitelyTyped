/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

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
