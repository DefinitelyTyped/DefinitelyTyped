import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CallAdsPhoneData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CallAdsPhoneData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        call_ads_phone_data_use_case: "call_ads_phone_data_use_case";
        callback_variant: "callback_variant";
        destination_website_url: "destination_website_url";
        id: "id";
        page: "page";
        phone_number: "phone_number";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): CallAdsPhoneData;
}
