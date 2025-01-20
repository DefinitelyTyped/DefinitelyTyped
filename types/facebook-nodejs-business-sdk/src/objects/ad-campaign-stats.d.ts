import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCampaignStats
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignStats extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        actions: "actions";
        adgroup_id: "adgroup_id";
        campaign_id: "campaign_id";
        campaign_ids: "campaign_ids";
        clicks: "clicks";
        end_time: "end_time";
        id: "id";
        impressions: "impressions";
        inline_actions: "inline_actions";
        io_number: "io_number";
        is_completed: "is_completed";
        line_number: "line_number";
        newsfeed_position: "newsfeed_position";
        social_clicks: "social_clicks";
        social_impressions: "social_impressions";
        social_spent: "social_spent";
        social_unique_clicks: "social_unique_clicks";
        social_unique_impressions: "social_unique_impressions";
        spent: "spent";
        start_time: "start_time";
        topline_id: "topline_id";
        unique_clicks: "unique_clicks";
        unique_impressions: "unique_impressions";
    }>;
}
