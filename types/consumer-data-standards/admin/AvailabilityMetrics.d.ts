/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Percentage availability of the CDR platform over time
 */
export interface AvailabilityMetrics {
  /**
   * Percentage availability of the CDR platform so far for the current calendar month. 0.0 means 0%. 1.0 means 100%.
   */
  currentMonth?: number;
  /**
   * Percentage availability of the CDR platform for previous calendar months. The first element indicates the last month and so on. A maximum of twelve entries is required if available. 0.0 means 0%. 1.0 means 100%.
   */
  previousMonths?: number[];
  [k: string]: unknown;
}
