// Type definitions for braintree-web-drop-in 1.18
// Project: https://github.com/braintree/braintree-web-dropin
// Definitions by: Saoud Rizwan <https://github.com/saoudrizwan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

/*
USAGE:
import * as dropin from "braintree-web-drop-in"

NOTE:
Some objects, such as as the payload returned from Dropin.requestPaymentMethod, can have various shapes. Review Braintree's documentation for more information about any types not covered in this file:
https://braintree.github.io/braintree-web-drop-in/docs/current/module-braintree-web-drop-in.html
*/

// Options

export interface Options {
    authorization: string;
    container: any;
    locale?: string;
    translations?: object;
    paymentOptionPriority?: string[];
    card?: boolean | cardCreateOptions;
    paypal?: paypalCreateOptions;
    paypalCredit?: paypalCreateOptions;
    venmo?: venmoCreateOptions | boolean;
    applePay?: applePayCreateOptions;
    googlePay?: googlePayCreateOptions;
    dataCollector?: dataCollectorOptions;
    threeDSecure?: threeDSecureOptions;
    vaultManager?: boolean;
    preselectVaultedPaymentMethod?: boolean;
}

export interface applePayCreateOptions {
    buttonStyle?: string;
    displayName: string;
    applePaySessionVersion?: number;
    paymentRequest: any;
}

export interface cardCreateOptions {
    cardholderName?:
        | boolean
        | {
              required?: boolean;
          };
    overrides: {
        fields?: object;
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
    paypal?: boolean;
}

export interface googlePayCreateOptions {
    merchantId: string;
    googlePayVersion?: string;
    transactionInfo: any;
    button?: any;
}

export interface paypalCreateOptions {
    flow: "checkout" | "vault";
    amount?: string | number;
    currency?: string;
    buttonStyle?: string;
    commit?: boolean;
}

export interface threeDSecureOptions {
    amount: string;
}

export interface venmoCreateOptions {
    allowNewBrowserTab?: boolean;
}

// Dropin

export interface Dropin {
    clearSelectedPaymentMethod(): void;
    isPaymentMethodRequestable(): boolean;
    on(event: "noPaymentMethodRequestable", handler: () => void): void;
    on(
        event: "paymentMethodRequestable",
        handler: (payload: { type: "CreditCard" | "PayPalAccount"; paymentMethodIsSelected: boolean }) => void
    ): void;
    on(
        event: "paymentOptionSelected",
        handler: (payload: { paymentOption: "card" | "paypal" | "paypalCredit" }) => void
    ): void;
    requestPaymentMethod(callback: (error: object | null, payload: PaymentMethodPayload | undefined) => void): void;
    requestPaymentMethod(): Promise<PaymentMethodPayload>;
    teardown(callback: (error: object | null | undefined) => void): void;
    teardown(): Promise<void>;
}

export interface PaymentMethodPayload {
    nonce: string;
    details: object;
    type: "CreditCard" | "PayPalAccount" | "VenmoAccount" | "AndroidPayCard" | "ApplePayCard";
    deviceData: string | null;
    [key: string]: any;
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
