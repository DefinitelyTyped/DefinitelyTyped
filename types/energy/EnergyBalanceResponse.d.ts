/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBalanceResponse {
  data: {
    /**
     * The current balance of the account.  A positive value indicates that amount is owing to be paid.  A negative value indicates that the account is in credit
     */
    balance: string;
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
