import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Place
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class Place extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      location: 'location',
      name: 'name',
      overall_rating: 'overall_rating'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): Place {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}