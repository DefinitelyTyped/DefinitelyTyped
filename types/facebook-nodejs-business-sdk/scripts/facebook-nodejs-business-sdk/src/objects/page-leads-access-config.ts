import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageLeadsAccessConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PageLeadsAccessConfig extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      page: 'page'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): PageLeadsAccessConfig {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}