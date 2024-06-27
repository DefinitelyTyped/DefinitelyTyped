import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsOptimalDeliveryGrowthOpportunity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsOptimalDeliveryGrowthOpportunity extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      child_metadata: 'child_metadata',
      metadata: 'metadata',
      optimization_type: 'optimization_type'
    });
  }

}