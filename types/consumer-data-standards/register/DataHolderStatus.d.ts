/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface DataHolderStatus {
  /**
   * Unique id of the Data Holder Legal Entity issued by the CDR Register.
   */
  legalEntityId: string;
  /**
   * Data Holder status in the CDR Register
   */
  status: "ACTIVE" | "REMOVED";
  [k: string]: unknown;
}
