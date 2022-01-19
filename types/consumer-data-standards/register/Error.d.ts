/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface Error {
  /**
   * Error code
   */
  code: string;
  /**
   * Error title
   */
  title: string;
  /**
   * Error detail
   */
  detail: string;
  /**
   * Optional additional data for specific error types
   */
  meta?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
