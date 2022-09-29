import { callback } from './core';
import { Client } from './client';

export type LocalPaymentTypes =
    | 'bancontact'
    | 'blik'
    | 'eps'
    | 'giropay'
    | 'ideal'
    | 'sofort'
    | 'mybank'
    | 'p24'
    | 'trustly';

export interface LocalPaymentTokenizePayload {
    correlationId: string;
    nonce: string;
    details: unknown;
    type: string;
}

export interface LocalPaymentAddress {
    streetAddress?: string | undefined;
    extendedAddress?: string | undefined;
    locality?: string | undefined;
    region?: string | undefined;
    postalCode?: string | undefined;
    countryCode?: string | undefined;
}

export interface LocalPaymentFallback {
    buttonText?: string | undefined;
    url?: string | undefined;
    cancelButtonText?: string | undefined;
    cancelUrl?: string | undefined;
}

export interface LocalPaymentStartData {
    paymentId: string;
}

export interface LocalPaymentStartPaymentOptions {
    amount: string | number;
    currencyCode: string;
    paymentType: LocalPaymentTypes;
    fallback?: LocalPaymentFallback | undefined;
    windowOptions?:
        | {
              width?: number | undefined;
              height?: number | undefined;
          }
        | undefined;
    givenName?: string | undefined;
    surname?: string | undefined;
    displayName?: string | undefined;
    countryCode?: string | undefined;
    paymentTypeCountryCode?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    bic?: string | undefined;
    shippingAddressRequired?: boolean | undefined;
    address?: LocalPaymentAddress | undefined;
    onPaymentStart?: ((data: LocalPaymentStartData, callback: callback) => void) | undefined;
}

export interface LocalPaymentTokenizeOptions {
    btLpToken?: string | undefined;
    btLpPaymentId?: string | undefined;
    btLpPayerId?: string | undefined;
}

export interface LocalPaymentCreateOptions {
    authorization?: string | undefined;
    client?: Client | undefined;
    merchantAccountId?: string | undefined;
}

export interface LocalPayment {
    /**
     * braintree.localPayment.create({
     *     client: client
     * }, callback)
     */
    create(options: LocalPaymentCreateOptions): Promise<LocalPayment>;
    create(options: LocalPaymentCreateOptions, callback: callback<LocalPayment>): void;

    /**
     * The current version of the SDK, i.e. 3.84.0.
     */
    VERSION: string;

    /**
     * Closes the LocalPayment window if it is open.
     * @example
     * localPaymentInstance.closeWindow();
     */
    closeWindow(): void;

    /**
     * Focuses the LocalPayment window if it is open.
     * @example
     * localPaymentInstance.focusWindow();
     */
    focusWindow(): void;

    /**
     * Checks if required tokenization parameters are available in querystring for manual tokenization requests.
     * @example
     * // if query string contains
     * // ?btLpToken=token&btLpPaymentId=payment-id&btLpPayerId=payer-id
     * localPaymentInstance.hasTokenizationParams(); // true
     * // if query string is missing required params
     * localPaymentInstance.hasTokenizationParams(); // false
     * if (localPaymentInstance.hasTokenizationParams()) {
     *   localPaymentInstance.tokenize();
     * }
     */
    hasTokenizationParams(): boolean;

    /**
     * Launches the local payment flow and returns a nonce payload. Only one local payment flow should be active at a time.
     * One way to achieve this is to disable your local payment button while the flow is open.
     * @example
     * button.addEventListener('click', function () {
     *  // Disable the button when local payment is in progress
     *  button.setAttribute('disabled', 'disabled');
     *  // Because startPayment opens a new window, this must be called
     *  // as a result of a user action, such as a button click.
     *  localPaymentInstance.startPayment({
     *      paymentType: 'ideal',
     *      paymentTypeCountryCode: 'NL',
     *      fallback: {
     *          buttonText: 'Return to Merchant',
     *          url: 'https://example.com/my-checkout-page'
     *      },
     *          amount: '10.00',
     *          currencyCode: 'EUR',
     *          onPaymentStart: function (data, continueCallback) {
     *              // Do any preprocessing before starting the flow
     *              // data.paymentId is the ID of the localPayment
     *              continueCallback();
     *          }
     *      }).then(function (payload) {
     *          button.removeAttribute('disabled');
     *          // Submit payload.nonce to your server
     *      }).catch(function (startPaymentError) {
     *          button.removeAttribute('disabled');
     *          // Handle flow errors or premature flow closure
     *          console.error('Error!', startPaymentError);
     *      });
     * });
     */
    startPayment(options: LocalPaymentStartPaymentOptions): Promise<LocalPaymentTokenizePayload>;
    startPayment(options: LocalPaymentStartPaymentOptions, callback?: callback<LocalPaymentTokenizePayload>): void;

    /**
     * Cleanly remove anything set up by {@link module:braintree-web/local-payment.create|create}.
     * @example
     * localPaymentInstance.teardown();
     * @example <caption>With callback</caption>
     * localPaymentInstance.teardown(function () {
     *   // teardown is complete
     * });
     */
    teardown(callback?: callback): void;
    teardown(): Promise<void>;

    /**
     * Manually tokenizes params for a local payment received from PayPal.
     * When app switching back from a mobile application (such as a bank application for an iDEAL payment) the window may lose context with the parent page.
     * In that case, a fallback url is used, and this method can be used to finish the flow.
     * @example
     * localPaymentInstance.tokenize().then(function (payload) {
     *  // send payload.nonce to your server
     * }).catch(function (err) {
     *  // handle tokenization error
     * });
     */
    tokenize(params?: LocalPaymentTokenizeOptions): Promise<LocalPaymentTokenizePayload>;
    tokenize(params?: LocalPaymentTokenizeOptions, callback?: callback<LocalPaymentTokenizePayload>): void;
}
