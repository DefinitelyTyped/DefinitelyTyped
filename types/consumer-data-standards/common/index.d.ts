/* tslint:disable: array-type max-line-length no-trailing-whitespace */
export interface CommonEmailAddress {
    /**
     * May be true for one and only one email record in the collection. Denotes the default email address
     */
    isPreferred?: boolean;
    /**
     * The purpose for the email, as specified by the customer (Enumeration)
     */
    purpose: "HOME" | "OTHER" | "UNSPECIFIED" | "WORK";
    /**
     * A correctly formatted email address, as defined by the addr_spec format in [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt)
     */
    address: string;
    [k: string]: unknown;
  }
  
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
/**
 * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
 */
 export interface CommonPAFAddress {
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
  }
  export interface CommonPerson {
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
  }
  export type CommonPersonDetail = {
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
  } & {
    /**
     * Array is mandatory but may be empty if no phone numbers are held
     */
    phoneNumbers: {
      /**
       * May be true for one and only one entry to indicate the preferred phone number. Assumed to be 'false' if not present
       */
      isPreferred?: boolean;
      /**
       * The purpose of the number as specified by the customer
       */
      purpose: "HOME" | "INTERNATIONAL" | "MOBILE" | "OTHER" | "UNSPECIFIED" | "WORK";
      /**
       * If absent, assumed to be Australia (+61). The + should be included
       */
      countryCode?: string;
      /**
       * Required for non Mobile Phones, if field is present and refers to Australian code - the leading 0 should be omitted.
       */
      areaCode?: string;
      /**
       * The actual phone number, with leading zeros as appropriate
       */
      number: string;
      /**
       * An extension number (if applicable)
       */
      extension?: string;
      /**
       * Fully formatted phone number with country code, area code, number and extension incorporated. Formatted according to section 5.1.4. of [RFC 3966](https://www.ietf.org/rfc/rfc3966.txt)
       */
      fullNumber: string;
      [k: string]: unknown;
    }[];
    /**
     * May be empty
     */
    emailAddresses: {
      /**
       * May be true for one and only one email record in the collection. Denotes the default email address
       */
      isPreferred?: boolean;
      /**
       * The purpose for the email, as specified by the customer (Enumeration)
       */
      purpose: "HOME" | "OTHER" | "UNSPECIFIED" | "WORK";
      /**
       * A correctly formatted email address, as defined by the addr_spec format in [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt)
       */
      address: string;
      [k: string]: unknown;
    }[];
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

  export interface CommonPhoneNumber {
    /**
     * May be true for one and only one entry to indicate the preferred phone number. Assumed to be 'false' if not present
     */
    isPreferred?: boolean;
    /**
     * The purpose of the number as specified by the customer
     */
    purpose: "HOME" | "INTERNATIONAL" | "MOBILE" | "OTHER" | "UNSPECIFIED" | "WORK";
    /**
     * If absent, assumed to be Australia (+61). The + should be included
     */
    countryCode?: string;
    /**
     * Required for non Mobile Phones, if field is present and refers to Australian code - the leading 0 should be omitted.
     */
    areaCode?: string;
    /**
     * The actual phone number, with leading zeros as appropriate
     */
    number: string;
    /**
     * An extension number (if applicable)
     */
    extension?: string;
    /**
     * Fully formatted phone number with country code, area code, number and extension incorporated. Formatted according to section 5.1.4. of [RFC 3966](https://www.ietf.org/rfc/rfc3966.txt)
     */
    fullNumber: string;
    [k: string]: unknown;
  }

  export interface CommonPhysicalAddress {
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
  }
  export type CommonPhysicalAddressWithPurpose = {
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
  };

  export interface CommonSimpleAddress {
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
  }

  export interface DiscoveryOutage {
    /**
     * Date and time that the outage is scheduled to begin
     */
    outageTime: string;
    /**
     * Planned duration of the outage. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    duration: string;
    /**
     * Flag that indicates, if present and set to true, that the outage is only partial meaning that only a subset of normally available end points will be affected by the outage
     */
    isPartial?: boolean;
    /**
     * Provides an explanation of the current outage that can be displayed to an end customer
     */
    explanation: string;
    [k: string]: unknown;
  }
  export interface Links {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  }

  export interface LinksPaginated {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    [k: string]: unknown;
  }
  export interface Meta {
    [k: string]: unknown;
  }
/**
 * Additional data for customised error codes
 */
 export interface MetaError {
    /**
     * The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.
     */
    urn?: string;
    [k: string]: unknown;
  }

  export interface MetaPaginated {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  }
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
  export interface ResponseCommonCustomerDetail {
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
      } & {
        /**
         * Array is mandatory but may be empty if no phone numbers are held
         */
        phoneNumbers: {
          /**
           * May be true for one and only one entry to indicate the preferred phone number. Assumed to be 'false' if not present
           */
          isPreferred?: boolean;
          /**
           * The purpose of the number as specified by the customer
           */
          purpose: "HOME" | "INTERNATIONAL" | "MOBILE" | "OTHER" | "UNSPECIFIED" | "WORK";
          /**
           * If absent, assumed to be Australia (+61). The + should be included
           */
          countryCode?: string;
          /**
           * Required for non Mobile Phones, if field is present and refers to Australian code - the leading 0 should be omitted.
           */
          areaCode?: string;
          /**
           * The actual phone number, with leading zeros as appropriate
           */
          number: string;
          /**
           * An extension number (if applicable)
           */
          extension?: string;
          /**
           * Fully formatted phone number with country code, area code, number and extension incorporated. Formatted according to section 5.1.4. of [RFC 3966](https://www.ietf.org/rfc/rfc3966.txt)
           */
          fullNumber: string;
          [k: string]: unknown;
        }[];
        /**
         * May be empty
         */
        emailAddresses: {
          /**
           * May be true for one and only one email record in the collection. Denotes the default email address
           */
          isPreferred?: boolean;
          /**
           * The purpose for the email, as specified by the customer (Enumeration)
           */
          purpose: "HOME" | "OTHER" | "UNSPECIFIED" | "WORK";
          /**
           * A correctly formatted email address, as defined by the addr_spec format in [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt)
           */
          address: string;
          [k: string]: unknown;
        }[];
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

  export interface ResponseCommonDiscoveryStatus {
    data: {
      /**
       * Enumeration with values. OK (implementation is fully functional). PARTIAL_FAILURE (one or more end points are unexpectedly unavailable). UNAVAILABLE (the full implementation is unexpectedly unavailable). SCHEDULED_OUTAGE (an advertised outage is in effect)
       */
      status: "OK" | "PARTIAL_FAILURE" | "SCHEDULED_OUTAGE" | "UNAVAILABLE";
      /**
       * Provides an explanation of the current outage that can be displayed to an end customer. Mandatory if the status property is any value other than OK
       */
      explanation?: string;
      /**
       * The date and time that the current outage was detected. Should only be present if the status property is PARTIAL_FAILURE or UNAVAILABLE
       */
      detectionTime?: string;
      /**
       * The date and time that full service is expected to resume (if known). Should not be present if the status property has a value of OK.
       */
      expectedResolutionTime?: string;
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
  export interface ResponseDiscoveryOutagesList {
    data: {
      /**
       * List of scheduled outages. Property is mandatory but may contain and empty list if no outages are scheduled
       */
      outages: {
        /**
         * Date and time that the outage is scheduled to begin
         */
        outageTime: string;
        /**
         * Planned duration of the outage. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
         */
        duration: string;
        /**
         * Flag that indicates, if present and set to true, that the outage is only partial meaning that only a subset of normally available end points will be affected by the outage
         */
        isPartial?: boolean;
        /**
         * Provides an explanation of the current outage that can be displayed to an end customer
         */
        explanation: string;
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

  export interface ResponseErrorListV2 {
    errors: {
      /**
       * The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.
       */
      code: string;
      /**
       * A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.
       */
      title: string;
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
        urn?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  }
