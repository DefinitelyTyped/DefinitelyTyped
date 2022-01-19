/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface ResponseCommonCustomer {
  data: {
    /**
     * The type of customer object that is present
     */
    customerUType: "organisation" | "person";
    /**
     * Mandatory if `customerUType` is `person`
     */
    person?: {
      /**
       * The date and time that this record was last updated by the customer.  If no update has occurred then this date should reflect the initial creation date for the data
       */
      lastUpdateTime?: string;
      /**
       * For people with single names this field need not be present. The single name should be in the lastName field. Where a data holder cannot determine first and middle names from a collection of given names, a single string representing all given names MAY be provided.
       */
      firstName?: string;
      /**
       * For people with single names the single name should be in this field
       */
      lastName: string;
      /**
       * Field is mandatory but array may be empty
       */
      middleNames: string[];
      /**
       * Also known as title or salutation.  The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)
       */
      prefix?: string;
      /**
       * Used for a trailing suffix to the name (e.g. Jr)
       */
      suffix?: string;
      /**
       * Value is a valid [ANZSCO](http://www.abs.gov.au/ANZSCO) Standard Occupation classification code. If the occupation code held by the data holder is not one of the supported [ANZSCO](http://www.abs.gov.au/ANZSCO) versions, then it must not be supplied.
       */
      occupationCode?: string;
      /**
       * The applicable [ANZSCO](http://www.abs.gov.au/ANZSCO) release version of the occupation code provided. Mandatory if an ``occupationCode`` is supplied. If ``occupationCode`` is supplied but ``occupationCodeVersion`` is absent, default is ``ANZSCO_1220.0_2013_V1.2``
       */
      occupationCodeVersion?:
        | "ANZSCO_1220.0_2006_V1.0"
        | "ANZSCO_1220.0_2006_V1.1"
        | "ANZSCO_1220.0_2013_V1.2"
        | "ANZSCO_1220.0_2013_V1.3";
      [k: string]: unknown;
    };
    /**
     * Mandatory if `customerUType` is `organisation`
     */
    organisation?: {
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
    };
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
