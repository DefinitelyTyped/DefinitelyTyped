import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageBroadcast
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PageBroadcast extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      scheduled_time: 'scheduled_time',
      status: 'status'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): PageBroadcast {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}