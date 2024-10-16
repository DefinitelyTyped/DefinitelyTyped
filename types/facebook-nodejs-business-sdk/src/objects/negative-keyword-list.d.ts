import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * NegativeKeywordList
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class NegativeKeywordList extends AbstractCrudObject {
    static get Fields(): Readonly<{
        applied_active_ad_campaign_groups: "applied_active_ad_campaign_groups";
        applied_inactive_ad_campaign_groups: "applied_inactive_ad_campaign_groups";
        creator_id: "creator_id";
        id: "id";
        is_fully_reviewed: "is_fully_reviewed";
        last_update_time: "last_update_time";
        last_update_user_id: "last_update_user_id";
        list_name: "list_name";
        total_approved_keyword_count: "total_approved_keyword_count";
        total_declined_keyword_count: "total_declined_keyword_count";
        total_negative_keyword_count: "total_negative_keyword_count";
        total_validated_keyword_count: "total_validated_keyword_count";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<NegativeKeywordList>;
    update(fields: string[], params?: Record<string, any>): Promise<NegativeKeywordList>;
}
