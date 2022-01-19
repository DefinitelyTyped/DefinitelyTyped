/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Object that contains links to additional information on specific topics
 */
export interface BankingProductAdditionalInformationV2 {
  /**
   * General overview of the product. Mandatory if `additionalOverviewUris` includes one or more supporting documents.
   */
  overviewUri?: string;
  /**
   * Terms and conditions for the product. Mandatory if `additionalTermsUris` includes one or more supporting documents.
   */
  termsUri?: string;
  /**
   * Eligibility rules and criteria for the product. Mandatory if `additionalEligibilityUris` includes one or more supporting documents.
   */
  eligibilityUri?: string;
  /**
   * Description of fees, pricing, discounts, exemptions and bonuses for the product. Mandatory if `additionalFeesAndPricingUris` includes one or more supporting documents.
   */
  feesAndPricingUri?: string;
  /**
   * Description of a bundle that this product can be part of. Mandatory if `additionalBundleUris` includes one or more supporting documents.
   */
  bundleUri?: string;
  /**
   * An array of additional general overviews for the product or features of the product, if applicable. To be treated as secondary documents to the `overviewUri`. Only to be used if there is a primary `overviewUri`.
   */
  additionalOverviewUris?: {
    /**
     * Display text providing more information about the document URI
     */
    description?: string | null;
    /**
     * The URI describing the additional information
     */
    additionalInfoUri: string;
    [k: string]: unknown;
  }[];
  /**
   * An array of additional terms and conditions for the product, if applicable. To be treated as secondary documents to the `termsUri`. Only to be used if there is a primary `termsUri`.
   */
  additionalTermsUris?: {
    /**
     * Display text providing more information about the document URI
     */
    description?: string | null;
    /**
     * The URI describing the additional information
     */
    additionalInfoUri: string;
    [k: string]: unknown;
  }[];
  /**
   * An array of additional eligibility rules and criteria for the product, if applicable. To be treated as secondary documents to the `eligibilityUri`. Only to be used if there is a primary `eligibilityUri`.
   */
  additionalEligibilityUris?: {
    /**
     * Display text providing more information about the document URI
     */
    description?: string | null;
    /**
     * The URI describing the additional information
     */
    additionalInfoUri: string;
    [k: string]: unknown;
  }[];
  /**
   * An array of additional fees, pricing, discounts, exemptions and bonuses for the product, if applicable. To be treated as secondary documents to the `feesAndPricingUri`. Only to be used if there is a primary `feesAndPricingUri`.
   */
  additionalFeesAndPricingUris?: {
    /**
     * Display text providing more information about the document URI
     */
    description?: string | null;
    /**
     * The URI describing the additional information
     */
    additionalInfoUri: string;
    [k: string]: unknown;
  }[];
  /**
   * An array of additional bundles for the product, if applicable. To be treated as secondary documents to the `bundleUri`. Only to be used if there is a primary `bundleUri`.
   */
  additionalBundleUris?: {
    /**
     * Display text providing more information about the document URI
     */
    description?: string | null;
    /**
     * The URI describing the additional information
     */
    additionalInfoUri: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
