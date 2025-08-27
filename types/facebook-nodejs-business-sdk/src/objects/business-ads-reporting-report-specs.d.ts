import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessAdsReportingReportSpecs
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAdsReportingReportSpecs extends AbstractCrudObject {
    static get Fields(): Readonly<{
        action_report_time: "action_report_time";
        ad_account_id: "ad_account_id";
        ad_account_ids: "ad_account_ids";
        ad_accounts: "ad_accounts";
        attribution_windows: "attribution_windows";
        business: "business";
        business_asset_group: "business_asset_group";
        comparison_date_interval: "comparison_date_interval";
        creation_source: "creation_source";
        creation_time: "creation_time";
        currency: "currency";
        date_preset: "date_preset";
        default_attribution_windows: "default_attribution_windows";
        filtering: "filtering";
        formatting: "formatting";
        id: "id";
        last_access_by: "last_access_by";
        last_access_time: "last_access_time";
        last_report_snapshot_id: "last_report_snapshot_id";
        last_report_snapshot_time: "last_report_snapshot_time";
        last_shared_report_expiration: "last_shared_report_expiration";
        limit: "limit";
        locked_dimensions: "locked_dimensions";
        report_name: "report_name";
        report_snapshot_async_percent_completion: "report_snapshot_async_percent_completion";
        report_snapshot_async_status: "report_snapshot_async_status";
        schedule_frequency: "schedule_frequency";
        scope: "scope";
        show_deprecate_aw_banner: "show_deprecate_aw_banner";
        sorting: "sorting";
        start_date: "start_date";
        status: "status";
        subscribers: "subscribers";
        update_by: "update_by";
        update_time: "update_time";
        user: "user";
        user_dimensions: "user_dimensions";
        user_metrics: "user_metrics";
        view_type: "view_type";
    }>;
}
