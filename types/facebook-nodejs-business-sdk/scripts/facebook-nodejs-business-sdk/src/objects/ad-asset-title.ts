import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetTitle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAssetTitle extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      text: 'text',
      url_tags: 'url_tags'
    });
  }

}