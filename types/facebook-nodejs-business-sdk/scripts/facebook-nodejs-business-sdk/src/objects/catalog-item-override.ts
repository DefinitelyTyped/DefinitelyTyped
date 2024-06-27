import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogItemOverride
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CatalogItemOverride extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      local_info: 'local_info',
      override_type: 'override_type',
      override_value: 'override_value'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): CatalogItemOverride {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}