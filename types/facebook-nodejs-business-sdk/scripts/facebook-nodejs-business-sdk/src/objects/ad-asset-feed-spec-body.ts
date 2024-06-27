import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetFeedSpecBody
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAssetFeedSpecBody extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      adlabels: 'adlabels',
      text: 'text',
      url_tags: 'url_tags'
    });
  }

}