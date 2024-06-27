import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductImage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductImage extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      height: 'height',
      id: 'id',
      image_url: 'image_url',
      width: 'width'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ProductImage {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}