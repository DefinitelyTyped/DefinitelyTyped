/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayeeCard {
  /**
   * Name of the account to pay to
   */
  cardNumber: string;
  [k: string]: unknown;
}
