/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * Response containing a list of Data Recipients in the CDR Register
 */
export interface ResponseRegisterDataRecipientList {
  /**
   * Response data for the query
   */
  data: {
    /**
     * Unique id of the Data Recipient Legal Entity issued by the CDR Register.
     */
    legalEntityId: string;
    /**
     * Legal name of the Data Recipient
     */
    legalEntityName: string;
    /**
     * CDR Register issued human readable unique number given to Data Recipients upon accreditation
     */
    accreditationNumber: string;
    /**
     * Accreditation level of the Data Recipient in the CDR Register
     */
    accreditationLevel: "UNRESTRICTED" | "SPONSORED";
    /**
     * Legal Entity logo URI
     */
    logoUri: string;
    dataRecipientBrands?: {
      /**
       * Unique id of the Data Recipient brand issued by the CDR Register
       */
      dataRecipientBrandId: string;
      /**
       * Data Recipient Brand name
       */
      brandName: string;
      /**
       * Data Recipient Brand logo URI
       */
      logoUri: string;
      softwareProducts?: {
        /**
         * Unique id of the Data Recipient software product issued by the CDR Register
         */
        softwareProductId: string;
        /**
         * Name of the software product
         */
        softwareProductName: string;
        /**
         * Description of the software product
         */
        softwareProductDescription?: string;
        /**
         * Software product logo URI
         */
        logoUri: string;
        /**
         * Software Product status in the CDR Register
         */
        status: "ACTIVE" | "INACTIVE" | "REMOVED";
        [k: string]: unknown;
      }[];
      /**
       * Data Recipient Brand status in the CDR Register
       */
      status: "ACTIVE" | "INACTIVE" | "REMOVED";
      [k: string]: unknown;
    }[];
    /**
     * Data Recipient status in the CDR Register
     */
    status: "ACTIVE" | "SUSPENDED" | "REVOKED" | "SURRENDERED";
    /**
     * The date/time that the Legal Entity was last updated in the CDR Register
     */
    lastUpdated: string;
    [k: string]: unknown;
  }[];
  links: {
    /**
     * Fully qualified link to this API call
     */
    self: string;
    [k: string]: unknown;
  };
  meta: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
