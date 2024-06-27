import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountAAACompatibleAdObjects
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountAAACompatibleAdObjects extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      adgroup_ids: 'adgroup_ids',
      campaign_group_ids: 'campaign_group_ids',
      campaign_ids: 'campaign_ids'
    });
  }

}