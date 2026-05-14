import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TrendingTopicsSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TrendingTopicsSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        is_all_trending: "is_all_trending";
        is_special_budget_alloc: "is_special_budget_alloc";
        trending_topics: "trending_topics";
    }>;
}
