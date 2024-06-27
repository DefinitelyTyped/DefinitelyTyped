import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OffsitePixel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class OffsitePixel extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      creator: 'creator',
      id: 'id',
      js_pixel: 'js_pixel',
      last_firing_time: 'last_firing_time',
      name: 'name',
      tag: 'tag'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): OffsitePixel {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}