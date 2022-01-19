/* These are the schema definitions stipulated by the Data Standards Body for the admin api. */

/**
 * Session counts over time. Note that a session is defined as the provisioning of an Access Token.
 */
export interface SessionCountMetrics {
  /**
   * Session count for current day
   */
  currentDay?: number;
  /**
   * Session count for previous days. The first element indicates yesterday and so on. A maximum of seven entries is required if available
   */
  previousDays?: number[];
  [k: string]: unknown;
}
