/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Number of calls rejected due to traffic thresholds over time
 */
export interface RejectionMetricsV2 {
  /**
   * Rejection counts for all authenticated end points
   */
  authenticated: {
    /**
     * Number of calls rejected for current day
     */
    currentDay?: number;
    /**
     * Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  /**
   * Rejection counts for all unauthenticated end points
   */
  unauthenticated: {
    /**
     * Number of calls rejected for current day
     */
    currentDay?: number;
    /**
     * Number of calls rejected for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
