/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface CommonEmailAddress {
  /**
   * A correctly formatted email address, as defined by the addr-spec format in **[[RFC5322]](#nref-RFC5322)**
   */
  address: string;
  /**
   * May be true for one and only one email record in the collection. Denotes the default email address
   */
  isPreferred?: boolean | null;
  /**
   * The purpose for the email, as specified by the customer (Enumeration)
   */
  purpose: "HOME" | "OTHER" | "UNSPECIFIED" | "WORK";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface CommonOrganisation {
  /**
   * Australian Business Number for the organisation
   */
  abn?: string | null;
  /**
   * Australian Company Number for the organisation. Required only if an ACN is applicable for the organisation type
   */
  acn?: string | null;
  /**
   * The first name of the individual providing access on behalf of the organisation. For people with single names this field need not be present.  The single name should be in the lastName field
   */
  agentFirstName?: string | null;
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
   * The date the organisation described was established
   */
  establishmentDate?: string | null;
  /**
   * A valid [ANZSIC](http://www.abs.gov.au/ANZSIC) code for the organisation. If the industry code held by the data holder is not one of the supported [ANZSIC](http://www.abs.gov.au/ANZSIC) versions, then it must not be supplied.
   */
  industryCode?: string | null;
  /**
   * The applicable [ANZSIC](http://www.abs.gov.au/ANZSIC) release version of the industry code provided. Should only be supplied if ``industryCode`` is also supplied. If ``industryCode`` is supplied but ``industryCodeVersion`` is absent, default is ``ANZSIC_1292.0_2006_V2.0``
   */
  industryCodeVersion?: ("ANZSIC_1292.0_2006_V1.0" | "ANZSIC_1292.0_2006_V2.0") | null;
  /**
   * True if registered with the ACNC.  False if not. Absent or null if not confirmed.
   */
  isACNCRegistered?: boolean | null;
  /**
   * The date and time that this record was last updated by the customer. If no update has occurred then this date should reflect the initial creation date for the data
   */
  lastUpdateTime?: string | null;
  /**
   * Legal name, if different to the business name
   */
  legalName?: string | null;
  /**
   * Legal organisation type
   */
  organisationType: "COMPANY" | "GOVERNMENT_ENTITY" | "OTHER" | "PARTNERSHIP" | "SOLE_TRADER" | "TRUST";
  /**
   * Enumeration with values from [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country codes.  Assumed to be AUS if absent
   */
  registeredCountry?: string | null;
  /**
   * Short name used for communication, if different to the business name
   */
  shortName?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface CommonOrganisationDetailV2 extends CommonOrganisation {
  /**
   * Array is mandatory but may be empty if no valid addresses are held. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail
   */
  physicalAddresses: ({
    /**
     * The type of address object present
     */
    addressUType: "paf" | "simple";
    /**
     * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
     */
    paf?: {
      /**
       * Building/Property name 1
       */
      buildingName1?: string | null;
      /**
       * Building/Property name 2
       */
      buildingName2?: string | null;
      /**
       * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
       */
      dpid?: string | null;
      /**
       * Unit number (including suffix, if applicable)
       */
      flatUnitNumber?: string | null;
      /**
       * Type of flat or unit for the address
       */
      flatUnitType?: string | null;
      /**
       * Floor or level number (including alpha characters)
       */
      floorLevelNumber?: string | null;
      /**
       * Type of floor or level for the address
       */
      floorLevelType?: string | null;
      /**
       * Full name of locality
       */
      localityName: string;
      /**
       * Allotment number for the address
       */
      lotNumber?: string | null;
      /**
       * Postal delivery number if the address is a postal delivery type
       */
      postalDeliveryNumber?: number | null;
      /**
       * Postal delivery number prefix related to the postal delivery number
       */
      postalDeliveryNumberPrefix?: string | null;
      /**
       * Postal delivery number suffix related to the postal delivery number
       */
      postalDeliveryNumberSuffix?: string | null;
      /**
       * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
       */
      postalDeliveryType?: string | null;
      /**
       * Postcode for the locality
       */
      postcode: string;
      /**
       * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
       */
      state: string;
      /**
       * The name of the street
       */
      streetName?: string | null;
      /**
       * The street type suffix. Valid enumeration defined by Australia Post PAF code file
       */
      streetSuffix?: string | null;
      /**
       * The street type. Valid enumeration defined by Australia Post PAF code file
       */
      streetType?: string | null;
      /**
       * Thoroughfare number for a property (first number in a property ranged address)
       */
      thoroughfareNumber1?: number | null;
      /**
       * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
       */
      thoroughfareNumber1Suffix?: string | null;
      /**
       * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
       */
      thoroughfareNumber2?: number | null;
      /**
       * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
       */
      thoroughfareNumber2Suffix?: string | null;
      [k: string]: unknown;
    };
    simple?: {
      /**
       * First line of the standard address object
       */
      addressLine1: string;
      /**
       * Second line of the standard address object
       */
      addressLine2?: string | null;
      /**
       * Third line of the standard address object
       */
      addressLine3?: string | null;
      /**
       * Name of the city or locality
       */
      city: string;
      /**
       * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
       */
      country?: string | null;
      /**
       * Name of the individual or business formatted for inclusion in an address used for physical mail
       */
      mailingName?: string | null;
      /**
       * Mandatory for Australian addresses
       */
      postcode?: string | null;
      /**
       * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
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
}
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

/**
 * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
 */
export interface CommonPAFAddress {
  /**
   * Building/Property name 1
   */
  buildingName1?: string | null;
  /**
   * Building/Property name 2
   */
  buildingName2?: string | null;
  /**
   * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
   */
  dpid?: string | null;
  /**
   * Unit number (including suffix, if applicable)
   */
  flatUnitNumber?: string | null;
  /**
   * Type of flat or unit for the address
   */
  flatUnitType?: string | null;
  /**
   * Floor or level number (including alpha characters)
   */
  floorLevelNumber?: string | null;
  /**
   * Type of floor or level for the address
   */
  floorLevelType?: string | null;
  /**
   * Full name of locality
   */
  localityName: string;
  /**
   * Allotment number for the address
   */
  lotNumber?: string | null;
  /**
   * Postal delivery number if the address is a postal delivery type
   */
  postalDeliveryNumber?: number | null;
  /**
   * Postal delivery number prefix related to the postal delivery number
   */
  postalDeliveryNumberPrefix?: string | null;
  /**
   * Postal delivery number suffix related to the postal delivery number
   */
  postalDeliveryNumberSuffix?: string | null;
  /**
   * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
   */
  postalDeliveryType?: string | null;
  /**
   * Postcode for the locality
   */
  postcode: string;
  /**
   * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
   */
  state: string;
  /**
   * The name of the street
   */
  streetName?: string | null;
  /**
   * The street type suffix. Valid enumeration defined by Australia Post PAF code file
   */
  streetSuffix?: string | null;
  /**
   * The street type. Valid enumeration defined by Australia Post PAF code file
   */
  streetType?: string | null;
  /**
   * Thoroughfare number for a property (first number in a property ranged address)
   */
  thoroughfareNumber1?: number | null;
  /**
   * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
   */
  thoroughfareNumber1Suffix?: string | null;
  /**
   * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
   */
  thoroughfareNumber2?: number | null;
  /**
   * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
   */
  thoroughfareNumber2Suffix?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface CommonPerson {
  /**
   * For people with single names this field need not be present. The single name should be in the lastName field. Where a data holder cannot determine first and middle names from a collection of given names, a single string representing all given names MAY be provided.
   */
  firstName?: string | null;
  /**
   * For people with single names the single name should be in this field
   */
  lastName: string;
  /**
   * The date and time that this record was last updated by the customer.  If no update has occurred then this date should reflect the initial creation date for the data
   */
  lastUpdateTime?: string | null;
  /**
   * Field is mandatory but array may be empty
   */
  middleNames: string[];
  /**
   * Value is a valid **[[ANZSCO]](#iref-ANZSCO)** Standard Occupation classification code. If the occupation code held by the data holder is not one of the supported **[[ANZSCO]](#iref-ANZSCO)** versions, then it must not be supplied.
   */
  occupationCode?: string | null;
  /**
   * The applicable **[[ANZSCO]](#iref-ANZSCO)** release version of the occupation code provided. Mandatory if an ``occupationCode`` is supplied. If ``occupationCode`` is supplied but ``occupationCodeVersion`` is absent, default is ``ANZSCO_1220.0_2013_V1.2``
   */
  occupationCodeVersion?:
    | ("ANZSCO_1220.0_2006_V1.0" | "ANZSCO_1220.0_2006_V1.1" | "ANZSCO_1220.0_2013_V1.2" | "ANZSCO_1220.0_2013_V1.3")
    | null;
  /**
   * Also known as title or salutation.  The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)
   */
  prefix?: string | null;
  /**
   * Used for a trailing suffix to the name (e.g. Jr)
   */
  suffix?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface CommonPersonDetailV2 extends CommonPerson {
  /**
   * Array is mandatory but may be empty if no phone numbers are held
   */
  phoneNumbers: {
    /**
     * Required for non Mobile Phones, if field is present and refers to Australian code - the leading 0 should be omitted.
     */
    areaCode?: string | null;
    /**
     * If absent, assumed to be Australia (+61). The + should be included
     */
    countryCode?: string | null;
    /**
     * An extension number (if applicable)
     */
    extension?: string | null;
    /**
     * Fully formatted phone number with country code, area code, number and extension incorporated. Formatted according to section 5.1.4. of **[[RFC3966]](#iref-RFC3966)**
     */
    fullNumber: string;
    /**
     * May be true for one and only one entry to indicate the preferred phone number. Assumed to be 'false' if not present
     */
    isPreferred?: boolean | null;
    /**
     * The actual phone number, with leading zeros as appropriate
     */
    number: string;
    /**
     * The purpose of the number as specified by the customer
     */
    purpose: "HOME" | "INTERNATIONAL" | "MOBILE" | "OTHER" | "UNSPECIFIED" | "WORK";
    [k: string]: unknown;
  }[];
  /**
   * May be empty
   */
  emailAddresses: {
    /**
     * A correctly formatted email address, as defined by the addr-spec format in **[[RFC5322]](#nref-RFC5322)**
     */
    address: string;
    /**
     * May be true for one and only one email record in the collection. Denotes the default email address
     */
    isPreferred?: boolean | null;
    /**
     * The purpose for the email, as specified by the customer (Enumeration)
     */
    purpose: "HOME" | "OTHER" | "UNSPECIFIED" | "WORK";
    [k: string]: unknown;
  }[];
  /**
   * Array is mandatory but may be empty if no valid addresses are held. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail
   */
  physicalAddresses: ({
    /**
     * The type of address object present
     */
    addressUType: "paf" | "simple";
    /**
     * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
     */
    paf?: {
      /**
       * Building/Property name 1
       */
      buildingName1?: string | null;
      /**
       * Building/Property name 2
       */
      buildingName2?: string | null;
      /**
       * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
       */
      dpid?: string | null;
      /**
       * Unit number (including suffix, if applicable)
       */
      flatUnitNumber?: string | null;
      /**
       * Type of flat or unit for the address
       */
      flatUnitType?: string | null;
      /**
       * Floor or level number (including alpha characters)
       */
      floorLevelNumber?: string | null;
      /**
       * Type of floor or level for the address
       */
      floorLevelType?: string | null;
      /**
       * Full name of locality
       */
      localityName: string;
      /**
       * Allotment number for the address
       */
      lotNumber?: string | null;
      /**
       * Postal delivery number if the address is a postal delivery type
       */
      postalDeliveryNumber?: number | null;
      /**
       * Postal delivery number prefix related to the postal delivery number
       */
      postalDeliveryNumberPrefix?: string | null;
      /**
       * Postal delivery number suffix related to the postal delivery number
       */
      postalDeliveryNumberSuffix?: string | null;
      /**
       * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
       */
      postalDeliveryType?: string | null;
      /**
       * Postcode for the locality
       */
      postcode: string;
      /**
       * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
       */
      state: string;
      /**
       * The name of the street
       */
      streetName?: string | null;
      /**
       * The street type suffix. Valid enumeration defined by Australia Post PAF code file
       */
      streetSuffix?: string | null;
      /**
       * The street type. Valid enumeration defined by Australia Post PAF code file
       */
      streetType?: string | null;
      /**
       * Thoroughfare number for a property (first number in a property ranged address)
       */
      thoroughfareNumber1?: number | null;
      /**
       * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
       */
      thoroughfareNumber1Suffix?: string | null;
      /**
       * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
       */
      thoroughfareNumber2?: number | null;
      /**
       * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
       */
      thoroughfareNumber2Suffix?: string | null;
      [k: string]: unknown;
    };
    simple?: {
      /**
       * First line of the standard address object
       */
      addressLine1: string;
      /**
       * Second line of the standard address object
       */
      addressLine2?: string | null;
      /**
       * Third line of the standard address object
       */
      addressLine3?: string | null;
      /**
       * Name of the city or locality
       */
      city: string;
      /**
       * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
       */
      country?: string | null;
      /**
       * Name of the individual or business formatted for inclusion in an address used for physical mail
       */
      mailingName?: string | null;
      /**
       * Mandatory for Australian addresses
       */
      postcode?: string | null;
      /**
       * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
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
}
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface CommonPhoneNumber {
  /**
   * Required for non Mobile Phones, if field is present and refers to Australian code - the leading 0 should be omitted.
   */
  areaCode?: string | null;
  /**
   * If absent, assumed to be Australia (+61). The + should be included
   */
  countryCode?: string | null;
  /**
   * An extension number (if applicable)
   */
  extension?: string | null;
  /**
   * Fully formatted phone number with country code, area code, number and extension incorporated. Formatted according to section 5.1.4. of **[[RFC3966]](#iref-RFC3966)**
   */
  fullNumber: string;
  /**
   * May be true for one and only one entry to indicate the preferred phone number. Assumed to be 'false' if not present
   */
  isPreferred?: boolean | null;
  /**
   * The actual phone number, with leading zeros as appropriate
   */
  number: string;
  /**
   * The purpose of the number as specified by the customer
   */
  purpose: "HOME" | "INTERNATIONAL" | "MOBILE" | "OTHER" | "UNSPECIFIED" | "WORK";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface CommonPhysicalAddress {
  /**
   * The type of address object present
   */
  addressUType: "paf" | "simple";
  /**
   * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
   */
  paf?: {
    /**
     * Building/Property name 1
     */
    buildingName1?: string | null;
    /**
     * Building/Property name 2
     */
    buildingName2?: string | null;
    /**
     * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
     */
    dpid?: string | null;
    /**
     * Unit number (including suffix, if applicable)
     */
    flatUnitNumber?: string | null;
    /**
     * Type of flat or unit for the address
     */
    flatUnitType?: string | null;
    /**
     * Floor or level number (including alpha characters)
     */
    floorLevelNumber?: string | null;
    /**
     * Type of floor or level for the address
     */
    floorLevelType?: string | null;
    /**
     * Full name of locality
     */
    localityName: string;
    /**
     * Allotment number for the address
     */
    lotNumber?: string | null;
    /**
     * Postal delivery number if the address is a postal delivery type
     */
    postalDeliveryNumber?: number | null;
    /**
     * Postal delivery number prefix related to the postal delivery number
     */
    postalDeliveryNumberPrefix?: string | null;
    /**
     * Postal delivery number suffix related to the postal delivery number
     */
    postalDeliveryNumberSuffix?: string | null;
    /**
     * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
     */
    postalDeliveryType?: string | null;
    /**
     * Postcode for the locality
     */
    postcode: string;
    /**
     * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
     */
    state: string;
    /**
     * The name of the street
     */
    streetName?: string | null;
    /**
     * The street type suffix. Valid enumeration defined by Australia Post PAF code file
     */
    streetSuffix?: string | null;
    /**
     * The street type. Valid enumeration defined by Australia Post PAF code file
     */
    streetType?: string | null;
    /**
     * Thoroughfare number for a property (first number in a property ranged address)
     */
    thoroughfareNumber1?: number | null;
    /**
     * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
     */
    thoroughfareNumber1Suffix?: string | null;
    /**
     * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
     */
    thoroughfareNumber2?: number | null;
    /**
     * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
     */
    thoroughfareNumber2Suffix?: string | null;
    [k: string]: unknown;
  };
  simple?: {
    /**
     * First line of the standard address object
     */
    addressLine1: string;
    /**
     * Second line of the standard address object
     */
    addressLine2?: string | null;
    /**
     * Third line of the standard address object
     */
    addressLine3?: string | null;
    /**
     * Name of the city or locality
     */
    city: string;
    /**
     * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
     */
    country?: string | null;
    /**
     * Name of the individual or business formatted for inclusion in an address used for physical mail
     */
    mailingName?: string | null;
    /**
     * Mandatory for Australian addresses
     */
    postcode?: string | null;
    /**
     * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
     */
    state: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface CommonPhysicalAddressWithPurpose extends CommonPhysicalAddress {
  /**
   * Enumeration of values indicating the purpose of the physical address
   */
  purpose: "MAIL" | "OTHER" | "PHYSICAL" | "REGISTERED" | "WORK";
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface CommonSimpleAddress {
  /**
   * First line of the standard address object
   */
  addressLine1: string;
  /**
   * Second line of the standard address object
   */
  addressLine2?: string | null;
  /**
   * Third line of the standard address object
   */
  addressLine3?: string | null;
  /**
   * Name of the city or locality
   */
  city: string;
  /**
   * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
   */
  country?: string | null;
  /**
   * Name of the individual or business formatted for inclusion in an address used for physical mail
   */
  mailingName?: string | null;
  /**
   * Mandatory for Australian addresses
   */
  postcode?: string | null;
  /**
   * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
   */
  state: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface DiscoveryOutage {
  /**
   * Planned duration of the outage. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
   */
  duration: string;
  /**
   * Provides an explanation of the current outage that can be displayed to an end customer
   */
  explanation: string;
  /**
   * Flag that indicates, if present and set to true, that the outage is only partial meaning that only a subset of normally available end points will be affected by the outage
   */
  isPartial?: boolean | null;
  /**
   * Date and time that the outage is scheduled to begin
   */
  outageTime: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface Links {
  /**
   * Fully qualified link that generated the current response document
   */
  self: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface Meta {
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

/**
 * Additional data for customised error codes
 */
export interface MetaError {
  /**
   * The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.
   */
  urn?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface ResponseCommonCustomer {
  data: {
    /**
     * The type of customer object that is present
     */
    customerUType: "organisation" | "person";
    organisation?: {
      /**
       * Australian Business Number for the organisation
       */
      abn?: string | null;
      /**
       * Australian Company Number for the organisation. Required only if an ACN is applicable for the organisation type
       */
      acn?: string | null;
      /**
       * The first name of the individual providing access on behalf of the organisation. For people with single names this field need not be present.  The single name should be in the lastName field
       */
      agentFirstName?: string | null;
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
       * The date the organisation described was established
       */
      establishmentDate?: string | null;
      /**
       * A valid [ANZSIC](http://www.abs.gov.au/ANZSIC) code for the organisation. If the industry code held by the data holder is not one of the supported [ANZSIC](http://www.abs.gov.au/ANZSIC) versions, then it must not be supplied.
       */
      industryCode?: string | null;
      /**
       * The applicable [ANZSIC](http://www.abs.gov.au/ANZSIC) release version of the industry code provided. Should only be supplied if ``industryCode`` is also supplied. If ``industryCode`` is supplied but ``industryCodeVersion`` is absent, default is ``ANZSIC_1292.0_2006_V2.0``
       */
      industryCodeVersion?: ("ANZSIC_1292.0_2006_V1.0" | "ANZSIC_1292.0_2006_V2.0") | null;
      /**
       * True if registered with the ACNC.  False if not. Absent or null if not confirmed.
       */
      isACNCRegistered?: boolean | null;
      /**
       * The date and time that this record was last updated by the customer. If no update has occurred then this date should reflect the initial creation date for the data
       */
      lastUpdateTime?: string | null;
      /**
       * Legal name, if different to the business name
       */
      legalName?: string | null;
      /**
       * Legal organisation type
       */
      organisationType: "COMPANY" | "GOVERNMENT_ENTITY" | "OTHER" | "PARTNERSHIP" | "SOLE_TRADER" | "TRUST";
      /**
       * Enumeration with values from [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country codes.  Assumed to be AUS if absent
       */
      registeredCountry?: string | null;
      /**
       * Short name used for communication, if different to the business name
       */
      shortName?: string | null;
      [k: string]: unknown;
    };
    person?: {
      /**
       * For people with single names this field need not be present. The single name should be in the lastName field. Where a data holder cannot determine first and middle names from a collection of given names, a single string representing all given names MAY be provided.
       */
      firstName?: string | null;
      /**
       * For people with single names the single name should be in this field
       */
      lastName: string;
      /**
       * The date and time that this record was last updated by the customer.  If no update has occurred then this date should reflect the initial creation date for the data
       */
      lastUpdateTime?: string | null;
      /**
       * Field is mandatory but array may be empty
       */
      middleNames: string[];
      /**
       * Value is a valid **[[ANZSCO]](#iref-ANZSCO)** Standard Occupation classification code. If the occupation code held by the data holder is not one of the supported **[[ANZSCO]](#iref-ANZSCO)** versions, then it must not be supplied.
       */
      occupationCode?: string | null;
      /**
       * The applicable **[[ANZSCO]](#iref-ANZSCO)** release version of the occupation code provided. Mandatory if an ``occupationCode`` is supplied. If ``occupationCode`` is supplied but ``occupationCodeVersion`` is absent, default is ``ANZSCO_1220.0_2013_V1.2``
       */
      occupationCodeVersion?:
        | (
            | "ANZSCO_1220.0_2006_V1.0"
            | "ANZSCO_1220.0_2006_V1.1"
            | "ANZSCO_1220.0_2013_V1.2"
            | "ANZSCO_1220.0_2013_V1.3"
          )
        | null;
      /**
       * Also known as title or salutation.  The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)
       */
      prefix?: string | null;
      /**
       * Used for a trailing suffix to the name (e.g. Jr)
       */
      suffix?: string | null;
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
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface ResponseCommonCustomerDetailV2 {
  data: {
    /**
     * The type of customer object that is present
     */
    customerUType: "organisation" | "person";
    organisation?: {
      /**
       * Australian Business Number for the organisation
       */
      abn?: string | null;
      /**
       * Australian Company Number for the organisation. Required only if an ACN is applicable for the organisation type
       */
      acn?: string | null;
      /**
       * The first name of the individual providing access on behalf of the organisation. For people with single names this field need not be present.  The single name should be in the lastName field
       */
      agentFirstName?: string | null;
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
       * The date the organisation described was established
       */
      establishmentDate?: string | null;
      /**
       * A valid [ANZSIC](http://www.abs.gov.au/ANZSIC) code for the organisation. If the industry code held by the data holder is not one of the supported [ANZSIC](http://www.abs.gov.au/ANZSIC) versions, then it must not be supplied.
       */
      industryCode?: string | null;
      /**
       * The applicable [ANZSIC](http://www.abs.gov.au/ANZSIC) release version of the industry code provided. Should only be supplied if ``industryCode`` is also supplied. If ``industryCode`` is supplied but ``industryCodeVersion`` is absent, default is ``ANZSIC_1292.0_2006_V2.0``
       */
      industryCodeVersion?: ("ANZSIC_1292.0_2006_V1.0" | "ANZSIC_1292.0_2006_V2.0") | null;
      /**
       * True if registered with the ACNC.  False if not. Absent or null if not confirmed.
       */
      isACNCRegistered?: boolean | null;
      /**
       * The date and time that this record was last updated by the customer. If no update has occurred then this date should reflect the initial creation date for the data
       */
      lastUpdateTime?: string | null;
      /**
       * Legal name, if different to the business name
       */
      legalName?: string | null;
      /**
       * Legal organisation type
       */
      organisationType: "COMPANY" | "GOVERNMENT_ENTITY" | "OTHER" | "PARTNERSHIP" | "SOLE_TRADER" | "TRUST";
      /**
       * Enumeration with values from [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country codes.  Assumed to be AUS if absent
       */
      registeredCountry?: string | null;
      /**
       * Short name used for communication, if different to the business name
       */
      shortName?: string | null;
      [k: string]: unknown;
    } & {
      /**
       * Array is mandatory but may be empty if no valid addresses are held. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail
       */
      physicalAddresses: ({
        /**
         * The type of address object present
         */
        addressUType: "paf" | "simple";
        /**
         * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
         */
        paf?: {
          /**
           * Building/Property name 1
           */
          buildingName1?: string | null;
          /**
           * Building/Property name 2
           */
          buildingName2?: string | null;
          /**
           * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
           */
          dpid?: string | null;
          /**
           * Unit number (including suffix, if applicable)
           */
          flatUnitNumber?: string | null;
          /**
           * Type of flat or unit for the address
           */
          flatUnitType?: string | null;
          /**
           * Floor or level number (including alpha characters)
           */
          floorLevelNumber?: string | null;
          /**
           * Type of floor or level for the address
           */
          floorLevelType?: string | null;
          /**
           * Full name of locality
           */
          localityName: string;
          /**
           * Allotment number for the address
           */
          lotNumber?: string | null;
          /**
           * Postal delivery number if the address is a postal delivery type
           */
          postalDeliveryNumber?: number | null;
          /**
           * Postal delivery number prefix related to the postal delivery number
           */
          postalDeliveryNumberPrefix?: string | null;
          /**
           * Postal delivery number suffix related to the postal delivery number
           */
          postalDeliveryNumberSuffix?: string | null;
          /**
           * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
           */
          postalDeliveryType?: string | null;
          /**
           * Postcode for the locality
           */
          postcode: string;
          /**
           * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
           */
          state: string;
          /**
           * The name of the street
           */
          streetName?: string | null;
          /**
           * The street type suffix. Valid enumeration defined by Australia Post PAF code file
           */
          streetSuffix?: string | null;
          /**
           * The street type. Valid enumeration defined by Australia Post PAF code file
           */
          streetType?: string | null;
          /**
           * Thoroughfare number for a property (first number in a property ranged address)
           */
          thoroughfareNumber1?: number | null;
          /**
           * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
           */
          thoroughfareNumber1Suffix?: string | null;
          /**
           * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
           */
          thoroughfareNumber2?: number | null;
          /**
           * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
           */
          thoroughfareNumber2Suffix?: string | null;
          [k: string]: unknown;
        };
        simple?: {
          /**
           * First line of the standard address object
           */
          addressLine1: string;
          /**
           * Second line of the standard address object
           */
          addressLine2?: string | null;
          /**
           * Third line of the standard address object
           */
          addressLine3?: string | null;
          /**
           * Name of the city or locality
           */
          city: string;
          /**
           * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
           */
          country?: string | null;
          /**
           * Name of the individual or business formatted for inclusion in an address used for physical mail
           */
          mailingName?: string | null;
          /**
           * Mandatory for Australian addresses
           */
          postcode?: string | null;
          /**
           * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
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
    person?: {
      /**
       * For people with single names this field need not be present. The single name should be in the lastName field. Where a data holder cannot determine first and middle names from a collection of given names, a single string representing all given names MAY be provided.
       */
      firstName?: string | null;
      /**
       * For people with single names the single name should be in this field
       */
      lastName: string;
      /**
       * The date and time that this record was last updated by the customer.  If no update has occurred then this date should reflect the initial creation date for the data
       */
      lastUpdateTime?: string | null;
      /**
       * Field is mandatory but array may be empty
       */
      middleNames: string[];
      /**
       * Value is a valid **[[ANZSCO]](#iref-ANZSCO)** Standard Occupation classification code. If the occupation code held by the data holder is not one of the supported **[[ANZSCO]](#iref-ANZSCO)** versions, then it must not be supplied.
       */
      occupationCode?: string | null;
      /**
       * The applicable **[[ANZSCO]](#iref-ANZSCO)** release version of the occupation code provided. Mandatory if an ``occupationCode`` is supplied. If ``occupationCode`` is supplied but ``occupationCodeVersion`` is absent, default is ``ANZSCO_1220.0_2013_V1.2``
       */
      occupationCodeVersion?:
        | (
            | "ANZSCO_1220.0_2006_V1.0"
            | "ANZSCO_1220.0_2006_V1.1"
            | "ANZSCO_1220.0_2013_V1.2"
            | "ANZSCO_1220.0_2013_V1.3"
          )
        | null;
      /**
       * Also known as title or salutation.  The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)
       */
      prefix?: string | null;
      /**
       * Used for a trailing suffix to the name (e.g. Jr)
       */
      suffix?: string | null;
      [k: string]: unknown;
    } & {
      /**
       * Array is mandatory but may be empty if no phone numbers are held
       */
      phoneNumbers: {
        /**
         * Required for non Mobile Phones, if field is present and refers to Australian code - the leading 0 should be omitted.
         */
        areaCode?: string | null;
        /**
         * If absent, assumed to be Australia (+61). The + should be included
         */
        countryCode?: string | null;
        /**
         * An extension number (if applicable)
         */
        extension?: string | null;
        /**
         * Fully formatted phone number with country code, area code, number and extension incorporated. Formatted according to section 5.1.4. of **[[RFC3966]](#iref-RFC3966)**
         */
        fullNumber: string;
        /**
         * May be true for one and only one entry to indicate the preferred phone number. Assumed to be 'false' if not present
         */
        isPreferred?: boolean | null;
        /**
         * The actual phone number, with leading zeros as appropriate
         */
        number: string;
        /**
         * The purpose of the number as specified by the customer
         */
        purpose: "HOME" | "INTERNATIONAL" | "MOBILE" | "OTHER" | "UNSPECIFIED" | "WORK";
        [k: string]: unknown;
      }[];
      /**
       * May be empty
       */
      emailAddresses: {
        /**
         * A correctly formatted email address, as defined by the addr-spec format in **[[RFC5322]](#nref-RFC5322)**
         */
        address: string;
        /**
         * May be true for one and only one email record in the collection. Denotes the default email address
         */
        isPreferred?: boolean | null;
        /**
         * The purpose for the email, as specified by the customer (Enumeration)
         */
        purpose: "HOME" | "OTHER" | "UNSPECIFIED" | "WORK";
        [k: string]: unknown;
      }[];
      /**
       * Array is mandatory but may be empty if no valid addresses are held. One and only one address may have the purpose of REGISTERED. Zero or one, and no more than one, record may have the purpose of MAIL. If zero then the REGISTERED address is to be used for mail
       */
      physicalAddresses: ({
        /**
         * The type of address object present
         */
        addressUType: "paf" | "simple";
        /**
         * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
         */
        paf?: {
          /**
           * Building/Property name 1
           */
          buildingName1?: string | null;
          /**
           * Building/Property name 2
           */
          buildingName2?: string | null;
          /**
           * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
           */
          dpid?: string | null;
          /**
           * Unit number (including suffix, if applicable)
           */
          flatUnitNumber?: string | null;
          /**
           * Type of flat or unit for the address
           */
          flatUnitType?: string | null;
          /**
           * Floor or level number (including alpha characters)
           */
          floorLevelNumber?: string | null;
          /**
           * Type of floor or level for the address
           */
          floorLevelType?: string | null;
          /**
           * Full name of locality
           */
          localityName: string;
          /**
           * Allotment number for the address
           */
          lotNumber?: string | null;
          /**
           * Postal delivery number if the address is a postal delivery type
           */
          postalDeliveryNumber?: number | null;
          /**
           * Postal delivery number prefix related to the postal delivery number
           */
          postalDeliveryNumberPrefix?: string | null;
          /**
           * Postal delivery number suffix related to the postal delivery number
           */
          postalDeliveryNumberSuffix?: string | null;
          /**
           * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
           */
          postalDeliveryType?: string | null;
          /**
           * Postcode for the locality
           */
          postcode: string;
          /**
           * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
           */
          state: string;
          /**
           * The name of the street
           */
          streetName?: string | null;
          /**
           * The street type suffix. Valid enumeration defined by Australia Post PAF code file
           */
          streetSuffix?: string | null;
          /**
           * The street type. Valid enumeration defined by Australia Post PAF code file
           */
          streetType?: string | null;
          /**
           * Thoroughfare number for a property (first number in a property ranged address)
           */
          thoroughfareNumber1?: number | null;
          /**
           * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
           */
          thoroughfareNumber1Suffix?: string | null;
          /**
           * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
           */
          thoroughfareNumber2?: number | null;
          /**
           * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
           */
          thoroughfareNumber2Suffix?: string | null;
          [k: string]: unknown;
        };
        simple?: {
          /**
           * First line of the standard address object
           */
          addressLine1: string;
          /**
           * Second line of the standard address object
           */
          addressLine2?: string | null;
          /**
           * Third line of the standard address object
           */
          addressLine3?: string | null;
          /**
           * Name of the city or locality
           */
          city: string;
          /**
           * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
           */
          country?: string | null;
          /**
           * Name of the individual or business formatted for inclusion in an address used for physical mail
           */
          mailingName?: string | null;
          /**
           * Mandatory for Australian addresses
           */
          postcode?: string | null;
          /**
           * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
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
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface ResponseCommonDiscoveryStatus {
  data: {
    /**
     * The date and time that the current outage was detected. Should only be present if the status property is PARTIAL_FAILURE or UNAVAILABLE
     */
    detectionTime?: string | null;
    /**
     * The date and time that full service is expected to resume (if known). Should not be present if the status property has a value of OK.
     */
    expectedResolutionTime?: string | null;
    /**
     * Provides an explanation of the current outage that can be displayed to an end customer. Mandatory if the status property is any value other than OK
     */
    explanation?: string | null;
    /**
     * Enumeration with values. OK (implementation is fully functional). PARTIAL_FAILURE (one or more end points are unexpectedly unavailable). UNAVAILABLE (the full implementation is unexpectedly unavailable). SCHEDULED_OUTAGE (an advertised outage is in effect)
     */
    status: "OK" | "PARTIAL_FAILURE" | "SCHEDULED_OUTAGE" | "UNAVAILABLE";
    /**
     * The date and time that this status was last updated by the Data Holder.
     */
    updateTime: string;
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
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface ResponseDiscoveryOutagesList {
  data: {
    /**
     * List of scheduled outages. Property is mandatory but may contain and empty list if no outages are scheduled
     */
    outages: {
      /**
       * Planned duration of the outage. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
       */
      duration: string;
      /**
       * Provides an explanation of the current outage that can be displayed to an end customer
       */
      explanation: string;
      /**
       * Flag that indicates, if present and set to true, that the outage is only partial meaning that only a subset of normally available end points will be affected by the outage
       */
      isPartial?: boolean | null;
      /**
       * Date and time that the outage is scheduled to begin
       */
      outageTime: string;
      [k: string]: unknown;
    }[];
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
/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

export interface ResponseErrorListV2 {
  errors: {
    /**
     * The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.
     */
    code: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     */
    detail: string;
    /**
     * Additional data for customised error codes
     */
    meta?: {
      /**
       * The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.
       */
      urn?: string | null;
      [k: string]: unknown;
    };
    /**
     * A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.
     */
    title: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
