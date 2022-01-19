/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

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
