import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetFeedSpecCallToAction
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAssetFeedSpecCallToAction extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      adlabels: 'adlabels',
      type: 'type',
      value: 'value'
    });
  }

}