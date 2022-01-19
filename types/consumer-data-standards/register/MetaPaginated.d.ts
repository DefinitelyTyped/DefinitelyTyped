/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

export interface MetaPaginated {
  /**
   * The total number of pages in the full set
   */
  totalPages: number;
  /**
   * The total number of records in the full set
   */
  totalRecords: number;
  [k: string]: unknown;
}
