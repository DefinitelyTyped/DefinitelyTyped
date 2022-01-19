/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if recurrenceUType is set to eventBased
 */
export interface BankingScheduledPaymentRecurrenceEventBased {
  /**
   * Description of the event and conditions that will result in the payment. Expected to be formatted for display to a customer
   */
  description: string;
  [k: string]: unknown;
}
