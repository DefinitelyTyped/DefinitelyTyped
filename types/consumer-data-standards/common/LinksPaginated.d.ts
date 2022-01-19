/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface LinksPaginated {
  /**
   * Fully qualified link that generated the current response document
   */
  self: string;
  /**
   * URI to the first page of this set. Mandatory if this response is not the first page
   */
  first?: string | null;
  /**
   * URI to the previous page of this set. Mandatory if this response is not the first page
   */
  prev?: string | null;
  /**
   * URI to the next page of this set. Mandatory if this response is not the last page
   */
  next?: string | null;
  /**
   * URI to the last page of this set. Mandatory if this response is not the last page
   */
  last?: string | null;
  [k: string]: unknown;
}
