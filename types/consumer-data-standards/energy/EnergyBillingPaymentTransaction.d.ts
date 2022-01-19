/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingPaymentTransaction {
  /**
   * The amount paid
   */
  amount: string;
  /**
   * The method of payment
   */
  method: "DIRECT_DEBIT" | "CARD" | "TRANSFER" | "BPAY" | "CASH" | "CHEQUE" | "OTHER";
  [k: string]: unknown;
}
