// Type definitions for Braintree-web v3.45.0
// Project: https://github.com/braintree/braintree-web
// Definitions by: Guy Shahine <https://github.com/chlela>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import AmericanExpress from './american-express';
import ApplePay from './apple-pay';
import Client from './client';
import DataCollector from './data-collector';
import GooglePayment from './google-payment';
import HostedFields from './hosted-fields';
import Masterpass from './masterpass';
import PaymentRequestComponent from './payment-request';
import PayPal from './paypal';
import PayPalCheckout from './paypal-checkout';
import ThreeDSecure from './three-d-secure';
import UnionPay from './unionpay';
import USBankAccount from './us-bank-account';
import Venmo from './venmo';
import VisaCheckout from './visa-checkout';

export { BraintreeError } from './common';
export {
    default as AmericanExpress,
    AmericanExpressCreateOptions
} from './american-express';
export {
    default as ApplePay,
    ApplePayCreateOptions,
    ApplePayPayload,
    ApplePayPaymentRequest,
    ApplePayStatusCodes,
    ApplePayTokenizePayload
} from './apple-pay';
export {
    default as Client,
    ClientAnalyticsMetadata,
    Configuration,
    CreditCardInfo
} from './client';
export {
    default as DataCollector,
    DataCollectorCreateOptions
} from './data-collector';
export {
    default as HostedFields,
    HostedFieldFieldOptions,
    HostedFieldsAccountDetails,
    HostedFieldsCardCode,
    HostedFieldsCreateOptions,
    HostedFieldsEventName,
    HostedFieldsField,
    HostedFieldsFieldDataFields,
    HostedFieldsHostedFieldsCard,
    HostedFieldsHostedFieldsFieldData,
    HostedFieldsHostedFieldsFieldName,
    HostedFieldsStateObject,
    HostedFieldsStyleAttribute,
    HostedFieldsStyleOptions,
    HostedFieldsTokenizePayload
} from './hosted-fields';
export {
    default as GooglePayment,
    GooglePaymentCreateOptions,
    GoogleTokenizePayload
} from './google-payment';
export {
    default as PaymentRequestComponent,
    PaymentRequestConfiguration,
    PaymentRequestCreateOptions,
    PaymentRequestEventName,
    PaymentRequestTokenizePayload,
    PaymentRequestShippingEventObject
} from './payment-request';
export {
    default as PayPal,
    PayPalAccountDetails,
    PayPalBillingAddress,
    PayPalShippingAddress,
    PayPalTokenizeOptions,
    PayPalTokenizePayload
} from './paypal';
export {
    default as PayPalCheckout,
    PayPalCheckoutCreatePaymentOptions,
    PayPalCheckoutLineItem
} from './paypal-checkout';
export {
    default as ThreeDSecure,
    ThreeDSecureAccountDetails,
    ThreeDSecureVerifyPayload,
    ThreeDSecureVerifyOptions
} from './three-d-secure';
export {
    default as UnionPay,
    UnionPayAccountDetails,
    UnionPayEnrollOptions,
    UnionPayEnrollPayload,
    UnionPayFetchCapabilitiesPayload,
    UnionPayProperties,
    UnionPayTokenizeOptions,
    UnionPayTokenizePayload
} from './unionpay';
export {
    default as USBankAccount,
    USBankAccountAddress,
    USBankAccountCreateOptions,
    USBankAccountDetails,
    USBankAccountLogin,
    USBankAccountTokenizeOptions,
    USBankAccountTokenizePayload
} from './us-bank-account';
export {
    default as Venmo,
    VenmoCreateOptions,
    VenmoTokenizePayload
} from './venmo';
export {
    default as VisaCheckout,
    VisaCheckoutAddress,
    VisaCheckoutTokenizePayload,
    VisaCheckoutUserData
} from './visa-checkout';

/**
 * @module braintree-web
 * @description This is the top-level module exported by the Braintree JavaScript SDK. In a browser environment, this will be the global <code>braintree</code> object. In a CommonJS environment (like Browserify or Webpack), it will be the default export of the <code>braintree-web</code> package. In AMD environments (like RequireJS), it can be `require`d like other modules.
 * @example
 * <caption>CommonJS</caption>
 * var braintree = require('braintree-web');
 *
 * braintree.client.create(...);
 * @example
 * <caption>In the browser</caption>
 * <script src="https://js.braintreegateway.com/web/3.0.2/js/client.min.js"></script>
 * <script>
 *   window.braintree.client.create(...);
 * </script>
 * @example
 * <caption>AMD</caption>
 * // main.js
 * require.config({
 *   paths: {
 *     braintreeClient: 'https://js.braintreegateway.com/web/3.0.2/js/client.min'
 *   }
 * });
 *
 * require(['braintreeClient'], function (braintreeClient) {
 *   braintreeClient.create(...);
 * });
 */

/* Lowercased namespace exports preserved for compatibility */

/** @type {module:braintree-web/client} */
export var client: typeof Client;

/** @type {module:braintree-web/paypal} */
export var paypal: typeof PayPal;

/** @type {module:braintree-web/hosted-fields} */
export var hostedFields: typeof HostedFields;

/** @type {module:braintree-web/three-d-secure} */
export var threeDSecure: typeof ThreeDSecure;

/** @type {module:braintree-web/data-collector} */
export var dataCollector: typeof DataCollector;

/** @type {module:braintree-web/american-express} */
export var americanExpress: typeof AmericanExpress;

/** @type {module:braintree-web/unionpay} */
export var unionpay: typeof UnionPay;

/** @type {module:braintree-web/apple-pay} */
export var applePay: typeof ApplePay;

/** @type {module:braintree-web/us-bank-account} */
export var usBankAccount: typeof USBankAccount;

export var googlePayment: typeof GooglePayment;

export var venmo: typeof Venmo;

export var visaCheckout: typeof VisaCheckout;

export var paypalCheckout: typeof PayPalCheckout;

export var masterpass: typeof Masterpass;

export var paymentRequest: typeof PaymentRequestComponent;

/**
 * @description The current version of the SDK, i.e. `3.0.2`.
 * @type {string}
 */
export const VERSION: string;

// export default braintree;
export as namespace braintree;
