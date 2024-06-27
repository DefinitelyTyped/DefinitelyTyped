import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetBody
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAssetBody extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      text: 'text',
      url_tags: 'url_tags'
    });
  }

}