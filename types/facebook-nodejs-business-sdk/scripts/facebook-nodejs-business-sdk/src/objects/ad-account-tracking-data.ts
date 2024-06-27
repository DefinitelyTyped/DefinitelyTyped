import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountTrackingData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountTrackingData extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      tracking_specs: 'tracking_specs'
    });
  }

}