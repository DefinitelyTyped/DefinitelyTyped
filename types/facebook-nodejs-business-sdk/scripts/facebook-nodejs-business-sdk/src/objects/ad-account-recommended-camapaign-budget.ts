import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountRecommendedCamapaignBudget
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountRecommendedCamapaignBudget extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      daily: 'daily',
      lifetime: 'lifetime',
      objective: 'objective'
    });
  }

}