import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageCTXBudgetSimilarAdvertiserBudgetRecommendation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PageCTXBudgetSimilarAdvertiserBudgetRecommendation extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      budget: 'budget',
      reported_conversion: 'reported_conversion'
    });
  }

}