import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TargetingGeoLocationGeoEntities
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class TargetingGeoLocationGeoEntities extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      country: 'country',
      key: 'key',
      name: 'name',
      region: 'region',
      region_id: 'region_id'
    });
  }

}