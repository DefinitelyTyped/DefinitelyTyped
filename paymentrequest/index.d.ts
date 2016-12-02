// Type definitions for PaymentRequest
// Project: https://www.w3.org/TR/payment-request/
// Definitions by: Adam Cmiel <https://github.com/adamcmiel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PaymentRequest extends EventTarget {
    new (methodData: PaymentMethodData[], details: PaymentDetails, options?: PaymentOptions): PaymentRequest;
    show(): PromiseLike<PaymentResponse>;
    abort(): PromiseLike<void>;
    shippingAddress?: PaymentAddress;
    shippingOption?: string;
    onshippingaddresschange: PaymentUpdateEventListener;
    onshippingoptionchange: PaymentUpdateEventListener;
}

interface PaymentMethodData {
    supportedMethods: string[];
    data?: Object;
}

interface PaymentCurrencyAmount {
    currency: string;
    value: string;
}

interface PaymentDetails {
    total: PaymentItem;
    displayItems?: PaymentItem[];
    shippingOptions?: PaymentShippingOption[];
    modifiers?: PaymentDetailsModifier[];
}

interface PaymentDetailsModifier {
    supportedMethods: string[];
    total?: PaymentItem;
    additionalDisplayItems: PaymentItem[];
}

interface PaymentOptions {
    requestShipping: boolean;
    requestPayerEmail: boolean;
    requestPayerPhone: boolean;
}

interface PaymentItem {
    label: string;
    amount: PaymentCurrencyAmount
}

interface PaymentAddress {
    country: string;
    addressLine: string[];
    region: string;
    city: string;
    dependentLocality: string;
    postalCode: string;
    sortingCode: string;
    languageCode: string;
    organization: string;
    recipient: string;
    careOf: string;
    phone: string;
}

interface PaymentShippingOption {
    id: string;
    label: string;
    amount: PaymentCurrencyAmount;
}

interface PaymentResponse {
    methodName: string;
    details: Object;
    shippingAddress?: PaymentAddress;
    shippingOption?: string;
    payerEmail?: string;
    payerPhone?: string;

    complete(result?: '' | 'success' | 'fail'): PromiseLike<void>;
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

