import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdDefaultValues
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdDefaultValues extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      campaign_group: 'campaign_group'
    });
  }

}