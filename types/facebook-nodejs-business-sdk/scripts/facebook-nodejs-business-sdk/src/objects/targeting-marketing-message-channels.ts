import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TargetingMarketingMessageChannels
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class TargetingMarketingMessageChannels extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      whatsapp: 'whatsapp'
    });
  }

}