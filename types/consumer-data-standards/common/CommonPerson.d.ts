/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

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
