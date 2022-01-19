/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Percentage of calls within the performance thresholds
 */
export interface PerformanceMetrics {
  /**
   * Percentage of calls within the performance threshold for the current day. 0.0 means 0%. 1.0 means 100%
   */
  currentDay?: number;
  /**
   * Percentage of calls within the performance threshold for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available. 0.0 means 0%. 1.0 means 100%
   */
  previousDays?: number[];
  [k: string]: unknown;
}
