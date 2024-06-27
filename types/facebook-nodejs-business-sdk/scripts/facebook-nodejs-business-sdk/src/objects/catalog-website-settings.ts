import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogWebsiteSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CatalogWebsiteSettings extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      is_allowed_to_crawl: 'is_allowed_to_crawl'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): CatalogWebsiteSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}