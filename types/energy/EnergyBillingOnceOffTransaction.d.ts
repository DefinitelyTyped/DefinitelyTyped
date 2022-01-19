/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingOnceOffTransaction {
  /**
   * The ID of the service point to which this transaction applies if any
   */
  servicePointId?: string | null;
  /**
   * The number of the invoice in which this transaction is included if it has been issued
   */
  invoiceNumber?: string | null;
  /**
   * The amount of the charge or credit.  A positive value indicates a charge and a negative value indicates a credit
   */
  amount: string;
  /**
   * A free text description of the item
   */
  description: string;
  [k: string]: unknown;
}
