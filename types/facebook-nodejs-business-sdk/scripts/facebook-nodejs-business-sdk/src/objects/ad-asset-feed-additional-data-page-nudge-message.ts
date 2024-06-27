import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetFeedAdditionalDataPageNudgeMessage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAssetFeedAdditionalDataPageNudgeMessage extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      enabled: 'enabled',
      quick_replies: 'quick_replies',
      text: 'text'
    });
  }

}