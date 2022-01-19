/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyInvoice {
  /**
   * The ID of the account for which the invoice was issued
   */
  accountId: string;
  /**
   * The number assigned to this invoice by the energy Retailer
   */
  invoiceNumber: string;
  /**
   * The date that the invoice was actually issued (as opposed to generated or calculated)
   */
  issueDate: string;
  /**
   * The date that the invoice is due to be paid
   */
  dueDate?: string | null;
  /**
   * Object containing the start and end date for the period covered by the invoice.  Mandatory if any usage or demand based charges are included in the invoice
   */
  period?: {
    /**
     * The start date of the period covered by this invoice
     */
    startDate: string;
    /**
     * The end date of the period covered by this invoice
     */
    endDate: string;
    [k: string]: unknown;
  } | null;
  /**
   * The net amount due for this invoice regardless of previous balance
   */
  invoiceAmount?: string | null;
  /**
   * The total GST amount for this invoice.  If absent then zero is assumed
   */
  gstAmount?: string | null;
  /**
   * A discount for on time payment
   */
  payOnTimeDiscount?: {
    /**
     * The amount that will be discounted if the invoice is paid by the date specified
     */
    discountAmount: string;
    /**
     * The GST amount that will be discounted if the invoice is paid by the date specified.  If absent then zero is assumed
     */
    gstAmount?: string | null;
    /**
     * The date by which the invoice must be paid to receive the pay on time discount
     */
    date: string;
    [k: string]: unknown;
  } | null;
  /**
   * The account balance at the time the invoice was issued
   */
  balanceAtIssue: string | null;
  /**
   * Array of service point IDs to which this invoice applies. May be empty if the invoice contains no electricity usage related charges
   */
  servicePoints: string[] | null;
  /**
   * Object containing charges and credits related to gas usage
   */
  gas?: {
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
  } | null;
  /**
   * Object containing charges and credits related to electricity usage
   */
  electricity?: {
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
  } | null;
  /**
   * Object contain charges and credits related to electricity usage
   */
  accountCharges?: {
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
  } | null;
  /**
   * Indicator of the payment status for the invoice
   */
  paymentStatus: "PAID" | "PARTIALLY_PAID" | "NOT_PAID";
  [k: string]: unknown;
}
