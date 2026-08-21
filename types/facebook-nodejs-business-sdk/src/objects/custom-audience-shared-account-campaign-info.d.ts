import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CustomAudienceSharedAccountCampaignInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceSharedAccountCampaignInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        account_name: "account_name";
        adset_excluding_count: "adset_excluding_count";
        adset_including_count: "adset_including_count";
        campaign_delivery_status: "campaign_delivery_status";
        campaign_objective: "campaign_objective";
        campaign_pages: "campaign_pages";
        campaign_schedule: "campaign_schedule";
    }>;
}
