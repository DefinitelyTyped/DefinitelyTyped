/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Eligibility restrictions or requirements
 */
export type EnergyPlanEligibility = {
  /**
   * The type of the eligibility restriction.<br/>The CONTINGENT_PLAN value indicates that the plan is contingent on the customer taking up an alternate fuel plan from the same retailer (for instance, if the fuelType is ELECTRICITY then a GAS plan from the same retailer must be taken up)
   */
  type:
    | "EXISTING_CUST"
    | "EXISTING_POOL"
    | "EXISTING_SOLAR"
    | "EXISTING_BATTERY"
    | "EXISTING_SMART_METER"
    | "EXISTING_BASIC_METER"
    | "SENIOR_CARD"
    | "SMALL_BUSINESS"
    | "NO_SOLAR_FIT"
    | "NEW_CUSTOMER"
    | "ONLINE_ONLY"
    | "REQ_EQUIP_SUPPLIER"
    | "THIRD_PARTY_ONLY"
    | "SPORT_CLUB_MEMBER"
    | "ORG_MEMBER"
    | "SPECIFIC_LOCATION"
    | "MINIMUM_USAGE"
    | "LOYALTY_MEMBER"
    | "GROUP_BUY_MEMBER"
    | "CONTINGENT_PLAN"
    | "OTHER";
  /**
   * Information of the eligibility restriction specific to the type of the restriction
   */
  information: string;
  /**
   * A description of the eligibility restriction
   */
  description?: string | null;
  [k: string]: unknown;
}[];
