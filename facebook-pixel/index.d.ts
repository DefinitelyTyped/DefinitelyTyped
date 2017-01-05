// Type definitions for the Facebook Pixel Tag API
// Project: https://developers.facebook.com/docs/ads-for-websites/tag-api/
// Definitions by: Noctis Hsu <https://github.com/noctishsu/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare var fbq:facebook.Pixel.Event;


declare module facebook.Pixel {
    interface Event {
        (eventType:string, InitialAppId:string):void;
        (eventType:string, eventName:string):void;
        (eventType:string, eventName:string, parameters:facebook.Pixel.ViewContentParameters):void;
        (eventType:string, eventName:string, parameters:ViewContentParameters):void;
        (eventType:string, eventName:string, parameters:SearchParameters):void;
        (eventType:string, eventName:string, parameters:AddToCartParameters):void;
        (eventType:string, eventName:string, parameters:AddToWishlistParameters):void;
        (eventType:string, eventName:string, parameters:InitiateCheckoutParameters):void;
        (eventType:string, eventName:string, parameters:AddPaymentInfoParameters):void;
        (eventType:string, eventName:string, parameters:PurchaseParameters):void;
        (eventType:string, eventName:string, parameters:LeadParameters):void;
        (eventType:string, eventName:string, parameters:CompleteRegistrationParameters):void;

        (eventType:string, eventName:string, parameters:facebook.Pixel.DPA.AddToCartParameters):void;
        (eventType:string, eventName:string, parameters:facebook.Pixel.DPA.PurchaseParameters):void;
        (eventType:string, eventName:string, parameters:facebook.Pixel.DPA.ViewContentParameters):void;
    }


    interface ViewContentParameters {
        value?:number;
        currency?:string;
        content_name?:string;
        content_type?:string;
        content_ids?:string[];
        content_category?:string;
    }

    interface SearchParameters {
        value?:number;
        currency?:string;
        content_category?:string;
        content_ids?:string[];
        search_string?:string;
    }

    interface AddToCartParameters {
        value?:number;
        currency?:string;
        content_name?:string;
        content_type?:string;
        content_ids?:string[];
    }

    interface AddToWishlistParameters {
        value?:number;
        currency?:string;
        content_name?:string;
        content_category?:string;
        content_ids?:string[];
    }

    interface InitiateCheckoutParameters {
        value?:number;
        currency?:string;
        content_name?:string;
        content_category?:string;
        content_ids?:string[];
        num_items?:number;
    }

    interface AddPaymentInfoParameters {
        value?:number;
        currency?:string;
        content_category?:string;
        content_ids?:string[];
    }

    interface PurchaseParameters {
        value:number;
        currency:string;
        content_name?:string;
        content_type?:string;
        content_ids?:string[];
        num_items?:number;
        order_id?:string;
    }

    interface LeadParameters {
        value?:number;
        currency?:string;
        content_name?:string;
        content_category?:string;
    }

    interface CompleteRegistrationParameters {
        value?:number;
        currency?:string;
        content_name?:string;
        status?:string;
    }
}

// For Facebook Tag API using Dynamic Product Ads
declare module facebook.Pixel.DPA {

    interface ViewContentParameters extends facebook.Pixel.ViewContentParameters {
        content_type:string;
        content_ids:string[];
    }

    interface AddToCartParameters extends facebook.Pixel.AddToCartParameters {
        content_type:string;
        content_ids:string[];
    }

    interface PurchaseParameters extends facebook.Pixel.PurchaseParameters {
        content_type:string;
        content_ids:string[];
    }
}
