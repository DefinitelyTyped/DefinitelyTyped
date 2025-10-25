declare var fbq: facebook.Pixel.Event;

declare namespace facebook.Pixel {
    declare enum EventTypeEnum {
        INIT = 'init',
        TRACK = 'track',
        TRACK_CUSTOM = 'trackCustom',
        TRACK_SINGLE = 'trackSingle'
    }

    declare enum EventNameEnum {
        AddPaymentInfo = 'AddPaymentInfo',
        AddToCart = 'AddToCart',
        AddToWishlist = 'AddToWishlist',
        CompleteRegistration = 'CompleteRegistration',
        Contact = 'Contact',
        CustomizeProduct = 'CustomizeProduct',
        Donate = 'Donate',
        FindLocation = 'FindLocation',
        InitiateCheckout = 'InitiateCheckout',
        Lead = 'Lead',
        Purchase = 'Purchase',
        Schedule = 'Schedule',
        Search = 'Search',
        StartTrial = 'StartTrial',
        SubmitApplication = 'SubmitApplication',
        Subscribe = 'Subscribe',
        ViewContent = 'ViewContent'
    }
    
    interface Event {
        (eventType: EventTypeEnum.INIT, InitialAppId: string): void;
        (
            eventType: EventTypeEnum,
            InitialAppId: string,
            eventName: EventNameEnum,
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

        (eventType: EventTypeEnum, eventName: EventNameEnum): void;
        (
            eventType: EventTypeEnum,
            eventName: EventNameEnum.ViewContent,
            parameters: facebook.Pixel.ViewContentParameters,
            option?: EventIDOptions,
        ): void;
        (eventType: EventTypeEnum.TRACK, eventName: EventNameEnum.ViewContent, parameters: ViewContentParameters, option?: EventIDOptions): void;
        (eventType: EventTypeEnum.TRACK, eventName: EventNameEnum.Search, parameters: SearchParameters, option?: EventIDOptions): void;
        (eventType: EventTypeEnum.TRACK, eventName: EventNameEnum.AddToCart, parameters: AddToCartParameters, option?: EventIDOptions): void;
        (eventType: EventTypeEnum.TRACK, eventName: EventNameEnum.AddToWishlist, parameters: AddToWishlistParameters, option?: EventIDOptions): void;
        (eventType: EventTypeEnum.TRACK, eventName: EventNameEnum.InitiateCheckout, parameters: InitiateCheckoutParameters, option?: EventIDOptions): void;
        (eventType: EventTypeEnum.TRACK, eventName: EventNameEnum.AddPaymentInfo, parameters: AddPaymentInfoParameters, option?: EventIDOptions): void;
        (eventType: EventTypeEnum.TRACK, eventName: EventNameEnum.Purchase, parameters: PurchaseParameters, option?: EventIDOptions): void;
        (eventType: EventTypeEnum.TRACK, eventName: EventNameEnum.Lead, parameters: LeadParameters, option?: EventIDOptions): void;
        (
            eventType: EventTypeEnum.TRACK,
            eventName: EventNameEnum.CompleteRegistration,
            parameters: CompleteRegistrationParameters,
            option?: EventIDOptions,
        ): void;
        (eventType: EventTypeEnum, eventName: string, parameters: CustomParameters, option?: EventIDOptions): void;

        (
            eventType: EventTypeEnum.TRACK,
            eventName: EventNameEnum.AddToCart,
            parameters: facebook.Pixel.DPA.AddToCartParameters,
            option?: EventIDOptions,
        ): void;
        (
            eventType: EventTypeEnum.TRACK,
            eventName: EventNameEnum.Purchase,
            parameters: facebook.Pixel.DPA.PurchaseParameters,
            option?: EventIDOptions,
        ): void;
        (
            eventType: EventTypeEnum.TRACK,
            eventName: EventNameEnum.ViewContent,
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
