export enum LineItemKind {
    Debit = 'debit',
    Credit = 'credit',
}

export interface LineItem {
    /**
     * Number of units of the item purchased. This value must be a whole number and can't be negative or zero.
     */
    quantity: string;

    /**
     * Per-unit price of the item. Can include up to 2 decimal places. This value can't be negative or zero.
     */
    unitAmount: string;

    /**
     * Item name. Maximum 127 characters.
     */
    name: string;

    /**
     * Indicates whether the line item is a debit (sale) or credit (refund) to the customer. Accepted values: `debit` and `credit`.
     */
    kind: LineItemKind;

    /**
     * Per-unit tax price of the item. Can include up to 2 decimal places. This value can't be negative or zero.
     */
    unitTaxAmount: string | undefined;

    /**
     * Item description. Maximum 127 characters.
     */
    description: string | undefined;

    /**
     * Product or UPC code for the item. Maximum 127 characters.
     */
    productCode: string | undefined;

    /**
     * The URL to product information.
     */
    url: string | undefined;
}

export enum ShippingOptionType {
    /**
     * The payer intends to receive the items at a specified address.
     */
    Shipping = 'SHIPPING',

    /**
     * The payer intends to pick up the items at a specified address. For example, a store address.
     */
    Pickup = 'PICKUP',
}

export interface CurrencyAmount {
    /**
     * The three-character ISO-4217 currency code. PayPal does not support all currencies.
     */
    currency: string;

    /**
     * The amount the shipping option will cost. Includes the specified number of digits after
     * decimal separator for the ISO-4217 currency code.
     */
    value: string;
}

export interface ShippingOption {
    /**
     * A unique ID that identifies a payer-selected shipping option.
     */
    id: string;

    /**
     * A description that the payer sees, which helps them choose an appropriate shipping option.
     * For example, `Free Shipping`, `USPS Priority Shipping`, `Expédition prioritaire USPS`,
     * or `USPS yōuxiān fā huò`. Localize this description to the payer's locale.
     */
    label: string;

    /**
     * If `selected = true` is specified as part of the API request it represents the shipping
     * option that the payee/merchant expects to be pre-selected for the payer when they first view
     * the shipping options within the PayPal checkout experience. As part of the response if a
     * shipping option has `selected = true` it represents the shipping option that the payer
     * selected during the course of checkout with PayPal. Only 1 `shippingOption` can be set
     * to `selected = true`.
     */
    selected: boolean;

    /**
     * The method by which the payer wants to get their items.
     */
    type: ShippingOptionType;

    /**
     * The shipping cost for the selected option.
     */
    amount: CurrencyAmount;
}

export interface Address {
    /**
     * Street number and name.
     */
    line1: string;

    /**
     * Extended address.
     */
    line2?: string;

    /**
     * City or locality.
     */
    city: string;

    /**
     * State or region.
     */
    state: string;

    /**
     * Postal code.
     */
    postalCode: string;

    /**
     * 2 character country code (e.g. US).
     */
    countryCode: string;

    /**
     * Phone number.
     */
    phone?: string;

    /**
     * Recipient of postage.
     */
    recipientName?: string;
}

export interface CreditFinancingOptions {
    /**
     * This is the estimated total payment amount including interest and fees the user will pay during the lifetime of the loan.
     */
    totalCost: CurrencyAmount;

    /**
     * Length of financing terms in months.
     */
    term: number;

    /**
     * This is the estimated amount per month that the customer will need to pay including fees and interest.
     */
    monthlyPayment: CurrencyAmount;

    /**
     * Estimated interest or fees amount the payer will have to pay during the lifetime of the loan.
     */
    totalInterest: CurrencyAmount;

    /**
     * Status of whether the customer ultimately was approved for and chose to make the payment using the approved installment credit.
     */
    payerAcceptance: boolean;

    /**
     * Indicates whether the cart amount is editable after payer's acceptance on PayPal side.
     */
    cartAmountImmutable: boolean;
}

export interface AuthorizationResponseDetails {
    email: string;
    payerId: string;
    firstName: string;
    lastName: string;
    countryCode?: string;
    phone?: string;

    /**
     * User's shipping address details, only available if shipping address is enabled.
     */
    shippingAddress?: Address;

    /**
     * User's billing address details.
     */
    billingAddress?: Address;

    /**
     * This property will only be present when the customer pays with PayPal Credit.
     */
    creditFinancingOffered?: CreditFinancingOptions;
}

export interface AuthorizationResponse {
    /**
     * The payment method nonce.
     */
    nonce: string;

    /**
     * The payment method type, always `PayPalAccount`.
     */
    type: string;

    /**
     * Additional PayPal account details.
     */
    details: AuthorizationResponseDetails;
}

export enum FlowType {
    /**
     * Used to store the payment method for future use, ie subscriptions
     */
    Vault = 'vault',

    /**
     * Used for one-time checkout
     */
    Checkout = 'checkout',
}

export enum Intent {
    /**
     * Submits the transaction for authorization but not settlement.
     */
    Authorize = 'authorize',

    /**
     * Validates the transaction without an authorization (i.e. without holding funds).
     * Useful for authorizing and capturing funds up to 90 days after the order has been placed.
     * Only available for Checkout flow.
     */
    Order = 'order',

    /**
     * Payment will be immediately submitted for settlement upon creating a transaction.
     * `sale` can be used as an alias for this value.
     */
    Capture = 'capture',
}

export interface AuthorizationData {
    payerId: string;
    paymentId?: string;
    billingToken?: string;
    vault?: boolean;
}

export interface CancellationData {
    billingID: string;
    button_version: string;
    cancelUrl: string;
    intent: string;
    paymentID: string;
    paymentToken: string;
}
