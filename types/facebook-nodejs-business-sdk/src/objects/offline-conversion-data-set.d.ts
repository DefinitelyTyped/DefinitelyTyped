import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import OfflineConversionDataSetUpload from './offline-conversion-data-set-upload';
/**
 * OfflineConversionDataSet
 * @extends AbstractCrudObject
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
    getAdAccounts(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAdAccount(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<OfflineConversionDataSet>;
    getAgencies(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAgency(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<OfflineConversionDataSet>;
    getAudiences(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCustomConversions(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getServerEventsPermittedBusiness(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getSharedAccounts(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getSharedAgencies(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getStats(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getUploads(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createUpload(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<OfflineConversionDataSetUpload>;
    createValidate(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<OfflineConversionDataSet>;
    delete(fields: Array<string>, params?: Record<any, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<any, any>): OfflineConversionDataSet;
    update(fields: Array<string>, params?: Record<any, any>): OfflineConversionDataSet;
}
