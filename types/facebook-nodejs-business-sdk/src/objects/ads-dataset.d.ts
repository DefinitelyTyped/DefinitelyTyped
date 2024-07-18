import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsDataset
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsDataset extends AbstractCrudObject {
    static get Fields(): Readonly<{
        can_proxy: "can_proxy";
        collection_rate: "collection_rate";
        config: "config";
        creation_time: "creation_time";
        creator: "creator";
        dataset_id: "dataset_id";
        description: "description";
        duplicate_entries: "duplicate_entries";
        enable_auto_assign_to_accounts: "enable_auto_assign_to_accounts";
        enable_automatic_events: "enable_automatic_events";
        enable_automatic_matching: "enable_automatic_matching";
        enable_real_time_event_log: "enable_real_time_event_log";
        event_stats: "event_stats";
        event_time_max: "event_time_max";
        event_time_min: "event_time_min";
        first_party_cookie_status: "first_party_cookie_status";
        has_bapi_domains: "has_bapi_domains";
        has_catalog_microdata_activity: "has_catalog_microdata_activity";
        has_ofa_redacted_keys: "has_ofa_redacted_keys";
        has_sent_pii: "has_sent_pii";
        id: "id";
        is_consolidated_container: "is_consolidated_container";
        is_created_by_business: "is_created_by_business";
        is_crm: "is_crm";
        is_eligible_for_sharing_to_ad_account: "is_eligible_for_sharing_to_ad_account";
        is_eligible_for_sharing_to_business: "is_eligible_for_sharing_to_business";
        is_eligible_for_value_optimization: "is_eligible_for_value_optimization";
        is_mta_use: "is_mta_use";
        is_restricted_use: "is_restricted_use";
        is_unavailable: "is_unavailable";
        last_fired_time: "last_fired_time";
        last_upload_app: "last_upload_app";
        last_upload_app_changed_time: "last_upload_app_changed_time";
        last_upload_time: "last_upload_time";
        late_upload_reminder_eligibility: "late_upload_reminder_eligibility";
        match_rate_approx: "match_rate_approx";
        matched_entries: "matched_entries";
        name: "name";
        no_ads_tracked_for_weekly_uploaded_events_reminder_eligibility: "no_ads_tracked_for_weekly_uploaded_events_reminder_eligibility";
        num_active_ad_set_tracked: "num_active_ad_set_tracked";
        num_recent_offline_conversions_uploaded: "num_recent_offline_conversions_uploaded";
        num_uploads: "num_uploads";
        owner_ad_account: "owner_ad_account";
        owner_business: "owner_business";
        percentage_of_late_uploads_in_external_suboptimal_window: "percentage_of_late_uploads_in_external_suboptimal_window";
        permissions: "permissions";
        server_last_fired_time: "server_last_fired_time";
        show_automatic_events: "show_automatic_events";
        upload_rate: "upload_rate";
        upload_reminder_eligibility: "upload_reminder_eligibility";
        usage: "usage";
        valid_entries: "valid_entries";
    }>;
}
