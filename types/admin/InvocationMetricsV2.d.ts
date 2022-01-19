/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Number of API calls in each performance tier over time
 */
export interface InvocationMetricsV2 {
  /**
   * API call counts for the unauthenticated tier
   */
  unauthenticated: {
    /**
     * API call counts for current day
     */
    currentDay?: number;
    /**
     * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  /**
   * API call counts for the high priority tier
   */
  highPriority: {
    /**
     * API call counts for current day
     */
    currentDay?: number;
    /**
     * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  /**
   * API call counts for the low priority tier
   */
  lowPriority: {
    /**
     * API call counts for current day
     */
    currentDay?: number;
    /**
     * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  /**
   * API call counts for the unattended tier
   */
  unattended: {
    /**
     * API call counts for current day
     */
    currentDay?: number;
    /**
     * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  /**
   * API call counts for the large payload tier
   */
  largePayload: {
    /**
     * API call counts for current day
     */
    currentDay?: number;
    /**
     * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  /**
   * API call counts for the secondary responsibility requests tier.  Mandatory for data holders designated for a secondary responsibility request data cluster
   */
  secondary?: {
    /**
     * API call counts for current day
     */
    currentDay?: number;
    /**
     * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  /**
   * API call counts for the large secondary responsibility requests tier.  Mandatory for data holders designated for a secondary responsibility request data cluster
   */
  largeSecondary?: {
    /**
     * API call counts for current day
     */
    currentDay?: number;
    /**
     * API call counts for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
