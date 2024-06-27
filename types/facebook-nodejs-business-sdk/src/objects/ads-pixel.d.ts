import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * AdsPixel
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixel extends AbstractCrudObject {
    static get Fields(): Readonly<{
        automatic_matching_fields: "automatic_matching_fields";
        can_proxy: "can_proxy";
        code: "code";
        config: "config";
        creation_time: "creation_time";
        creator: "creator";
        data_use_setting: "data_use_setting";
        description: "description";
        duplicate_entries: "duplicate_entries";
        enable_auto_assign_to_accounts: "enable_auto_assign_to_accounts";
        enable_automatic_matching: "enable_automatic_matching";
        event_stats: "event_stats";
        event_time_max: "event_time_max";
        event_time_min: "event_time_min";
        first_party_cookie_status: "first_party_cookie_status";
        has_1p_pixel_event: "has_1p_pixel_event";
        id: "id";
        is_consolidated_container: "is_consolidated_container";
        is_created_by_business: "is_created_by_business";
        is_crm: "is_crm";
        is_mta_use: "is_mta_use";
        is_restricted_use: "is_restricted_use";
        is_unavailable: "is_unavailable";
        last_fired_time: "last_fired_time";
        last_upload_app: "last_upload_app";
        last_upload_app_changed_time: "last_upload_app_changed_time";
        match_rate_approx: "match_rate_approx";
        matched_entries: "matched_entries";
        name: "name";
        owner_ad_account: "owner_ad_account";
        owner_business: "owner_business";
        usage: "usage";
        user_access_expire_time: "user_access_expire_time";
        valid_entries: "valid_entries";
    }>;
    static get SortBy(): Readonly<{
        last_fired_time: "LAST_FIRED_TIME";
        name: "NAME";
    }>;
    static get AutomaticMatchingFields(): Readonly<{
        country: "country";
        ct: "ct";
        db: "db";
        em: "em";
        external_id: "external_id";
        fn: "fn";
        ge: "ge";
        ln: "ln";
        ph: "ph";
        st: "st";
        zp: "zp";
    }>;
    static get DataUseSetting(): Readonly<{
        advertising_and_analytics: "ADVERTISING_AND_ANALYTICS";
        analytics_only: "ANALYTICS_ONLY";
        empty: "EMPTY";
    }>;
    static get FirstPartyCookieStatus(): Readonly<{
        empty: "EMPTY";
        first_party_cookie_disabled: "FIRST_PARTY_COOKIE_DISABLED";
        first_party_cookie_enabled: "FIRST_PARTY_COOKIE_ENABLED";
    }>;
    static get PermittedTasks(): Readonly<{
        advertise: "ADVERTISE";
        analyze: "ANALYZE";
        upload: "UPLOAD";
    }>;
    static get Tasks(): Readonly<{
        aa_analyze: "AA_ANALYZE";
        advertise: "ADVERTISE";
        analyze: "ANALYZE";
        edit: "EDIT";
        upload: "UPLOAD";
    }>;
    getAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAgency(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdsPixel>;
    createAhpConfig(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAssignedUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdsPixel>;
    getDaChecks(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createEvent(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getOfflineEventUploads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOpenBridgeConfigurations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createShadowTrafficHelper(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    deleteShareDAccounts(params?: Record<string, any>): Promise<any>;
    getShareDAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createShareDAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdsPixel>;
    getShareDAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getStats(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsPixel>;
    update(fields: string[], params?: Record<string, any>): Promise<AdsPixel>;
}
