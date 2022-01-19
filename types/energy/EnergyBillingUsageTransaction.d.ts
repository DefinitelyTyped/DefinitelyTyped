/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingUsageTransaction {
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
}
