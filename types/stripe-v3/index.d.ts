// Type definitions for stripe-v3 3.0
// Project: https://stripe.com/
// Definitions by: Andy Hawkins <https://github.com/a904guy/,http://a904guy.com>
//                 Eric J. Smith <https://github.com/ejsmith>
//                 Amrit Kahlon <https://github.com/amritk>
//                 Adam Cmiel <https://github.com/adamcmiel>
//                 Justin Leider <https://github.com/jleider>
//                 Kamil Gałuszka <https://github.com/galuszkak>
//                 Stefan Langeder <https://github.com/slangeder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var Stripe: stripe.StripeStatic;

declare namespace stripe {
    interface StripeStatic {
        (publicKey: string, options?: StripeOptions): Stripe;
        version: number;
    }

    interface Stripe {
        elements(options?: elements.ElementsCreateOptions): elements.Elements;
        createToken(element: elements.Element, options?: TokenOptions): Promise<TokenResponse>;
        createToken(name: 'bank_account', options: BankAccountTokenOptions): Promise<TokenResponse>;
        createToken(name: 'pii', options: PiiTokenOptions): Promise<TokenResponse>;
        createSource(element: elements.Element, options?: {owner?: OwnerInfo}): Promise<SourceResponse>;
        createSource(options: SourceOptions): Promise<SourceResponse>;
        retrieveSource(options: RetrieveSourceOptions): Promise<SourceResponse>;
        paymentRequest(options: paymentRequest.StripePaymentRequestOptions): paymentRequest.StripePaymentRequest;
    }

    interface StripeOptions {
      stripeAccount?: string;
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

    interface BankAccountTokenOptions {
        country: string;
        currency: string;
        routing_number: string;
        account_number: string;
        account_holder_name: string;
        account_holder_type: string;
    }

    interface PiiTokenOptions {
        personal_id_number: string;
    }

    interface OwnerInfo {
        address?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
        };
        name?: string;
        email?: string;
        phone?: string;
    }

    interface SourceOptions {
        type: string;
        flow?: 'redirect' | 'receiver' | 'code_verification' | 'none';
        sepa_debit?: {
            iban: string;
        };
        currency?: string;
        amount?: number;
        owner?: OwnerInfo;
        metadata?: {};
        statement_descriptor?: string;
        redirect?: {
            return_url: string;
        };
        token?: string;
        usage?: 'reusable' | 'single_use';
        three_d_secure?: {
            card: string;
        };
    }

    interface Token {
        id: string;
        object: string;
        bank_account?: BankAccount;
        card?: Card;
        client_ip: string;
        created: number;
        livemode: boolean;
        type: string;
        used: boolean;
    }

    interface TokenResponse {
        token?: Token;
        error?: Error;
    }

    interface Source {
        client_secret: string;
        created: number;
        currency: string;
        id: string;
        owner: {
            address: string | null;
            email: string | null;
            name: string | null;
            phone: string | null;
            verified_address: string | null;
            verified_email: string | null;
            verified_name: string | null;
            verified_phone: string | null;
        };
        sepa_debit?: {
            bank_code: string | null;
            country: string | null;
            fingerprint: string;
            last4: string;
            mandate_reference: string;
        };
        card?: Card;
        status?: string;
        redirect?: {
            status: string;
            url: string;
        };
        three_d_secure?: {
            authenticated: boolean;
        };
    }

    interface SourceResponse {
        source?: Source;
        error?: Error;
    }

    interface Error {
        type: string;
        charge: string;
        message?: string;
        code?: string;
        decline_code?: string;
        param?: string;
    }

    type statusType = 'new' | 'validated' | 'verified' | 'verification_failed' | 'errored';
    interface BankAccount {
        id: string;
        object: string;
        account_holder_name: string;
        account_holder_type: string;
        bank_name: string;
        country: string;
        currency: string;
        fingerprint: string;
        last4: string;
        routing_number: string;
        status: statusType;
    }

    type brandType = 'Visa' | 'American Express' | 'MasterCard' | 'Discover' | 'JCB' | 'Diners Club' | 'Unknown';
    type checkType = 'pass' | 'fail' | 'unavailable' | 'unchecked';
    type fundingType = 'credit' | 'debit' | 'prepaid' | 'unknown';
    type tokenizationType = 'apple_pay' | 'android_pay';
    interface Card {
        id: string;
        object: string;
        address_city?: string;
        address_country?: string;
        address_line1?: string;
        address_line1_check?: checkType;
        address_line2?: string;
        address_state?: string;
        address_zip?: string;
        address_zip_check?: checkType;
        brand: brandType;
        country: string;
        currency?: string;
        cvc_check?: checkType;
        dynamic_last4: string;
        exp_month: number;
        exp_year: number;
        fingerprint: string;
        funding: fundingType;
        last4: string;
        metadata: any;
        name?: string;
        tokenization_method?: tokenizationType;
        three_d_secure?: 'required' | 'recommended' | 'optional' | 'not_supported';
    }

    interface RetrieveSourceOptions {
        id: string;
        client_secret: string;
    }

    // Container for all payment request related types
    namespace paymentRequest {
        interface DisplayItem {
            amount: number;
            label: string;
            pending?: boolean;
        }

        interface StripePaymentRequestUpdateOptions {
            currency: string;
            total: DisplayItem;
            displayItems?: DisplayItem[];
            shippingOptions?: ShippingOption[];
        }

        interface StripePaymentRequestOptions extends StripePaymentRequestUpdateOptions {
            country: string;
            requestPayerName?: boolean;
            requestPayerEmail?: boolean;
            requestPayerPhone?: boolean;
            requestShipping?: boolean;
        }

        interface UpdateDetails {
            status: 'success' | 'fail' | 'invalid_shipping_address';
            total?: DisplayItem;
            displayItems?: DisplayItem[];
            shippingOptions?: ShippingOption[];
        }

        interface ShippingOption {
            id: string;
            label: string;
            detail?: string;
            amount: number;
        }

        interface ShippingAddress {
            country: string;
            addressLine: string[];
            region: string;
            city: string;
            postalCode: string;
            recipient: string;
            phone: string;
            sortingCode?: string;
            dependentLocality?: string;
        }

        interface StripePaymentResponse {
            complete: (status: string) => void;
            payerName?: string;
            payerEmail?: string;
            payerPhone?: string;
            shippingAddress?: ShippingAddress;
            shippingOption?: ShippingOption;
            methodName: string;
        }

        interface StripeTokenPaymentResponse extends StripePaymentResponse {
            token: Token;
        }

        interface StripeSourcePaymentResponse extends StripePaymentResponse {
            source: Source;
        }

        interface StripePaymentRequest {
            canMakePayment(): Promise<{applePay?: boolean} | null>;
            show(): void;
            update(options: StripePaymentRequestUpdateOptions): void;
            on(event: 'token', handler: (response: StripeTokenPaymentResponse) => void): void;
            on(event: 'source', handler: (response: StripeSourcePaymentResponse) => void): void;
            on(event: 'cancel', handler: () => void): void;
            on(event: 'shippingaddresschange', handler: (response: {updateWith: (options: UpdateDetails) => void, shippingAddress: ShippingAddress}) => void): void;
            on(event: 'shippingoptionchange', handler: (response: {updateWith: (options: UpdateDetails) => void, shippingOption: ShippingOption}) => void): void;
        }
    }

    // Container for all elements related types
    namespace elements {
        interface ElementsCreateOptions {
            fonts?: Font[];
            locale?: string;
        }

        type handler = (response?: ElementChangeResponse) => void;
        type eventTypes = 'blur' | 'change' | 'focus' | 'ready';
        interface Element {
            // HTMLElement keeps giving this error for some reason:
            // Cannot find name 'HTMLElement'
            mount(domElement: any): void;
            on(event: eventTypes, handler: handler): void;
            on(event: 'click', handler: (response: {preventDefault: () => void}) => void): void;
            focus(): void;
            blur(): void;
            clear(): void;
            unmount(): void;
            destroy(): void;
            update(options: ElementsOptions): void;
        }

        interface ElementChangeResponse {
            elementType: string;
            brand: string;
            complete: boolean;
            empty: boolean;
            value?: { postalCode: string | number };
            country?: string;
            bankName?: string;
            error?: Error;
        }

        interface ElementOptions {
            fonts?: Font[];
            locale?: string;
        }

        type elementsType = 'card' | 'cardNumber' | 'cardExpiry' | 'cardCvc' | 'postalCode' | 'paymentRequestButton' | 'iban';
        interface Elements {
            create(type: elementsType, options?: ElementsOptions): Element;
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
            placeholder?: string;
            placeholderCountry?: string;
            style?: {
                base?: Style;
                complete?: Style;
                empty?: Style;
                invalid?: Style;
                paymentRequestButton?: PaymentRequestButtonStyleOptions;
            };
            value?: string | { [objectKey: string]: string; };
            paymentRequest?: paymentRequest.StripePaymentRequest;
            supportedCountries?: string[];
            disabled?: boolean;
        }

        interface Style extends StyleOptions {
            ':hover'?: StyleOptions;
            ':focus'?: StyleOptions;
            '::placeholder'?: StyleOptions;
            '::selection'?: StyleOptions;
            ':-webkit-autofill'?: StyleOptions;
            '::-ms-clear'?: StyleOptions;
        }

        interface Font {
            family?: string;
            src?: string;
            display?: string;
            style?: string;
            unicodeRange?: string;
            weight?: string;
            cssSrc?: string;
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
            textAlign?: string;
            textDecoration?: string;
            textShadow?: string;
            textTransform?: string;
        }

        interface PaymentRequestButtonStyleOptions {
            type?: 'default' | 'donate' | 'buy';
            theme: 'dark' | 'light' | 'light-outline';
            height: string;
        }
    }
}
