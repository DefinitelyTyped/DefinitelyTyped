import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OfflineConversionDataSetUsage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class OfflineConversionDataSetUsage extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      num_lift_studies: 'num_lift_studies'
    });
  }

}