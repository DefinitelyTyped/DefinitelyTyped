import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
/**
 * Lead
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Lead extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_id: "ad_id";
        ad_name: "ad_name";
        adset_id: "adset_id";
        adset_name: "adset_name";
        campaign_id: "campaign_id";
        campaign_name: "campaign_name";
        created_time: "created_time";
        custom_disclaimer_responses: "custom_disclaimer_responses";
        field_data: "field_data";
        form_id: "form_id";
        home_listing: "home_listing";
        id: "id";
        is_organic: "is_organic";
        partner_name: "partner_name";
        platform: "platform";
        post: "post";
        post_submission_check_result: "post_submission_check_result";
        retailer_item_id: "retailer_item_id";
        vehicle: "vehicle";
    }>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<Lead>;
}
