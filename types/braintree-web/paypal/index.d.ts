import Client from '../client';
import { callback } from '../common';

/**
 * @property {Function} close A handle to close the PayPal checkout flow.
 */

/**
 * @property {string} line1 Street number and name.
 * @property {string} line2 Extended address.
 * @property {string} city City or locality.
 * @property {string} state State or region.
 * @property {string} postalCode Postal code.
 * @property {string} countryCode 2 character country code (e.g. US).
 */
interface PayPalAddress {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    countryCode: string;
}

/**
 * @property {string} recipientName Recipient of postage.
 */
export interface PayPalShippingAddress extends PayPalAddress {
    recipientName: string;
}

export interface PayPalBillingAddress extends PayPalAddress {}

/**
 * @property {string} email User's email address.
 * @property {string} payerId User's payer ID, the unique identifier for each PayPal account.
 * @property {string} firstName User's given name.
 * @property {string} lastName User's surname.
 * @property {?string} countryCode User's 2 character country code.
 * @property {?string} phone User's phone number (e.g. 555-867-5309).
 * @property {?PayPalShippingAddress} details.shippingAddress User's shipping address details, only available if shipping address is enabled.
 * @property {?PayPalBillingAddress} details.billingAddress User's billing address details.
 */
export interface PayPalAccountDetails {
    email: string;
    payerId: string;
    firstName: string;
    lastName: string;
    countryCode?: string;
    phone?: string;
    shippingAddress?: PayPalShippingAddress;
    billingAddress?: PayPalBillingAddress;
}

/**
 * @property {string} value An amount defined by [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm) for the given currency.
 * @property {string} currency 3 letter currency code as defined by [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm).
 */
interface PayPalFinancingAmount {
  value: string;
  currency: string;
}

/**
 * @property {string} nonce The payment method nonce.
 * @property {string} type The payment method type, always `PayPalAccount`.
 * @property {PayPalAccountDetails} details Additional PayPal account details.
 */
export interface PayPalTokenizePayload {
    nonce: string;
    type: 'PayPalAccount';
    details: PayPalAccountDetails;
    creditFinancingOffered?:{
      totalCost: PayPalFinancingAmount;
      term: number;
      monthlyPayment: PayPalFinancingAmount;
      totalInterest: PayPalFinancingAmount;
      payerAcceptance: string;
      cartAmountImmutable: boolean;
    }
}

/**
 * @property {string} flow Set to 'checkout' for one-time payment flow, or 'vault' for Vault flow. If 'vault' is used with a client token generated with a customer id, the PayPal account will be added to that customer as a saved payment method.
 * @property {string} [intent=authorize]
 * * `authorize` - Submits the transaction for authorization but not settlement.
 * * `order` - Validates the transaction without an authorization (i.e. without holding funds). Useful for authorizing and capturing funds up to 90 days after the order has been placed. Only available for Checkout flow.
 * * `sale` - Payment will be immediately submitted for settlement upon creating a transaction.
 * @property {boolean} [offerCredit=false] Offers PayPal Credit as the default funding instrument for the transaction. If the customer isn't pre-approved for PayPal Credit, they will be prompted to apply for it.
 * @property {string} [useraction]
 * Changes the call-to-action in the PayPal flow. By default the final button will show the localized
 * word for "Continue" and implies that the final amount billed is not yet known.
 *
 * Setting this option to `commit` changes the button text to "Pay Now" and page text will convey to
 * the user that billing will take place immediately.
 * @property {string|number} [amount] The amount of the transaction. Required when using the Checkout flow.
 * @property {string} [currency] The currency code of the amount, such as 'USD'. Required when using the Checkout flow.
 * @property {string} [displayName] The merchant name displayed inside of the PayPal lightbox; defaults to the company name on your Braintree account
 * @property {string} [locale=en_US] Use this option to change the language, links, and terminology used in the PayPal flow. This locale will be used unless the buyer has set a preferred locale for their account. If an unsupported locale is supplied, a fallback locale (determined by buyer preference or browser data) will be used and no error will be thrown.
 *
 * Supported locales are:
 * `da_DK`,
 * `de_DE`,
 * `en_AU`,
 * `en_GB`,
 * `en_US`,
 * `es_ES`,
 * `fr_CA`,
 * `fr_FR`,
 * `id_ID`,
 * `it_IT`,
 * `ja_JP`,
 * `ko_KR`,
 * `nl_NL`,
 * `no_NO`,
 * `pl_PL`,
 * `pt_BR`,
 * `pt_PT`,
 * `ru_RU`,
 * `sv_SE`,
 * `th_TH`,
 * `zh_CN`,
 * `zh_HK`,
 * and `zh_TW`.
 *
 * @property {boolean} [enableShippingAddress=false] Returns a shipping address object in {@link PayPal#tokenize}.
 * @property {PayPalShippingAddress} [shippingAddressOverride] Allows you to pass a shipping address you have already collected into the PayPal payment flow.
 * @property {string} [billingAgreementDescription] Use this option to set the description of the preapproved payment agreement visible to customers in their PayPal profile during Vault flows. Max 255 characters.
 * @property {string} [landingPageType] Use this option to specify the PayPal page to display when a user lands on the PayPal site to complete the payment.
 */
export interface PayPalTokenizeOptions {
    flow: 'checkout' | 'vault';
    intent?: 'authorize' | 'order' | 'sale';
    offerCredit?: boolean;
    useraction?: string;
    amount?: string | number;
    currency?: string;
    displayName?: string;
    locale?: string;
    enableShippingAddress?: boolean;
    shippingAddressOverride?: PayPalShippingAddress;
    shippingAddressEditable?: boolean;
    billingAgreementDescription?: string;
    landingPageType?: 'login' | 'billing';
}

declare class PayPal {
    /**
     * @static
     * @function create
     * @param {object} options Creation options:
     * @param {Client} [options.client] A {@link Client} instance.
     * @param {string} [options.authorization] A tokenizationKey or clientToken. Can be used in place of `options.client`.
     * @param {callback} callback The second argument, `data`, is the {@link PayPal} instance.
     * @example
     * // We recomend creating your PayPal button with button.js
     * // For an example, see http://codepen.io/braintree/pen/LNKJWa
     * var paypalButton = document.querySelector('.paypal-button');
     *
     * braintree.client.create({
     *   authorization: CLIENT_AUTHORIZATION
     * }, function (clientErr, clientInstance) {
     *   if (clientErr) {
     *     console.error('Error creating client:', clientErr);
     *     return;
     *   }
     *
     *   braintree.paypal.create({
     *     client: clientInstance
     *   }, function (paypalErr, paypalInstance) {
     *     if (paypalErr) {
     *       console.error('Error creating PayPal:', paypalErr);
     *       return;
     *     }
     *
     *     paypalButton.removeAttribute('disabled');
     *
     *     // When the button is clicked, attempt to tokenize.
     *     paypalButton.addEventListener('click', function (event) {
     *       // Because tokenization opens a popup, this has to be called as a result of
     *       // customer action, like clicking a button. You cannot call this at any time.
     *       paypalInstance.tokenize({
     *         flow: 'vault'
     *         // For more tokenization options, see the full PayPal tokenization documentation
     *         // http://braintree.github.io/braintree-web/current/PayPal.html#tokenize
     *       }, function (tokenizeErr, payload) {
     *         if (tokenizeErr) {
     *           if (tokenizeErr.type !== 'CUSTOMER') {
     *             console.error('Error tokenizing:', tokenizeErr);
     *           }
     *           return;
     *         }
     *
     *         // Tokenization succeeded
     *         paypalButton.setAttribute('disabled', true);
     *         console.log('Got a nonce! You should submit this to your server.');
     *         console.log(payload.nonce);
     *       });
     *     }, false);
     *   });
     * });
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    static create(
        options: { client?: Client; authorization?: string },
        callback: callback<PayPal>
    ): void;
    static create(options: {
        client?: Client;
        authorization?: string;
    }): Promise<PayPal>;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    static VERSION: string;

    /**
     * Closes the PayPal window if it is open.
     * @example
     * paypalInstance.closeWindow();
     */
    closeWindow(): void;

    /**
     * Focuses the PayPal window if it is open.
     * @example
     * paypalInstance.focusWindow();
     */
    focusWindow(): void;

    /**
     * Launches the PayPal login flow and returns a nonce payload. Only one PayPal login flow should be active at a time. One way to achieve this is to disable your PayPal button while the flow is open.
     * @param {object} options All tokenization options for the PayPal component.
     * @param {string} options.flow Set to 'checkout' for one-time payment flow, or 'vault' for Vault flow. If 'vault' is used with a client token generated with a customer id, the PayPal account will be added to that customer as a saved payment method.
     * @param {string} [options.intent=authorize]
     * * `authorize` - Submits the transaction for authorization but not settlement.
     * * `order` - Validates the transaction without an authorization (i.e. without holding funds). Useful for authorizing and capturing funds up to 90 days after the order has been placed. Only available for Checkout flow.
     * * `sale` - Payment will be immediately submitted for settlement upon creating a transaction.
     * @param {boolean} [options.offerCredit=false] Offers PayPal Credit as the default funding instrument for the transaction. If the customer isn't pre-approved for PayPal Credit, they will be prompted to apply for it.
     * @param {string} [options.useraction]
     * Changes the call-to-action in the PayPal flow. By default the final button will show the localized
     * word for "Continue" and implies that the final amount billed is not yet known.
     *
     * Setting this option to `commit` changes the button text to "Pay Now" and page text will convey to
     * the user that billing will take place immediately.
     * @param {string|number} [options.amount] The amount of the transaction. Required when using the Checkout flow.
     * @param {string} [options.currency] The currency code of the amount, such as 'USD'. Required when using the Checkout flow.
     * @param {string} [options.displayName] The merchant name displayed inside of the PayPal lightbox; defaults to the company name on your Braintree account
     * @param {string} [options.locale=en_US] Use this option to change the language, links, and terminology used in the PayPal flow. This locale will be used unless the buyer has set a preferred locale for their account. If an unsupported locale is supplied, a fallback locale (determined by buyer preference or browser data) will be used and no error will be thrown.
     *
     * Supported locales are:
     * `da_DK`,
     * `de_DE`,
     * `en_AU`,
     * `en_GB`,
     * `en_US`,
     * `es_ES`,
     * `fr_CA`,
     * `fr_FR`,
     * `id_ID`,
     * `it_IT`,
     * `ja_JP`,
     * `ko_KR`,
     * `nl_NL`,
     * `no_NO`,
     * `pl_PL`,
     * `pt_BR`,
     * `pt_PT`,
     * `ru_RU`,
     * `sv_SE`,
     * `th_TH`,
     * `zh_CN`,
     * `zh_HK`,
     * and `zh_TW`.
     *
     * @param {boolean} [options.enableShippingAddress=false] Returns a shipping address object in {@link PayPal#tokenize}.
     * @param {object} [options.shippingAddressOverride] Allows you to pass a shipping address you have already collected into the PayPal payment flow.
     * @param {string} options.shippingAddressOverride.line1 Street address.
     * @param {string} [options.shippingAddressOverride.line2] Street address (extended).
     * @param {string} options.shippingAddressOverride.city City.
     * @param {string} options.shippingAddressOverride.state State.
     * @param {string} options.shippingAddressOverride.postalCode Postal code.
     * @param {string} options.shippingAddressOverride.countryCode Country.
     * @param {string} [options.shippingAddressOverride.phone] Phone number.
     * @param {string} [options.shippingAddressOverride.recipientName] Recipient's name.
     * @param {boolean} [options.shippingAddressEditable=true] Set to false to disable user editing of the shipping address.
     * @param {string} [options.billingAgreementDescription] Use this option to set the description of the preapproved payment agreement visible to customers in their PayPal profile during Vault flows. Max 255 characters.
     * @param {string} [options.landingPageType] Use this option to specify the PayPal page to display when a user lands on the PayPal site to complete the payment.
     * * `login` - A PayPal account login page is used.
     * * `billing` - A non-PayPal account landing page is used.
     * @param {callback} callback The second argument, <code>data</code>, is a {@link PayPal~tokenizePayload|tokenizePayload}.
     * @example
     * <caption>Tokenizing with the vault flow</caption>
     * button.addEventListener('click', function () {
     *   // Disable the button so that we don't attempt to open multiple popups.
     *   button.setAttribute('disabled', 'disabled');
     *
     *   // if there is any other part of the page that must be disabled
     *   // while authentication is in progress, do so now
     *
     *   // Because PayPal tokenization opens a popup, this must be called
     *   // as a result of a user action, such as a button click.
     *   paypalInstance.tokenize({
     *     flow: 'vault' // Required
     *     // Any other tokenization options
     *   }, function (tokenizeErr, payload) {
     *     button.removeAttribute('disabled');
     *
     *     // if any other part of the page was disabled, re-enable now
     *
     *     if (tokenizeErr) {
     *       // Handle tokenization errors or premature flow closure
     *
     *       switch (tokenizeErr.code) {
     *         case 'PAYPAL_POPUP_CLOSED':
     *           console.error('Customer closed PayPal popup.');
     *           break;
     *         case 'PAYPAL_ACCOUNT_TOKENIZATION_FAILED':
     *           console.error('PayPal tokenization failed. See details:', tokenizeErr.details);
     *           break;
     *         case 'PAYPAL_FLOW_FAILED':
     *           console.error('Unable to initialize PayPal flow. Are your options correct?', tokenizeErr.details);
     *           break;
     *         default:
     *           console.error('Error!', tokenizeErr);
     *       }
     *     } else {
     *       // Submit payload.nonce to your server
     *     }
     *   });
     * });

    * @returns {Promise|PayPalTokenizeReturn} A handle to manage the PayPal checkout frame. If no callback is provided, returns a promise.
    */
    tokenize(
        options: PayPalTokenizeOptions,
        callback: callback<PayPalTokenizePayload>
    ): void;
    tokenize(options: PayPalTokenizeOptions): Promise<PayPalTokenizePayload>;

    /**
     * Cleanly remove anything set up by {@link module:braintree-web/paypal.create|create}.
     * @param {callback} [callback] Called on completion.
     * @example <caption>With callback</caption>
     * paypalInstance.teardown(function () {
     *   // teardown is complete
     * });
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    teardown(callback: callback<void>): void;
    teardown(): Promise<void>;
}

export default PayPal;
