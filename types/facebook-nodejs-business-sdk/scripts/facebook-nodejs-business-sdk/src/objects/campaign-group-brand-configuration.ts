import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CampaignGroupBrandConfiguration
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CampaignGroupBrandConfiguration extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      brand_product_name: 'brand_product_name',
      locale: 'locale',
      vertical: 'vertical'
    });
  }

}