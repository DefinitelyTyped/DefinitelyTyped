// Type definitions for react-native-paypal-lib 1.0
// Project: https://github.com/zeddz92/react-native-paypal#readme
// Definitions by: Gustavo Silva <https://github.com/gstvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type ENVIRONMENT = 'NO_NETWORK' | 'SANDBOX' | 'PRODUCTION';
export type INTENT = 'SALE' | 'AUTHORIZE' | 'ORDER';

export type CURRENCIES =
    | 'AUD'
    | 'BRL'
    | 'CAD'
    | 'CNY'
    | 'CZK'
    | 'DKK'
    | 'EUR'
    | 'HKD'
    | 'HUF'
    | 'INR'
    | 'ILS'
    | 'JPY'
    | 'MYR'
    | 'MXN'
    | 'TWD'
    | 'NZD'
    | 'NOK'
    | 'PHP'
    | 'PLN'
    | 'GBP'
    | 'RUB'
    | 'SGD'
    | 'SEK'
    | 'CHF'
    | 'THB'
    | 'USD';

export interface EnvironmentParam {
    NO_NETWORK: 'NO_NETWORK';
    SANDBOX: 'SANDBOX';
    PRODUCTION: 'PRODUCTION';
}

export interface IntentParam {
    SALE: 'SALE';
    AUTHORIZE: 'AUTHORIZE';
    ORDER: 'ORDER';
}

export interface PayPalPayment {
    environment: string;
    paypal_sdk_version: string;
    platform: string;
    product_name: string;
}

export interface ProofOfPayment {
    create_time: string;
    id: string;
    intent: string;
    state: string;
}

export interface PaymentConfirmation {
    client: PayPalPayment;
    response: ProofOfPayment;
    response_type: string;
}

export interface PaymentParams {
    clientId: string;
    environment: ENVIRONMENT;
    intent: INTENT;
    price: number;
    currency: CURRENCIES;
    description: string;
    acceptCreditCards: boolean;
}

declare const RNPaypal: {
    paymentRequest(params: PaymentParams): Promise<PaymentConfirmation>;
    readonly ENVIRONMENT: EnvironmentParam;
    readonly INTENT: IntentParam;
};

export default RNPaypal;
