/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingBalance {
  /**
   * A unique ID of the account adhering to the standards for ID permanence
   */
  accountId: string;
  /**
   * The balance of the account at this time. Should align to the balance available via other channels such as Internet Banking. Assumed to be negative if the customer has money owing
   */
  currentBalance: string;
  /**
   * Balance representing the amount of funds available for transfer. Assumed to be zero or positive
   */
  availableBalance: string;
  /**
   * Object representing the maximum amount of credit that is available for this account.
   * Assumed to be zero if absent
   */
  creditLimit?: string | null;
  /**
   * Object representing the available limit amortised according to payment schedule.
   * Assumed to be zero if absent
   */
  amortisedLimit?: string | null;
  /**
   * The currency for the balance amounts. If absent assumed to be AUD
   */
  currency?: string | null;
  /**
   * Optional array of balances for the account in other currencies.
   * Included to support accounts that support multi-currency purses such as Travel Cards
   */
  purses?:
    | {
        /**
         * The balance available for this additional currency purse
         */
        amount: string;
        /**
         * The currency for the purse
         */
        currency?: string | null;
        [k: string]: unknown;
      }[]
    | null;
  [k: string]: unknown;
}
