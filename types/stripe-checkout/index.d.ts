/// <reference types="stripe-v3"/>

interface StripeCheckoutStatic {
    configure(options: StripeCheckoutOptions): StripeCheckoutHandler;
}

interface StripeCheckoutHandler {
    open(options?: StripeCheckoutOptions): void;
    close(): void;
}

interface StripeCheckoutOptions {
    key?: string | undefined;
    token?(token: stripe.Token): void;
    source?(source: stripe.Source): void;
    image?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    amount?: number | undefined;
    locale?: string | undefined;
    currency?: string | undefined;
    panelLabel?: string | undefined;
    zipCode?: boolean | undefined;
    billingAddress?: boolean | undefined;
    email?: string | undefined;
    shippingAddress?: boolean | undefined;
    label?: string | undefined;
    allowRememberMe?: boolean | undefined;
    bitcoin?: boolean | undefined;
    alipay?: boolean | "auto" | undefined;
    alipayReusable?: boolean | undefined;
    opened?(): void;
    closed?(): void;
}

declare var StripeCheckout: StripeCheckoutStatic;
