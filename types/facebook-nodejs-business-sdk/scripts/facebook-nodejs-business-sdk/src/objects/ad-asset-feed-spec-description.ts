import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetFeedSpecDescription
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAssetFeedSpecDescription extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      adlabels: 'adlabels',
      text: 'text',
      url_tags: 'url_tags'
    });
  }

}