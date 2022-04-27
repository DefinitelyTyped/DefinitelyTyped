// Type definitions for the Facebook Pixel Tag API
// Project: https://developers.facebook.com/docs/ads-for-websites/tag-api/
// Definitions by: Noctis Hsu <https://github.com/noctishsu>
//                 Victor Hom <https://github.com/VictorHom>
//                 BC Choi <https://github.com/ninpeng>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare var fbq:facebook.Pixel.Event;


declare module facebook.Pixel {
    interface Event {
        (eventType:string, InitialAppId:string):void;
        (eventType:string, InitialAppId:string, eventName:string,
            parameters:
            facebook.Pixel.ViewContentParameters |
            ViewContentParameters |
            SearchParameters |
            AddToCartParameters |
            AddToWishlistParameters |
            InitiateCheckoutParameters |
            AddPaymentInfoParameters |
            PurchaseParameters |
            LeadParameters |
            CompleteRegistrationParameters
            ):void;
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
        (eventType:string, eventName:string, parameters:CustomParameters):void;

        (eventType:string, eventName:string, parameters:facebook.Pixel.DPA.AddToCartParameters):void;
        (eventType:string, eventName:string, parameters:facebook.Pixel.DPA.PurchaseParameters):void;
        (eventType:string, eventName:string, parameters:facebook.Pixel.DPA.ViewContentParameters):void;
    }


    interface ViewContentParameters {
        value?:number | undefined;
        currency?:string | undefined;
        content_name?:string | undefined;
        content_type?:string | undefined;
        content_ids?:string[] | undefined;
        content_category?:string | undefined;
        contents?:Array<{
            id:string;
            quantity:number;
        }> | undefined;
    }

    interface SearchParameters {
        value?:number | undefined;
        currency?:string | undefined;
        content_category?:string | undefined;
        content_ids?:string[] | undefined;
        search_string?:string | undefined;
    }

    interface AddToCartParameters {
        value?:number | undefined;
        currency?:string | undefined;
        content_name?:string | undefined;
        content_type?:string | undefined;
        content_ids?:string[] | undefined;
    }

    interface AddToWishlistParameters {
        value?:number | undefined;
        currency?:string | undefined;
        content_name?:string | undefined;
        content_category?:string | undefined;
        content_ids?:string[] | undefined;
    }

    interface InitiateCheckoutParameters {
        value?:number | undefined;
        currency?:string | undefined;
        content_name?:string | undefined;
        content_category?:string | undefined;
        content_ids?:string[] | undefined;
        num_items?:number | undefined;
    }

    interface AddPaymentInfoParameters {
        value?:number | undefined;
        currency?:string | undefined;
        content_category?:string | undefined;
        content_ids?:string[] | undefined;
    }

    interface PurchaseParameters {
        value:number;
        currency:string;
        content_name?:string | undefined;
        content_type?:string | undefined;
        content_ids?:string[] | undefined;
        num_items?:number | undefined;
        order_id?:string | undefined;
    }

    interface LeadParameters {
        value?:number | undefined;
        currency?:string | undefined;
        content_name?:string | undefined;
        content_category?:string | undefined;
    }

    interface CompleteRegistrationParameters {
        value?:number | undefined;
        currency?:string | undefined;
        content_name?:string | undefined;
        status?:boolean | undefined;
    }

    type CustomParameters = Record<string,any>;
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
