/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if recurrenceUType is set to lastWeekDay
 */
export interface BankingScheduledPaymentRecurrenceLastWeekday {
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
}
