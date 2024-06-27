import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdColumnSizes
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdColumnSizes extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      admarket_account: 'admarket_account',
      app_id: 'app_id',
      columns: 'columns',
      id: 'id',
      owner: 'owner',
      page: 'page',
      report: 'report',
      tab: 'tab',
      view: 'view'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdColumnSizes {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}