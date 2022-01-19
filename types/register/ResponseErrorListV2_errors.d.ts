/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

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
