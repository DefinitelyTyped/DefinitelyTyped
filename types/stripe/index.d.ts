// Type definitions for stripe 3.0
// Project: https://stripe.com/
// Definitions by: Andy Hawkins <https://github.com/a904guy/,http://a904guy.com>
//                 Eric J. Smith <https://github.com/ejsmith/>
//                 Amrit Kahlon <https://github.com/amritk/>
//                 Adam Cmiel <https://github.com/adamcmiel>
//                 Justin Leider <https://github.com/jleider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function Stripe(stripePublicKey: string): stripe.StripeStatic;

export namespace stripe {
    interface StripeStatic {
        elements(options?: elements.ElementsCreateOptions): elements.Elements;
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

    interface Error {
        type: string;
        charge: string;
        message?: string;
        code?: string;
        declined_code?: string;
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
    }

    // Container for all elements related types
    namespace elements {
        interface ElementsCreateOptions {
            fonts?: elements.Font[];
            locale?: string;
        }

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
            error?: Error;
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
            style?: {
                base?: Style;
                complete?: Style;
                empty?: Style;
                invalid?: Style;
            };
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
