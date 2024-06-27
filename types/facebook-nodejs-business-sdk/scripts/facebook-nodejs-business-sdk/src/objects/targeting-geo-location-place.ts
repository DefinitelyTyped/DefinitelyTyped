import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TargetingGeoLocationPlace
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class TargetingGeoLocationPlace extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      country: 'country',
      distance_unit: 'distance_unit',
      key: 'key',
      latitude: 'latitude',
      longitude: 'longitude',
      name: 'name',
      primary_city_id: 'primary_city_id',
      radius: 'radius',
      region_id: 'region_id'
    });
  }

}