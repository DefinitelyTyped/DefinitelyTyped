// Type definitions for tipsi-stripe 7.5
// Project: https://github.com/tipsi/tipsi-stripe
// Definitions by: Charles Kenney <https://github.com/charliekenney23>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import * as ReactNative from 'react-native';

export interface StripeOptions {
    publishableKey: string;
    merchantId?: string;
    androidPayMode?: string;
}

export type AccountHolderType = 'company' | 'individual';

export type ApplePayNetworks = 'american_express' | 'discover' | 'master_card' | 'visa';

export type ApplePayAddressFields = 'all' | 'name' | 'email' | 'phone' | 'postal_address';

export type ApplePayShippingType = 'shipping' | 'delivery' | 'store_pickup' | 'service_pickup';

export type StripeSourceType =
    | 'bancontact'
    | 'bitcoin'
    | 'giropay'
    | 'ideal'
    | 'sepaDebit'
    | 'sofort'
    | 'threeDSecure'
    | 'alipay';

export interface AppleNetworkOptions {
    networks: ApplePayNetworks;
}

export interface ApplePaymentOptions {
    currencyCode: string;
    countryCode: string;
    requiredBillingAddressFields: ApplePayAddressFields[];
    requiredShippingAddressFields: ApplePayAddressFields[];
    shippingMethods: ApplePayShippingType[];
    shippingType: ApplePayShippingType;
}

export interface AndroidPaymentOptions {
    total_price: string;
    currency_code: string;
    line_items: AndroidPaymentRequestItem[];
    shipping_address_required: boolean;
    billing_address_required: boolean;
}

export type StripeCardBrand =
    | 'JCB'
    | 'American Express'
    | 'Visa'
    | 'Discover'
    | 'Diners Club'
    | 'MasterCard'
    | 'Unknown';

export type StripeCardFundingType = 'debit' | 'credit' | 'prepaid' | 'unknown';

export interface StripeCardDetails {
    cardId: string;
    brand: StripeCardBrand;
    funding?: StripeCardFundingType;
    last4: string;
    dynamicLast4: string;
    isApplePayCard: boolean;
    expMonth: number;
    expYear: number;
    country: string;
    currency?: string;
    name?: string;
    addressLine1?: string;
    addressLine2?: string;
    addressCity?: string;
    addressState?: string;
    addressCountry?: string;
    addressZip?: string;
}

export interface StripeBankDetails {
    routingNumber: string;
    accountNumber: string;
    countryCode: string;
    currency: string;
    accountHolderName: string;
    accountHolderType: AccountHolderType;
    fingerprint: string;
    bankName: string;
    last4: string;
}

export interface StripeToken {
    tokenId: string;
    created: number;
    livemode: boolean;
    card?: StripeCardDetails;
    bankAccount?: StripeBankDetails;
    extra?: object;
}

export interface ApplePaymentRequestItem {
    label: string;
    amount: string;
    type: 'final' | 'pending';
}

export interface AndroidPaymentRequestItem {
    currency_code: string;
    total_price: string;
    unit_price: string;
    quantity: string;
    description: string;
}

export interface CardFormParams {
    requiredBillingAddressFields: 'full' | 'zip';
    managedAccountCurrency: string;
    smsAutofillDisabled: boolean;
    prefilledInformation: {
        email: string;
        phone: string;
        billingAddress: {
            name: string;
            line1: string;
            line2: string;
            city: string;
            state: string;
            postalCode: string;
            country: string;
            phone: string;
            email: string;
        };
    };
    theme: {
        primaryBackgroundColor: string;
        secondaryBackgroundColor: string;
        primaryForegroundColor: string;
        secondaryForegroundColor: string;
        accentColor: string;
        errorColor: string;
    };
}

export interface CardTokenParams {
    number: string;
    expMonth: number;
    expYear: number;
    cvc: string;
    name?: string;
    addressLine1?: string;
    addressLine2?: string;
    addressCity?: string;
    addressState?: string;
    addressZip?: string;
    addressCountry?: string;
    country?: string;
    currency?: string;
    brand?: string;
    last4?: string;
    fingerprint?: string;
    funding?: string;
}

export interface BankAccountParams {
    accountNumber: string;
    countryCode: string;
    currency: string;
    routingNumber: string;
    accountHolderName: string;
    accountHolderType: AccountHolderType;
}

export interface SourceParams {
    type: StripeSourceType;
    amount: number;
    name: string;
    returnURL: string;
    statementDescriptor: string;
    currency: string;
    email: string;
    bank: string;
    iban: string;
    addressLine1: string;
    city: string;
    postalCode: string;
    country: string;
    card: string;
}

export class Stripe {
    static setOptions(options: StripeOptions): void;

    static deviceSupportsNativePay(): boolean;
    static canMakeNativePayPayments(options?: AppleNetworkOptions): boolean;

    static paymentRequestWithNativePay(
        options: ApplePaymentOptions | AndroidPaymentOptions,
        items: ApplePaymentRequestItem[],
    ): Promise<string>;
    static completeNativePayRequest(): Promise<void>;
    static cancelNativePayRequest(): Promise<void>;
    static openNativePaySetup(): Promise<void>;

    static paymentRequestWithCardForm(params: CardFormParams): Promise<StripeToken>;
    static createTokenWithCard(params: CardTokenParams): Promise<StripeToken>;
    static createTokenWithBankAccount(params: BankAccountParams): Promise<StripeToken>;

    static createSourceWithParams(params: SourceParams): Promise<any>;
}

export interface PaymentCardTextFieldNativeEvent {
    valid: boolean;
    params: Pick<CardTokenParams, 'number' | 'expMonth' | 'expYear' | 'cvc'>;
}

export interface PaymentCardTextFieldCommonProps {
    expirationPlaceholder?: string;
    numberPlaceholder?: string;
    cvcPlaceholder?: string;
    disabled?: boolean;

    onChange?(event: ReactNative.NativeSyntheticEvent<PaymentCardTextFieldNativeEvent>): void;

    onParamsChange?(valid: boolean, nativeEventParams: PaymentCardTextFieldNativeEvent['params']): void;

    style?: ReactNative.StyleProp<ReactNative.ViewStyle & { color?: string }>;
}

export interface PaymentCardTextFieldIOSProps {
    cursorColor?: string;
    textErrorColor?: string;
    placeholderColor?: string;
    keyboardAppearance?: 'default' | 'light' | 'dark';
}

export interface PaymentCardTextFieldAndroidProps {
    setEnabled?: boolean;
    backgroundColor?: string;
    cardNumber?: string;
    expDate?: string;
    securityCode?: string;
}

export class PaymentCardTextField extends React.Component<
    Omit<ReactNative.ViewProps, 'style'> &
        PaymentCardTextFieldCommonProps &
        PaymentCardTextFieldIOSProps &
        PaymentCardTextFieldAndroidProps
> {
    isFocused(): boolean;
    focus(): void;
    blur(): void;
    setParams(params: CardTokenParams): void;
}

export interface StripeNativeErrorDescription<Code extends StripeNativeErrorCode> {
    errorCode: Code | string;
    description?: string;
}

export const enum StripeNativeErrorCode {
    busy = 'busy',
    cancelled = 'cancelled',
    purchaseCancelled = 'purchaseCancelled',
    sourceStatusCanceled = 'sourceStatusCanceled',
    sourceStatusPending = 'sourceStatusPending',
    sourceStatusFailed = 'sourceStatusFailed',
    sourceStatusUnknown = 'sourceStatusUnknown',
    deviceNotSupportsNativePay = 'deviceNotSupportsNativePay',
    noPaymentRequest = 'noPaymentRequest',
    noMerchantIdentifier = 'noMerchantIdentifier',
    noAmount = 'noAmount',
    parseResponse = 'parseResponse',
    activityUnavailable = 'activityUnavailable',
    playServicesUnavailable = 'playServicesUnavailable',
    redirectCancelled = 'redirectCancelled',
    redirectNoSource = 'redirectNoSource',
    redirectWrongSourceId = 'redirectWrongSourceId',
    redirectCancelledByUser = 'redirectCancelledByUser',
    redirectFailed = 'redirectFailed',
    api = 'api',
    apiConnection = 'apiConnection',
    redirectSpecific = 'redirectSpecific',
    card = 'card',
    invalidRequest = 'invalidRequest',
    stripe = 'stripe',
    rateLimit = 'rateLimit',
    authentication = 'authentication',
    permission = 'permission',
}

export const errorCodes: {
    [Code in StripeNativeErrorCode]: StripeNativeErrorDescription<Code>;
};

export default Stripe;
