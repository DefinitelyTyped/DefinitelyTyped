/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface LinksPaginated {
  /**
   * URI to the first page of this set. Mandatory if this response is not the first page
   */
  first?: string;
  /**
   * URI to the last page of this set. Mandatory if this response is not the last page
   */
  last?: string;
  /**
   * URI to the next page of this set. Mandatory if this response is not the last page
   */
  next?: string;
  /**
   * URI to the previous page of this set. Mandatory if this response is not the first page
   */
  prev?: string;
  /**
   * Fully qualified link to this API call
   */
  self: string;
  [k: string]: unknown;
}
