/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

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
