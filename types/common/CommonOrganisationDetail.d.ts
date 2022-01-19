/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export type CommonOrganisationDetail = {
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
} & {
  /**
   * Must contain at least one address. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail
   */
  physicalAddresses: ({
    /**
     * The type of address object present
     */
    addressUType: "paf" | "simple";
    simple?: {
      /**
       * Name of the individual or business formatted for inclusion in an address used for physical mail
       */
      mailingName?: string;
      /**
       * First line of the standard address object
       */
      addressLine1: string;
      /**
       * Second line of the standard address object
       */
      addressLine2?: string;
      /**
       * Third line of the standard address object
       */
      addressLine3?: string;
      /**
       * Mandatory for Australian addresses
       */
      postcode?: string;
      /**
       * Name of the city or locality
       */
      city: string;
      /**
       * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
       */
      state: string;
      /**
       * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
       */
      country?: string;
      [k: string]: unknown;
    };
    /**
     * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
     */
    paf?: {
      /**
       * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
       */
      dpid?: string;
      /**
       * Thoroughfare number for a property (first number in a property ranged address)
       */
      thoroughfareNumber1?: number;
      /**
       * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
       */
      thoroughfareNumber1Suffix?: string;
      /**
       * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
       */
      thoroughfareNumber2?: number;
      /**
       * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
       */
      thoroughfareNumber2Suffix?: string;
      /**
       * Type of flat or unit for the address
       */
      flatUnitType?: string;
      /**
       * Unit number (including suffix, if applicable)
       */
      flatUnitNumber?: string;
      /**
       * Type of floor or level for the address
       */
      floorLevelType?: string;
      /**
       * Floor or level number (including alpha characters)
       */
      floorLevelNumber?: string;
      /**
       * Allotment number for the address
       */
      lotNumber?: string;
      /**
       * Building/Property name 1
       */
      buildingName1?: string;
      /**
       * Building/Property name 2
       */
      buildingName2?: string;
      /**
       * The name of the street
       */
      streetName?: string;
      /**
       * The street type. Valid enumeration defined by Australia Post PAF code file
       */
      streetType?: string;
      /**
       * The street type suffix. Valid enumeration defined by Australia Post PAF code file
       */
      streetSuffix?: string;
      /**
       * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
       */
      postalDeliveryType?: string;
      /**
       * Postal delivery number if the address is a postal delivery type
       */
      postalDeliveryNumber?: number;
      /**
       * Postal delivery number prefix related to the postal delivery number
       */
      postalDeliveryNumberPrefix?: string;
      /**
       * Postal delivery number suffix related to the postal delivery number
       */
      postalDeliveryNumberSuffix?: string;
      /**
       * Full name of locality
       */
      localityName: string;
      /**
       * Postcode for the locality
       */
      postcode: string;
      /**
       * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
       */
      state: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  } & {
    /**
     * Enumeration of values indicating the purpose of the physical address
     */
    purpose: "MAIL" | "OTHER" | "PHYSICAL" | "REGISTERED" | "WORK";
    [k: string]: unknown;
  })[];
  [k: string]: unknown;
};
