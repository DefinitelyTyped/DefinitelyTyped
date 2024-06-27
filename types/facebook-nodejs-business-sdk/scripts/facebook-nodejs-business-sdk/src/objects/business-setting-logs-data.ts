import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessSettingLogsData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BusinessSettingLogsData extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      actor: 'actor',
      event_object: 'event_object',
      event_time: 'event_time',
      event_type: 'event_type',
      extra_data: 'extra_data'
    });
  }

}