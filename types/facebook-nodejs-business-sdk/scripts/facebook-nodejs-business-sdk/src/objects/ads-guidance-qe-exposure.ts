import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsGuidanceQEExposure
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsGuidanceQEExposure extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      account_exposed: 'account_exposed'
    });
  }

}