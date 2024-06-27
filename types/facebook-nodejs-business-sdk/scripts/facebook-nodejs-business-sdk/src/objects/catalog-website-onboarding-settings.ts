import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogWebsiteOnboardingSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CatalogWebsiteOnboardingSettings extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      status: 'status'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): CatalogWebsiteOnboardingSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}