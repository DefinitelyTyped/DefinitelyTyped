/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyServicePoint {
  /**
   * Tokenised ID of the service point to be used for referring to the service point in the CDR API suite. To be created in accordance with CDR ID permanence requirements
   */
  servicePointId: string;
  /**
   * The independent ID of the service point, known in the industry as the NMI
   */
  nationalMeteringId: string;
  /**
   * The classification of the service point as defined in MSATS procedures
   */
  servicePointClassification:
    | "EXTERNAL_PROFILE"
    | "GENERATOR"
    | "LARGE"
    | "SMALL"
    | "WHOLESALE"
    | "NON_CONTEST_UNMETERED_LOAD"
    | "NON_REGISTERED_EMBEDDED_GENERATOR"
    | "DISTRIBUTION_WHOLESALE";
  /**
   * Code used to indicate the status of the service point. Note the details for the enumeration values below:<ul><li>**ACTIVE** - An active, energised, service point</li><li>**DE_ENERGISED** - The service point exists but is deenergised</li><li>**EXTINCT** - The service point has been permanently decommissioned</li><li>**GREENFIELD** - Applies to a service point that has never been energised</li><li>**OFF_MARKET** - Applies when the service point is no longer settled in the NEM</li></ul>
   */
  servicePointStatus: "ACTIVE" | "DE_ENERGISED" | "EXTINCT" | "GREENFIELD" | "OFF_MARKET";
  /**
   * Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point. Note the details of enumeration values below:<ul><li>**ALL** - All Jurisdictions</li><li>**ACT** - Australian Capital Territory</li><li>**NEM** - National Electricity Market</li><li>**NSW** - New South Wales</li><li>**QLD** - Queensland</li><li>**SA** - South Australia</li><li>**TAS** - Tasmania</li><li>**VIC** - Victoria</li></ul>
   */
  jurisdictionCode: "ALL" | "ACT" | "NEM" | "NSW" | "QLD" | "SA" | "TAS" | "VIC";
  /**
   * This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit(this may include generator auxiliary loads). If absent defaults to false. <br>**Note:** Only applicable for scheduled or semischeduled generators, does not indicate on site generation by consumer
   */
  isGenerator?: boolean | null;
  /**
   * The start date from which this service point first became valid
   */
  validFromDate: string;
  /**
   * The date and time that the information for this service point was modified
   */
  lastUpdateDateTime: string;
  consumerProfile?: {
    /**
     * A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments
     */
    classification?: "BUSINESS" | "RESIDENTIAL";
    /**
     * A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments. Note the details of enumeration values below: <ul><li>**LOW** - Consumption is less than the ‘lower consumption threshold’ as defined in the National Energy Retail Regulations</li><li>**MEDIUM** - Consumption is equal to or greater than the ‘lower consumption threshold’, but less than the ‘upper consumption threshold’, as defined in the National Energy Retail Regulations</li><li>**HIGH** - Consumption is equal to or greater than the ‘upper consumption threshold’ as defined in the National Energy Retail Regulations</li></ul>
     */
    threshold?: "LOW" | "MEDIUM" | "HIGH";
    [k: string]: unknown;
  } | null;
  [k: string]: unknown;
}
