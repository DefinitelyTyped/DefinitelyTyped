/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyInvoiceGasUsageCharges {
  /**
   * The aggregate total of usage charges for the period covered by the invoice (exclusive of GST)
   */
  totalUsageCharges: string;
  /**
   * The aggregate total of generation credits for the period covered by the invoice (exclusive of GST)
   */
  totalGenerationCredits: string;
  /**
   * The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice (exclusive of GST)
   */
  totalOnceOffCharges: string;
  /**
   * The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice (exclusive of GST)
   */
  totalOnceOffDiscounts: string;
  /**
   * Optional array of charges that may be part of the invoice (for e.g. environmental charges for C&I consumers) (exclusive of GST)
   */
  otherCharges?:
    | {
        /**
         * Type of charge. Assumed to be other if absent
         */
        type?: ("ENVIRONMENTAL" | "REGULATED" | "NETWORK" | "METERING" | "RETAIL_SERVICE" | "RCTI" | "OTHER") | null;
        /**
         * The aggregate total of charges for this item (exclusive of GST)
         */
        amount: string;
        /**
         * A free text description of the type of charge
         */
        description: string;
        [k: string]: unknown;
      }[]
    | null;
  /**
   * The total GST for all electricity usage charges.  If absent then zero is assumed
   */
  totalGst?: string | null;
  [k: string]: unknown;
}
