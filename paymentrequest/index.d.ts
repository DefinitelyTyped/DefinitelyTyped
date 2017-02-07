// Type definitions for PaymentRequest
// Project: https://www.w3.org/TR/payment-request/
// Definitions by: Adam Cmiel <https://github.com/adamcmiel>, Eiji Kitamura <https://github.com/agektmr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PaymentRequest extends EventTarget {
    new (methodData: PaymentMethodData[], details: PaymentDetails, options?: PaymentOptions): PaymentRequest;
    show(): PromiseLike<PaymentResponse>;
    abort(): PromiseLike<void>;
    canMakePayment(): Promise<boolean>;
    readonly paymentRequestID: string;
    readonly shippingAddress?: PaymentAddress;
    readonly shippingOption?: string;
    readonly shippingType?: string;
    onshippingaddresschange: PaymentUpdateEventListener;
    onshippingoptionchange: PaymentUpdateEventListener;
}

interface PaymentMethodData {
    supportedMethods: string[];
    data?: {
        supportedNetworks: string[];
        supportedTypes: string[];
    };
}

interface PaymentCurrencyAmount {
    currency: string;
    value: string;
    currencySystem?:string;
}

interface PaymentDetails {
    total: PaymentItem;
    displayItems?: PaymentItem[];
    shippingOptions?: PaymentShippingOption[];
    modifiers?: PaymentDetailsModifier[];
    error?: string;
}

interface PaymentDetailsModifier {
    supportedMethods: string[];
    total?: PaymentItem;
    additionalDisplayItems?: PaymentItem[];
    data?: Object;
}

interface PaymentOptions {
    requestShipping?: boolean;
    requestPayerEmail?: boolean;
    requestPayerPhone?: boolean;
    requestPayerName?: boolean;
    shippingType?: 'shipping' | 'delivery' | 'pickup';
}

interface PaymentItem {
    label: string;
    amount: PaymentCurrencyAmount;
    pending?: boolean;
}

interface PaymentAddress {
    readonly country: string;
    readonly addressLine: string[];
    readonly region: string;
    readonly city: string;
    readonly dependentLocality: string;
    readonly postalCode: string;
    readonly sortingCode: string;
    readonly languageCode: string;
    readonly organization: string;
    readonly recipient: string;
    readonly phone: string;
}

interface PaymentShippingOption {
    id: string;
    label: string;
    amount: PaymentCurrencyAmount;
    selected?: boolean;
}

interface PaymentResponse {
    readonly paymentRequestID: string;
    readonly methodName: string;
    readonly details: Object;
    readonly shippingAddress?: PaymentAddress;
    readonly shippingOption?: string;
    readonly payerEmail?: string;
    readonly payerPhone?: string;
    readonly payerName?: string;

    complete(result?: '' | 'success' | 'fail'): PromiseLike<void>;
    toJSON(): Object;
}

interface PaymentUpdateEventListener extends EventListener {
    (evt: PaymentRequestUpdateEvent): void;
}

interface PaymentRequestUpdateEvent extends Event {
    updateWith(d: PromiseLike<PaymentDetails>): void;
}

interface Window {
	PaymentRequest?: PaymentRequest;
}

