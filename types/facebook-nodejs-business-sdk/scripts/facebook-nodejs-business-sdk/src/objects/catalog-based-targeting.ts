import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogBasedTargeting
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CatalogBasedTargeting extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      geo_targeting_type: 'geo_targeting_type'
    });
  }

}