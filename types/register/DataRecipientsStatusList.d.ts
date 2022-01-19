/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

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
