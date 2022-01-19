/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Object containing the detail of the schedule for the payment
 */
export interface BankingScheduledPaymentRecurrence {
  /**
   * The date of the next payment under the recurrence schedule
   */
  nextPaymentDate?: string | null;
  /**
   * The type of recurrence used to define the schedule
   */
  recurrenceUType: "eventBased" | "intervalSchedule" | "lastWeekDay" | "onceOff";
  /**
   * Indicates that the payment is a once off payment on a specific future date. Mandatory if recurrenceUType is set to onceOff
   */
  onceOff?: {
    /**
     * The scheduled date for the once off payment
     */
    paymentDate: string;
    [k: string]: unknown;
  };
  /**
   * Indicates that the schedule of payments is defined by a series of intervals. Mandatory if recurrenceUType is set to intervalSchedule
   */
  intervalSchedule?: {
    /**
     * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
     */
    finalPaymentDate?: string | null;
    /**
     * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely
     */
    paymentsRemaining?: number | null;
    /**
     * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
     */
    nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
    /**
     * An array of interval objects defining the payment schedule.  Each entry in the array is additive, in that it adds payments to the overall payment schedule.  If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry
     */
    intervals: {
      /**
       * An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)  (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
       */
      interval: string;
      /**
       * Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is P1D. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.
       */
      dayInInterval?: string | null;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  /**
   * Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if recurrenceUType is set to lastWeekDay
   */
  lastWeekDay?: {
    /**
     * The limit date after which no more payments should be made using this schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
     */
    finalPaymentDate?: string | null;
    /**
     * Indicates the number of payments remaining in the schedule. If both finalPaymentDate and paymentsRemaining are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely
     */
    paymentsRemaining?: number | null;
    /**
     * The interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with nextPaymentDate
     */
    interval: string;
    /**
     * The weekDay specified. The payment will occur on the last occurrence of this weekday in the interval.
     */
    lastWeekDay: "FRI" | "MON" | "SAT" | "SUN" | "THU" | "TUE" | "WED";
    /**
     * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be ON.<br/>**AFTER** - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<br/>**BEFORE** - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<br/>**ON** - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<br/>**ONLY** - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored
     */
    nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
    [k: string]: unknown;
  };
  /**
   * Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if recurrenceUType is set to eventBased
   */
  eventBased?: {
    /**
     * Description of the event and conditions that will result in the payment. Expected to be formatted for display to a customer
     */
    description: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
