import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DynamicItemDisplayBundle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class DynamicItemDisplayBundle extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      additional_urls: 'additional_urls',
      description: 'description',
      id: 'id',
      name: 'name',
      product_set: 'product_set',
      text_tokens: 'text_tokens',
      url: 'url'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): DynamicItemDisplayBundle {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}