import Client from '../client';
import { callback } from '../common';
import { PayPalShippingAddress, PayPalTokenizePayload } from '../paypal';

/**
 * @param {string} flow Set to 'checkout' for one-time payment flow, or 'vault' for Vault flow. If 'vault' is used with a client token generated with a customer ID, the PayPal account will be added to that customer as a saved payment method.
 * @param {string} [intent=authorize]
 * * `authorize` - Submits the transaction for authorization but not settlement.
 * * `order` - Validates the transaction without an authorization (i.e. without holding funds). Useful for authorizing and capturing funds up to 90 days after the order has been placed. Only available for Checkout flow.
 * * `capture` - Payment will be immediately submitted for settlement upon creating a transaction. `sale` can be used as an alias for this value.
 * @param {boolean} [offerCredit=false] Offers PayPal Credit as the default funding instrument for the transaction. If the customer isn't pre-approved for PayPal Credit, they will be prompted to apply for it.
 * @param {string|number} [amount] The amount of the transaction. Required when using the Checkout flow.
 * @param {string} [currency] The currency code of the amount, such as 'USD'. Required when using the Checkout flow.
 * @param {string} [displayName] The merchant name displayed inside of the PayPal lightbox; defaults to the company name on your Braintree account
 * @param {string} [locale=en_US] Use this option to change the language, links, and terminology used in the PayPal flow. This locale will be used unless the buyer has set a preferred locale for their account. If an unsupported locale is supplied, a fallback locale (determined by buyer preference or browser data) will be used and no error will be thrown.
 * @param {boolean} [enableShippingAddress=false] Returns a shipping address object in {@link PayPal#tokenize}.
 * @param {boolean} [shippingAddressEditable=true] Set to false to disable user editing of the shipping address.
 * @param {string} [billingAgreementDescription] Use this option to set the description of the preapproved payment agreement visible to customers in their PayPal profile during Vault flows. Max 255 characters.
 * @param {string} [landingPageType] Use this option to specify the PayPal page to display when a user lands on the PayPal site to complete the payment.
 * * `login` - A PayPal account login page is used.
 * * `billing` - A non-PayPal account landing page is used.
 * @property {lineItem[]} [lineItems] The line items for this transaction. It can include up to 249 line items.
 */
export interface PayPalCheckoutCreatePaymentOptions {
    flow: 'checkout' | 'vault';
    intent?: 'authorize' | 'order' | 'capture';
    amount?: string | number;
    offerCredit?: boolean;
    locale?: string;
    enableShippingAddress?: boolean;
    shippingAddressOverride?: PayPalShippingAddress;
    shippingAddressEditable?: boolean;
    bilingAgreementDescription?: string;
    landingPageType?: 'login' | 'billing';
    lineItems: PayPalCheckoutLineItem[];
}

/**
 * @property {string} quantity Number of units of the item purchased. This value must be a whole number and can't be negative or zero.
 * @property {string} unitAmount Per-unit price of the item. Can include up to 2 decimal places. This value can't be negative or zero.
 * @property {string} name Item name. Maximum 127 characters.
 * @property {string} kind Indicates whether the line item is a debit (sale) or credit (refund) to the customer. Accepted values: `debit` and `credit`.
 * @property {?string} unitTaxAmount Per-unit tax price of the item. Can include up to 2 decimal places. This value can't be negative or zero.
 * @property {?string} description Item description. Maximum 127 characters.
 * @property {?string} productCode Product or UPC code for the item. Maximum 127 characters.
 * @property {?string} url The URL to product information.
 */
export interface PayPalCheckoutLineItem {
    quantity: string;
    unitAmount: string;
    name: string;
    kind: string;
    unitTaxAmount?: string;
    description?: string;
    productCode?: string;
    url?: string;
}

export interface PayPalCheckoutCreateOptions {
    client?: Client;
    authorization?: string;
    merchantAccountId?: string;
}

declare class PayPalCheckout {
    /**
     * @description There are two ways to integrate the PayPal Checkout component. See the [PayPal Checkout constructor documentation](PayPalCheckout.html#PayPalCheckout) for more information and examples.
     *
     * @param {object} options Creation options:
     * @param {Client} [options.client] A {@link Client} instance.
     * @param {string} [options.authorization] A tokenizationKey or clientToken. Can be used in place of `options.client`.
     * @param {string} [options.merchantAccountId] A non-default merchant account ID to use for tokenization.
     * @param {callback} [callback] The second argument, `data`, is the {@link PayPalCheckout} instance.
     * @example
     * braintree.client.create({
     *   authorization: 'authorization'
     * }).then(function (clientInstance) {
     *   return braintree.paypalCheckout.create({
     *     client: clientInstance
     *   });
     * }).then(function (paypalCheckoutInstance) {
     *   // set up checkout.js
     * }).catch(function (err) {
     *   console.error('Error!', err);
     * });
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    static create(
        options: PayPalCheckoutCreateOptions,
        callback: callback<PayPalCheckout>
    ): void;
    static create(
        options: PayPalCheckoutCreateOptions
    ): Promise<PayPalCheckout>;

    /**
     * Creates a PayPal payment ID or billing token using the given options. This is meant to be passed to PayPal's checkout.js library.
     * When a {@link callback} is defined, the function returns undefined and invokes the callback with the id to be used with the checkout.js library. Otherwise, it returns a Promise that resolves with the id.
     * @param {PayPalCheckoutCreatePaymentOptions} options All options for the PayPalCheckout component.
     * @param {callback} [callback] The second argument is a PayPal `paymentId` or `billingToken` string, depending on whether `options.flow` is `checkout` or `vault`. This is also what is resolved by the promise if no callback is provided.
     * @example
     * // this paypal object is created by checkout.js
     * // see https://github.com/paypal/paypal-checkout
     * paypal.Buttons({
     *   createOrder: function () {
     *     // when createPayment resolves, it is automatically passed to checkout.js
     *     return paypalCheckoutInstance.createPayment({
     *       flow: 'checkout',
     *       amount: '10.00',
     *       currency: 'USD',
     *       intent: 'capture' // this value must either be `capture` or match the intent passed into the PayPal SDK intent query parameter
     *     });
     *   },
     *   // Add other options, e.g. onApproved, onCancel, onError
     * }).render('#paypal-button');
     *
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    createPayment(
        options: PayPalCheckoutCreatePaymentOptions,
        callback: callback<string>
    ): void;
    createPayment(options: PayPalCheckoutCreatePaymentOptions): Promise<string>;

    /**
     * @param {callback} [callback] Called on completion.
     * @example <caption>With callback</caption>
     * paypalInstance.teardown(function () {
     *   // teardown is complete
     * });
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    teardown(callback: callback<void>): void;
    teardown(): Promise<void>;

    /**
     * Tokenizes the authorize data from PayPal's checkout.js library when completing a buyer approval flow.
     * When a {@link callback} is defined, invokes the callback with {@link PayPalCheckout~tokenizePayload|tokenizePayload} and returns undefined. Otherwise, returns a Promise that resolves with a {@link PayPalCheckout~tokenizePayload|tokenizePayload}.
     * @public
     * @param {object} tokenizeOptions Tokens and IDs required to tokenize the payment.
     * @param {string} tokenizeOptions.payerId Payer ID returned by PayPal `onApproved` callback.
     * @param {string} [tokenizeOptions.paymentId] Payment ID returned by PayPal `onApproved` callback.
     * @param {string} [tokenizeOptions.billingToken] Billing Token returned by PayPal `onApproved` callback.
     * @param {callback} [callback] The second argument, <code>payload</code>, is a {@link PayPalCheckout~tokenizePayload|tokenizePayload}. If no callback is provided, the promise resolves with a {@link PayPalCheckout~tokenizePayload|tokenizePayload}.
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    tokenizePayment(
        tokenizeOptions: {
            payerId: string;
            paymentId?: string;
            billingToken?: string;
        },
        callback: callback<PayPalTokenizePayload>
    ): void;
    tokenizePayment(tokenizeOptions: {
        payerId: string;
        paymentId?: string;
        billingToken?: string;
    }): Promise<PayPalTokenizePayload>;
}

export default PayPalCheckout;
