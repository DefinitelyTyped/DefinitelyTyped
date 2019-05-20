// Type definitions for Braintree-web v3.6.1
// Project: https://github.com/braintree/braintree-web
// Definitions by: Guy Shahine <https://github.com/chlela>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import AmericanExpress from './american-express';
import ApplePay from './apple-pay';
import Client from './client';
import DataCollector from './data-collector';
import HostedFields from './hosted-fields';
import PayPal from './paypal';
import ThreeDSecure from './three-d-secure';
import UnionPay from './unionpay';
import USBankAccount from './us-bank-account';

export { BraintreeError } from './common';
export { default as AmericanExpress } from './american-express';
export {
    default as ApplePay,
    ApplePayPayload,
    ApplePayPaymentRequest,
    ApplePaySession,
    ApplePayStatusCodes
} from './apple-pay';
export {
    default as Client,
    ClientAnalyticsMetadata,
    Configuration,
    CreditCardInfo
} from './client';
export { default as DataCollector } from './data-collector';
export {
    default as HostedFields,
    HostedFieldFieldOptions,
    HostedFieldsAccountDetails,
    HostedFieldsCardCode,
    HostedFieldsField,
    HostedFieldsFieldDataFields,
    HostedFieldsHostedFieldsCard,
    HostedFieldsHostedFieldsFieldData,
    HostedFieldsHostedFieldsFieldName,
    HostedFieldsStateObject,
    HostedFieldsTokenizePayload
} from './hosted-fields';
export {
    default as PayPal,
    PayPalAccountDetails,
    PayPalBillingAddress,
    PayPalShippingAddress,
    PayPalTokenizePayload,
    PayPalTokenizeReturn
} from './paypal';
export {
    default as ThreeDSecure,
    ThreeDSecureAccountDetails,
    ThreeDSecureVerifyPayload
} from './three-d-secure';
export {
    default as UnionPay,
    UnionPayAccountDetails,
    UnionPayEnrollPayload,
    UnionPayFetchCapabilitiesPayload,
    UnionPayProperties,
    UnionPayTokenizePayload
} from './unionpay';
export { default as USBankAccount } from './us-bank-account';

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
export var client: Client;

/** @type {module:braintree-web/paypal} */
export var paypal: PayPal;

/** @type {module:braintree-web/hosted-fields} */
export var hostedFields: HostedFields;

/** @type {module:braintree-web/three-d-secure} */
export var threeDSecure: ThreeDSecure;

/** @type {module:braintree-web/data-collector} */
export var dataCollector: DataCollector;

/** @type {module:braintree-web/american-express} */
export var americanExpress: AmericanExpress;

/** @type {module:braintree-web/unionpay} */
export var unionpay: UnionPay;

/** @type {module:braintree-web/apple-pay} */
export var applePay: ApplePay;

/** @type {module:braintree-web/us-bank-account} */
export var usBankAccount: USBankAccount;

/**
 * @description The current version of the SDK, i.e. `3.0.2`.
 * @type {string}
 */
export const VERSION: string;

// export default braintree;
export as namespace braintree;
