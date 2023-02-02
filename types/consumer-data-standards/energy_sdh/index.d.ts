/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

/**
 * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if addressUType is set to paf
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
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface CommonPhysicalAddress {
  /**
   * The type of address object present
   */
  addressUType: "paf" | "simple";
  /**
   * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if addressUType is set to paf
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
  /**
   * Required if addressUType is set to simple
   */
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
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

/**
 * Required if addressUType is set to simple
 */
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
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface EnergyDerDetailResponse {
  data: {
    acConnections: {
      /**
       * The date that the DER installation is commissioned
       */
      commissioningDate: string;
      /**
       * AC Connection ID as defined in the DER register.  Does not align with CDR ID permanence standards
       */
      connectionIdentifier: number;
      /**
       * Number of AC Connections in the group. For the suite of AC Connections to be considered as a group, all of the AC Connections included must have the same attributes
       */
      count: number;
      derDevices: {
        /**
         * Number of devices in the group of DER devices
         */
        count: number;
        /**
         * Unique identifier for a single DER device or a group of DER devices with the same attributes. Does not align with CDR ID permanence standards
         */
        deviceIdentifier: number;
        /**
         * The name of the device manufacturer. If absent then assumed to be “unknown”
         */
        manufacturer?: string;
        /**
         * The model number of the device. If absent then assumed to be “unknown”
         */
        modelNumber?: string;
        /**
         * Maximum output in kVA that is listed in the product specification by the manufacturer. This refers to the capacity of each unit within the device group
         */
        nominalRatedCapacity: number;
        /**
         * Maximum storage capacity in kVAh. This refers to the capacity of each storage module within the device group. Mandatory if type is equal to “STORAGE”
         */
        nominalStorageCapacity?: number;
        /**
         * Code used to indicate the status of the device. This will be used to identify if an inverter is active or inactive or decommissioned
         */
        status?: "ACTIVE" | "INACTIVE" | "DECOMMISSIONED";
        /**
         * Used to indicate the primary technology used in the DER device. This field is also used to record for example the battery chemistry, or the type of PV panel. It is also used to record if a battery is contained in an electric vehicle connected in a vehicle-to-grid arrangement. If absent then assumed to be “other”
         */
        subtype?: string;
        /**
         * Used to indicate the primary technology used in the DER device
         */
        type: "FOSSIL" | "HYDRO" | "WIND" | "SOLAR_PV" | "RENEWABLE" | "GEOTHERMAL" | "STORAGE" | "OTHER";
        [k: string]: unknown;
      }[];
      /**
       * Indicates whether the DER device is connected via an inverter (and what category of inverter it is) or not (e.g. rotating machine). If absent, assume equipment type to be “OTHER”.
       */
      equipmentType?: "INVERTER" | "OTHER";
      /**
       * The rated AC output power that is listed in the product specified by the manufacturer. Mandatory if equipmentType is INVERTER
       */
      inverterDeviceCapacity?: number;
      /**
       * The inverter model number. Mandatory if equipmentType is INVERTER
       */
      inverterModelNumber?: string;
      /**
       * The inverter series. Mandatory if equipmentType is INVERTER
       */
      inverterSeries?: string;
      /**
       * The name of the inverter manufacturer. Mandatory if equipmentType is INVERTER
       */
      manufacturerName?: string;
      /**
       * Code used to indicate the status of the Inverter. This will be used to identify if an inverter is active or inactive or decommissioned
       */
      status: "ACTIVE" | "INACTIVE" | "DECOMMISSIONED";
      [k: string]: unknown;
    }[];
    /**
     * Approved small generating unit capacity as agreed with NSP in the connection agreement, expressed in kVA
     */
    approvedCapacity: number;
    /**
     * The number of phases available for the installation of DER. Acceptable values are 1, 2 or 3.
     */
    availablePhasesCount: number;
    /**
     * For DER installations where NSPs specify the need for additional forms of protection above those inbuilt in an inverter.  If absent then assumed to be false
     */
    hasCentralProtectionControl?: boolean | null;
    /**
     * The number of phases that DER is connected to. Acceptable values are 1, 2 or 3.
     */
    installedPhasesCount: number;
    /**
     * For identification of small generating units designed with the ability to operate in an islanded mode
     */
    islandableInstallation: boolean;
    /**
     * Required only when the hasCentralProtectionAndControl flag is set to true.  One or more of the object fields will be provided to describe the protection modes in place
     */
    protectionMode?: {
      /**
       * Maximum amount of power (kVA) that may be exported from a connection point to the grid, as monitored by a control / relay function. An absent value indicates no limit
       */
      exportLimitKva?: number | null;
      /**
       * Rate of change of frequency trip point (Hz/s).
       */
      frequencyRateOfChange?: number | null;
      /**
       * Description of the form of inter-trip (e.g. 'from local substation').
       */
      interTripScheme?: string | null;
      /**
       * Trip voltage.
       */
      neutralVoltageDisplacement?: number | null;
      /**
       * Protective function limit in Hz.
       */
      overFrequencyProtection?: number | null;
      /**
       * Trip delay time in seconds.
       */
      overFrequencyProtectionDelay?: number | null;
      /**
       * Protective function limit in V.
       */
      overVoltageProtection?: number | null;
      /**
       * Trip delay time in seconds.
       */
      overVoltageProtectionDelay?: number | null;
      /**
       * Sustained over voltage.
       */
      sustainedOverVoltage?: number | null;
      /**
       * Sustained Over voltage protection delay in seconds.
       */
      sustainedOverVoltageDelay?: number | null;
      /**
       * Protective function limit in Hz.
       */
      underFrequencyProtection?: number | null;
      /**
       * Trip delay time in seconds.
       */
      underFrequencyProtectionDelay?: number | null;
      /**
       * Protective function limit in V.
       */
      underVoltageProtection?: number | null;
      /**
       * Trip delay time in seconds.
       */
      underVoltageProtectionDelay?: number | null;
      /**
       * Trip angle in degrees.
       */
      voltageVectorShift?: number | null;
      [k: string]: unknown;
    } | null;
    /**
     * The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.
     */
    servicePointId: string;
    [k: string]: unknown;
  };
  links: {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface EnergyDerListResponse {
  data: {
    /**
     * Array of meter reads
     */
    derRecords: {
      acConnections: {
        /**
         * The date that the DER installation is commissioned
         */
        commissioningDate: string;
        /**
         * AC Connection ID as defined in the DER register.  Does not align with CDR ID permanence standards
         */
        connectionIdentifier: number;
        /**
         * Number of AC Connections in the group. For the suite of AC Connections to be considered as a group, all of the AC Connections included must have the same attributes
         */
        count: number;
        derDevices: {
          /**
           * Number of devices in the group of DER devices
           */
          count: number;
          /**
           * Unique identifier for a single DER device or a group of DER devices with the same attributes. Does not align with CDR ID permanence standards
           */
          deviceIdentifier: number;
          /**
           * The name of the device manufacturer. If absent then assumed to be “unknown”
           */
          manufacturer?: string;
          /**
           * The model number of the device. If absent then assumed to be “unknown”
           */
          modelNumber?: string;
          /**
           * Maximum output in kVA that is listed in the product specification by the manufacturer. This refers to the capacity of each unit within the device group
           */
          nominalRatedCapacity: number;
          /**
           * Maximum storage capacity in kVAh. This refers to the capacity of each storage module within the device group. Mandatory if type is equal to “STORAGE”
           */
          nominalStorageCapacity?: number;
          /**
           * Code used to indicate the status of the device. This will be used to identify if an inverter is active or inactive or decommissioned
           */
          status?: "ACTIVE" | "INACTIVE" | "DECOMMISSIONED";
          /**
           * Used to indicate the primary technology used in the DER device. This field is also used to record for example the battery chemistry, or the type of PV panel. It is also used to record if a battery is contained in an electric vehicle connected in a vehicle-to-grid arrangement. If absent then assumed to be “other”
           */
          subtype?: string;
          /**
           * Used to indicate the primary technology used in the DER device
           */
          type: "FOSSIL" | "HYDRO" | "WIND" | "SOLAR_PV" | "RENEWABLE" | "GEOTHERMAL" | "STORAGE" | "OTHER";
          [k: string]: unknown;
        }[];
        /**
         * Indicates whether the DER device is connected via an inverter (and what category of inverter it is) or not (e.g. rotating machine). If absent, assume equipment type to be “OTHER”.
         */
        equipmentType?: "INVERTER" | "OTHER";
        /**
         * The rated AC output power that is listed in the product specified by the manufacturer. Mandatory if equipmentType is INVERTER
         */
        inverterDeviceCapacity?: number;
        /**
         * The inverter model number. Mandatory if equipmentType is INVERTER
         */
        inverterModelNumber?: string;
        /**
         * The inverter series. Mandatory if equipmentType is INVERTER
         */
        inverterSeries?: string;
        /**
         * The name of the inverter manufacturer. Mandatory if equipmentType is INVERTER
         */
        manufacturerName?: string;
        /**
         * Code used to indicate the status of the Inverter. This will be used to identify if an inverter is active or inactive or decommissioned
         */
        status: "ACTIVE" | "INACTIVE" | "DECOMMISSIONED";
        [k: string]: unknown;
      }[];
      /**
       * Approved small generating unit capacity as agreed with NSP in the connection agreement, expressed in kVA
       */
      approvedCapacity: number;
      /**
       * The number of phases available for the installation of DER. Acceptable values are 1, 2 or 3.
       */
      availablePhasesCount: number;
      /**
       * For DER installations where NSPs specify the need for additional forms of protection above those inbuilt in an inverter.  If absent then assumed to be false
       */
      hasCentralProtectionControl?: boolean | null;
      /**
       * The number of phases that DER is connected to. Acceptable values are 1, 2 or 3.
       */
      installedPhasesCount: number;
      /**
       * For identification of small generating units designed with the ability to operate in an islanded mode
       */
      islandableInstallation: boolean;
      /**
       * Required only when the hasCentralProtectionAndControl flag is set to true.  One or more of the object fields will be provided to describe the protection modes in place
       */
      protectionMode?: {
        /**
         * Maximum amount of power (kVA) that may be exported from a connection point to the grid, as monitored by a control / relay function. An absent value indicates no limit
         */
        exportLimitKva?: number | null;
        /**
         * Rate of change of frequency trip point (Hz/s).
         */
        frequencyRateOfChange?: number | null;
        /**
         * Description of the form of inter-trip (e.g. 'from local substation').
         */
        interTripScheme?: string | null;
        /**
         * Trip voltage.
         */
        neutralVoltageDisplacement?: number | null;
        /**
         * Protective function limit in Hz.
         */
        overFrequencyProtection?: number | null;
        /**
         * Trip delay time in seconds.
         */
        overFrequencyProtectionDelay?: number | null;
        /**
         * Protective function limit in V.
         */
        overVoltageProtection?: number | null;
        /**
         * Trip delay time in seconds.
         */
        overVoltageProtectionDelay?: number | null;
        /**
         * Sustained over voltage.
         */
        sustainedOverVoltage?: number | null;
        /**
         * Sustained Over voltage protection delay in seconds.
         */
        sustainedOverVoltageDelay?: number | null;
        /**
         * Protective function limit in Hz.
         */
        underFrequencyProtection?: number | null;
        /**
         * Trip delay time in seconds.
         */
        underFrequencyProtectionDelay?: number | null;
        /**
         * Protective function limit in V.
         */
        underVoltageProtection?: number | null;
        /**
         * Trip delay time in seconds.
         */
        underVoltageProtectionDelay?: number | null;
        /**
         * Trip angle in degrees.
         */
        voltageVectorShift?: number | null;
        [k: string]: unknown;
      } | null;
      /**
       * The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.
       */
      servicePointId: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface EnergyDerRecord {
  acConnections: {
    /**
     * The date that the DER installation is commissioned
     */
    commissioningDate: string;
    /**
     * AC Connection ID as defined in the DER register.  Does not align with CDR ID permanence standards
     */
    connectionIdentifier: number;
    /**
     * Number of AC Connections in the group. For the suite of AC Connections to be considered as a group, all of the AC Connections included must have the same attributes
     */
    count: number;
    derDevices: {
      /**
       * Number of devices in the group of DER devices
       */
      count: number;
      /**
       * Unique identifier for a single DER device or a group of DER devices with the same attributes. Does not align with CDR ID permanence standards
       */
      deviceIdentifier: number;
      /**
       * The name of the device manufacturer. If absent then assumed to be “unknown”
       */
      manufacturer?: string;
      /**
       * The model number of the device. If absent then assumed to be “unknown”
       */
      modelNumber?: string;
      /**
       * Maximum output in kVA that is listed in the product specification by the manufacturer. This refers to the capacity of each unit within the device group
       */
      nominalRatedCapacity: number;
      /**
       * Maximum storage capacity in kVAh. This refers to the capacity of each storage module within the device group. Mandatory if type is equal to “STORAGE”
       */
      nominalStorageCapacity?: number;
      /**
       * Code used to indicate the status of the device. This will be used to identify if an inverter is active or inactive or decommissioned
       */
      status?: "ACTIVE" | "INACTIVE" | "DECOMMISSIONED";
      /**
       * Used to indicate the primary technology used in the DER device. This field is also used to record for example the battery chemistry, or the type of PV panel. It is also used to record if a battery is contained in an electric vehicle connected in a vehicle-to-grid arrangement. If absent then assumed to be “other”
       */
      subtype?: string;
      /**
       * Used to indicate the primary technology used in the DER device
       */
      type: "FOSSIL" | "HYDRO" | "WIND" | "SOLAR_PV" | "RENEWABLE" | "GEOTHERMAL" | "STORAGE" | "OTHER";
      [k: string]: unknown;
    }[];
    /**
     * Indicates whether the DER device is connected via an inverter (and what category of inverter it is) or not (e.g. rotating machine). If absent, assume equipment type to be “OTHER”.
     */
    equipmentType?: "INVERTER" | "OTHER";
    /**
     * The rated AC output power that is listed in the product specified by the manufacturer. Mandatory if equipmentType is INVERTER
     */
    inverterDeviceCapacity?: number;
    /**
     * The inverter model number. Mandatory if equipmentType is INVERTER
     */
    inverterModelNumber?: string;
    /**
     * The inverter series. Mandatory if equipmentType is INVERTER
     */
    inverterSeries?: string;
    /**
     * The name of the inverter manufacturer. Mandatory if equipmentType is INVERTER
     */
    manufacturerName?: string;
    /**
     * Code used to indicate the status of the Inverter. This will be used to identify if an inverter is active or inactive or decommissioned
     */
    status: "ACTIVE" | "INACTIVE" | "DECOMMISSIONED";
    [k: string]: unknown;
  }[];
  /**
   * Approved small generating unit capacity as agreed with NSP in the connection agreement, expressed in kVA
   */
  approvedCapacity: number;
  /**
   * The number of phases available for the installation of DER. Acceptable values are 1, 2 or 3.
   */
  availablePhasesCount: number;
  /**
   * For DER installations where NSPs specify the need for additional forms of protection above those inbuilt in an inverter.  If absent then assumed to be false
   */
  hasCentralProtectionControl?: boolean | null;
  /**
   * The number of phases that DER is connected to. Acceptable values are 1, 2 or 3.
   */
  installedPhasesCount: number;
  /**
   * For identification of small generating units designed with the ability to operate in an islanded mode
   */
  islandableInstallation: boolean;
  /**
   * Required only when the hasCentralProtectionAndControl flag is set to true.  One or more of the object fields will be provided to describe the protection modes in place
   */
  protectionMode?: {
    /**
     * Maximum amount of power (kVA) that may be exported from a connection point to the grid, as monitored by a control / relay function. An absent value indicates no limit
     */
    exportLimitKva?: number | null;
    /**
     * Rate of change of frequency trip point (Hz/s).
     */
    frequencyRateOfChange?: number | null;
    /**
     * Description of the form of inter-trip (e.g. 'from local substation').
     */
    interTripScheme?: string | null;
    /**
     * Trip voltage.
     */
    neutralVoltageDisplacement?: number | null;
    /**
     * Protective function limit in Hz.
     */
    overFrequencyProtection?: number | null;
    /**
     * Trip delay time in seconds.
     */
    overFrequencyProtectionDelay?: number | null;
    /**
     * Protective function limit in V.
     */
    overVoltageProtection?: number | null;
    /**
     * Trip delay time in seconds.
     */
    overVoltageProtectionDelay?: number | null;
    /**
     * Sustained over voltage.
     */
    sustainedOverVoltage?: number | null;
    /**
     * Sustained Over voltage protection delay in seconds.
     */
    sustainedOverVoltageDelay?: number | null;
    /**
     * Protective function limit in Hz.
     */
    underFrequencyProtection?: number | null;
    /**
     * Trip delay time in seconds.
     */
    underFrequencyProtectionDelay?: number | null;
    /**
     * Protective function limit in V.
     */
    underVoltageProtection?: number | null;
    /**
     * Trip delay time in seconds.
     */
    underVoltageProtectionDelay?: number | null;
    /**
     * Trip angle in degrees.
     */
    voltageVectorShift?: number | null;
    [k: string]: unknown;
  } | null;
  /**
   * The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.
   */
  servicePointId: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface EnergyServicePoint {
  consumerProfile?: {
    /**
     * A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments
     */
    classification?: ("BUSINESS" | "RESIDENTIAL") | null;
    /**
     * A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments. Note the details of enumeration values below: <ul><li>**LOW** - Consumption is less than the ‘lower consumption threshold’ as defined in the National Energy Retail Regulations</li><li>**MEDIUM** - Consumption is equal to or greater than the ‘lower consumption threshold’, but less than the ‘upper consumption threshold’, as defined in the National Energy Retail Regulations</li><li>**HIGH** - Consumption is equal to or greater than the ‘upper consumption threshold’ as defined in the National Energy Retail Regulations</li></ul>
     */
    threshold?: "LOW" | "MEDIUM" | "HIGH";
    [k: string]: unknown;
  } | null;
  /**
   * This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit(this may include generator auxiliary loads). If absent defaults to false. <br>**Note:** Only applicable for scheduled or semischeduled generators, does not indicate on site generation by consumer
   */
  isGenerator?: boolean | null;
  /**
   * Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point. Note the details of enumeration values below:<ul><li>**ALL** - All Jurisdictions</li><li>**ACT** - Australian Capital Territory</li><li>**NEM** - National Electricity Market</li><li>**NSW** - New South Wales</li><li>**QLD** - Queensland</li><li>**SA** - South Australia</li><li>**TAS** - Tasmania</li><li>**VIC** - Victoria</li></ul>
   */
  jurisdictionCode: "ALL" | "ACT" | "NEM" | "NSW" | "QLD" | "SA" | "TAS" | "VIC";
  /**
   * The date and time that the information for this service point was modified
   */
  lastUpdateDateTime: string;
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
   * The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.
   */
  servicePointId: string;
  /**
   * Code used to indicate the status of the service point. Note the details for the enumeration values below:<ul><li>**ACTIVE** - An active, energised, service point</li><li>**DE_ENERGISED** - The service point exists but is deenergised</li><li>**EXTINCT** - The service point has been permanently decommissioned</li><li>**GREENFIELD** - Applies to a service point that has never been energised</li><li>**OFF_MARKET** - Applies when the service point is no longer settled in the NEM</li></ul>
   */
  servicePointStatus: "ACTIVE" | "DE_ENERGISED" | "EXTINCT" | "GREENFIELD" | "OFF_MARKET";
  /**
   * The start date from which this service point first became valid
   */
  validFromDate: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface EnergyServicePointDetail {
  consumerProfile?: {
    /**
     * A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments
     */
    classification?: ("BUSINESS" | "RESIDENTIAL") | null;
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
  /**
   * This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit(this may include generator auxiliary loads). If absent defaults to false. <br>**Note:** Only applicable for scheduled or semischeduled generators, does not indicate on site generation by consumer
   */
  isGenerator?: boolean | null;
  /**
   * Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point. Note the details of enumeration values below:<ul><li>**ALL** - All Jurisdictions</li><li>**ACT** - Australian Capital Territory</li><li>**NEM** - National Electricity Market</li><li>**NSW** - New South Wales</li><li>**QLD** - Queensland</li><li>**SA** - South Australia</li><li>**TAS** - Tasmania</li><li>**VIC** - Victoria</li></ul>
   */
  jurisdictionCode: "ALL" | "ACT" | "NEM" | "NSW" | "QLD" | "SA" | "TAS" | "VIC";
  /**
   * The date and time that the information for this service point was modified
   */
  lastUpdateDateTime: string;
  /**
   * Location of the servicepoint
   */
  location: {
    /**
     * The type of address object present
     */
    addressUType: "paf" | "simple";
    /**
     * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if addressUType is set to paf
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
    /**
     * Required if addressUType is set to simple
     */
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
  };
  /**
   * The meters associated with the service point. This may be empty where there are no meters physically installed at the service point
   */
  meters?:
    | {
        /**
         * The meter ID uniquely identifies a meter for a given service point.  It is unique in the context of the service point.  It is not globally unique
         */
        meterId: string;
        /**
         * Usage data registers available from the meter. This may be empty where there are no meters physically installed at the service point
         */
        registers?: {
          /**
           * The energy delivered through a connection point or metering point over an extended period normalised to a 'per day' basis (kWh). This value is calculated annually.
           */
          averagedDailyLoad?: number;
          /**
           * Actual/Subtractive Indicator. Note the details of enumeration values below: <ul><li>**ACTUAL** implies volume of energy actually metered between two dates</li><li>**CUMULATIVE** indicates a meter reading for a specific date. A second Meter Reading is required to determine the consumption between those two Meter Reading dates</li></ul>
           */
          consumptionType?: "ACTUAL" | "CUMULATIVE";
          /**
           * Indicates whether the energy recorded by this register is created under a Controlled Load regime
           */
          controlledLoad?: boolean;
          /**
           * Multiplier required to take a register value and turn it into a value representing billable energy
           */
          multiplier?: number;
          /**
           * The Network Tariff Code is a free text field containing a code supplied and published by the local network service provider
           */
          networkTariffCode?: string;
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
           * Unique identifier of the register within this service point.  Is not globally unique
           */
          registerId: string;
          /**
           * Register suffix of the meter register where the meter reads are obtained
           */
          registerSuffix?: string;
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
           * The unit of measure for data held in this register
           */
          unitOfMeasure?: string;
          [k: string]: unknown;
        }[];
        /**
         * Technical characteristics of the meter
         */
        specifications: {
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
           * This date is the next scheduled meter read date (NSRD) if a manual Meter Reading is required
           */
          nextScheduledReadDate?: string;
          /**
           * Code to denote the method and frequency of Meter Reading. The value is formatted as follows: <ul><li>First Character = Remote (R) or Manual (M)</li><li>Second Character = Mode: T = telephone W = wireless P = powerline I = infra-red G = galvanic V = visual </li><li>Third Character = Frequency of Scheduled Meter Readings: 1 = Twelve times per year 2 = Six times per year 3 = Four times per year D = Daily or weekly</li><li>Optional Fourth Character = to identify what interval length the meter is capable of reading. This includes five, 15 and 30 minute granularity as the following: A – 5 minute B – 15 minute C – 30 minute D – Cannot convert to 5 minute (i.e. due to metering installation de-energised) M - Manually Read Accumulation Meter</li></ul> For example, <ul><li>MV3 = Manual, Visual, Quarterly</li> <li>MV3M = Manual, Visual, Quarterly, Manually Read Accumulation Meter</li> <li>RWDC = Remote, Wireless, Daily, 30 minutes interval</li></ul>
           */
          readType?: string;
          /**
           * A code to denote the status of the meter. Note the details of enumeration values below: <ul><li>**CURRENT** -Applies when a meter is current and not disconnected</li><li>**DISCONNECTED** - Applies when a meter is present but has been remotely disconnected</li></ul>
           */
          status: "CURRENT" | "DISCONNECTED";
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[]
    | null;
  /**
   * The independent ID of the service point, known in the industry as the NMI
   */
  nationalMeteringId: string;
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
   * The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.
   */
  servicePointId: string;
  /**
   * Code used to indicate the status of the service point. Note the details for the enumeration values below:<ul><li>**ACTIVE** - An active, energised, service point</li><li>**DE_ENERGISED** - The service point exists but is deenergised</li><li>**EXTINCT** - The service point has been permanently decommissioned</li><li>**GREENFIELD** - Applies to a service point that has never been energised</li><li>**OFF_MARKET** - Applies when the service point is no longer settled in the NEM</li></ul>
   */
  servicePointStatus: "ACTIVE" | "DE_ENERGISED" | "EXTINCT" | "GREENFIELD" | "OFF_MARKET";
  /**
   * The start date from which this service point first became valid
   */
  validFromDate: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface EnergyServicePointDetailResponse {
  data: {
    consumerProfile?: {
      /**
       * A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments
       */
      classification?: ("BUSINESS" | "RESIDENTIAL") | null;
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
    /**
     * This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit(this may include generator auxiliary loads). If absent defaults to false. <br>**Note:** Only applicable for scheduled or semischeduled generators, does not indicate on site generation by consumer
     */
    isGenerator?: boolean | null;
    /**
     * Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point. Note the details of enumeration values below:<ul><li>**ALL** - All Jurisdictions</li><li>**ACT** - Australian Capital Territory</li><li>**NEM** - National Electricity Market</li><li>**NSW** - New South Wales</li><li>**QLD** - Queensland</li><li>**SA** - South Australia</li><li>**TAS** - Tasmania</li><li>**VIC** - Victoria</li></ul>
     */
    jurisdictionCode: "ALL" | "ACT" | "NEM" | "NSW" | "QLD" | "SA" | "TAS" | "VIC";
    /**
     * The date and time that the information for this service point was modified
     */
    lastUpdateDateTime: string;
    /**
     * Location of the servicepoint
     */
    location: {
      /**
       * The type of address object present
       */
      addressUType: "paf" | "simple";
      /**
       * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if addressUType is set to paf
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
      /**
       * Required if addressUType is set to simple
       */
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
    };
    /**
     * The meters associated with the service point. This may be empty where there are no meters physically installed at the service point
     */
    meters?:
      | {
          /**
           * The meter ID uniquely identifies a meter for a given service point.  It is unique in the context of the service point.  It is not globally unique
           */
          meterId: string;
          /**
           * Usage data registers available from the meter. This may be empty where there are no meters physically installed at the service point
           */
          registers?: {
            /**
             * The energy delivered through a connection point or metering point over an extended period normalised to a 'per day' basis (kWh). This value is calculated annually.
             */
            averagedDailyLoad?: number;
            /**
             * Actual/Subtractive Indicator. Note the details of enumeration values below: <ul><li>**ACTUAL** implies volume of energy actually metered between two dates</li><li>**CUMULATIVE** indicates a meter reading for a specific date. A second Meter Reading is required to determine the consumption between those two Meter Reading dates</li></ul>
             */
            consumptionType?: "ACTUAL" | "CUMULATIVE";
            /**
             * Indicates whether the energy recorded by this register is created under a Controlled Load regime
             */
            controlledLoad?: boolean;
            /**
             * Multiplier required to take a register value and turn it into a value representing billable energy
             */
            multiplier?: number;
            /**
             * The Network Tariff Code is a free text field containing a code supplied and published by the local network service provider
             */
            networkTariffCode?: string;
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
             * Unique identifier of the register within this service point.  Is not globally unique
             */
            registerId: string;
            /**
             * Register suffix of the meter register where the meter reads are obtained
             */
            registerSuffix?: string;
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
             * The unit of measure for data held in this register
             */
            unitOfMeasure?: string;
            [k: string]: unknown;
          }[];
          /**
           * Technical characteristics of the meter
           */
          specifications: {
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
             * This date is the next scheduled meter read date (NSRD) if a manual Meter Reading is required
             */
            nextScheduledReadDate?: string;
            /**
             * Code to denote the method and frequency of Meter Reading. The value is formatted as follows: <ul><li>First Character = Remote (R) or Manual (M)</li><li>Second Character = Mode: T = telephone W = wireless P = powerline I = infra-red G = galvanic V = visual </li><li>Third Character = Frequency of Scheduled Meter Readings: 1 = Twelve times per year 2 = Six times per year 3 = Four times per year D = Daily or weekly</li><li>Optional Fourth Character = to identify what interval length the meter is capable of reading. This includes five, 15 and 30 minute granularity as the following: A – 5 minute B – 15 minute C – 30 minute D – Cannot convert to 5 minute (i.e. due to metering installation de-energised) M - Manually Read Accumulation Meter</li></ul> For example, <ul><li>MV3 = Manual, Visual, Quarterly</li> <li>MV3M = Manual, Visual, Quarterly, Manually Read Accumulation Meter</li> <li>RWDC = Remote, Wireless, Daily, 30 minutes interval</li></ul>
             */
            readType?: string;
            /**
             * A code to denote the status of the meter. Note the details of enumeration values below: <ul><li>**CURRENT** -Applies when a meter is current and not disconnected</li><li>**DISCONNECTED** - Applies when a meter is present but has been remotely disconnected</li></ul>
             */
            status: "CURRENT" | "DISCONNECTED";
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[]
      | null;
    /**
     * The independent ID of the service point, known in the industry as the NMI
     */
    nationalMeteringId: string;
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
     * The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.
     */
    servicePointId: string;
    /**
     * Code used to indicate the status of the service point. Note the details for the enumeration values below:<ul><li>**ACTIVE** - An active, energised, service point</li><li>**DE_ENERGISED** - The service point exists but is deenergised</li><li>**EXTINCT** - The service point has been permanently decommissioned</li><li>**GREENFIELD** - Applies to a service point that has never been energised</li><li>**OFF_MARKET** - Applies when the service point is no longer settled in the NEM</li></ul>
     */
    servicePointStatus: "ACTIVE" | "DE_ENERGISED" | "EXTINCT" | "GREENFIELD" | "OFF_MARKET";
    /**
     * The start date from which this service point first became valid
     */
    validFromDate: string;
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
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface EnergyServicePointListResponse {
  data: {
    servicePoints: {
      consumerProfile?: {
        /**
         * A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments
         */
        classification?: ("BUSINESS" | "RESIDENTIAL") | null;
        /**
         * A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments. Note the details of enumeration values below: <ul><li>**LOW** - Consumption is less than the ‘lower consumption threshold’ as defined in the National Energy Retail Regulations</li><li>**MEDIUM** - Consumption is equal to or greater than the ‘lower consumption threshold’, but less than the ‘upper consumption threshold’, as defined in the National Energy Retail Regulations</li><li>**HIGH** - Consumption is equal to or greater than the ‘upper consumption threshold’ as defined in the National Energy Retail Regulations</li></ul>
         */
        threshold?: "LOW" | "MEDIUM" | "HIGH";
        [k: string]: unknown;
      } | null;
      /**
       * This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit(this may include generator auxiliary loads). If absent defaults to false. <br>**Note:** Only applicable for scheduled or semischeduled generators, does not indicate on site generation by consumer
       */
      isGenerator?: boolean | null;
      /**
       * Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point. Note the details of enumeration values below:<ul><li>**ALL** - All Jurisdictions</li><li>**ACT** - Australian Capital Territory</li><li>**NEM** - National Electricity Market</li><li>**NSW** - New South Wales</li><li>**QLD** - Queensland</li><li>**SA** - South Australia</li><li>**TAS** - Tasmania</li><li>**VIC** - Victoria</li></ul>
       */
      jurisdictionCode: "ALL" | "ACT" | "NEM" | "NSW" | "QLD" | "SA" | "TAS" | "VIC";
      /**
       * The date and time that the information for this service point was modified
       */
      lastUpdateDateTime: string;
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
       * The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.
       */
      servicePointId: string;
      /**
       * Code used to indicate the status of the service point. Note the details for the enumeration values below:<ul><li>**ACTIVE** - An active, energised, service point</li><li>**DE_ENERGISED** - The service point exists but is deenergised</li><li>**EXTINCT** - The service point has been permanently decommissioned</li><li>**GREENFIELD** - Applies to a service point that has never been energised</li><li>**OFF_MARKET** - Applies when the service point is no longer settled in the NEM</li></ul>
       */
      servicePointStatus: "ACTIVE" | "DE_ENERGISED" | "EXTINCT" | "GREENFIELD" | "OFF_MARKET";
      /**
       * The start date from which this service point first became valid
       */
      validFromDate: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface EnergyUsageListResponse {
  data: {
    /**
     * Array of meter reads sorted by NMI in ascending order followed by readStartDate in descending order
     */
    reads: {
      /**
       * Mandatory if readUType is set to basicRead
       */
      basicRead?: {
        /**
         * The quality of the read taken.  If absent then assumed to be ACTUAL
         */
        quality?: ("ACTUAL" | "SUBSTITUTE" | "FINAL_SUBSTITUTE") | null;
        /**
         * Meter read value.  If positive then it means consumption, if negative it means export
         */
        value: number;
        [k: string]: unknown;
      } | null;
      /**
       * Indicates whether the energy recorded by this register is created under a Controlled Load regime
       */
      controlledLoad?: boolean | null;
      /**
       * Mandatory if readUType is set to intervalRead
       */
      intervalRead?: {
        /**
         * The aggregate sum of the interval read values. If positive then it means net consumption, if negative it means net export
         */
        aggregateValue: number;
        /**
         * Array of Interval read values. If positive then it means consumption, if negative it means export. Required when interval-reads query parameter equals FULL or  MIN_30.<br>Each read value indicates the read for the interval specified by readIntervalLength beginning at midnight of readStartDate (for example 00:00 to 00:30 would be the first reading in a 30 minute Interval)
         */
        intervalReads?: number[] | null;
        /**
         * Read interval length in minutes. Required when interval-reads query parameter equals FULL or MIN_30
         */
        readIntervalLength?: number | null;
        /**
         *  Specifies quality of reads that are not ACTUAL.  For read indices that are not specified, quality is assumed to be ACTUAL. If not present, all quality of all reads are assumed to be actual. Required when interval-reads query parameter equals FULL or MIN_30
         */
        readQualities?: {
          /**
           * End interval for read quality flag
           */
          endInterval: number;
          /**
           * The quality of the read taken
           */
          quality: "SUBSTITUTE" | "FINAL_SUBSTITUTE";
          /**
           * Start interval for read quality flag. First read begins at 1
           */
          startInterval: number;
          [k: string]: unknown;
        } | null;
        [k: string]: unknown;
      } | null;
      /**
       * Meter id/serial number as it appears in customer’s bill. ID permanence rules do not apply.
       */
      meterId?: string | null;
      /**
       * Date when the meter reads end in AEST.  If absent then assumed to be equal to readStartDate.  In this case the entry represents data for a single date specified by readStartDate.
       */
      readEndDate?: string | null;
      /**
       * Date when the meter reads start in AEST and assumed to start from 12:00 am AEST.
       */
      readStartDate: string;
      /**
       * Specify the type of the meter read data
       */
      readUType: "basicRead" | "intervalRead";
      /**
       * Register ID of the meter register where the meter reads are obtained
       */
      registerId?: string | null;
      /**
       * Register suffix of the meter register where the meter reads are obtained
       */
      registerSuffix: string;
      /**
       * The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.
       */
      servicePointId: string;
      /**
       * Unit of measure of the meter reads. Refer to Appendix B of <a href='https://www.aemo.com.au/-/media/files/stakeholder_consultation/consultations/nem-consultations/2019/5ms-metering-package-2/final-determination/mdff-specification-nem12-nem13-v21-final-determination-clean.pdf?la=en&hash=03FCBA0D60E091DE00F2361AE76206EA'>MDFF Specification NEM12 NEM13 v2.1</a> for a list of possible values
       */
      unitOfMeasure?: string | null;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
  };
  meta: {
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface EnergyUsageRead {
  /**
   * Mandatory if readUType is set to basicRead
   */
  basicRead?: {
    /**
     * The quality of the read taken.  If absent then assumed to be ACTUAL
     */
    quality?: ("ACTUAL" | "SUBSTITUTE" | "FINAL_SUBSTITUTE") | null;
    /**
     * Meter read value.  If positive then it means consumption, if negative it means export
     */
    value: number;
    [k: string]: unknown;
  } | null;
  /**
   * Indicates whether the energy recorded by this register is created under a Controlled Load regime
   */
  controlledLoad?: boolean | null;
  /**
   * Mandatory if readUType is set to intervalRead
   */
  intervalRead?: {
    /**
     * The aggregate sum of the interval read values. If positive then it means net consumption, if negative it means net export
     */
    aggregateValue: number;
    /**
     * Array of Interval read values. If positive then it means consumption, if negative it means export. Required when interval-reads query parameter equals FULL or  MIN_30.<br>Each read value indicates the read for the interval specified by readIntervalLength beginning at midnight of readStartDate (for example 00:00 to 00:30 would be the first reading in a 30 minute Interval)
     */
    intervalReads?: number[] | null;
    /**
     * Read interval length in minutes. Required when interval-reads query parameter equals FULL or MIN_30
     */
    readIntervalLength?: number | null;
    /**
     *  Specifies quality of reads that are not ACTUAL.  For read indices that are not specified, quality is assumed to be ACTUAL. If not present, all quality of all reads are assumed to be actual. Required when interval-reads query parameter equals FULL or MIN_30
     */
    readQualities?: {
      /**
       * End interval for read quality flag
       */
      endInterval: number;
      /**
       * The quality of the read taken
       */
      quality: "SUBSTITUTE" | "FINAL_SUBSTITUTE";
      /**
       * Start interval for read quality flag. First read begins at 1
       */
      startInterval: number;
      [k: string]: unknown;
    } | null;
    [k: string]: unknown;
  } | null;
  /**
   * Meter id/serial number as it appears in customer’s bill. ID permanence rules do not apply.
   */
  meterId?: string | null;
  /**
   * Date when the meter reads end in AEST.  If absent then assumed to be equal to readStartDate.  In this case the entry represents data for a single date specified by readStartDate.
   */
  readEndDate?: string | null;
  /**
   * Date when the meter reads start in AEST and assumed to start from 12:00 am AEST.
   */
  readStartDate: string;
  /**
   * Specify the type of the meter read data
   */
  readUType: "basicRead" | "intervalRead";
  /**
   * Register ID of the meter register where the meter reads are obtained
   */
  registerId?: string | null;
  /**
   * Register suffix of the meter register where the meter reads are obtained
   */
  registerSuffix: string;
  /**
   * The independent ID of the service point, known in the industry as the National Meter Identifier (NMI). Note that the servicePointId will be replaced with NMI for all interactions between Data Holder and AEMO.
   */
  servicePointId: string;
  /**
   * Unit of measure of the meter reads. Refer to Appendix B of <a href='https://www.aemo.com.au/-/media/files/stakeholder_consultation/consultations/nem-consultations/2019/5ms-metering-package-2/final-determination/mdff-specification-nem12-nem13-v21-final-determination-clean.pdf?la=en&hash=03FCBA0D60E091DE00F2361AE76206EA'>MDFF Specification NEM12 NEM13 v2.1</a> for a list of possible values
   */
  unitOfMeasure?: string | null;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface ErrorListResponse {
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
      urn?: string;
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
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface Links {
  /**
   * Fully qualified link that generated the current response document
   */
  self: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface LinksPaginated {
  /**
   * URI to the first page of this set. Mandatory if this response is not the first page
   */
  first?: string | null;
  /**
   * URI to the last page of this set. Mandatory if this response is not the last page
   */
  last?: string | null;
  /**
   * URI to the next page of this set. Mandatory if this response is not the last page
   */
  next?: string | null;
  /**
   * URI to the previous page of this set. Mandatory if this response is not the first page
   */
  prev?: string | null;
  /**
   * Fully qualified link that generated the current response document
   */
  self: string;
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface Meta {
  [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy_sdh api. */

export interface MetaPaginated {
  /**
   * The total number of pages in the full set. See [pagination](#pagination).
   */
  totalPages: number;
  /**
   * The total number of records in the full set. See [pagination](#pagination).
   */
  totalRecords: number;
  [k: string]: unknown;
}
