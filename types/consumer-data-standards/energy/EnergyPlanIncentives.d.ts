/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Optional list of incentives available for the contract
 */
export type EnergyPlanIncentives = {
  /**
   * The display name of the incentive
   */
  displayName: string;
  /**
   * The description of the incentive
   */
  description: string;
  /**
   * The type of the incentive
   */
  category: "GIFT" | "ACCOUNT_CREDIT" | "OTHER";
  /**
   * A display message outlining an eligibility criteria that may apply
   */
  eligibility?: string | null;
  [k: string]: unknown;
}[];
