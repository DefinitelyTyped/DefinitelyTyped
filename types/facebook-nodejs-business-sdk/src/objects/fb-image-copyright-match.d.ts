import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FBImageCopyrightMatch
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FBImageCopyrightMatch extends AbstractCrudObject {
    static get Fields(): Readonly<{
        added_to_dashboard_time: "added_to_dashboard_time";
        applied_actions: "applied_actions";
        audit_log: "audit_log";
        available_ui_actions: "available_ui_actions";
        expiration_days: "expiration_days";
        id: "id";
        is_business_page_match: "is_business_page_match";
        last_modified_time: "last_modified_time";
        match_data: "match_data";
        match_status: "match_status";
        ownership_countries: "ownership_countries";
        reference_owner: "reference_owner";
        time_to_appeal: "time_to_appeal";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<FBImageCopyrightMatch>;
}
