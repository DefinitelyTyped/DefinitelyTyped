/**
 * @see https://stripe.com/docs/stripe-js/reference#shipping-address-object
 */
export interface ShippingAddress {
    /**
     * Two-letter country code, capitalized
     * NOTE: The codes are specified by the ISO3166 alpha-2
     */
    country: string;

    /**
     * An array of address line items
     * @example ['185 Berry St.', 'Suite 500', 'P.O. Box 12345']
     */
    addressLine: string[];

    /**
     * The most coarse subdivision of a country
     * NOTE: Depending on the country, this might correspond to a state, a province, an oblast, a prefecture,
     * or something else along these lines.
     */
    region: string;

    /**
     * The name of a city, town, village, etc
     */
    city: string;

    /**
     * The postal code or ZIP code
     * NOTE: This is known as the PIN code in India
     */
    postalCode: string;

    /**
     * The name of the recipient.
     * NOTE: This might be a person, a business name, or contain “care of” (c/o) instructions
     */
    recipient: string;

    /**
     * The phone number of the recipient
     * NOTE: This is only filled if `requestPayerPhone` was set to `true`
     *
     * @see PaymentOptions.requestPayerPhone
     */
    phone: string;

    /**
     * The sorting code as used in, for example, France
     * NOTE: Not present on Apple platforms
     */
    sortingCode: string;

    /**
     * A logical subdivision of a city
     * NOTE: Not present on Apple platforms
     */
    dependentLocality: string;
}

// --- SHIPPING OPTION --- //
/**
 * Settings for a shipping location
 * @see https://stripe.com/docs/stripe-js/reference#shipping-option-object
 */
export interface ShippingOption {
    /**
     * A unique ID you create to keep track of this shipping option.
     * NOTE: You‘ll be told the ID of the selected option on changes and on completion.
     */
    id: string;

    /**
     * A short “title” for this shipping option.
     */
    label: string;

    /**
     * A longer description of this shipping option.
     */
    detail: string;

    /**
     * The shipping costs for this option
     * NOTE: If the cost of this shipping option depends on the shipping address the customer enters,
     * listen for the `shippingaddresschange` event.
     */
    amount: number;
}
