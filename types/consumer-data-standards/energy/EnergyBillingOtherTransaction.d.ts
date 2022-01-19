/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingOtherTransaction {
  /**
   * The ID of the service point to which this transaction applies if any
   */
  servicePointId?: string;
  /**
   * The number of the invoice in which this transaction is included if it has been issued
   */
  invoiceNumber?: string | null;
  /**
   * Optional start date for the application of the charge
   */
  startDate?: string;
  /**
   * Optional end date for the application of the charge
   */
  endDate?: string;
  /**
   * Type of charge. Assumed to be other if absent
   */
  type?: "ENVIRONMENTAL" | "REGULATED" | "NETWORK" | "METERING" | "RETAIL_SERVICE" | "RCTI" | "OTHER";
  /**
   * The amount of the charge
   */
  amount: string;
  /**
   * A free text description of the item
   */
  description: string;
  [k: string]: unknown;
}
