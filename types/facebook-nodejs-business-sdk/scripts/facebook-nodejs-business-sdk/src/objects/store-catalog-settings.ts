import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * StoreCatalogSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class StoreCatalogSettings extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      page: 'page'
    });
  }

  // $FlowFixMe : Support Generic Types
  delete(fields: Array<string>, params: Record<string, any> = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(params);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): StoreCatalogSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}