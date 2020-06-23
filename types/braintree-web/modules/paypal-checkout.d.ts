/// <reference types="paypal-checkout-components" />

/** @module braintree-web/paypal-checkout */
declare namespace braintree {
    export var paypalCheckout: braintree.PayPalCheckout;

    export interface PayPalCheckout {
        /**
         * @static
         * @function create
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
         * @returns {(Promise|void)} Returns a promise if no callback is provided.
         */
        create(options: {
            client?: Client;
            authorization?: string;
            merchantAccountId?: string;
        }): Promise<PayPalCheckout>;
        create(
            options: { client?: Client; authorization?: string; merchantAccountId?: string },
            callback?: callback,
        ): void;

        /**
         * @description The current version of the SDK, i.e. `3.0.2`.
         * @type {string}
         */
        VERSION: string;

        /**
         * Creates a PayPal payment ID or billing token using the given options. This is meant to be passed to PayPal's checkout.js library.
         * When a {@link callback} is defined, the function returns undefined and invokes the callback with the id to be used with the checkout.js library. Otherwise, it returns a Promise that resolves with the id.
         * @public
         * @param {object} options All options for the PayPalCheckout component.
         * @param {string} options.flow Set to 'checkout' for one-time payment flow, or 'vault' for Vault flow. If 'vault' is used with a client token generated with a customer ID, the PayPal account will be added to that customer as a saved payment method.
         * @param {string} [options.intent=authorize]
         * * `authorize` - Submits the transaction for authorization but not settlement.
         * * `order` - Validates the transaction without an authorization (i.e. without holding funds). Useful for authorizing and capturing funds up to 90 days after the order has been placed. Only available for Checkout flow.
         * * `capture` - Payment will be immediately submitted for settlement upon creating a transaction. `sale` can be used as an alias for this value.
         * @param {boolean} [options.offerCredit=false] Offers PayPal Credit as the default funding instrument for the transaction. If the customer isn't pre-approved for PayPal Credit, they will be prompted to apply for it.
         * @param {(string|number)} [options.amount] The amount of the transaction. Required when using the Checkout flow.
         * @param {string} [options.currency] The currency code of the amount, such as 'USD'. Required when using the Checkout flow.
         * @param {string} [options.displayName] The merchant name displayed inside of the PayPal lightbox; defaults to the company name on your Braintree account
         * @param {string} [options.locale=en_US] Use this option to change the language, links, and terminology used in the PayPal flow. This locale will be used unless the buyer has set a preferred locale for their account. If an unsupported locale is supplied, a fallback locale (determined by buyer preference or browser data) will be used and no error will be thrown.
         * @param {string} [options.vaultInitiatedCheckoutPaymentMethodToken] Use the payment method nonce representing a PayPal account with a Billing Agreement ID to create the payment and redirect the customer to select a new financial instrument. This option is only applicable to the `checkout` flow.
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
         * @param {shippingOption[]} [options.shippingOptions] List of shipping options offered by the payee or merchant to the payer to ship or pick up their items.
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
         * @property {lineItem[]} [options.lineItems] The line items for this transaction. It can include up to 249 line items.
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
         * @returns {(Promise|void)} Returns a promise if no callback is provided.
         */
        createPayment(options: {
            flow: paypal.FlowType;
            intent?: paypal.Intent;
            offerCredit?: boolean;
            amount?: string | number;
            currency?: string;
            displayName?: string;
            locale?: string;
            vaultInitiatedCheckoutPaymentMethodToken?: string;
            shippingOptions?: paypal.ShippingOption[];
            enableShippingAddress?: boolean;
            shippingAddressOverride?: paypal.Address;
            shippingAddressEditable?: boolean;
            billingAgreementDescription?: string;
            landingPageType?: string;
            lineItems?: paypal.LineItem[];
        }, callback?: callback): Promise<string>;

        /**
         * Tokenizes the authorize data from PayPal's checkout.js library when completing a buyer approval flow.
         * When a {@link callback} is defined, invokes the callback with {@link PayPalCheckout~tokenizePayload|tokenizePayload} and returns undefined. Otherwise, returns a Promise that resolves with a {@link PayPalCheckout~tokenizePayload|tokenizePayload}.
         * @public
         * @param {object} tokenizeOptions Tokens and IDs required to tokenize the payment.
         * @param {string} tokenizeOptions.payerId Payer ID returned by PayPal `onApproved` callback.
         * @param {string} [tokenizeOptions.paymentId] Payment ID returned by PayPal `onApproved` callback.
         * @param {string} [tokenizeOptions.billingToken] Billing Token returned by PayPal `onApproved` callback.
         * @param {boolean} [tokenizeOptions.vault=true] Whether or not to vault the resulting PayPal account (if using a client token generated with a customer id and the vault flow).
         * @param {callback} [callback] The second argument, <code>payload</code>, is a {@link PayPalCheckout~tokenizePayload|tokenizePayload}. If no callback is provided, the promise resolves with a {@link PayPalCheckout~tokenizePayload|tokenizePayload}.
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
         * @returns {(Promise|void)} Returns a promise if no callback is provided.
         */
        tokenizePayment(tokenizeOptions: {
            payerId: string;
            paymentId?: string;
            billingToken?: string;
            vault?: boolean;
        }): Promise<paypal.TokenizePayload>;
        tokenizePayment(
            tokenizeOptions: {
                payerId: string;
                paymentId?: string;
                billingToken?: string;
                vault?: boolean;
            },
            callback?: callback,
        ): void;

        /**
         * Resolves with the PayPal client id to be used when loading the PayPal SDK.
         * @public
         * @param {callback} [callback] The second argument, <code>payload</code>, is a {@link PayPalCheckout~tokenizePayload|tokenizePayload}. If no callback is provided, the promise resolves with a {@link PayPalCheckout~tokenizePayload|tokenizePayload}.
         * @returns {(Promise|void)} Returns a promise if no callback is provided.
         * @example
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
         * When a {@link callback} is defined, the function returns undefined and invokes the callback with the id to be used with the checkout.js library. Otherwise, it returns a Promise that resolves with the id.
         * @public
         * @ignore
         * @param {object} options These options are identical to the {@link PayPalCheckout#createPayment|options for creating a payment resource}, except for the following:
         * * `flow` cannot be set (will always be `'checkout'`)
         * * `amount`, `currency`, and `vaultInitiatedCheckoutPaymentMethodToken` are required instead of optional
         * * Additional configuration is available (listed below)
         * @param {boolean} [options.optOutOfModalBackdrop=false] By default, the webpage will darken and become unusable while the PayPal window is open. For full control of the UI, pass `true` for this option.
         * @param {callback} [callback] The second argument, <code>payload</code>, is a {@link PayPalCheckout~tokenizePayload|tokenizePayload}. If no callback is provided, the promise resolves with a {@link PayPalCheckout~tokenizePayload|tokenizePayload}.
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
         * @returns {(Promise|void)} Returns a promise if no callback is provided.
         */
        startVaultInitiatedCheckout(options: { optOutOfModalBackdrop: boolean }): Promise<void>;
        startVaultInitiatedCheckout(options: { optOutOfModalBackdrop: boolean }, callback: callback): void;

        /**
         * Cleanly tear down anything set up by {@link module:braintree-web/paypal-checkout.create|create}.
         * @public
         * @param {callback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
         * @example
         * paypalCheckoutInstance.teardown();
         * @example <caption>With callback</caption>
         * paypalCheckoutInstance.teardown(function () {
         *   // teardown is complete
         * });
         * @returns {(Promise|void)} Returns a promise if no callback is provided.
         */
        teardown(callback: () => void): void;
        teardown(): Promise<void>;
    }
}
