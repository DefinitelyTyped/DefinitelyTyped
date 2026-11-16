/**
 * A source of billing contact data for digital wallet tokenization.
 *
 * - `form`: address fields from the merchant-provided `form` configuration
 * - `wallet`: the billing contact gathered by the wallet (Apple Pay / Google Pay)
 */
export type BillingContactSource = 'form' | 'wallet';

/**
 * The order in which billing contact sources are evaluated when
 * constructing the token payload. The first source with address data is
 * used in full; later sources do not fill individual fields.
 */
export type BillingContactSelectionOrder = BillingContactSource[];
