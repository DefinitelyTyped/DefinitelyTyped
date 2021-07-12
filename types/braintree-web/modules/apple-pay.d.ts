import { callback } from './core';
import { Client } from './client';

// More info: https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymentrequest

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
//  Required.The payment networks supported by the merchant. The value must be one or more of amex, discover, interac, masterCard, privateLabel, or visa.
//    total
//  Required.The total amount for the payment. Total must be greater than zero and have a label to pass validation.
export interface ApplePayPaymentRequest {
    total: ApplePayLineItem;
    lineItems?: ApplePayLineItem[];
    currencyCode?: string; // required but provided by Braintree Gateway during createPaymentRequest() if not specified
    shippingType?: ApplePayShippingType;
    shippingMethods?: ApplePayShippingMethod[];
    merchantCapabilities?: ApplePayMerchantCapability[]; // required but provided by Braintree Gateway during createPaymentRequest() if not specified
    supportedNetworks?: string[]; // required but provided by Braintree Gateway during createPaymentRequest() if not specified
    countryCode?: string; // required but provided by Braintree Gateway during createPaymentRequest() if not specified
    requiredBillingContactFields?: ApplePayContactField[];
    billingContact?: ApplePayPaymentContact;
    requiredShippingContactFields?: ApplePayContactField[];
    shippingContact?: ApplePayPaymentContact;
    applicationData?: string;
    supportedCountries?: string[];
    supportsCouponCode?: boolean;
    couponCode?: string;
    shippingContactEditingMode?: ApplePayShippingContactEditingMode;
}

export enum ApplePayContactField {
    email = 'email',
    name = 'name',
    phone = 'phone',
    postalAddress = 'postalAddress',
    phoneticName = 'phoneticName'
}

export enum ApplePayMerchantCapability {
    supports3DS = 'supports3DS',
    supportsEMV = 'supportsEMV',
    supportsCredit = 'supportsCredit',
    supportsDebit = 'supportsDebit'
}

export enum ApplePayShippingContactEditingMode {
  enabled = 'enabled',
  storePickup = 'storePickup'
}

export enum ApplePayStatusCodes {
    // The requested action succeeded.
    STATUS_SUCCESS = 1,
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

export type ApplePayTokenizeValues = 'Yes' | 'No' | 'Unknown';

export interface ApplePayDateComponentsRange {
    startDateComponents: ApplePayDateComponents;
    endDateComponents: ApplePayDateComponents;
}

export interface ApplePayDateComponents {
    years: number;
    months: number;
    days: number;
    hours: number;
}

export interface ApplePayDetails {
    cardType: string;
    cardholderName: string;
    dpanLastTwo: string;
}

export interface ApplePayLineItem {
    type?: ApplePayLineItemType;
    label?: string;
    amount?: string;
    paymentTiming?: ApplePayPaymentTiming;
    recurringPaymentStartDate?: Date;
    recurringPaymentIntervalUnit?: ApplePayRecurringPaymentDateUnit;
    recurringPaymentIntervalCount?: number;
    recurringPaymentEndDate?: Date;
    deferredPaymentDate?: Date;
}

export enum ApplePayLineItemType {
    final = 'final',
    pending = 'pending'
}

export interface ApplePayPaymentContact {
    phoneNumber?: string;
    emailAddress?: string;
    givenName?: string;
    familyName?: string;
    phoneticGivenName?: string;
    phoneticFamilyName?: string;
    addressLines?: string[];
    subLocality?: string;
    locality?: string;
    postalCode?: string;
    subAdministrativeArea?: string;
    administrativeArea?: string;
    country?: string;
    countryCode?: string;
}

export enum ApplePayPaymentTiming {
    immediate = 'immediate',
    recurring = 'recurring',
    deferred = 'deferred'
}

export enum ApplePayRecurringPaymentDateUnit {
    year = 'year',
    month = 'month',
    day = 'day',
    hour = 'hour',
    minute = 'minute'
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

export interface ApplePayShippingMethod {
    label: string;
    detail: string;
    amount: string;
    identifier: string;
    dateComponentsRange?: ApplePayDateComponentsRange;
}

export enum ApplePayShippingType {
    shipping = 'shipping',
    delivery = 'delivery',
    storePickup = 'storePickup',
    servicePickup = 'servicePickup'
}

export class ApplePaySession {
    constructor(version: number, request: ApplePayPaymentRequest);

    static canMakePayments(): boolean;

    static canMakePaymentsWithActiveCard(merchantIdentifier: string): boolean;

    static supportsVersion(version: number): boolean;

    completeMerchantValidation(merchantSession: any): void;

    abort(): void;

    begin(): void;

    completePayment(status: ApplePayStatusCodes): void;

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
}

/**
 * @description Accept Apple Pay on the Web. *This component is currently in beta and is subject to change.*
 */
export interface ApplePay {
    create(options: { client: Client }): Promise<any>;
    create(options: { client: Client }, callback?: callback): void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     */
    VERSION: string;

    /**
     * See https://braintree.github.io/braintree-web/current/ApplePay.html#createPaymentRequest
     * Merges a payment request with Braintree defaults
     * The following properties are assigned to `paymentRequest` if not already defined
     * - countryCode
     * - currencyCode
     * - merchantCapabilities
     * - supportedNetworks     * @example
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
     *
     */
    createPaymentRequest(paymentRequest: ApplePayPaymentRequest): ApplePayPaymentRequest;

    /**
     * See https://braintree.github.io/braintree-web/current/ApplePay.html#performValidation
     * Validates the merchant website, as required by ApplePaySession before payment can be authorized.     * - The canonical name for your store.
     * - The system may display this name to the user.
     * - Use a 128-character or less, UTF-8 string.
     * - Do not localize the name.     * Your Apple merchant identifier. This is the Apple Merchant ID created on the Apple Developer Portal.
     * Defaults to the merchant identifier specified in the Braintree Control Panel.
     * You can use this field to override the merchant identifier for this transaction.     * Pass the merchant session to your Apple Pay session's completeMerchantValidation method.
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

    /**
     * See https://braintree.github.io/braintree-web/current/ApplePay.html#tokenize
     * Tokenizes an Apple Pay payment.     * @example
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
    tokenize(options: { token: any }, callback: callback): void;
    
    /**
     * See https://braintree.github.io/braintree-web/current/ApplePay.html#tokenize
     * Cleanly tear down anything set up by create.
     */
    teardown(callback?: callback): void;
}
