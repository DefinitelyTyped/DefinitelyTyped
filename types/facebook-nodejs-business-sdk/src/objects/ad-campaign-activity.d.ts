import { AbstractCrudObject } from './../abstract-crud-object';
export default class AdCampaignActivity extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get BidStrategyNew(): Record<string, any>;
    static get BidStrategyOld(): Record<string, any>;
    static get BillingEventNew(): Record<string, any>;
    static get BillingEventOld(): Record<string, any>;
    static get OptimizationGoalNew(): Record<string, any>;
    static get OptimizationGoalOld(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdCampaignActivity>;
}
