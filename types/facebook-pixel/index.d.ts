declare var fbq: facebook.Pixel.Event;

declare namespace facebook.Pixel {
    interface Event {
        (eventType: string, InitialAppId: string): void;
        (
            eventType: string,
            InitialAppId: string,
            eventName: string,
            parameters:
                | facebook.Pixel.ViewContentParameters
                | ViewContentParameters
                | SearchParameters
                | AddToCartParameters
                | AddToWishlistParameters
                | InitiateCheckoutParameters
                | AddPaymentInfoParameters
                | PurchaseParameters
                | LeadParameters
                | CompleteRegistrationParameters
                | CustomParameters,
            option?: EventIDOptions,
        ): void;

        (eventType: string, eventName: string): void;
        (
            eventType: string,
            eventName: string,
            parameters: facebook.Pixel.ViewContentParameters,
            option?: EventIDOptions,
        ): void;
        (eventType: string, eventName: string, parameters: ViewContentParameters, option?: EventIDOptions): void;
        (eventType: string, eventName: string, parameters: SearchParameters, option?: EventIDOptions): void;
        (eventType: string, eventName: string, parameters: AddToCartParameters, option?: EventIDOptions): void;
        (eventType: string, eventName: string, parameters: AddToWishlistParameters, option?: EventIDOptions): void;
        (eventType: string, eventName: string, parameters: InitiateCheckoutParameters, option?: EventIDOptions): void;
        (eventType: string, eventName: string, parameters: AddPaymentInfoParameters, option?: EventIDOptions): void;
        (eventType: string, eventName: string, parameters: PurchaseParameters, option?: EventIDOptions): void;
        (eventType: string, eventName: string, parameters: LeadParameters, option?: EventIDOptions): void;
        (
            eventType: string,
            eventName: string,
            parameters: CompleteRegistrationParameters,
            option?: EventIDOptions,
        ): void;
        (eventType: string, eventName: string, parameters: CustomParameters, option?: EventIDOptions): void;

        (
            eventType: string,
            eventName: string,
            parameters: facebook.Pixel.DPA.AddToCartParameters,
            option?: EventIDOptions,
        ): void;
        (
            eventType: string,
            eventName: string,
            parameters: facebook.Pixel.DPA.PurchaseParameters,
            option?: EventIDOptions,
        ): void;
        (
            eventType: string,
            eventName: string,
            parameters: facebook.Pixel.DPA.ViewContentParameters,
            option?: EventIDOptions,
        ): void;
    }

    interface ViewContentParameters {
        value?: number | undefined;
        currency?: string | undefined;
        content_name?: string | undefined;
        content_type?: string | undefined;
        content_ids?: string[] | undefined;
        content_category?: string | undefined;
        contents?:
            | Array<{
                id: string;
                quantity: number;
            }>
            | undefined;
    }

    interface SearchParameters {
        value?: number | undefined;
        currency?: string | undefined;
        content_category?: string | undefined;
        content_ids?: string[] | undefined;
        search_string?: string | undefined;
    }

    interface AddToCartParameters {
        value?: number | undefined;
        currency?: string | undefined;
        content_name?: string | undefined;
        content_type?: string | undefined;
        content_ids?: string[] | undefined;
    }

    interface AddToWishlistParameters {
        value?: number | undefined;
        currency?: string | undefined;
        content_name?: string | undefined;
        content_category?: string | undefined;
        content_ids?: string[] | undefined;
    }

    interface InitiateCheckoutParameters {
        value?: number | undefined;
        currency?: string | undefined;
        content_name?: string | undefined;
        content_category?: string | undefined;
        content_ids?: string[] | undefined;
        num_items?: number | undefined;
    }

    interface AddPaymentInfoParameters {
        value?: number | undefined;
        currency?: string | undefined;
        content_category?: string | undefined;
        content_ids?: string[] | undefined;
    }

    interface PurchaseParameters {
        value: number;
        currency: string;
        content_name?: string | undefined;
        content_type?: string | undefined;
        content_ids?: string[] | undefined;
        num_items?: number | undefined;
        order_id?: string | undefined;
    }

    interface LeadParameters {
        value?: number | undefined;
        currency?: string | undefined;
        content_name?: string | undefined;
        content_category?: string | undefined;
    }

    interface CompleteRegistrationParameters {
        value?: number | undefined;
        currency?: string | undefined;
        content_name?: string | undefined;
        status?: boolean | undefined;
    }

    type CustomParameters = Record<string, any>;

    interface EventIDOptions {
        eventID: string;
    }
}

// For Facebook Tag API using Dynamic Product Ads
declare namespace facebook.Pixel.DPA {
    interface ViewContentParameters extends facebook.Pixel.ViewContentParameters {
        content_type: string;
        content_ids: string[];
    }

    interface AddToCartParameters extends facebook.Pixel.AddToCartParameters {
        content_type: string;
        content_ids: string[];
    }

    interface PurchaseParameters extends facebook.Pixel.PurchaseParameters {
        content_type: string;
        content_ids: string[];
    }
}
