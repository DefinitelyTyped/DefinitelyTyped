/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

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
