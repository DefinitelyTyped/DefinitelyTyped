import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * OfflineConversionDataSetUpload
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class OfflineConversionDataSetUpload extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      api_calls: 'api_calls',
      creation_time: 'creation_time',
      duplicate_entries: 'duplicate_entries',
      event_stats: 'event_stats',
      event_time_max: 'event_time_max',
      event_time_min: 'event_time_min',
      first_upload_time: 'first_upload_time',
      id: 'id',
      is_excluded_for_lift: 'is_excluded_for_lift',
      last_upload_time: 'last_upload_time',
      match_rate_approx: 'match_rate_approx',
      matched_entries: 'matched_entries',
      upload_tag: 'upload_tag',
      valid_entries: 'valid_entries'
    });
  }

  static get Order() {
    return Object.freeze({
      ascending: 'ASCENDING',
      descending: 'DESCENDING'
    });
  }

  static get SortBy() {
    return Object.freeze({
      api_calls: 'API_CALLS',
      creation_time: 'CREATION_TIME',
      event_time_max: 'EVENT_TIME_MAX',
      event_time_min: 'EVENT_TIME_MIN',
      first_upload_time: 'FIRST_UPLOAD_TIME',
      is_excluded_for_lift: 'IS_EXCLUDED_FOR_LIFT',
      last_upload_time: 'LAST_UPLOAD_TIME'
    });
  }

  getProgress(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/progress');
  }

  getPullSessions(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/pull_sessions');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): OfflineConversionDataSetUpload {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}