import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CoverPhoto
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CoverPhoto extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      cover_id: 'cover_id',
      id: 'id',
      offset_x: 'offset_x',
      offset_y: 'offset_y',
      source: 'source'
    });
  }

}