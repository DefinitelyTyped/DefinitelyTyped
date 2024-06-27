import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdConversions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdConversions extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      account_id: 'account_id',
      adgroup_id: 'adgroup_id',
      campaign_id: 'campaign_id',
      values: 'values'
    });
  }

}