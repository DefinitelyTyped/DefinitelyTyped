// Type definitions for Braintree-web 3.96
// Project: https://github.com/braintree/braintree-web
// Definitions by: Jason Buckner <https://github.com/jbuckner>
//                Daniel Macak <https://github.com/daelmaak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { VERSION, BraintreeError, callback } from './core';
import { AmericanExpress, create as americanExpressCreate } from './american-express';
import {
    ApplePay,
    ApplePaySession,
    ApplePayStatusCodes,
    ApplePayDetails,
    ApplePayPayload,
    ApplePayPaymentRequest,
    ApplePayLineItem,
    ApplePayLineItemType,
    ApplePayPaymentTiming,
    ApplePayRecurringPaymentDateUnit,
    ApplePayTokenizeValues,
    create as applePayCreate,
} from './apple-pay';
import { Client, CreditCardInfo, create as clientCreate } from './client';
import { DataCollector, create as dataCollectorCreate } from './data-collector';
import { GooglePayment, GooglePaymentTokenizePayload, create as googlePaymentCreate } from './google-payment';
import {
    HostedFields,
    HostedFieldFieldOptions,
    HostedFieldsTokenizePayload,
    HostedFieldsEvent,
    HostedFieldsStateObject,
    HostedFieldsBinPayload,
    create as hostedFieldsCreate,
} from './hosted-fields';
import {
    LocalPayment,
    LocalPaymentTokenizePayload,
    LocalPaymentTypes,
    create as localPaymentCreate,
} from './local-payment';
import { PayPal, PayPalTokenizePayload, create as payPalCreate } from './paypal';
import { PayPalCheckout, PayPalCheckoutCreatePaymentOptions, create as payPalCheckoutCreate } from './paypal-checkout';
import { ThreeDSecure, ThreeDSecureVerifyPayload, create as threeDSecureCreate } from './three-d-secure';
import {
    UnionPay,
    UnionPayFetchCapabilitiesPayload,
    UnionPayEnrollPayload,
    UnionPayTokenizePayload,
    create as unionPayCreate,
} from './unionpay';
import { USBankAccount, create as usBankAccountCreate } from './us-bank-account';
import { VaultManager, FetchPaymentMethodsPayload, create as vaultManagerCreate } from './vault-manager';
import { Venmo, VenmoTokenizePayload, create as venmoCreate } from './venmo';

interface PaymentClient<T> {
    create: T;
}

export const americanExpress: PaymentClient<typeof americanExpressCreate>;
export const applePay: PaymentClient<typeof applePayCreate>;
export const client: PaymentClient<typeof clientCreate>;
export const dataCollector: PaymentClient<typeof dataCollectorCreate>;
export const googlePayment: PaymentClient<typeof googlePaymentCreate>;
export const hostedFields: PaymentClient<typeof hostedFieldsCreate>;
export const localPayment: PaymentClient<typeof localPaymentCreate>;
export const paypal: PaymentClient<typeof payPalCreate>;
export const paypalCheckout: PaymentClient<typeof payPalCheckoutCreate>;
export const threeDSecure: PaymentClient<typeof threeDSecureCreate>;
export const unionpay: PaymentClient<typeof unionPayCreate>;
export const usBankAccount: PaymentClient<typeof usBankAccountCreate>;
export const vaultManager: PaymentClient<typeof vaultManagerCreate>;
export const venmo: PaymentClient<typeof venmoCreate>;

export {
    VERSION,
    BraintreeError,
    callback,
    AmericanExpress,
    ApplePay,
    ApplePaySession,
    ApplePayDetails,
    ApplePayStatusCodes,
    ApplePayPayload,
    ApplePayPaymentRequest,
    ApplePayLineItem,
    ApplePayLineItemType,
    ApplePayPaymentTiming,
    ApplePayRecurringPaymentDateUnit,
    ApplePayTokenizeValues,
    Client,
    CreditCardInfo,
    DataCollector,
    GooglePayment,
    GooglePaymentTokenizePayload,
    HostedFields,
    HostedFieldFieldOptions,
    HostedFieldsBinPayload,
    HostedFieldsTokenizePayload,
    HostedFieldsEvent,
    HostedFieldsStateObject,
    LocalPayment,
    LocalPaymentTypes,
    LocalPaymentTokenizePayload,
    PayPal,
    PayPalTokenizePayload,
    PayPalCheckout,
    PayPalCheckoutCreatePaymentOptions,
    ThreeDSecure,
    ThreeDSecureVerifyPayload,
    UnionPay,
    UnionPayFetchCapabilitiesPayload,
    UnionPayEnrollPayload,
    UnionPayTokenizePayload,
    USBankAccount,
    VaultManager,
    FetchPaymentMethodsPayload,
    Venmo,
    VenmoTokenizePayload,
};

export as namespace braintree;
