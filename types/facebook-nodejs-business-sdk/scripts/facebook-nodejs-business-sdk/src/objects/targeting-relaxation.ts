import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TargetingRelaxation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class TargetingRelaxation extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      custom_audience: 'custom_audience',
      lookalike: 'lookalike'
    });
  }

}