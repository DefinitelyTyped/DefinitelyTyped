/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyConcession {
  /**
   * The display name of the concession
   */
  displayName: string;
  /**
   * Display text providing more information on the concession
   */
  additionalInfo?: string | null;
  /**
   * Optional link to additional information regarding the concession
   */
  additionalInfoUri?: string | null;
  /**
   * Optional start date for the application of the concession
   */
  startDate?: string | null;
  /**
   * Optional end date for the application of the concession
   */
  endDate?: string | null;
  /**
   * Daily discount value due to the concession.  At least one dailyDiscount, monthlyDiscount, yearlyDiscount and percentageDiscount must be provided
   */
  dailyDiscount?: string | null;
  /**
   * Monthly discount value due to the concession.  At least one dailyDiscount, monthlyDiscount, yearlyDiscount and percentageDiscount must be provided
   */
  monthlyDiscount?: string | null;
  /**
   * Annual discount value due to the concession.  At least one dailyDiscount, monthlyDiscount, yearlyDiscount and percentageDiscount must be provided
   */
  yearlyDiscount?: string | null;
  /**
   * Percentage of each invoice to be discounted due to the concession.  At least one dailyDiscount, monthlyDiscount, yearlyDiscount and percentageDiscount must be provided
   */
  percentageDiscount?: string | null;
  [k: string]: unknown;
}
