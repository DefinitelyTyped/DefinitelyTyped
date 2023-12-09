import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductEventStat
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductEventStat extends AbstractCrudObject {
    static get Fields(): Readonly<{
        date_start: "date_start";
        date_stop: "date_stop";
        device_type: "device_type";
        event: "event";
        event_source: "event_source";
        total_content_ids_matched_other_catalogs: "total_content_ids_matched_other_catalogs";
        total_matched_content_ids: "total_matched_content_ids";
        total_unmatched_content_ids: "total_unmatched_content_ids";
        unique_content_ids_matched_other_catalogs: "unique_content_ids_matched_other_catalogs";
        unique_matched_content_ids: "unique_matched_content_ids";
        unique_unmatched_content_ids: "unique_unmatched_content_ids";
    }>;
    static get DeviceType(): Readonly<{
        desktop: "desktop";
        mobile_android_phone: "mobile_android_phone";
        mobile_android_tablet: "mobile_android_tablet";
        mobile_ipad: "mobile_ipad";
        mobile_iphone: "mobile_iphone";
        mobile_ipod: "mobile_ipod";
        mobile_phone: "mobile_phone";
        mobile_tablet: "mobile_tablet";
        mobile_windows_phone: "mobile_windows_phone";
        unknown: "unknown";
    }>;
    static get Event(): Readonly<{
        addtocart: "AddToCart";
        addtowishlist: "AddToWishlist";
        initiatecheckout: "InitiateCheckout";
        lead: "Lead";
        purchase: "Purchase";
        search: "Search";
        subscribe: "Subscribe";
        viewcontent: "ViewContent";
    }>;
    static get Breakdowns(): Readonly<{
        device_type: "DEVICE_TYPE";
    }>;
}
