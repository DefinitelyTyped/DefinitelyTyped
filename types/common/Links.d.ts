/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface Links {
  /**
   * Fully qualified link that generated the current response document
   */
  self: string;
  [k: string]: unknown;
}
