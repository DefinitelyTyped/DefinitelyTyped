import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Hours
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class Hours extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      permanent_status: 'permanent_status'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): Hours {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}