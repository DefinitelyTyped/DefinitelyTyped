/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductBundle {
  /**
   * Name of the bundle
   */
  name: string;
  /**
   * Description of the bundle
   */
  description: string;
  /**
   * Display text providing more information on the bundle
   */
  additionalInfo?: string | null;
  /**
   * Link to a web page with more information on the bundle criteria and benefits
   */
  additionalInfoUri?: string | null;
  /**
   * Array of product IDs for products included in the bundle that are available via the product end points.  Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference end points
   */
  productIds?: string[] | null;
  [k: string]: unknown;
}
