import { ShippingAddress, ShippingOption } from "./shipping";

/**
 * The Payment request object that can be used to make payments
 * @see https://stripe.com/docs/stripe-js/reference#the-payment-request-object
 */
export interface StripePaymentRequest {
    /**
     * Whether or not a payment can be made
     * NOTE: When no API is available it resolves with `null`
     *
     * @see https://stripe.com/docs/stripe-js/reference#payment-request-can-make-payment
     */
    canMakePayment(): Promise<CanMakePaymentResult | null>;

    /**
     * Shows the browser’s payment UI
     * NOTE: When using the paymentRequestButton Element, this is called for you under the hood
     * NOTE: This method must be called as the result of a user interaction (for example, in a click handler)
     *
     * @see https://stripe.com/docs/stripe-js/reference#payment-request-show
     */
    show(): void;

    /**
     * Updates the payment information
     * NOTE: can only be called when the browser payment UI is not showing
     *
     * @param options - Payment information that should be used by Stripe
     *
     * @see https://stripe.com/docs/stripe-js/reference#payment-request-update
     */
    update(options: UpdateOptions): void;

    /**
     * Register your event listener
     * @see https://stripe.com/docs/stripe-js/reference#payment-request-on
     */
    on(event: 'cancel', handler: () => void): void;

    on(event: 'token' | 'source', handler: (event: StripePaymentResponse) => void): void;

    on(event: 'shippingaddresschange', handler: (event: NewShippingAddress) => void): void;

    on(event: 'shippingoptionchange', handler: (event: NewShippingOptions) => void): void;
}

export interface CanMakePaymentResult {
    /**
     * true if the browser payment API supports Apple Pay.
     * NOTE: using the paymentRequestButton Element is automatically cross-browser.
     * If you use this PaymentRequest object to create a paymentRequestButton Element, you don‘t need to check applePay yourself
     */
    readonly applePay: boolean;
}

/**
 * @see https://stripe.com/docs/stripe-js/reference#payment-request-on
 */
export interface NewShippingAddress {
    /**
     * Calling this function with an UpdateDetails object merges your updates into the
     * current PaymentRequest object.
     */
    updateWith: (dataToUpdate: UpdateOptions) => void;

    /**
     * The customer's selected ShippingAddress.
     */
    shippingAddress: ShippingAddress;
}

export interface NewShippingOptions {
    /**
     * Calling this function with an UpdateDetails object merges your updates into the
     * current PaymentRequest object.
     */
    updateWith: (dataToUpdate: UpdateOptions) => void;

    /**
     * The selected shipping option
     */
    shippingOption: ShippingOption;
}

/**
 * Payment options that can be set when updating the payment request
 * @see https://stripe.com/docs/stripe-js/reference#payment-request-update
 */
export interface UpdateOptions {
    /**
     * The currency in which the customer should be charged
     * @example 'usd'
     */
    currency: string;

    /**
     * The total amount the customer has to pay
     * NOTE: This object is shown to the customer in the browser‘s payment UI
     */
    total: PaymentItem;

    /**
     * An array of payment item objects
     * NOTE: The sum of the line item amounts does not need to add up to the total amount above
     * @see total
     *
     * @default []
     */
    displayItems?: PaymentItem[];

    /**
     * An array of possible shipping options
     * NOTE: This first one in the array will be listed as the default option
     *
     * @default []
     */
    shippingOptions?: ShippingOption[];
}

/**
 * Configuration options for creating a payment request
 * @see https://stripe.com/docs/stripe-js/reference#stripe-payment-request
 */
export interface StripePaymentOptions extends UpdateOptions {
    /**
     * The two letter code representing your country
     * @example 'US'
     */
    country: string;

    /**
     * Whether or not the form should ask for the payer's name
     * @default false
     */
    requestPayerName?: boolean;

    /**
     * Whether or not the form should ask for the payer's email address
     * @default false
     */
    requestPayerEmail?: boolean;

    /**
     * Whether or not the form should ask for the payer's phone number
     * @default false
     */
    requestPayerPhone?: boolean;

    /**
     * Whether or not a shipping address should be requested
     * NOTE: Setting this to true requires `shippingOptions` to be set with at least one option!
     * @see shippingOptions
     */
    requestShipping?: boolean;
}

export interface PaymentItem {
    /**
     * The amount the user has to pay in the given currency
     * @see StripePaymentOptions.currency
     */
    amount: number;

    /**
     * A text that should be shown to the user
     */
    label: string;

    /**
     * Whether or not the payment should be executed immediately
     * If you might change this amount later (for example, after you have calculated shipping costs), set this to `true`
     */
    pending?: boolean;
}

// --- PAYMENT RESPONSE FROM STRIPE --- //
/**
 * @see https://stripe.com/docs/stripe-js/reference#payment-response-object
 */
export interface StripePaymentResponse {
    /**
     * NOTE: Only available when the event type 'token' was used
     */
    readonly token?: any;

    /**
     * NOTE: Only available when the event type 'source' was used
     */
    readonly source?: any;

    /**
     * A function to complete the payment and give feedback to the user
     * Call this when you have processed the token data provided by the API
     *
     * @param status - The status that should be shown to the user
     */
    complete: (status: completeStatus) => void;

    /**
     * Information about the payer
     * NOTE: This is only set if the corresponding field was set to `true` in the `PaymentOptions`
     *
     * @see PaymentOptions.requestPayerName
     * @see PaymentOptions.requestPayerEmail
     * @see PaymentOptions.requestPayerPhone
     */
    readonly payerName?: string;
    readonly payerEmail?: string;
    readonly payerPhone?: string;

    /**
     * The shipping address the payer selected
     */
    readonly shippingAddress: ShippingAddress;

    /**
     * The shipping option the payer selected
     */
    readonly shippingOption: ShippingOption;

    /**
     * The unique name of the payment handler the customer chose to authorize payment
     * @example 'basic-card'
     */
    readonly methodName: string;
}

export type completeStatus =
    'success' |
    'fail' |
    'invalid_payer_name' |
    'invalid_payer_phone' |
    'invalid_payer_email' |
    'invalid_shipping_address';
