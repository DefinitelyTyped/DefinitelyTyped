import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CPASParentCatalogSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CPASParentCatalogSettings extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      attribution_windows: 'attribution_windows',
      default_currency: 'default_currency',
      disable_use_as_parent_catalog: 'disable_use_as_parent_catalog',
      id: 'id'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): CPASParentCatalogSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}