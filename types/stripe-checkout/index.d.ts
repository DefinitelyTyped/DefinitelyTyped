import type { Source, Token } from "@stripe/stripe-js";

declare var StripeCheckout: StripeCheckout.StripeCheckoutStatic;

declare namespace StripeCheckout {
    interface StripeCheckoutStatic {
        configure(options: StripeCheckoutOptions): StripeCheckoutHandler;
    }

    interface StripeCheckoutHandler {
        close(): void;
        open(options?: StripeCheckoutOptions): void;
    }

    interface StripeCheckoutOptions {
        key?: string | undefined;
        token?(token: Token): void;
        source?(source: Source): void;
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
}

export = StripeCheckout;
