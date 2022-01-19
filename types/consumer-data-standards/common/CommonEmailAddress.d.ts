/* These are the schema definitions stipulated by the Data Standards Body for the common api. */

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
