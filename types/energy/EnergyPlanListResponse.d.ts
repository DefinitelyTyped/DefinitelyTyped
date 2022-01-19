/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanListResponse {
  data: {
    /**
     * Array of plans
     */
    plans: {
      /**
       * The ID of the specific plan
       */
      planId: string;
      /**
       * The date and time from which this plan is effective (ie. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate
       */
      effectiveFrom?: string | null;
      /**
       * The date and time at which this plan will be retired and will no longer be offered. Used to enable the managed deprecation of plans
       */
      effectiveTo?: string | null;
      /**
       * The last date and time that the information for this plan was changed (or the creation date for the plan if it has never been altered)
       */
      lastUpdated: string;
      /**
       * The display name of the plan
       */
      displayName?: string | null;
      /**
       * A description of the plan
       */
      description?: string | null;
      /**
       * The type of the plan
       */
      type: "STANDING" | "MARKET" | "REGULATED";
      /**
       * The fuel types covered by the plan
       */
      fuelType: "ELECTRICITY" | "GAS" | "DUAL";
      /**
       * The ID of the brand under which this plan is offered
       */
      brand: string;
      /**
       * The display name of the brand under which this plan is offered
       */
      brandName: string;
      /**
       * A link to an application web page where this plan can be applied for
       */
      applicationUri?: string | null;
      /**
       * Object that contains links to additional information on specific topics
       */
      additionalInformation?: {
        /**
         * A link to a general overview of the plan
         */
        overviewUri?: string;
        /**
         * A link to terms and conditions for the plan
         */
        termsUri?: string | null;
        /**
         * A link to detail on eligibility criteria for the plan
         */
        eligibilityUri?: string | null;
        /**
         * A link to detail on pricing for the plan
         */
        pricingUri?: string | null;
        /**
         * A link to detail on bundles that this plan can be a part of
         */
        bundleUri?: string | null;
        [k: string]: unknown;
      } | null;
      /**
       * The type of customer that the plan is offered to.  If absent then the plan is available to all customers
       */
      customerType?: ("RESIDENTIAL" | "BUSINESS") | null;
      /**
       * Describes the geographical area that the plan is available for.  If absent then it is assumed the plan is not geographically limited
       */
      geography?: {
        /**
         * Array of valid Australian post codes that are specifically excluded from the plan.  Each element is a single four digit postcode (e.g. 3000) or a range of postcodes defined by two four digit postcodes and a hyphen (e.g. 3000-3999)
         */
        excludedPostcodes?: string[] | null;
        /**
         * Array of valid Australian post codes that are included from the plan.  If absent defaults to all non-excluded post codes.  Each element is a single four digit postcode (e.g. 3000) or a range of postcodes defined by two four digit postcodes and a hyphen (e.g. 3000-3999)
         */
        includedPostcodes?: string[] | null;
        [k: string]: unknown;
      } | null;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
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
  };
  meta: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
