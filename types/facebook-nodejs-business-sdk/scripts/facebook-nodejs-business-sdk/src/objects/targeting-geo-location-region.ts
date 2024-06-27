import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TargetingGeoLocationRegion
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class TargetingGeoLocationRegion extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      country: 'country',
      key: 'key',
      name: 'name'
    });
  }

}