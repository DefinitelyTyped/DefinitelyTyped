import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdConversionValues
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdConversionValues extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      adgroup_id: 'adgroup_id',
      campaign_id: 'campaign_id',
      values: 'values'
    });
  }

}