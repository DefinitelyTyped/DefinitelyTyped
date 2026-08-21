import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageCTXBudgetSimilarAdvertiserBudgetRecommendation
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCTXBudgetSimilarAdvertiserBudgetRecommendation extends AbstractCrudObject {
    static get Fields(): Readonly<{
        budget: "budget";
        reported_conversion: "reported_conversion";
    }>;
}
