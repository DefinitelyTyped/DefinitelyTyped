/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Errors and rejections received by the primary data holder from the secondary data holder.  Mandatory for data holders designated for a secondary responsibility request data cluster
 */
export interface SecondaryHolderMetrics {
  /**
   * Number of calls resulting in error due to server execution over time
   */
  errors: {
    /**
     * Number of errors for current day
     */
    currentDay?: number;
    /**
     * Number of errors for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  /**
   * Number of calls resulting in a rejection due to server execution over time
   */
  rejections: {
    /**
     * Number of rejections for current day
     */
    currentDay?: number;
    /**
     * Number of rejections for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
