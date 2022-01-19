/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Average response time in seconds, at millisecond resolution, within each performance tier
 */
export interface AverageResponseMetricsV2 {
  /**
   * Average response time for the unauthenticated tier
   */
  unauthenticated: {
    /**
     * Average response time for current day
     */
    currentDay?: number;
    /**
     * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  /**
   * Average response time for the high priority tier
   */
  highPriority: {
    /**
     * Average response time for current day
     */
    currentDay?: number;
    /**
     * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  /**
   * Average response time for the low priority tier
   */
  lowPriority: {
    /**
     * Average response time for current day
     */
    currentDay?: number;
    /**
     * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  /**
   * Average response time for the unattended tier
   */
  unattended: {
    /**
     * Average response time for current day
     */
    currentDay?: number;
    /**
     * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  /**
   * Average response time for the large payload tier
   */
  largePayload: {
    /**
     * Average response time for current day
     */
    currentDay?: number;
    /**
     * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
     */
    previousDays?: number[];
    [k: string]: unknown;
  };
  /**
   * Average response time for the secondary tier.  Mandatory for data holders designated for a secondary responsibility request data cluster
   */
  secondary?: {
    /**
     * Average response time as measured for the primary data holder
     */
    primary: {
      /**
       * Average response time for current day
       */
      currentDay?: number;
      /**
       * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * Average response time as measured for the secondary data holder
     */
    secondary: {
      /**
       * Average response time for current day
       */
      currentDay?: number;
      /**
       * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * Average response time for the large payload tier.  Mandatory for data holders designated for a secondary responsibility request data cluster
   */
  largeSecondary?: {
    /**
     * Average response time as measured for the primary data holder
     */
    primary: {
      /**
       * Average response time for current day
       */
      currentDay?: number;
      /**
       * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    /**
     * Average response time as measured for the secondary data holder
     */
    secondary: {
      /**
       * Average response time for current day
       */
      currentDay?: number;
      /**
       * Average response time for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available.
       */
      previousDays?: number[];
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
