import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import AdAccount from "./ad-account";
import Business from "./business";
import CustomAudience from "./custom-audience";
import CustomConversion from "./custom-conversion";
import OfflineConversionDataSetUpload from "./offline-conversion-data-set-upload";
/**
 * OfflineConversionDataSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class OfflineConversionDataSet extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      automatic_matching_fields: 'automatic_matching_fields',
      business: 'business',
      can_proxy: 'can_proxy',
      config: 'config',
      creation_time: 'creation_time',
      creator: 'creator',
      data_use_setting: 'data_use_setting',
      description: 'description',
      duplicate_entries: 'duplicate_entries',
      enable_auto_assign_to_accounts: 'enable_auto_assign_to_accounts',
      enable_automatic_matching: 'enable_automatic_matching',
      event_stats: 'event_stats',
      event_time_max: 'event_time_max',
      event_time_min: 'event_time_min',
      first_party_cookie_status: 'first_party_cookie_status',
      id: 'id',
      is_consolidated_container: 'is_consolidated_container',
      is_created_by_business: 'is_created_by_business',
      is_crm: 'is_crm',
      is_mta_use: 'is_mta_use',
      is_restricted_use: 'is_restricted_use',
      is_unavailable: 'is_unavailable',
      last_fired_time: 'last_fired_time',
      last_upload_app: 'last_upload_app',
      last_upload_app_changed_time: 'last_upload_app_changed_time',
      match_rate_approx: 'match_rate_approx',
      matched_entries: 'matched_entries',
      name: 'name',
      owner_ad_account: 'owner_ad_account',
      owner_business: 'owner_business',
      usage: 'usage',
      valid_entries: 'valid_entries'
    });
  }

  getAdAccounts(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccount, fields, params, fetchFirstPage, '/adaccounts');
  }

  getAgencies(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Business, fields, params, fetchFirstPage, '/agencies');
  }

  getAudiences(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(CustomAudience, fields, params, fetchFirstPage, '/audiences');
  }

  getCustomConversions(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(CustomConversion, fields, params, fetchFirstPage, '/customconversions');
  }

  getServerEventsPermittedBusiness(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Business, fields, params, fetchFirstPage, '/server_events_permitted_business');
  }

  getShareDAccounts(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccount, fields, params, fetchFirstPage, '/shared_accounts');
  }

  getShareDAgencies(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Business, fields, params, fetchFirstPage, '/shared_agencies');
  }

  getStats(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/stats');
  }

  getUploads(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(OfflineConversionDataSetUpload, fields, params, fetchFirstPage, '/uploads');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): OfflineConversionDataSet {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}