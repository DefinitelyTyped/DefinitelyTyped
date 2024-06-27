import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CollaborativeAdsShareSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CollaborativeAdsShareSettings extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      agency_business: 'agency_business',
      id: 'id',
      product_catalog_proxy_id: 'product_catalog_proxy_id',
      utm_campaign: 'utm_campaign',
      utm_medium: 'utm_medium',
      utm_source: 'utm_source'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): CollaborativeAdsShareSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}