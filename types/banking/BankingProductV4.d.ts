/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductV4 {
  /**
   * A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
   */
  productId: string;
  /**
   * The date and time from which this product is effective (ie. is available for origination).  Used to enable the articulation of products to the regime before they are available for customers to originate
   */
  effectiveFrom?: string | null;
  /**
   * The date and time at which this product will be retired and will no longer be offered.  Used to enable the managed deprecation of products
   */
  effectiveTo?: string | null;
  /**
   * The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered)
   */
  lastUpdated: string;
  /**
   * The category to which a product or account belongs. See [here](#product-categories) for more details
   */
  productCategory:
    | "BUSINESS_LOANS"
    | "CRED_AND_CHRG_CARDS"
    | "LEASES"
    | "MARGIN_LOANS"
    | "OVERDRAFTS"
    | "PERS_LOANS"
    | "REGULATED_TRUST_ACCOUNTS"
    | "RESIDENTIAL_MORTGAGES"
    | "TERM_DEPOSITS"
    | "TRADE_FINANCE"
    | "TRANS_AND_SAVINGS_ACCOUNTS"
    | "TRAVEL_CARDS";
  /**
   * The display name of the product
   */
  name: string;
  /**
   * A description of the product
   */
  description: string;
  /**
   * A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required
   */
  brand: string;
  /**
   * An optional display name of the brand
   */
  brandName?: string | null;
  /**
   * A link to an application web page where this product can be applied for.
   */
  applicationUri?: string | null;
  /**
   * Indicates whether the product is specifically tailored to a circumstance.  In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable
   */
  isTailored: boolean;
  /**
   * Object that contains links to additional information on specific topics
   */
  additionalInformation?: {
    /**
     * General overview of the product
     */
    overviewUri?: string | null;
    /**
     * Terms and conditions for the product
     */
    termsUri?: string | null;
    /**
     * Eligibility rules and criteria for the product
     */
    eligibilityUri?: string | null;
    /**
     * Description of fees, pricing, discounts, exemptions and bonuses for the product
     */
    feesAndPricingUri?: string | null;
    /**
     * Description of a bundle that this product can be part of
     */
    bundleUri?: string | null;
    [k: string]: unknown;
  } | null;
  /**
   * An array of card art images
   */
  cardArt?:
    | {
        /**
         * Display label for the specific image
         */
        title?: string | null;
        /**
         * URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI [RFC 2397](https://tools.ietf.org/html/rfc2397)
         */
        imageUri: string;
        [k: string]: unknown;
      }[]
    | null;
  [k: string]: unknown;
}
