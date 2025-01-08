import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AnalyticsSegment
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AnalyticsSegment extends AbstractCrudObject {
    static get Fields(): Readonly<{
        custom_audience_ineligiblity_reasons: "custom_audience_ineligiblity_reasons";
        description: "description";
        estimated_custom_audience_size: "estimated_custom_audience_size";
        event_info_rules: "event_info_rules";
        event_rules: "event_rules";
        filter_set: "filter_set";
        has_demographic_rules: "has_demographic_rules";
        id: "id";
        is_all_user: "is_all_user";
        is_eligible_for_push_campaign: "is_eligible_for_push_campaign";
        is_internal: "is_internal";
        name: "name";
        percentile_rules: "percentile_rules";
        time_last_seen: "time_last_seen";
        time_last_updated: "time_last_updated";
        user_property_rules: "user_property_rules";
        web_param_rules: "web_param_rules";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AnalyticsSegment>;
}
