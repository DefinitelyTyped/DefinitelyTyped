import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ALMEvent
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ALMEvent extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account_ids: "ad_account_ids";
        campaign_ids: "campaign_ids";
        channel: "channel";
        event: "event";
        event_time: "event_time";
        guidance: "guidance";
        guidance_detail: "guidance_detail";
        id: "id";
        parent_advertiser_ids: "parent_advertiser_ids";
        reseller_business_id: "reseller_business_id";
        sub_channel: "sub_channel";
        user_id: "user_id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ALMEvent>;
}
