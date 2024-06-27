import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeFeatureDetails
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeFeatureDetails extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      enroll_status: 'enroll_status'
    });
  }

}