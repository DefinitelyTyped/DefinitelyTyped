/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Object containing details of the source of the payment. Currently only specifies an account ID but provided as an object to facilitate future extensibility and consistency with the to object
 */
export interface BankingScheduledPaymentFrom {
  /**
   * ID of the account that is the source of funds for the payment
   */
  accountId: string;
  [k: string]: unknown;
}
