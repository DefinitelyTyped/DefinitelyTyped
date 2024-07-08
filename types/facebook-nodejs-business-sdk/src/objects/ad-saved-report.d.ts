import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdSavedReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdSavedReport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_owner: "app_owner";
        breakdowns: "breakdowns";
        builtin_column_set: "builtin_column_set";
        creation_source: "creation_source";
        date_interval: "date_interval";
        date_preset: "date_preset";
        format_version: "format_version";
        id: "id";
        insights_section: "insights_section";
        is_shared_unread: "is_shared_unread";
        level: "level";
        name: "name";
        normalized_filter: "normalized_filter";
        sort: "sort";
        user_attribution_windows: "user_attribution_windows";
        user_columns: "user_columns";
        user_filter: "user_filter";
        user_owner: "user_owner";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdSavedReport>;
}
