import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountCampaignAttributionOptionInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountCampaignAttributionOptionInfo extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      is_eligible: 'is_eligible',
      value: 'value'
    });
  }

}