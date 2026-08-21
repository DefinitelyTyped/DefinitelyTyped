import { Client } from "./client";
import { callback } from "./core";

// See https://developer.apple.com/documentation/apple_pay_on_the_web/applepaylineitemtype
export type ApplePayLineItemType = "final" | "pending";

// See https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymenttiming
export type ApplePayPaymentTiming = "immediate" | "recurring" | "deferred" | "automaticReload";

// See https://developer.apple.com/documentation/apple_pay_on_the_web/applepayrecurringpaymentdateunit
export type ApplePayRecurringPaymentDateUnit = "year" | "month" | "day" | "hour" | "minute";

// See https://developer.apple.com/documentation/apple_pay_on_the_web/applepaylineitem
export interface ApplePayLineItem {
    type?: ApplePayLineItemType;
    label: string;
    amount: string;
    paymentTiming?: ApplePayPaymentTiming;
    recurringPaymentStartDate?: Date;
    recurringPaymentIntervalUnit?: ApplePayRecurringPaymentDateUnit;
    recurringPaymentIntervalCount?: number;
    recurringPaymentEndDate?: Date;
    deferredPaymentDate?: Date;
    automaticReloadPaymentThresholdAmount?: string;
}

// more info https://developer.apple.com/reference/applepayjs/1916082-applepay_js_data_types/paymentrequest

//  billingContact
//  Billing contact information for the user.
//    countryCode
// Required.The merchant’s two- letter ISO 3166 country code.
//    currencyCode
//  Required.The three- letter ISO 4217 currency code for the payment.
//    lineItems
// A set of line items that explain recurring payments and additional charges.
//    merchantCapabilities
//  Required.The payment capabilities supported by the merchant.The value must be one or more of supports3DS, supportsEMV, supportsCredit, or supportsDebit.
//    requiredBillingContactFields
//  The billing information that is required from the user.The value must be one or more of postalAddress, phone, email, or name.
//    requiredShippingContactFields
//  The shipping information that is required from the user.The value must be one or more of postalAddress, phone, email, or name.
//    shippingContact
//  Shipping contact information for the user.
//    shippingMethods
// A set of available shipping methods.Totals for all shipping methods must be non- negative to pass validation.
//    shippingType
//  How the items are to be shipped.This property is optional.If specified, it must be one or more of shipping, delivery, storePickup, or servicePickup.The default value is shipping.
//    supportedNetworks
//  Required.The payment networks supported by the merchant.The value must be one or more of amex, discover, interac, masterCard, privateLabel, or visa.
//    total
//  Required.The total amount for the payment.The total must be greater than zero and have a label to pass validation.
export interface ApplePayPaymentRequest {
    total: {
        label: string;
        amount: string;
    };
    countryCode: string;
    currencyCode: string;
    supportedNetworks: string[];
    merchantCapabilities: string[];

    billingContact?: any;
    /**
     * @description Optional array of items to display in the payment sheet per https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymentrequest/1916120-lineitems
     */
    lineItems?: ApplePayLineItem[]; // See https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymentrequest/1916120-lineitems

    shippingContact?: any;
    shippingMethods?: any;
    shippingType?: any;
    requiredBillingContactFields?: any;
    requiredShippingContactFields?: any;
}

/**
 * @deprecated - use ApplePaySession.STATUS_SUCCESS and similar instead
 */
export enum ApplePayStatusCodes {
    // The requested action succeeded.
    STATUS_SUCCESS = 0,
    // The requested action failed.
    STATUS_FAILURE,
    // The billing address is not valid.
    STATUS_INVALID_BILLING_POSTAL_ADDRESS,
    // The shipping address is not valid.
    STATUS_INVALID_SHIPPING_POSTAL_ADDRESS,
    // The shipping contact information is not valid.
    STATUS_INVALID_SHIPPING_CONTACT,
    // The required PIN information was not provided. Cards on the China Union Pay payment network may require a PIN to authenticate the transaction.
    STATUS_PIN_REQUIRED,
    // The PIN information is not valid.Cards on the China Union Pay network may require a PIN.
    STATUS_PIN_INCORRECT,
    // The maximum number of tries for a PIN has been reached and the user has been locked out. Cards on the China Union Pay network may require a PIN.
    STATUS_PIN_LOCKOUT,
}

export type ApplePayErrorCode =
    /**
     * Shipping address or contact information is invalid or missing.
     */
    | "shippingContactInvalid"
    /**
     * Billing address information is invalid or missing.
     */
    | "billingContactInvalid"
    /**
     * The merchant cannot provide service to the shipping address (for example, can't deliver to a P.O. Box).
     */
    | "addressUnserviceable"
    /**
     * The code that indicates an invalid coupon.
     */
    | "couponCodeInvalid"
    /**
     * The code that indicates an expired coupon.
     */
    | "couponCodeExpired"
    /**
     * An unknown but nonfatal error occurred during payment processing. The user can attempt authorization again.
     */
    | "unknown";

export interface ApplePayError {
    /**
     * The error code for this instance.
     */
    code: ApplePayErrorCode;

    /**
     * The name of the field that contains the error.
     */
    contactField?: ApplePayErrorContactField | undefined;

    /**
     * A localized, user-facing string that describes the error.
     */
    message: string;
}

/**
 * Names of the fields in the shipping or billing contact information, used to locate errors in the payment sheet.
 */
export type ApplePayErrorContactField =
    | "phoneNumber"
    | "emailAddress"
    | "name"
    | "phoneticName"
    | "postalAddress"
    | "addressLines"
    | "locality"
    | "subLocality"
    | "postalCode"
    | "administrativeArea"
    | "subAdministrativeArea"
    | "country"
    | "countryCode";

export interface ApplePayPaymentOrderDetails {
    /**
     * An identifier for the order type associated with the order.
     */
    orderTypeIdentifier: string;
    /**
     * A unique order identifier scoped to your order type identifier.
     */
    orderIdentifier: string;
    /**
     * The URL of your web service.
     */
    webServiceURL: string;
    /**
     * The authentication token supplied to your web service.
     */
    authenticationToken: string;
}

export interface ApplePayPaymentAuthorizationResult {
    /**
     * The status code for the authorization result.
     */
    status: number;

    /**
     * A list of custom errors to display on the payment sheet.
     */
    errors?: ApplePayError[] | undefined;

    /**
     * Optional metadata for an order that the customer placed using this payment method.
     */
    orderDetails?: ApplePayPaymentOrderDetails;
}

export type ApplePayTokenizeValues = "Yes" | "No" | "Unknown";

export interface ApplePayDetails {
    cardType: string;
    cardholderName: string;
    dpanLastTwo: string;
}

export interface ApplePayPayload {
    nonce: string;
    description: string;
    type: string;
    consumed: boolean;
    details: ApplePayDetails;
    binData: {
        commercial: ApplePayTokenizeValues;
        countryOfIssuance: string;
        debit: ApplePayTokenizeValues;
        durbinRegulated: ApplePayTokenizeValues;
        healthcare: ApplePayTokenizeValues;
        issuingBank: ApplePayTokenizeValues;
        payroll: ApplePayTokenizeValues;
        prepaid: ApplePayTokenizeValues;
        productId: string;
    };
}

export class ApplePaySession {
    constructor(version: number, request: ApplePayPaymentRequest);

    static canMakePayments(): boolean;

    static canMakePaymentsWithActiveCard(merchantIdentifier: string): boolean;

    static supportsVersion(version: number): boolean;

    completeMerchantValidation(merchantSession: any): void;

    abort(): void;

    begin(): void;

    /**
     * Completes the payment authorization with a result.
     * @param result - The status of the payment, whether it succeeded or failed for Apple Pay JS versions 1 and 2,
     * or the result of the payment authorization, including its status and list of errors for Apple Pay JS version 3.
     */
    completePayment(status: ApplePayStatusCodes | ApplePayPaymentAuthorizationResult): void;

    completePaymentMethodSelection(newTotal: any, newLineItems: any): void;

    completeShippingContactSelection(
        status: ApplePayStatusCodes,
        newShippingMethods: any,
        newTotal: any,
        newLineItems: any,
    ): void;

    completeShippingMethodSelection(status: ApplePayStatusCodes, newTotal: any, newLineItems: any): void;

    oncancel: (event: any) => void;

    onpaymentauthorized: (event: any) => void;

    onpaymentmethodselected: (event: any) => void;

    onshippingcontactselected: (event: any) => void;

    onshippingmethodselected: (event: any) => void;

    onvalidatemerchant: (event: any) => void;

    /**
     * The requested action succeeded.
     */
    static readonly STATUS_SUCCESS: number;

    /**
     * The requested action failed.
     */
    static readonly STATUS_FAILURE: number;

    /**
     * The billing address is not valid.
     */
    static readonly STATUS_INVALID_BILLING_POSTAL_ADDRESS: number;

    /**
     * The shipping address is not valid.
     */
    static readonly STATUS_INVALID_SHIPPING_POSTAL_ADDRESS: number;

    /**
     * The shipping contact information is not valid.
     */
    static readonly STATUS_INVALID_SHIPPING_CONTACT: number;

    /**
     * The PIN information is not valid. Cards on the China Union Pay network may require a PIN.
     */
    static readonly STATUS_PIN_INCORRECT: number;

    /**
     * The maximum number of tries for a PIN has been reached and the user has been locked out. Cards on the China Union Pay network may require a PIN.
     */
    static readonly STATUS_PIN_LOCKOUT: number;

    /**
     * The required PIN information was not provided. Cards on the China Union Pay payment network may require a PIN to authenticate the transaction.
     */
    static readonly STATUS_PIN_REQUIRED: number;
}

/**
 * @description Accept Apple Pay on the Web. *This component is currently in beta and is subject to change.*
 */
export interface ApplePay {
    /**
     * @description A special merchant ID which represents the merchant association with Braintree. Required when using ApplePaySession.canMakePaymentsWithActiveCard.
     */
    merchantIdentifier?: string; // per https://braintree.github.io/braintree-web/current/ApplePay.html#merchantIdentifier

    /**
     * Merges a payment request with Braintree defaults
     * The following properties are assigned to `paymentRequest` if not already defined
     * - countryCode
     * - currencyCode
     * - merchantCapabilities
     * - supportedNetworks
     * @example
     * var applePay = require('braintree-web/apple-pay');
     *
     * applePay.create({client: clientInstance}, function (createErr, applePayInstance) {
     *   // ...
     *   var paymentRequest = applePay.createPaymentRequest({
     *    total: {
     *      label: 'My Company',
     *      amount: '19.99'
     *   });
     *
     *   console.log(paymentRequest);
     *   // { total: { }, countryCode: 'US', currencyCode: 'USD', merchantCapabilities: [ ], supportedNetworks: [ ] }
     */
    createPaymentRequest(
        paymentRequest:
            & Omit<
                ApplePayPaymentRequest,
                "countryCode" | "currencyCode" | "merchantCapabilities" | "supportedNetworks"
            >
            & Partial<
                Pick<
                    ApplePayPaymentRequest,
                    "countryCode" | "currencyCode" | "merchantCapabilities" | "supportedNetworks"
                >
            >,
    ): ApplePayPaymentRequest;

    /**
     * Validates the merchant website, as required by ApplePaySession before payment can be authorized.     * - The canonical name for your store.
     * - The system may display this name to the user.
     * - Use a 128-character or less, UTF-8 string.
     * - Do not localize the name.     * Your Apple merchant identifier. This is the Apple Merchant ID created on the Apple Developer Portal.
     * Defaults to the merchant identifier specified in the Braintree Control Panel.
     * You can use this field to override the merchant identifier for this transaction.     * Pass the merchant session to your Apple Pay session's completeMerchantValidation method.
     * If no callback is provided this returns a promise
     * @example
     * var applePay = require('braintree-web/apple-pay');
     *
     * applePay.create({client: clientInstance}, function (createErr, applePayInstance) {
     *   var session = new ApplePaySession(1, {
     *     // This should be the payment request object that
     *     // contains the information needed to display the payment sheet.
     *   });
     *
     *   session.onvalidatemerchant = function (event) {
     *     applePay.performValidation({
     *       validationURL: event.validationURL
     *     }, function(err, validationData) {
     *       if (err) {
     *         console.error(err);
     *         session.abort();
     *         return;
     *       }
     *       session.completeMerchantValidation(validationData);
     *     });
     *   };
     * });
     */
    performValidation(
        options: { validationURL: string; displayName?: string | undefined; merchantIdentifier?: string | undefined },
        callback: callback,
    ): void;
    performValidation(options: {
        validationURL: string;
        displayName?: string | undefined;
        merchantIdentifier?: string | undefined;
    }): Promise<any>;

    /**
     * Tokenizes an Apple Pay payment.
     * If no callback is provided this will return a promise
     * @example
     * var applePay = require('braintree-web/apple-pay');
     *
     * applePay.create({client: clientInstance}, function (createErr, applePayInstance) {
     *   var session = new ApplePaySession(1, { });
     *
     *   session.onpaymentauthorized = function (event) {
     *     applePay.tokenize({
     *       token: event.payment.token
     *     }, function (err, tokenizedPayload) {
     *       if (err) {
     *         session.completePayment(ApplePaySession.STATUS_FAILURE);
     *         return;
     *       }
     *       session.completePayment(ApplePaySession.STATUS_SUCCESS);
     *
     *       // Send the tokenizedPayload to your server.
     *     });
     *  };
     * });
     */
    tokenize(options: { token: any }, callback: callback<ApplePayPayload>): void;
    tokenize(options: { token: any }): Promise<ApplePayPayload>;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/apple-pay.create|create}.
     * @example
     * applePayInstance.teardown();
     * @example <caption>With callback</caption>
     * applePayInstance.teardown(function () {
     *   // teardown is complete
     * });
     */
    teardown(callback: () => void): void;
    teardown(): Promise<void>;
}

export function create(options: { client: Client }): Promise<ApplePay>;
export function create(options: { client: Client }, callback?: callback<ApplePay>): void;
