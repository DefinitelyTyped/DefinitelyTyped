/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayeePayId {
  /**
   * The name assigned to the PayID by the owner of the PayID
   */
  name?: string | null;
  /**
   * The identifier of the PayID (dependent on type)
   */
  identifier: string;
  /**
   * The type of the PayID
   */
  type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
  [k: string]: unknown;
}
