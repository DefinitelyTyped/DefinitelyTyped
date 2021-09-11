export type Address = {
  /**
   * Cardholder first name
   */
  first_name: string;

  /**
   * Cardholder last name
   */
  last_name: string;

  /**
   * First line of a street address
   */
  address1?: string | undefined;

  /**
   * Second line of a street address
   */
  address2?: string | undefined;

  /**
   * Town or locality
   */
  city?: string | undefined;

  /**
   * Province or region
   */
  state?: string | undefined;

  /**
   * Postal code
   */
  postal_code?: string | undefined;

  /**
   * {@link http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2| [ISO 3166-1 alpha-2]} country code
   */
  country?: string | undefined;

  /**
   * Phone number
   */
  phone?: string | undefined;

  /**
   * Customer VAT number. Used for VAT exclusion
   */
  vat_number?: string | undefined;
};
