import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAccountRecommendedCamapaignBudget
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountRecommendedCamapaignBudget extends AbstractCrudObject {
    static get Fields(): Readonly<{
        daily: "daily";
        lifetime: "lifetime";
        objective: "objective";
    }>;
}
