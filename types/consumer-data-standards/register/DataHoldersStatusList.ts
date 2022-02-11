/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

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
