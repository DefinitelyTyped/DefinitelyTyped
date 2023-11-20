declare global {
    interface Window {
        Paddle: Paddle;
    }
}

export interface Paddle {
    /** Initialize Paddle on your page. The main options are Paddle.Setup({vendor: 12345, eventCallback: myCallback}) */
    Setup(options: {
        vendor: number;
        completeDetails?: boolean;
        eventCallback?: (data: any) => void;
    }): void;

    Environment: {
        /** Set to use the sandbox environment; remove when you're ready to go live. */
        set(env: "sandbox"): void;
    };

    Audience: {
        /** Returns true/false if the browser allows Paddle popups */
        AllowPopup(): boolean;

        /** Set a cookie to prevent Paddle audience popups for 6 days */
        LogPopup(): void;

        /** Show popup to collect email for marketing  */
        Popup(attributes: {
            vendorName: string;
            triggers: {
                exitIntent: boolean;
                scrollDepth: number | false;
                timed: number | false;
            };
            strings: {
                heading: string;
                subHeading: string;
                cta: string;
            };
        }): void;

        /** Add someone to your marketing list */
        subscribe(
            email: string,
            marketingConsent: boolean,
            callback: (
                response: {
                    success: true;
                    email: string;
                    user_id: number;
                } | {
                    success: false;
                    error: string;
                },
            ) => void,
        ): void;
    };

    Checkout: {
        /** The main Paddle function to open the checkout. */
        open(
            options:
                & ({
                    product: number | string;
                    override?: string;
                } | {
                    product?: number | string;
                    override: string;
                })
                & {
                    frameTarget?: string;
                    frameStyle?: string;
                    frameInitialHeight?: number;
                    title?: string;
                    message?: string;
                    coupon?: string;
                    email?: string;
                    marketingConsent?: "0" | "1";
                    country?: string;
                    postcode?: string;
                    allowQuantity?: boolean | "true" | "false";
                    quantity?: number | string;
                    disableLogout?: boolean | "true" | "false";
                    hideTaxLink?: boolean | "true" | "false";
                    customData?: Paddle.Json;
                    locale?: string;
                    passthrough?: string;
                    referring_domain?: string;
                    success?: string;
                    successCallback?: (data: any) => void | string;
                    closeCallback?: (data: any) => void | string;
                    loadCallback?: (data: any) => void | string;
                    upsell?: number | string;
                    upsellTitle?: string;
                    upsellText?: string;
                    upsellAction?: string;
                    upsellCoupon?: string;
                    upsellPassthrough?: string;
                    displayModeTheme?: "light" | "dark";
                    method?: "inline" | "overlay" | "sdk";
                },
        ): void;
    };

    Download: {
        /** Get download URL for product_id from Paddle */
        GetURLFromID(product_id: number | string): string;

        /** Show the Paddle loading spinner - can be used outside of Paddle checkout */
        Start(url: string, product_id: number | string): void;
    };

    Order: {
        /** Show a modal popup with details of their recent purchase, often used in options.successCallback of Paddle.Checkout.open */
        DetailsPopup(checkout_id: string, processingMessage: string): void;

        /** Returns an order details object, different from above in that it does not open a modal, just provides info */
        details(checkout_id: string, callback: (data: Paddle.CheckoutOrder) => void, showLoader?: boolean): void;
    };

    Product: {
        /** Returns a specific localized pricing data for product_id. amountType can be gross, tax, net, or tax_included amount */
        Price(
            amountType: "gross" | "tax" | "net" | "tax_included",
            product_id: number | string,
            quantity: number,
            callback: (data: any) => void,
        ): void;
        /** Returns object of localized pricing data for product_id */
        Prices(
            product_id: number | string,
            quantity: number,
            callback: (price: Paddle.ProductPriceResponse) => void,
        ): void;
    };

    Spinner: {
        /** Hide the Paddle loading spinner - can be used outside of Paddle checkout */
        hide(): void;

        /** Show the Paddle loading spinner - can be used outside of Paddle checkout */
        show(): void;
    };

    Status: {
        /** Provides your Paddle.js version, if using CDN will be most recent */
        libraryVersion: string;
    };

    User: {
        /** Returns a specific localized pricing data for product_id. amountType can be gross, tax, net, or tax_included amount */
        History(
            email: string,
            product_id: number | string | null,
            callback: (response: {
                success: boolean;
                message: string;
                callback: string;
            }) => void,
        ): void;
    };
}

export namespace Paddle {
    interface CheckoutOrder {
        state: "incomplete" | "processing" | "processed";
        checkout: Checkout;
        custom_data: Json;
        order: Order;
        lockers: Locker[];
    }

    interface Checkout {
        checkout_id: string;
        image_url: string | null;
        title: string;
    }

    type Order = {
        order_id: number;
        total: string;
        total_tax: string;
        currency: string;
        quantity: number;
        formatted_total: string;
        formatted_tax: string;
        coupon_code: string | null;
        completed: Completed;
        receipt_url: string;
        customer_success_redirect_url: string;
        customer: Customer;
        is_subscription: boolean;
        subscription_id: number;
        subscription_order_id: string;
        access_management: AccessManagement;
    } & ({ has_locker: true } | { has_locker: false; product_id: number }); // The product of the order is only included if has_locker is false.

    interface Completed {
        date: string;
        timezone_type: number;
        timezone: string;
    }

    interface Customer {
        email: string;
        marketing_consent: boolean;
    }

    interface AccessManagement {
        software_key: any[];
    }

    interface Locker {
        locker_id: number;
        product_id: number;
        product_name: string;
        license_code: string;
        instructions: string;
    }

    type Json =
        | string
        | number
        | boolean
        | null
        | { [key: string]: Json }
        | Json[];

    interface ProductPriceResponse {
        price: ProductPrice;
        quantity: number;
        country: string;
        recurring?: {
            price: ProductPrice;
            subscription: {
                trial_days: number;
                length: number;
                type: "day" | "week" | "month" | "year";
            };
        };
    }

    interface ProductPrice {
        gross: string;
        net: string;
        tax: string;
        tax_included: boolean;
    }
}
