import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetImage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAssetImage extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      hash: 'hash',
      id: 'id',
      image_crops: 'image_crops',
      name: 'name',
      tag: 'tag',
      url: 'url',
      url_tags: 'url_tags'
    });
  }

}