/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Indicates that the payment is a once off payment on a specific future date. Mandatory if recurrenceUType is set to onceOff
 */
export interface BankingScheduledPaymentRecurrenceOnceOff {
  /**
   * The scheduled date for the once off payment
   */
  paymentDate: string;
  [k: string]: unknown;
}
