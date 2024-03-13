import { AmericanExpress, create as americanExpressCreate } from "./american-express";
import {
    ApplePay,
    ApplePayDetails,
    ApplePayLineItem,
    ApplePayLineItemType,
    ApplePayPayload,
    ApplePayPaymentRequest,
    ApplePayPaymentTiming,
    ApplePayRecurringPaymentDateUnit,
    ApplePaySession,
    ApplePayStatusCodes,
    ApplePayTokenizeValues,
    create as applePayCreate,
} from "./apple-pay";
import { Client, create as clientCreate, CreditCardInfo } from "./client";
import { BraintreeError, callback, VERSION } from "./core";
import { create as dataCollectorCreate, DataCollector } from "./data-collector";
import { create as googlePaymentCreate, GooglePayment, GooglePaymentTokenizePayload } from "./google-payment";
import {
    create as hostedFieldsCreate,
    HostedFieldFieldOptions,
    HostedFields,
    HostedFieldsBinPayload,
    HostedFieldsEvent,
    HostedFieldsStateObject,
    HostedFieldsTokenizePayload,
} from "./hosted-fields";
import {
    create as localPaymentCreate,
    LocalPayment,
    LocalPaymentTokenizePayload,
    LocalPaymentTypes,
} from "./local-payment";
import { create as payPalCreate, PayPal, PayPalTokenizePayload } from "./paypal";
import { create as payPalCheckoutCreate, PayPalCheckout, PayPalCheckoutCreatePaymentOptions } from "./paypal-checkout";
import { create as threeDSecureCreate, ThreeDSecure, ThreeDSecureVerifyPayload } from "./three-d-secure";
import {
    create as unionPayCreate,
    UnionPay,
    UnionPayEnrollPayload,
    UnionPayFetchCapabilitiesPayload,
    UnionPayTokenizePayload,
} from "./unionpay";
import { create as usBankAccountCreate, USBankAccount } from "./us-bank-account";
import { create as vaultManagerCreate, FetchPaymentMethodsPayload, VaultManager } from "./vault-manager";
import { create as venmoCreate, Venmo, VenmoTokenizePayload } from "./venmo";

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
    AmericanExpress,
    ApplePay,
    ApplePayDetails,
    ApplePayLineItem,
    ApplePayLineItemType,
    ApplePayPayload,
    ApplePayPaymentRequest,
    ApplePayPaymentTiming,
    ApplePayRecurringPaymentDateUnit,
    ApplePaySession,
    ApplePayStatusCodes,
    ApplePayTokenizeValues,
    BraintreeError,
    callback,
    Client,
    CreditCardInfo,
    DataCollector,
    FetchPaymentMethodsPayload,
    GooglePayment,
    GooglePaymentTokenizePayload,
    HostedFieldFieldOptions,
    HostedFields,
    HostedFieldsBinPayload,
    HostedFieldsEvent,
    HostedFieldsStateObject,
    HostedFieldsTokenizePayload,
    LocalPayment,
    LocalPaymentTokenizePayload,
    LocalPaymentTypes,
    PayPal,
    PayPalCheckout,
    PayPalCheckoutCreatePaymentOptions,
    PayPalTokenizePayload,
    ThreeDSecure,
    ThreeDSecureVerifyPayload,
    UnionPay,
    UnionPayEnrollPayload,
    UnionPayFetchCapabilitiesPayload,
    UnionPayTokenizePayload,
    USBankAccount,
    VaultManager,
    Venmo,
    VenmoTokenizePayload,
    VERSION,
};

export as namespace braintree;
