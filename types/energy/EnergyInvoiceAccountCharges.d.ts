/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Object contain charges and credits related to electricity usage
 */
export interface EnergyInvoiceAccountCharges {
  /**
   * The aggregate total of account level charges for the period covered by the invoice
   */
  totalCharges: string;
  /**
   * The aggregate total of account level discounts or credits for the period covered by the invoice
   */
  totalDiscounts: string;
  /**
   * The total GST for all account level charges.  If absent then zero is assumed
   */
  totalGst?: string | null;
  [k: string]: unknown;
}
