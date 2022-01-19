/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

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
