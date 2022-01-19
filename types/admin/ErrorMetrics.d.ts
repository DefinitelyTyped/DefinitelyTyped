/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Number of calls resulting in error due to server execution over time
 */
export interface ErrorMetrics {
  /**
   * Number of errors for current day
   */
  currentDay?: number;
  /**
   * Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
   */
  previousDays?: number[];
  [k: string]: unknown;
}
