import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetFeedSpecTitle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAssetFeedSpecTitle extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      adlabels: 'adlabels',
      text: 'text',
      url_tags: 'url_tags'
    });
  }

}