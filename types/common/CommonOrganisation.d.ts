/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface CommonOrganisation {
  /**
   * The date and time that this record was last updated by the customer. If no update has occurred then this date should reflect the initial creation date for the data
   */
  lastUpdateTime?: string;
  /**
   * The first name of the individual providing access on behalf of the organisation. For people with single names this field need not be present.  The single name should be in the lastName field
   */
  agentFirstName?: string;
  /**
   * The last name of the individual providing access on behalf of the organisation. For people with single names the single name should be in this field
   */
  agentLastName: string;
  /**
   * The role of the individual identified as the agent who is providing authorisation.  Expected to be used for display. Default to Unspecified if the role is not known
   */
  agentRole: string;
  /**
   * Name of the organisation
   */
  businessName: string;
  /**
   * Legal name, if different to the business name
   */
  legalName?: string;
  /**
   * Short name used for communication, if different to the business name
   */
  shortName?: string;
  /**
   * Australian Business Number for the organisation
   */
  abn?: string;
  /**
   * Australian Company Number for the organisation. Required only if an ACN is applicable for the organisation type
   */
  acn?: string;
  /**
   * True if registered with the ACNC.  False if not. Absent or null if not confirmed.
   */
  isACNCRegistered?: boolean;
  /**
   * A valid [ANZSIC](http://www.abs.gov.au/ANZSIC) code for the organisation. If the industry code held by the data holder is not one of the supported [ANZSIC](http://www.abs.gov.au/ANZSIC) versions, then it must not be supplied.
   */
  industryCode?: string;
  /**
   * The applicable [ANZSIC](http://www.abs.gov.au/ANZSIC) release version of the industry code provided. Should only be supplied if ``industryCode`` is also supplied. If ``industryCode`` is supplied but ``industryCodeVersion`` is absent, default is ``ANZSIC_1292.0_2006_V2.0``
   */
  industryCodeVersion?: "ANZSIC_1292.0_2006_V1.0" | "ANZSIC_1292.0_2006_V2.0";
  /**
   * Legal organisation type
   */
  organisationType: "COMPANY" | "GOVERNMENT_ENTITY" | "OTHER" | "PARTNERSHIP" | "SOLE_TRADER" | "TRUST";
  /**
   * Enumeration with values from [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country codes.  Assumed to be AUS if absent
   */
  registeredCountry?: string;
  /**
   * The date the organisation described was established
   */
  establishmentDate?: string;
  [k: string]: unknown;
}
