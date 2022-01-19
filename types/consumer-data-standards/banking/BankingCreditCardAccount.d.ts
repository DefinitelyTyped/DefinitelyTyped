/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingCreditCardAccount {
  /**
   * The minimum payment amount due for the next card payment
   */
  minPaymentAmount: string;
  /**
   * The amount due for the next card payment
   */
  paymentDueAmount: string;
  /**
   * If absent assumes AUD
   */
  paymentCurrency?: string;
  /**
   * Date that the next payment for the card is due
   */
  paymentDueDate: string;
  [k: string]: unknown;
}
