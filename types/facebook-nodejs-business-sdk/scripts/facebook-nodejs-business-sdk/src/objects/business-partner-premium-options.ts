import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessPartnerPremiumOptions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BusinessPartnerPremiumOptions extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      enable_basket_insight: 'enable_basket_insight',
      enable_extended_audience_retargeting: 'enable_extended_audience_retargeting',
      retailer_custom_audience_config: 'retailer_custom_audience_config'
    });
  }

}