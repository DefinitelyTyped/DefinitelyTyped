// Type definitions for stripe
// Project: https://stripe.com/
// Definitions by: Andy Hawkins <https://github.com/a904guy/,http://a904guy.com>, Eric J. Smith <https://github.com/ejsmith/>, Amrit Kahlon <https://github.com/amritk/>, Adam Cmiel <https://github.com/adamcmiel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface StripeStatic {
    applePay: StripeApplePay;
    setPublishableKey(key: string): void;
    validateCardNumber(cardNumber: string): boolean;
    validateExpiry(month: string, year: string): boolean;
    validateCVC(cardCVC: string): boolean;
    cardType(cardNumber: string): string;
    getToken(token: string, responseHandler: (status: number, response: StripeTokenResponse) => void): void;
    card: StripeCardData;
    createToken(data: StripeTokenData, responseHandler: (status: number, response: StripeTokenResponse) => void): void;
    bankAccount: StripeBankAccount;
}

interface StripeTokenData {
    number: string;
    exp_month?: number;
    exp_year?: number;
    exp?: string;
    cvc?: string;
    name?: string;
    address_line1?: string;
    address_line2?: string;
    address_city?: string;
    address_state?: string;
    address_zip?: string;
    address_country?: string;
}

interface StripeTokenResponse {
    id: string;
    card: StripeCardData;
    created: number;
    livemode: boolean;
    object: string;
    type: string;
    used: boolean;
    error?: StripeError;
}

interface StripeError {
    type: string;
    code: string;
    message: string;
    param?: string;
}

interface StripeCardData {
    object: string;
    last4: string;
    exp_month: number;
    exp_year: number;
    country?: string;
    name?: string;
    address_line1?: string;
    address_line2?: string;
    address_city?: string;
    address_state?: string;
    address_zip?: string;
    address_country?: string;
    createToken(data: StripeTokenData, responseHandler: (status: number, response: StripeTokenResponse) => void): void;
}

interface StripeBankAccount
{
    createToken(params: StripeBankTokenParams, stripeResponseHandler: (status:number, response: StripeBankTokenResponse) => void): void;
    validateRoutingNumber(routingNumber: number | string, countryCode: string): boolean;
    validateAccountNumber(accountNumber: number | string, countryCode: string): boolean;
}

interface StripeBankTokenParams
{
    country: string;
    currency: string;
    account_number: number | string;
    routing_number?: number | string;
    account_holder_name: string;
    account_holder_type: string;
}

interface StripeBankTokenResponse
{
    id: string;
    bank_account: {
        country: string;
        bank_name: string;
        last4: number;
        validated: boolean;
        object: string;
    };
    created: number;
    livemode: boolean;
    type: string;
    object: string;
    used: boolean;
    error?: StripeError;
}

declare var Stripe: StripeStatic;
declare module "Stripe" {
    export = StripeStatic;
}

interface StripeApplePay
{
    checkAvailability(resopnseHandler: (result: boolean) => void): void;
    buildSession(data: StripeApplePayPaymentRequest,
                 onSuccessHandler: (result: StripeApplePaySessionResult, completion: ((value: any) => void)) => void,
                 onErrorHanlder: (error: { message: string }) => void): any;
}

type StripeApplePayBillingContactField = 'postalAddress' | 'name';
type StripeApplePayShippingContactField = StripeApplePayBillingContactField | 'phone' | 'email';
type StripeApplePayShipping = 'shipping' | 'delivery' | 'storePickup' | 'servicePickup';

interface StripeApplePayPaymentRequest
{
    billingContact: StripeApplePayPaymentContact;
    countryCode: string;
    currencyCode: string;
    total: StripeApplePayLineItem;
    lineItems?: StripeApplePayLineItem[];
    requiredBillingContactFields?: StripeApplePayBillingContactField[];
    requiredShippingContactFields?: StripeApplePayShippingContactField[];
    shippingContact?: StripeApplePayPaymentContact;
    shippingMethods?: StripeApplePayShippingMethod[];
    shippingType?: StripeApplePayShipping[];
}

// https://developer.apple.com/reference/applepayjs/1916082-applepay_js_data_types
interface StripeApplePayLineItem
{
    type: 'pending' | 'final';
    label: string;
    amount: number;
}

interface StripeApplePaySessionResult
{
    token: StripeTokenResponse;
    shippingContact?: StripeApplePayPaymentContact;
    shippingMethod?: StripeApplePayShippingMethod;
}

interface StripeApplePayShippingMethod
{
    label: string;
    detail: string;
    amount: number;
    identifier: string;
}

interface StripeApplePayPaymentContact
{
    emailAddress: string;
    phoneNumber: string;
    givenName: string;
    familyName: string;
    addressLines: string[];
    locality: string;
    administrativeArea: string;
    postalCode: string;
    countryCode: string;
}
