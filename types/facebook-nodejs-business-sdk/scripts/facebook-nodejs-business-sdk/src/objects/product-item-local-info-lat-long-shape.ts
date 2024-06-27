import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductItemLocalInfoLatLongShape
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductItemLocalInfoLatLongShape extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      latitude: 'latitude',
      longitude: 'longitude'
    });
  }

}