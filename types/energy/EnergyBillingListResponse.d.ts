/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingListResponse {
  data: {
    /**
     * Array of transactions sorted by date and time in descending order
     */
    transactions: {
      /**
       * The ID of the account for which transaction applies
       */
      accountId: string;
      /**
       * The date and time that the transaction occurred
       */
      executionDateTime: string;
      /**
       * The GST incurred in the transaction.  Should not be included for credits or payments.  If absent zero is assumed
       */
      gst?: string | null;
      /**
       * Indicator of the type of transaction object present in this record
       */
      transactionUType: "usage" | "demand" | "onceOff" | "otherCharges" | "payment";
      /**
       * Represents a usage charge or generation credit.  Mandatory if transactionUType is equal to usage
       */
      usage?: {
        /**
         * The ID of the service point to which this transaction applies if any
         */
        servicePointId?: string | null;
        /**
         * The number of the invoice in which this transaction is included if it has been issued
         */
        invoiceNumber?: string | null;
        /**
         * The time of use type that the transaction applies to
         */
        timeOfUseType:
          | "PEAK"
          | "OFF_PEAK"
          | "OFF_PEAK_DEMAND_CHARGE"
          | "SHOULDER"
          | "SHOULDER1"
          | "SHOULDER2"
          | "CONTROLLED_LOAD"
          | "SOLAR"
          | "AGGREGATE";
        /**
         * Optional description of the transaction that can be used for display purposes
         */
        description?: string | null;
        /**
         * Flag indicating if the usage is estimated or actual.  True indicates estimate.  False or absent indicates actual
         */
        isEstimate?: boolean | null;
        /**
         * Date and time when the usage period starts
         */
        startDate: string;
        /**
         * Date and time when the usage period ends
         */
        endDate: string;
        /**
         * The measurement unit of rate. Assumed to be KWH if absent
         */
        measureUnit?: ("KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH") | null;
        /**
         * The usage for the period in measure unit.  A negative value indicates power generated
         */
        usage: number;
        /**
         * The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit
         */
        amount: string;
        /**
         * Additional calculation factors that inform the transaction
         */
        calculationFactors?:
          | {
              /**
               * The value of the calculation factor
               */
              value: number;
              /**
               * The type of the calculation factor
               */
              type: "DLF" | "MLF";
              [k: string]: unknown;
            }[]
          | null;
        /**
         * Optional array of adjustments arising for this transaction
         */
        adjustments?:
          | {
              /**
               * The amount of the adjustment
               */
              amount: string;
              /**
               * A free text description of the adjustment
               */
              description: string;
              [k: string]: unknown;
            }[]
          | null;
        [k: string]: unknown;
      } | null;
      /**
       * Represents a demand charge or generation credit.  Mandatory if transactionUType is equal to demand
       */
      demand?: {
        /**
         * The ID of the service point to which this transaction applies if any
         */
        servicePointId?: string | null;
        /**
         * The number of the invoice in which this transaction is included if it has been issued
         */
        invoiceNumber?: string | null;
        /**
         * The time of use type that the transaction applies to
         */
        timeOfUseType:
          | "PEAK"
          | "OFF_PEAK"
          | "OFF_PEAK_DEMAND_CHARGE"
          | "SHOULDER"
          | "SHOULDER1"
          | "SHOULDER2"
          | "CONTROLLED_LOAD"
          | "SOLAR"
          | "AGGREGATE";
        /**
         * Optional description of the transaction that can be used for display purposes
         */
        description?: string | null;
        /**
         * Flag indicating if the usage is estimated or actual.  True indicates estimate.  False or absent indicates actual
         */
        isEstimate?: boolean | null;
        /**
         * Date and time when the demand period starts
         */
        startDate: string;
        /**
         * Date and time when the demand period ends
         */
        endDate: string;
        /**
         * The rate for the demand charge in kVA.  A negative value indicates power generated
         */
        rate: number;
        /**
         * The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit
         */
        amount: string;
        /**
         * Additional calculation factors that inform the transaction
         */
        calculationFactors?:
          | {
              /**
               * The value of the calculation factor
               */
              value: number;
              /**
               * The type of the calculation factor
               */
              type: "DLF" | "MLF";
              [k: string]: unknown;
            }[]
          | null;
        /**
         * Optional array of adjustments arising for this transaction
         */
        adjustments?:
          | {
              /**
               * The amount of the adjustment
               */
              amount: string;
              /**
               * A free text description of the adjustment
               */
              description: string;
              [k: string]: unknown;
            }[]
          | null;
        [k: string]: unknown;
      } | null;
      /**
       * Represents a once off charge or credit.  Mandatory if transactionUType is equal to onceOff
       */
      onceOff?: {
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
      } | null;
      /**
       * Represents charge other than usage and once off.  Mandatory if transactionUType is equal to otherCharge
       */
      otherCharges?: {
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
      } | null;
      /**
       * Represents a payment to the account.  Mandatory if transactionUType is equal to payment
       */
      payment?: {
        /**
         * The amount paid
         */
        amount: string;
        /**
         * The method of payment
         */
        method: "DIRECT_DEBIT" | "CARD" | "TRANSFER" | "BPAY" | "CASH" | "CHEQUE" | "OTHER";
        [k: string]: unknown;
      } | null;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
