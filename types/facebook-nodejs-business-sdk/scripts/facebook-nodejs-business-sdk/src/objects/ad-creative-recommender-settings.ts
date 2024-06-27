import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeRecommenderSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeRecommenderSettings extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      preferred_events: 'preferred_events',
      product_sales_channel: 'product_sales_channel'
    });
  }

}