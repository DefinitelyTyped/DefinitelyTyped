import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TargetingProductAudienceSubSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class TargetingProductAudienceSubSpec extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      retention_seconds: 'retention_seconds',
      rule: 'rule'
    });
  }

}