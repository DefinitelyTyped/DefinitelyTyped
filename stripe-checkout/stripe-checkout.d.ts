// Type definitions for Stripe Checkout
// Project: https://stripe.com/checkout
// Definitions by: Chris Wrench <https://github.com/cgwrench>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../stripe/stripe.d.ts"/>

interface StripeCheckoutStatic {
    configure(options: StripeCheckoutOptions): StripeCheckoutHandler;
}

interface StripeCheckoutHandler {
    open(options?: StripeCheckoutOptions): void;
    close(): void;
}

interface StripeCheckoutOptions {
    key: string;
    token: (token: StripeTokenResponse) => void;
    image?: string;
    name?: string;
    description?: string;
    amount?: number;
    locale?: string;
    currency?: string;
    panelLabel?: string;
    zipCode?: boolean;
    email?: string;
    label?: string;
    allowRememberMe?: boolean;
    bitcoin?: boolean;
    opened?: () => void;
    closed?: () => void;
}

declare var StripeCheckout: StripeCheckoutStatic;
