import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DeliveryCheckExtraInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class DeliveryCheckExtraInfo extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      adgroup_ids: 'adgroup_ids',
      campaign_ids: 'campaign_ids',
      countries: 'countries'
    });
  }

}