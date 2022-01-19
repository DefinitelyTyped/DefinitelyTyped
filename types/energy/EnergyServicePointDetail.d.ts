/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyServicePointDetail {
  /**
   * The tokenised ID of the service point for use in the CDR APIs.  Created according to the CDR rules for ID permanence
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
  distributionLossFactor: {
    /**
     * A code used to identify data loss factor for the service point values.  Refer to AEMO distribution loss factor documents for each financial year to interpret
     */
    code: string;
    /**
     * Description of the data loss factor code and value
     */
    description: string;
    /**
     * The value associated with the loss factor code
     */
    lossValue: string;
    [k: string]: unknown;
  };
  relatedParticipants: {
    /**
     * The name of the party/orginsation related to this service point
     */
    party: string;
    /**
     * The role performed by this participant in relation to the service point. Note the details of enumeration values below: <ul><li>**FRMP** - Financially Responsible Market Participant</li><li>**LNSP** - Local Network Service Provider or Embedded Network Manager for child connection points</li><li>**DRSP** - wholesale Demand Response and/or market ancillary Service Provider and note that where it is not relevant for a NMI it will not be included</li></ul>
     */
    role: "FRMP" | "LNSP" | "DRSP";
    [k: string]: unknown;
  }[];
  location: {
    /**
     * The type of address object present
     */
    addressUType: "simple" | "paf";
    /**
     * The address of the service point.  Mandatory if addressUType is set to simple
     */
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
     * The address of the service point.  Mandatory if addressUType is set to paf. Formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf)
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
  };
  meters: {
    /**
     * The meter ID uniquely identifies a meter for a given service point.  It is unique in the context of the service point.  It is not globally unique
     */
    meterId: string;
    /**
     * Technical characteristics of the meter
     */
    specifications: {
      /**
       * A code to denote the status of the meter. Note the details of enumeration values below: <ul><li>**CURRENT** -Applies when a meter is current and not disconnected</li><li>**DISCONNECTED** - Applies when a meter is present but has been remotely disconnected</li></ul>
       */
      status: "CURRENT" | "DISCONNECTED";
      /**
       * The metering Installation type code indicates whether the metering installation has to be manually read. Note the details of enumeration values below: <ul><li>**BASIC** - Accumulation Meter – Type 6</li><li>**COMMS1** - Interval Meter with communications – Type 1</li><li>**COMMS2** - Interval Meter with communications – Type 2</li><li>**COMMS3** - Interval Meter with communications – Type 3</li><li>**COMMS4** - Interval Meter with communications – Type 4</li><li>**COMMS4C** - CT connected metering installation that meets the minimum services specifications</li><li>**COMMS4D** - Whole current metering installation that meets the minimum services specifications</li><li>**MRAM** - Small customer metering installation – Type 4A</li><li>**MRIM** - Manually Read Interval Meter – Type 5</li><li>**UMCP** - Unmetered Supply – Type 7</li><li>**VICAMI** - A relevant metering installation as defined in clause 9.9C of the NER</li><li>**NCONUML** - Non-contestable unmeter load - Introduced as part of Global Settlement</li></ul>
       */
      installationType:
        | "BASIC"
        | "COMMS1"
        | "COMMS2"
        | "COMMS3"
        | "COMMS4"
        | "COMMS4C"
        | "COMMS4D"
        | "MRAM"
        | "MRIM"
        | "PROF"
        | "SAMPLE"
        | "UMCP"
        | "VICAMI"
        | "NCOLNUML";
      /**
       * Free text field to identify the manufacturer of the installed meter
       */
      manufacturer?: string;
      /**
       * Free text field to identify the meter manufacturer’s designation for the meter model
       */
      model?: string;
      /**
       * Code to denote the method and frequency of Meter Reading. The value is formatted as follows: <ul><li>First Character = Remote (R) or Manual (M)</li><li>Second Character = Mode: T = telephone W = wireless P = powerline I = infra-red G = galvanic V = visual </li><li>Third Character = Frequency of Scheduled Meter Readings: 1 = Twelve times per year 2 = Six times per year 3 = Four times per year D = Daily or weekly</li><li>Optional Fourth Character = to identify what interval length the meter is capable of reading. This includes five, 15 and 30 minute granularity as the following: A – 5 minute B – 15 minute C – 30 minute D – Cannot convert to 5 minute (i.e. due to metering installation de-energised) M - Manually Read Accumulation Meter</li></ul> For example, <ul><li>MV3 = Manual, Visual, Quarterly</li> <li>MV3M = Manual, Visual, Quarterly, Manually Read Accumulation Meter</li> <li>RWDC = Remote, Wireless, Daily, 30 minutes interval</li></ul>
       */
      readType?: string;
      /**
       * This date is the next scheduled meter read date (NSRD) if a manual Meter Reading is required
       */
      nextScheduledReadDate?: string;
      [k: string]: unknown;
    };
    /**
     * Usage data registers available from the meter
     */
    registers: {
      /**
       * Unique identifier of the register within this service point.  Is not globally unique
       */
      registerId: string;
      /**
       * Register suffix of the meter register where the meter reads are obtained
       */
      registerSuffix: string;
      /**
       * The energy delivered through a connection point or metering point over an extended period normalised to a 'per day' basis (kWh). This value is calculated annually.
       */
      averagedDailyLoad?: number;
      /**
       * Indicates the consumption type of register
       */
      registerConsumptionType:
        | "INTERVAL"
        | "BASIC"
        | "PROFILE_DATA"
        | "ACTIVE_IMPORT"
        | "ACTIVE"
        | "REACTIVE_IMPORT"
        | "REACTIVE";
      /**
       * The Network Tariff Code is a free text field containing a code supplied and published by the local network service provider
       */
      networkTariffCode?: string;
      /**
       * The unit of measure for data held in this register
       */
      unitOfMeasure?: string;
      /**
       * Code to identify the time validity of register contents
       */
      timeOfDay?:
        | "ALLDAY"
        | "INTERVAL"
        | "PEAK"
        | "BUSINESS"
        | "SHOULDER"
        | "EVENING"
        | "OFFPEAK"
        | "CONTROLLED"
        | "DEMAND";
      /**
       * Multiplier required to take a register value and turn it into a value representing billable energy
       */
      multiplier?: number;
      /**
       * Indicates whether the energy recorded by this register is created under a Controlled Load regime. ControlledLoad field will have 'No' if register does not relate to a Controlled Load.  If the register relates to a Controlled Load, it should contain a description of the Controlled Load regime. ControlledLoad field will have 'No' if register does not relate to a Controlled Load, “Yes” if register relates to a Controlled Load If absent the status is unknown.
       */
      controlledLoad?: boolean;
      /**
       * Actual/Subtractive Indicator. Note the details of enumeration values below: <ul><li>**ACTUAL** implies volume of energy actually metered between two dates</li><li>**CUMULATIVE** indicates a meter reading for a specific date. A second Meter Reading is required to determine the consumption between those two Meter Reading dates</li></ul>
       */
      consumptionType?: "ACTUAL" | "CUMULATIVE";
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
