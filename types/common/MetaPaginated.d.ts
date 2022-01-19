/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface MetaPaginated {
  /**
   * The total number of records in the full set. See [pagination](#pagination).
   */
  totalRecords: number;
  /**
   * The total number of pages in the full set. See [pagination](#pagination).
   */
  totalPages: number;
  [k: string]: unknown;
}
