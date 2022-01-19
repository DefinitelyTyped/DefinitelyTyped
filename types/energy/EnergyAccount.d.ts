/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type EnergyAccount = {
  /**
   * The ID of the account.  To be created in accordance with CDR ID permanence requirements
   */
  accountId: string;
  /**
   * Optional identifier of the account as defined by the data holder.  This must be the value presented on physical statements (if it exists) and must not be used for the value of accountId
   */
  accountNumber?: string | null;
  /**
   * An optional display name for the account if one exists or can be derived.  The content of this field is at the discretion of the data holder
   */
  displayName?: string | null;
  /**
   * The date that the account was created or opened
   */
  creationDate: string;
  [k: string]: unknown;
} & {
  /**
   * The array of plans containing service points and associated plan details
   */
  plans: {
    /**
     * Optional display name for the plan provided by the customer to help differentiate multiple plans
     */
    nickname?: string | null;
    /**
     * An array of servicePointIds, representing NMIs, that this plan is linked to.  If there are no service points allocated to this plan then an empty array would be expected
     */
    servicePointIds: string[];
    planOverview: {
      /**
       * The name of the plan if one exists
       */
      displayName?: string | null;
      /**
       * The start date of the applicability of this plan
       */
      startDate: string;
      /**
       * The end date of the applicability of this plan
       */
      endDate?: string | null;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
};
