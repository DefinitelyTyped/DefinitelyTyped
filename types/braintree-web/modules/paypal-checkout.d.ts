/// <reference types="paypal-checkout-components" />

import { callback } from './core';
import { Client } from './client';

export interface PayPalCheckoutCreatePaymentOptions {
    flow: paypal.FlowType;
    intent?: paypal.Intent | undefined;
    offerCredit?: boolean | undefined;
    amount?: string | number | undefined;
    currency?: string | undefined;
    displayName?: string | undefined;
    locale?: string | undefined;
    vaultInitiatedCheckoutPaymentMethodToken?: string | undefined;
    shippingOptions?: paypal.ShippingOption[] | undefined;
    enableShippingAddress?: boolean | undefined;
    shippingAddressOverride?: paypal.Address | undefined;
    shippingAddressEditable?: boolean | undefined;
    requestBillingAgreement?: boolean | undefined;
    billingAgreementDescription?: string | undefined;
    landingPageType?: string | undefined;
    lineItems?: paypal.LineItem[] | undefined;
}

export interface PayPalCheckoutTokenizationOptions {
    payerId: string;
    paymentId?: string | undefined;
    billingToken?: string | undefined;
    vault?: boolean | undefined;
}

export interface PayPalCheckoutLoadPayPalSDKOptions {
    /**
     * By default, this will be the client id associated with the authorization used to create the
     * Braintree component. When used in conjunction with passing authorization when creating the
     * PayPal Checkout component, you can speed up the loading of the PayPal SDK.
     */
    'client-id'?: string | undefined;

    /**
     * By default, the PayPal SDK defaults to an intent of capture. Since the default intent when
     * calling createPayment is authorize, the PayPal SDK will be loaded with intent=authorize. If you
     * wish to use a different intent when calling createPayment, make sure it matches here. If sale
     * is used, it will be converted to capture for the PayPal SDK. If the vault: true param is used,
     * no default intent will be passed.
     *
     * @default 'authorize'
     */
    intent?: 'authorize' | 'capture' | 'sale' | 'tokenize' | undefined;

    /**
     * If a currency is passed in createPayment, it must match the currency passed here.
     *
     * @default 'USD'
     */
    currency?: string | undefined;

    /**
     * Must be true when using flow: vault in createPayment.
     */
    vault?: boolean | undefined;

    /**
     * By default, the Braintree SDK will only load the PayPal smart buttons component. If you would
     * like to load just the messages component, pass messages. If you would like to load both, pass
     * buttons,messages
     *
     * @default 'buttons'
     */
    components?: 'buttons' | 'messages' | 'buttons,messages' | undefined;

    /**
     * The data attributes to apply to the script. Any data attribute can be passed. A subset of the
     * parameters are listed below. For a full list of data attributes, see the PayPal docs.
     */
    dataAttributes?: {
        /**
         * CSP nonce used for rendering the button.
         */
        'csp-nonce'?: string | undefined;

        /**
         * Client token used for identifying your buyers.
         */
        'data-client-token'?: string | undefined;

        /**
         * Order ID used for optimizing the funding that displays.
         */
        'data-order-id'?: string | undefined;

        /**
         * Log page type and interactions for the JavaScript SDK.
         */
        'data-page-type'?: string | undefined;

        /**
         * Partner attribution ID used for revenue attribution.
         */
        'data-partner-attribution-id'?: string | undefined;
    } | undefined;
    /**
     * Funding sources to disallow from showing in the checkout buttons.
     * Do not use this query parameter to disable advanced credit and debit card payments.
     * e.g. card, credit, bancontact
     * The full list is available in the PayPal SDK docs.
     */
    'disable-funding'?: string;
    /**
     * Funding sources to allow in the checkout buttons.
     * e.g. venmo, paylater
     * The full list is available in the PayPal SDK docs.
     */
    'enable-funding'?: string;
    /**
     * The locale used to localize any components.
     * PayPal recommends not setting this parameter, as the buyer's locale is automatically set by PayPal.
     * e.g. en_US, fr_FR, de_DE
     */
    locale?: string;
    /**
     * Enable debug mode for ease of debugging. Do not enable for production traffic.
     */
    debug?: boolean;
    /**
     * Set to true if the transaction is completed on the PayPal review page or false if the amount
     * captured changes after the buyer returns to your site. Not applicable for subscriptions.
     * Important: If you're integrating with a PayPal API, make sure the commit value you pass
     * in the API call matches the value you pass in the JavaScript call.
     */
    commit?: boolean;
    /**
     * The buyer country. Available in Sandbox for testing.
     */
    'buyer-country'?: string;
    /**
     * The date of integration. Used to ensure backwards compatibility.
     * Format: YYYY-MM-DD
     */
    'integration-date'?: string;
    /**
     * The merchant for whom you are facilitating a transaction.
     */
    'merchant-id'?: string;
}

export interface PayPalCheckout {
    /**
     * @description There are two ways to integrate the PayPal Checkout component.
     * See the [PayPal Checkout constructor documentation](PayPalCheckout.html#PayPalCheckout) for more information and examples.
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
     */
    create(options: { client?: Client | undefined; authorization?: string | undefined; merchantAccountId?: string | undefined }): Promise<PayPalCheckout>;
    create(options: { client?: Client | undefined; authorization?: string | undefined; merchantAccountId?: string | undefined }, callback?: callback): void;

    /**
     * Resolves when the PayPal SDK has been succesfully loaded onto the page.
     *
     * @link https://braintree.github.io/braintree-web/current/PayPalCheckout.html#loadPayPalSDK
     */
    loadPayPalSDK(options?: PayPalCheckoutLoadPayPalSDKOptions): Promise<PayPalCheckout>;
    loadPayPalSDK(options?: PayPalCheckoutLoadPayPalSDKOptions, callback?: callback): void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     */
    VERSION: string;

    /**
     * Creates a PayPal payment ID or billing token using the given options. This is meant to be passed to PayPal's checkout.js library.
     * When a {@link callback} is defined, the function returns undefined and invokes the callback with the id to be used with the checkout.js
     * library. Otherwise, it returns a Promise that resolves with the id.
     * `authorize` - Submits the transaction for authorization but not settlement.
     * `order` - Validates the transaction without an authorization (i.e. without holding funds).
     *           Useful for authorizing and capturing funds up to 90 days after the order has been placed. Only available for Checkout flow.
     * `capture` - Payment will be immediately submitted for settlement upon creating a transaction.
     * `sale` can be used as an alias for this value.
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
     *     * * `login` - A PayPal account login page is used.
     * * `billing` - A non-PayPal account landing page is used.
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
     * @example
     * // shippingOptions are passed to createPayment. You can review the result from onAuthorize to determine which shipping option id was selected.
     * ```javascript
     * braintree.client.create({
     *   authorization: 'authorization'
     * }).then(function (clientInstance) {
     *   return braintree.paypalCheckout.create({
     *     client: clientInstance
     *   });
     * }).then(function (paypalCheckoutInstance) {
     *   return paypal.Button.render({
     *     env: 'production'
     *
     *     payment: function () {
     *       return paypalCheckoutInstance.createPayment({
     *         flow: 'checkout',
     *         amount: '10.00',
     *         currency: 'USD',
     *         shippingOptions: [
     *           {
     *             id: 'UUID-9',
     *             type: 'PICKUP',
     *             label: 'Store Location Five',
     *             selected: true,
     *             amount: {
     *               value: '1.00',
     *               currency: 'USD'
     *             }
     *           },
     *           {
     *             id: 'shipping-speed-fast',
     *             type: 'SHIPPING',
     *             label: 'Fast Shipping',
     *             selected: false,
     *             amount: {
     *               value: '1.00',
     *               currency: 'USD'
     *             }
     *           },
     *           {
     *             id: 'shipping-speed-slow',
     *             type: 'SHIPPING',
     *             label: 'Slow Shipping',
     *             selected: false,
     *             amount: {
     *               value: '1.00',
     *               currency: 'USD'
     *             }
     *           }
     *         ]
     *       });
     *     },
     *
     *     onAuthorize: function (data, actions) {
     *       return paypalCheckoutInstance.tokenizePayment(data).then(function (payload) {
     *         // Submit payload.nonce to your server
     *       });
     *     }
     *   }, '#paypal-button');
     * }).catch(function (err) {
     *  console.error('Error!', err);
     * });
     * ```
     *
     */
    createPayment(options: PayPalCheckoutCreatePaymentOptions, callback?: callback): Promise<string>;

    /**
     * Tokenizes the authorize data from PayPal's checkout.js library when completing a buyer approval flow.
     * When a {@link callback} is defined, invokes the callback with {@link PayPalCheckout~tokenizePayload|tokenizePayload} and returns undefined.
     * Otherwise, returns a Promise that resolves with a {@link PayPalCheckout~tokenizePayload|tokenizePayload}.
     * @example <caption>Opt out of auto-vaulting behavior</caption>
     * // create the paypalCheckoutInstance with a client token generated with a customer id
     * paypal.Buttons({
     *   createBillingAgreement: function () {
     *     return paypalCheckoutInstance.createPayment({
     *       flow: 'vault'
     *       // your other createPayment options here
     *     });
     *   },
     *   onApproved: function (data) {
     *     data.vault = false;
     *
     *     return paypalCheckoutInstance.tokenizePayment(data);
     *   },
     *   // Add other options, e.g. onCancel, onError
     * }).render('#paypal-button');
     *
     */
    tokenizePayment(tokenizeOptions: PayPalCheckoutTokenizationOptions): Promise<paypal.TokenizePayload>;
    tokenizePayment(tokenizeOptions: PayPalCheckoutTokenizationOptions, callback?: callback): void;

    /**
     * Resolves with the PayPal client id to be used when loading the PayPal SDK.     * @example
     * paypalCheckoutInstance.getClientId().then(function (id) {
     *  var script = document.createElement('script');
     *
     *  script.src = 'https://www.paypal.com/sdk/js?client-id=' + id;
     *  script.onload = function () {
     *    // setup the PayPal SDK
     *  };
     *
     *  document.body.appendChild(script);
     * });
     */
    getClientId(): Promise<string>;
    getClientId(callback: (id: string) => void): void;

    /**
     * Initializes the PayPal checkout flow with a payment method nonce that represents a vaulted PayPal account.
     * When a {@link callback} is defined, the function returns undefined and invokes the callback with the id to be used with the checkout.js library.
     * Otherwise, it returns a Promise that resolves with the id.
     * `flow` cannot be set (will always be `'checkout'`)
     * `amount`, `currency`, and `vaultInitiatedCheckoutPaymentMethodToken` are required instead of optional
     * * Additional configuration is available (listed below)
     * @example
     * paypalCheckoutInstance.startVaultInitiatedCheckout({
     *   vaultInitiatedCheckoutPaymentMethodToken: 'nonce-that-represents-a-vaulted-paypal-account',
     *   amount: '10.00',
     *   currency: 'USD'
     * }).then(function (payload) {
     *   // send payload.nonce to your server
     * }).catch(function (err) {
     *   if (err.code === 'PAYPAL_POPUP_CLOSED') {
     *     // indicates that customer canceled by
     *     // manually closing the PayPal popup
     *   }
     *
     *   // handle other errors
     * });
     *
     */
    startVaultInitiatedCheckout(options: { optOutOfModalBackdrop: boolean }): Promise<void>;
    startVaultInitiatedCheckout(options: { optOutOfModalBackdrop: boolean }, callback: callback): void;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/paypal-checkout.create|create}.
     * @example
     * paypalCheckoutInstance.teardown();
     * @example <caption>With callback</caption>
     * paypalCheckoutInstance.teardown(function () {
     *   // teardown is complete
     * });
     */
    teardown(callback: () => void): void;
    teardown(): Promise<void>;
}
