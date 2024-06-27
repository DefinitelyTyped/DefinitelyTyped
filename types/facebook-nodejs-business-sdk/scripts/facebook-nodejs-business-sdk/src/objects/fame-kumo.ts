import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FAMEKumo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class FAMEKumo extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): FAMEKumo {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}