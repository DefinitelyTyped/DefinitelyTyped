import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CTXOptimizationEligibility
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CTXOptimizationEligibility extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      ctm: 'ctm'
    });
  }

}