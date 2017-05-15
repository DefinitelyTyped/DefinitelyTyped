// Type definitions for stripe 2.x
// Project: https://stripe.com/
// Definitions by: Andy Hawkins <https://github.com/a904guy/,http://a904guy.com>
//                 Eric J. Smith <https://github.com/ejsmith/>
//                 Amrit Kahlon <https://github.com/amritk/>
//                 Adam Cmiel <https://github.com/adamcmiel>
//                 Justin Leider <https://github.com/jleider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare const Stripe: StripeStatic;

interface StripeStatic {
    applePay: StripeApplePay;
    setPublishableKey(key: string): void;
    validateCardNumber(cardNumber: string): boolean;
    validateExpiry(month: string, year: string): boolean;
    validateCVC(cardCVC: string): boolean;
    cardType(cardNumber: string): StripeCardDataBrand;
    getToken(token: string, responseHandler: (status: number, response: StripeCardTokenResponse) => void): void;
    card: StripeCard;
    createToken(data: StripeCardTokenData, responseHandler: (status: number, response: StripeCardTokenResponse) => void): void;
    bankAccount: StripeBankAccount;
    (stripePublicKey: string): stripe.StripeStatic;
}

interface StripeCardTokenData {
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
    client_ip: string;
    created: number;
    livemode: boolean;
    object: string;
    type: string;
    used: boolean;
    error?: StripeError;
}

interface StripeCardTokenResponse extends StripeTokenResponse {
    card: StripeCard;
}

interface StripeError {
    type: string;
    code: string;
    message: string;
    param?: string;
}

type StripeCardDataBrand = 'Visa' | 'American Express' | 'MasterCard' | 'Discover' | 'JCB' | 'Diners Club' | 'Unknown';

interface StripeCard {
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
    brand?: StripeCardDataBrand;
    createToken(data: StripeCardTokenData, responseHandler: (status: number, response: StripeCardTokenResponse) => void): void;
    validateCardNumber(cardNumber: string): boolean;
    validateExpiry(month: string, year: string): boolean;
    validateCVC(cardCVC: string): boolean;
}

interface StripeBankAccount {
    createToken(params: StripeBankTokenParams, stripeResponseHandler: (status: number, response: StripeBankTokenResponse) => void): void;
    validateRoutingNumber(routingNumber: number | string, countryCode: string): boolean;
    validateAccountNumber(accountNumber: number | string, countryCode: string): boolean;
}

interface StripeBankTokenParams {
    country: string;
    currency: string;
    account_number: number | string;
    routing_number?: number | string;
    account_holder_name: string;
    account_holder_type: string;
}

interface StripeBankTokenResponse extends StripeTokenResponse {
    bank_account: {
        country: string;
        bank_name: string;
        last4: number;
        validated: boolean;
        object: string;
    };
}

interface StripeApplePay {
    checkAvailability(resopnseHandler: (result: boolean) => void): void;
    buildSession(data: StripeApplePayPaymentRequest,
                 onSuccessHandler: (result: StripeApplePaySessionResult, completion: ((value: any) => void)) => void,
                 onErrorHanlder: (error: { message: string }) => void): any;
}

type StripeApplePayBillingContactField = 'postalAddress' | 'name';
type StripeApplePayShippingContactField = StripeApplePayBillingContactField | 'phone' | 'email';
type StripeApplePayShipping = 'shipping' | 'delivery' | 'storePickup' | 'servicePickup';

interface StripeApplePayPaymentRequest {
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
interface StripeApplePayLineItem {
    type: 'pending' | 'final';
    label: string;
    amount: number;
}

interface StripeApplePaySessionResult {
    token: StripeCardTokenResponse;
    shippingContact?: StripeApplePayPaymentContact;
    shippingMethod?: StripeApplePayShippingMethod;
}

interface StripeApplePayShippingMethod {
    label: string;
    detail: string;
    amount: number;
    identifier: string;
}

interface StripeApplePayPaymentContact {
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

// Stripe.js v3 APIs
// These will eventually replace the ones above once they're all added to the library
// https://stripe.com/docs/elements/reference#including-the-library
declare namespace stripe {
    interface StripeStatic {
        elements(options?: elements.ElementOptions): elements.Elements;
        createToken(element: elements.Element, options?: TokenOptions): Promise<TokenResponse>;
    }

    interface TokenOptions {
        name?: string;
        address_line1?: string;
        address_line2?: string;
        address_city?: string;
        address_state?: string;
        address_zip?: string;
        address_country?: string;
        currency?: string;
    }

    interface TokenResponse {
        token?: string;
        error?: StripeError;
    }

    // Container for all elements related types
    namespace elements {
        type handler = (response?: ElementChangeResponse) => void;
        type eventTypes = 'blur' | 'change' | 'focus' | 'ready';
        interface Element {
            // HTMLElement keeps giving this error for some reason:
            // Cannot find name 'HTMLElement'
            mount(domElement: string | any): void;
            on(event: eventTypes, handler: handler): void;
            blur(): void;
            clear(): void;
            unmount(): void;
            update(options: ElementsOptions): void;
        }

        interface ElementChangeResponse {
            brand: string;
            complete: boolean;
            empty: boolean;
            value?: { postalCode: string | number };
            error?: StripeError;
        }

        interface ElementOptions {
            fonts?: elements.Font[];
            locale?: string;
        }

        type elementsType = 'card' | 'cardNumber' | 'cardExpiry' | 'cardCvc' | 'postalCode';
        interface Elements {
            create(type: elementsType, options: ElementsOptions): Element;
        }

        interface ElementsOptions {
            classes?: {
                base?: string;
                complete?: string;
                empty?: string;
                focus?: string;
                invalid?: string;
                webkitAutofill?: string;
            };
            hidePostalCode?: boolean;
            hideIcon?: boolean;
            iconStyle?: 'solid' | 'default';
            style?: elements.Font;
            value?: string | {[objectKey: string]: string; };
        }

        interface Style extends StyleOptions {
            ':hover'?: StyleOptions;
            ':focus'?: StyleOptions;
            '::placeholder'?: StyleOptions;
            '::selection'?: StyleOptions;
            ':-webkit-autofill'?: StyleOptions;
        }

        interface Font {
            family?: string;
            src?: string;
            style?: string;
            unicodeRange?: string;
            weight?: string;
        }

        interface StyleOptions {
            color?: string;
            fontFamily?: string;
            fontSize?: string;
            fontSmoothing?: string;
            fontStyle?: string;
            fontVariant?: string;
            iconColor?: string;
            lineHeight?: string;
            letterSpacing?: string;
            textDecoration?: string;
            textShadow?: string;
            textTransform?: string;
        }
    }
}

// The Stripe client side APIs are not made available to package managers for direct installation.
// As explained compliance reasons. Source: https://github.com/stripe/stripe-node/blob/master/README.md#these-are-serverside-bindings-only
// A release date versioning schema is used to version these APIs.
