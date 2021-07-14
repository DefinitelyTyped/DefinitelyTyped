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
    locale?: string | undefined;
    translations?: object | undefined;
    paymentOptionPriority?: string[] | undefined;
    card?: boolean | cardCreateOptions | undefined;
    paypal?: paypalCreateOptions | undefined;
    paypalCredit?: paypalCreateOptions | undefined;
    venmo?: venmoCreateOptions | boolean | undefined;
    applePay?: applePayCreateOptions | undefined;
    googlePay?: googlePayCreateOptions | undefined;
    dataCollector?: dataCollectorOptions | boolean | undefined;
    threeDSecure?: boolean | threeDSecureOptions | undefined;
    vaultManager?: boolean | undefined;
    preselectVaultedPaymentMethod?: boolean | undefined;
}

export interface applePayCreateOptions {
    buttonStyle?: 'black' | 'white' | 'white-outline' | undefined;
    displayName: string;
    applePaySessionVersion?: number | undefined;
    paymentRequest: ApplePayPaymentRequest;
}

export interface cardCreateOptions {
    cardholderName?:
        | boolean
        | {
              required?: boolean | undefined;
          } | undefined;
    overrides?: {
        fields?: {
            number?: HostedFieldsField | undefined;
            cvv?: HostedFieldsField | undefined;
            expirationDate?: HostedFieldsField | undefined;
            postalCode?: HostedFieldsField | undefined;
        } | undefined;
        styles?: object | undefined;
    } | undefined;
    clearFieldsAfterTokenization?: boolean | undefined;
    vault?: {
        allowVaultCardOverride?: boolean | undefined;
        vaultCard?: boolean | undefined;
    } | undefined;
}

export interface dataCollectorOptions {
    kount?: boolean | undefined;
}

export interface googlePayCreateOptions {
    merchantId: string;
    googlePayVersion?: string | undefined;
    transactionInfo: google.payments.api.TransactionInfo;
    button?: google.payments.api.ButtonOptions | undefined;
}

export interface paypalCreateOptions {
    flow: 'checkout' | 'vault';
    amount?: string | number | undefined;
    currency?: string | undefined;
    buttonStyle?: Partial<ButtonStyle> | undefined;
    commit?: boolean | undefined;
}

/**
 * @deprecated
 */
export interface threeDSecureOptions {
    amount: string;
}

export interface venmoCreateOptions {
    allowNewBrowserTab?: boolean | undefined;
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
        challengeRequested?: boolean | undefined;
        exemptionRequested?: boolean | undefined;
        email?: string | undefined;
        mobilePhoneNumber?: string | undefined;
        billingAddress?: object | undefined;
        additionalInformation?: object | undefined;
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
    vaulted?: boolean | undefined;
    details: {
        cardType: string;
        cardHolderName: string;
        dpanLastTwo: string;
        rawPaymentData: ApplePayJS.ApplePayPayment;
    };
    description: string;
    type: 'ApplePayCard';
    binData: binData;
    deviceData?: string | undefined;
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
    vaulted?: boolean | undefined;
    deviceData?: string | undefined;
    liabilityShifted?: boolean | undefined;
    liabilityShiftPossible?: boolean | undefined;
    threeDSecureInfo?: ThreeDSecureVerifyPayload | undefined;
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
    deviceData?: string | undefined;
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
    vaulted?: boolean | undefined;
    details: {
        email: string;
        payerId: string;
        firstName: string;
        lastName: string;
        countryCode?: string | undefined;
        phone?: string | undefined;
        shippingAddress?: Address | undefined;
        billingAddress?: Address | undefined;
    };
    type: 'PayPalAccount';
    deviceData?: string | undefined;
}

export interface venmoPaymentMethodPayload {
    nonce: string;
    vaulted?: boolean | undefined;
    details: {
        username: string;
    };
    type: 'VenmoAccount';
    deviceData?: string | undefined;
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
