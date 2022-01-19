/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyUsageListResponse {
  data: {
    /**
     * Array of meter reads
     */
    reads: {
      /**
       * Tokenised ID of the service point to be used for referring to the service point in the CDR API suite.  To be created in accordance with CDR ID permanence requirements
       */
      servicePointId: string;
      /**
       * Register ID of the meter register where the meter reads are obtained
       */
      registerId?: string | null;
      /**
       * Register suffix of the meter register where the meter reads are obtained
       */
      registerSuffix: string;
      /**
       * Meter id/serial number as it appears in customer’s bill. ID permanence rules do not apply.
       */
      meterID?: string | null;
      /**
       * Indicates whether the energy recorded by this register is created under a Controlled Load regime. ControlledLoad field will have 'No if register does not relate to a Controlled Load, “Yes” if register relates to a Controlled Load If absent the status is unknown.
       */
      controlledLoad?: boolean | null;
      /**
       * Date time when the meter reads start
       */
      readStartDate: string;
      /**
       * Date time when the meter reads end.  If absent then assumed to be equal to readStartDate.  In this case the entry represents data for a single date specified by readStartDate
       */
      readEndDate?: string | null;
      /**
       * Unit of measure of the meter reads. Refer to Appendix B of <a href='https://www.aemo.com.au/-/media/files/stakeholder_consultation/consultations/nem-consultations/2019/5ms-metering-package-2/final-determination/mdff-specification-nem12-nem13-v21-final-determination-clean.pdf?la=en&hash=03FCBA0D60E091DE00F2361AE76206EA'>MDFF Specification NEM12 NEM13 v2.1</a> for a list of possible values
       */
      unitOfMeasure?: string | null;
      /**
       * Specify the type of the meter read data
       */
      readUType: "basicRead" | "intervalRead";
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
       * Mandatory if readUType is set to intervalRead
       */
      intervalRead?: {
        /**
         * Read interval length in minutes
         */
        readIntervalLength: string;
        /**
         * The aggregate sum of the interval read values. If positive then it means net consumption, if negative it means net export
         */
        aggregateValue: number;
        /**
         * Array of reads with each element indicating the read for the interval specified by readIntervalLength beginning at midnight of readStartDate (for example 00:00 to 00:30 would be the first reading in a 30 minute Interval)
         */
        intervalReads: {
          /**
           * The quality of the read taken.  If absent then assumed to be ACTUAL
           */
          quality?: ("ACTUAL" | "SUBSTITUTE" | "FINAL_SUBSTITUTE") | null;
          /**
           * Interval value.  If positive then it means consumption, if negative it means export
           */
          value: number;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      } | null;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  links: {
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
  };
  meta: {
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
