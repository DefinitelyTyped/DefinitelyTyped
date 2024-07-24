import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCustomDerivedMetrics
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCustomDerivedMetrics extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account_id: "ad_account_id";
        business: "business";
        creation_time: "creation_time";
        creator: "creator";
        custom_derived_metric_type: "custom_derived_metric_type";
        deletion_time: "deletion_time";
        deletor: "deletor";
        description: "description";
        format_type: "format_type";
        formula: "formula";
        has_attribution_windows: "has_attribution_windows";
        has_inline_attribution_window: "has_inline_attribution_window";
        id: "id";
        name: "name";
        permission: "permission";
        saved_report_id: "saved_report_id";
        scope: "scope";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdCustomDerivedMetrics>;
}
