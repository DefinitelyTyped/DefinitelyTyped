/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDirectDebit {
  /**
   * A unique ID of the account adhering to the standards for ID permanence.
   */
  accountId: string;
  authorisedEntity: {
    /**
     * Description of the authorised entity derived from previously executed direct debits
     */
    description?: string | null;
    /**
     * Name of the financial institution through which the direct debit will be executed. Is required unless the payment is made via a credit card scheme
     */
    financialInstitution?: string | null;
    /**
     * Australian Business Number for the authorised entity
     */
    abn?: string | null;
    /**
     * Australian Company Number for the authorised entity
     */
    acn?: string | null;
    /**
     * Australian Registered Body Number for the authorised entity
     */
    arbn?: string | null;
    [k: string]: unknown;
  };
  /**
   * The date and time of the last debit executed under this authorisation
   */
  lastDebitDateTime?: string;
  /**
   * The amount of the last debit executed under this authorisation
   */
  lastDebitAmount?: string;
  [k: string]: unknown;
}
