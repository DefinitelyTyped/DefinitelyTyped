/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

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
