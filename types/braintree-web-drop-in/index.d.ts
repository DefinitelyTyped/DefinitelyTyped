// Type definitions for braintree-web-drop-in 1.22
// Project: https://github.com/braintree/braintree-web-dropin
// Definitions by: Saoud Rizwan <https://github.com/saoudrizwan>
//                 Ricard Solé Casas <https://github.com/iamricard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

/// <reference types="googlepay" />
/// <reference types="applepayjs" />

/*
USAGE:
import * as dropin from "braintree-web-drop-in"

NOTE:
Some objects, such as as the payload returned from Dropin.requestPaymentMethod, can have various shapes. Review Braintree's documentation for more information about any types not covered in this file:
https://braintree.github.io/braintree-web-drop-in/docs/current/module-braintree-web-drop-in.html
*/

import { ApplePayPaymentRequest } from 'braintree-web/modules/apple-pay';
import { HostedFieldsField } from 'braintree-web/modules/hosted-fields';
import { ThreeDSecureVerifyPayload } from 'braintree-web/modules/three-d-secure';
import { ButtonStyle } from 'paypal-checkout-components';

// Options

export interface Options {
    authorization: string;
    container: string | HTMLElement;
    locale?: string;
    translations?: object;
    paymentOptionPriority?: string[];
    card?: boolean | cardCreateOptions;
    paypal?: paypalCreateOptions;
    paypalCredit?: paypalCreateOptions;
    venmo?: venmoCreateOptions | boolean;
    applePay?: applePayCreateOptions;
    googlePay?: googlePayCreateOptions;
    dataCollector?: dataCollectorOptions | boolean;
    threeDSecure?: boolean | threeDSecureOptions;
    vaultManager?: boolean;
    preselectVaultedPaymentMethod?: boolean;
}

export interface applePayCreateOptions {
    buttonStyle?: 'black' | 'white' | 'white-outline';
    displayName: string;
    applePaySessionVersion?: number;
    paymentRequest: ApplePayPaymentRequest;
}

export interface cardCreateOptions {
    cardholderName?:
        | boolean
        | {
              required?: boolean;
          };
    overrides?: {
        fields?: {
            number?: HostedFieldsField;
            cvv?: HostedFieldsField;
            expirationDate?: HostedFieldsField;
            postalCode?: HostedFieldsField;
        };
        styles?: object;
    };
    clearFieldsAfterTokenization?: boolean;
    vault?: {
        allowVaultCardOverride?: boolean;
        vaultCard?: boolean;
    };
}

export interface dataCollectorOptions {
    kount?: boolean;
}

export interface googlePayCreateOptions {
    merchantId: string;
    googlePayVersion?: string;
    transactionInfo: google.payments.api.TransactionInfo;
    button?: google.payments.api.ButtonOptions;
}

export interface paypalCreateOptions {
    flow: 'checkout' | 'vault';
    amount?: string | number;
    currency?: string;
    buttonStyle?: Partial<ButtonStyle>;
    commit?: boolean;
}

/**
 * @deprecated
 */
export interface threeDSecureOptions {
    amount: string;
}

export interface venmoCreateOptions {
    allowNewBrowserTab?: boolean;
}

// Dropin

export interface PaymentMethodRequestablePayload {
    type: 'CreditCard' | 'PayPalAccount';
    paymentMethodIsSelected: boolean;
}

export interface PaymentOptionSelectedPayload {
    paymentOption: 'card' | 'paypal' | 'paypalCredit';
}

export interface Dropin {
    clearSelectedPaymentMethod(): void;
    isPaymentMethodRequestable(): boolean;
    on(event: 'noPaymentMethodRequestable', handler: () => void): void;
    on(event: 'paymentMethodRequestable', handler: (payload: PaymentMethodRequestablePayload) => void): void;
    on(event: 'paymentOptionSelected', handler: (payload: PaymentOptionSelectedPayload) => void): void;
    off(event: 'noPaymentMethodRequestable', handler: () => void): void;
    off(event: 'paymentMethodRequestable', handler: (payload: PaymentMethodRequestablePayload) => void): void;
    off(event: 'paymentOptionSelected', handler: (payload: PaymentOptionSelectedPayload) => void): void;
    requestPaymentMethod(options: PaymentMethodOptions, callback: RequestPaymentMethodCallback): void;
    requestPaymentMethod(callback: RequestPaymentMethodCallback): void;
    requestPaymentMethod(options?: PaymentMethodOptions): Promise<PaymentMethodPayload>;
    teardown(callback: (error: object | null | undefined) => void): void;
    teardown(): Promise<void>;
}

export interface PaymentMethodOptions {
    threeDSecure: {
        amount: string;
        challengeRequested?: boolean;
        exemptionRequested?: boolean;
        email?: string;
        mobilePhoneNumber?: string;
        billingAddress?: object;
        additionalInformation?: object;
    };
}

export type RequestPaymentMethodCallback = (error: object | null, payload: PaymentMethodPayload) => void;

export type PaymentMethodPayload =
    | applePayPaymentMethodPayload
    | cardPaymentMethodPayload
    | googlePayPaymentMethodPayload
    | paypalPaymentMethodPayload
    | venmoPaymentMethodPayload;

export interface binData {
    commercial: string;
    countryOfIssuance: string;
    debit: 'Yes' | 'No' | 'Unknown';
    durbinRegulated: 'Yes' | 'No' | 'Unknown';
    healthcare: 'Yes' | 'No' | 'Unknown';
    issuingBank: string;
    payroll: 'Yes' | 'No' | 'Unknown';
    prepaid: 'Yes' | 'No' | 'Unknown';
    productId: string;
}

export interface applePayPaymentMethodPayload {
    nonce: string;
    vaulted?: boolean;
    details: {
        cardType: string;
        cardHolderName: string;
        dpanLastTwo: string;
        rawPaymentData: ApplePayJS.ApplePayPayment;
    };
    description: string;
    type: 'ApplePayCard';
    binData: binData;
    deviceData?: string;
}

export interface cardPaymentMethodPayload {
    nonce: string;
    details: {
        bin: string;
        cardType: string;
        expirationMonth: string;
        expirationYear: string;
        cardholderName: string;
        lastFour: string;
        lastTwo: string;
    };
    type: 'CreditCard';
    binData: binData;
    vaulted?: boolean;
    deviceData?: string;
    liabilityShifted?: boolean;
    liabilityShiftPossible?: boolean;
    threeDSecureInfo?: ThreeDSecureVerifyPayload;
}

export interface googlePayPaymentMethodPayload {
    nonce: string;
    details: {
        cardType: string;
        lastFour: string;
        lastTwo: string;
        isNetworkTokenized: boolean;
        bin: string;
        rawPaymentData: google.payments.api.PaymentData;
    };
    type: 'AndroidPayCard';
    binData: binData;
    deviceData?: string;
}

export interface Address {
    recipientName: string;
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    countryCode: string;
}

export interface paypalPaymentMethodPayload {
    nonce: string;
    vaulted?: boolean;
    details: {
        email: string;
        payerId: string;
        firstName: string;
        lastName: string;
        countryCode?: string;
        phone?: string;
        shippingAddress?: Address;
        billingAddress?: Address;
    };
    type: 'PayPalAccount';
    deviceData?: string;
}

export interface venmoPaymentMethodPayload {
    nonce: string;
    vaulted?: boolean;
    details: {
        username: string;
    };
    type: 'VenmoAccount';
    deviceData?: string;
}

// Methods

export function create(options: Options, callback: (error: object | null, dropin: Dropin | undefined) => void): void;
export function create(options: Options): Promise<Dropin>;

// Global

declare global {
    const braintree: {
        dropin: {
            create(options: Options, callback: (error: object | null, dropin: Dropin | undefined) => void): void;
            create(options: Options): Promise<Dropin>;
        };
    };
}
