// Type definitions for stripe 3.0
// Project: https://stripe.com/
// Definitions by: Amrit Kahlon <https://github.com/amritk/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="stripe/v2" />

export type StripeStatic = (stripePublicKey: string) => stripe.StripeStatic;
export const Stripe: StripeStatic;

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

    interface TokenResponse {
        token?: StripeCardTokenResponse;
        error?: StripeError;
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
