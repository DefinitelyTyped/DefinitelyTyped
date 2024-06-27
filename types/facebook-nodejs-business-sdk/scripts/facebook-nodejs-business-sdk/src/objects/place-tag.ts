import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PlaceTag
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PlaceTag extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      created_time: 'created_time',
      id: 'id',
      place: 'place'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): PlaceTag {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}