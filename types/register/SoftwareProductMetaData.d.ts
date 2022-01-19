/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

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
