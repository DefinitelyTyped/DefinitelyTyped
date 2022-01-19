/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface DataRecipientStatus {
  /**
   * Unique id of the Data Recipient Legal Entity issued by the CDR Register
   */
  legalEntityId: string;
  /**
   * Data Recipient status in the CDR Register
   */
  status: "ACTIVE" | "SUSPENDED" | "REVOKED" | "SURRENDERED";
  [k: string]: unknown;
}
