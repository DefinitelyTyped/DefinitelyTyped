/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Transactions per second over time
 */
export interface AverageTPSMetrics {
  /**
   * Average TPS for current day
   */
  currentDay?: number;
  /**
   * Average TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
   */
  previousDays?: number[];
  [k: string]: unknown;
}
