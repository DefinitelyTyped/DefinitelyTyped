/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Maximum record transactions per second over time
 */
export interface PeakTPSMetrics {
  /**
   * Peak TPS for current day
   */
  currentDay?: number;
  /**
   * Peak TPS for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
   */
  previousDays?: number[];
  [k: string]: unknown;
}
