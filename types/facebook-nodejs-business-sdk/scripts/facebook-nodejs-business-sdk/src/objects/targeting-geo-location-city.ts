import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TargetingGeoLocationCity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class TargetingGeoLocationCity extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      country: 'country',
      distance_unit: 'distance_unit',
      key: 'key',
      name: 'name',
      radius: 'radius',
      region: 'region',
      region_id: 'region_id'
    });
  }

}