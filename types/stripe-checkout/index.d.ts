// Type definitions for Stripe Checkout 1.0
// Project: https://stripe.com/checkout
// Definitions by: Chris Wrench <https://github.com/cgwrench>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="stripe-v2"/>

interface StripeCheckoutStatic {
    configure(options: StripeCheckoutOptions): StripeCheckoutHandler;
}

interface StripeCheckoutHandler {
    open(options?: StripeCheckoutOptions): void;
    close(): void;
}

interface StripeCheckoutOptions {
    key?: string;
    token?(token: stripe.StripeCardTokenResponse): void;
    image?: string;
    name?: string;
    description?: string;
    amount?: number;
    locale?: string;
    currency?: string;
    panelLabel?: string;
    zipCode?: boolean;
    billingAddress?: boolean;
    email?: string;
    shippingAddress?: boolean;
    label?: string;
    allowRememberMe?: boolean;
    bitcoin?: boolean;
    alipay?: boolean | 'auto';
    alipayReusable?: boolean;
    opened?(): void;
    closed?(): void;
}

declare var StripeCheckout: StripeCheckoutStatic;
