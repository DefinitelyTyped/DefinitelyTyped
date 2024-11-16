import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCampaignGroupStats
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignGroupStats extends AbstractCrudObject {
    static get Fields(): Readonly<{
        actions: "actions";
        campaign_group_id: "campaign_group_id";
        clicks: "clicks";
        end_time: "end_time";
        impressions: "impressions";
        inline_actions: "inline_actions";
        social_clicks: "social_clicks";
        social_impressions: "social_impressions";
        social_spent: "social_spent";
        social_unique_clicks: "social_unique_clicks";
        social_unique_impressions: "social_unique_impressions";
        spent: "spent";
        start_time: "start_time";
        unique_clicks: "unique_clicks";
        unique_impressions: "unique_impressions";
    }>;
}
