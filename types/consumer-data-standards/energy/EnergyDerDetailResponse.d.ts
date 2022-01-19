/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyDerDetailResponse {
  data: {
    /**
     * Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements
     */
    servicePointId: string;
    /**
     * Approved small generating unit capacity as agreed with NSP in the connection agreement, expressed in kVA
     */
    approvedCapacity: number;
    /**
     * The number of phases available for the installation of DER
     */
    availablePhasesCount: number;
    /**
     * The number of phases that DER is connected to
     */
    installedPhasesCount: number;
    /**
     * For identification of small generating units designed with the ability to operate in an islanded mode
     */
    islandableInstallation: string;
    /**
     * For DER installations where NSPs specify the need for additional forms of protection above those inbuilt in an inverter.  If absent then assumed to be false
     */
    hasCentralProtectionControl?: boolean | null;
    /**
     * Required only when the hasCentralProtectionAndControl flag is set to true.  One or more of the object fields will be provided to describe the protection modes in place
     */
    protectionMode?: {
      /**
       * Maximum amount of power (kVA) that may be exported from a connection point to the grid, as monitored by a control / relay function. An absent value indicates no limit
       */
      exportLimitkva?: number | null;
      /**
       * Protective function limit in Hz.
       */
      underFrequencyProtection?: number | null;
      /**
       * Trip delay time in seconds.
       */
      underFrequencyProtectionDelay?: number | null;
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
      underVoltageProtection?: number | null;
      /**
       * Trip delay time in seconds.
       */
      underVoltageProtectionDelay?: number | null;
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
       * Trip delay time in seconds.
       */
      sustainedOverVoltageDelay?: number | null;
      /**
       * Rate of change of frequency trip point (Hz/s).
       */
      frequencyRateOfChange?: number | null;
      /**
       * Trip angle in degrees.
       */
      voltageVectorShift?: number | null;
      /**
       * Description of the form of inter-trip (e.g. 'from local substation').
       */
      interTripScheme?: string | null;
      /**
       * Trip voltage.
       */
      neutralVoltageDisplacement?: number | null;
      [k: string]: unknown;
    } | null;
    acConnections: {
      /**
       * AC Connection ID as defined in the DER register.  Does not align with CDR ID permanence standards
       */
      connectionIdentifier: number;
      /**
       * Number of AC Connections in the group. For the suite of AC Connections to be considered as a group, all of the AC Connections included must have the same attributes
       */
      count: string;
      /**
       * Indicates whether the DER device is connected via an inverter (and what category of inverter it is) or not (e.g. rotating machine). If absent, assume equipment type to be “OTHER”.
       */
      equipmentType?: ("INVERTER" | "OTHER") | null;
      /**
       * The name of the inverter manufacturer. Mandatory if equipmentType is INVERTER
       */
      manufacturerName?: string | null;
      /**
       * The inverter series. Mandatory if equipmentType is INVERTER
       */
      inverterSeries?: string | null;
      /**
       * The inverter model number. Mandatory if equipmentType is INVERTER
       */
      inverterModelNumber?: string | null;
      /**
       * The date that the DER installation is commissioned
       */
      commissioningDate: string;
      /**
       * Code used to indicate the status of the Inverter. This will be used to identify if an inverter is active or inactive or decommissioned
       */
      status: "ACTIVE" | "INACTIVE" | "DECOMMISSIONED";
      /**
       * The rated AC output power that is listed in the product specified by the manufacturer. Mandatory if equipmentType is INVERTER
       */
      inverterDeviceCapacity?: number | null;
      derDevices: {
        /**
         * Unique identifier for a single DER device or a group of DER devices with the same attributes. Does not align with CDR ID permanence standards
         */
        deviceIdentifier: number;
        /**
         * Number of devices in the group of DER devices
         */
        count: number;
        /**
         * The name of the device manufacturer. If absent then assumed to be “unknown”
         */
        manufacturer?: string;
        /**
         * The model number of the device. If absent then assumed to be “unknown”
         */
        modelNumber?: string | null;
        /**
         * Code used to indicate the status of the device. This will be used to identify if an inverter is active or inactive or decommissioned
         */
        status?: ("ACTIVE" | "INACTIVE" | "DECOMMISSIONED") | null;
        /**
         * Used to indicate the primary technology used in the DER device
         */
        type: "FOSSIL" | "HYDRO" | "WIND" | "SOLAR_PV" | "RENEWABLE" | "GEOTHERMAL" | "STORAGE" | "OTHER";
        /**
         * Used to indicate the primary technology used in the DER device. This field is also used to record for example the battery chemistry, or the type of PV panel. It is also used to record if a battery is contained in an electric vehicle connected in a vehicle-to-grid arrangement. If absent then assumed to be “other”
         */
        subtype?: string | null;
        /**
         * Maximum output in kVA that is listed in the product specification by the manufacturer. This refers to the capacity of each unit within the device group
         */
        nominalRatedCapacity: number;
        /**
         * Maximum storage capacity in kVAh. This refers to the capacity of each storage module within the device group. Mandatory if type is equal to “STORAGE”
         */
        nominalStorageCapacity?: number | null;
        [k: string]: unknown;
      }[];
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
  meta: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
