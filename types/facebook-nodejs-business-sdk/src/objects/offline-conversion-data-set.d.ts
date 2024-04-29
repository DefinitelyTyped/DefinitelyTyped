import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import OfflineConversionDataSetUpload from './offline-conversion-data-set-upload';
/**
 * OfflineConversionDataSet
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSet extends AbstractCrudObject {
    static get Fields(): Readonly<{
        automatic_matching_fields: "automatic_matching_fields";
        business: "business";
        can_proxy: "can_proxy";
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
        valid_entries: "valid_entries";
    }>;
    static get PermittedRoles(): Readonly<{
        admin: "ADMIN";
        advertiser: "ADVERTISER";
        uploader: "UPLOADER";
    }>;
    static get RelationshipType(): Readonly<{
        ad_manager: "AD_MANAGER";
        agency: "AGENCY";
        aggregator: "AGGREGATOR";
        audience_manager: "AUDIENCE_MANAGER";
        other: "OTHER";
    }>;
    getAdAccounts(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAdAccounts(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAdAccounts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdAccount(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<OfflineConversionDataSet>;
    getAgencies(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAgencies(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAgencies(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAgency(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<OfflineConversionDataSet>;
    getAudiences(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAudiences(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAudiences(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCustomConversions(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getCustomConversions(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getCustomConversions(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getServerEventsPermittedBusiness(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getServerEventsPermittedBusiness(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getServerEventsPermittedBusiness(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSharedAccounts(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getSharedAccounts(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getSharedAccounts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSharedAgencies(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getSharedAgencies(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getSharedAgencies(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getStats(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getStats(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getStats(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getUploads(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getUploads(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getUploads(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createUpload(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<OfflineConversionDataSetUpload>;
    createValidate(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<OfflineConversionDataSet>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<OfflineConversionDataSet>;
    update(fields: string[], params?: Record<any, any>): Promise<OfflineConversionDataSet>;
}
