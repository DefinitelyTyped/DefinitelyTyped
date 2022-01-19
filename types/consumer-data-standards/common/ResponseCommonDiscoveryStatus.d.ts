/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

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
